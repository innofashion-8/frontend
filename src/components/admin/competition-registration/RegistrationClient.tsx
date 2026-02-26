"use client";

import React, { useState, useEffect } from "react";
import { UniversalTable, Column } from "@/components/admin/UniversalTable";
import { UniversalPagination } from "@/components/admin/UniversalPagination";
import { useRouter } from "next/navigation";
import { registrationService } from "@/services/registration-service"; 
import Swal from "sweetalert2";
import { CompetitionRegistrationWithUserAndCompetition, RegistrationStatus } from "@/types/registration";
import { PaginatedResponse } from "@/types";

interface CompetitionRegistrationClientProps {
  data: CompetitionRegistrationWithUserAndCompetition[];
  meta: PaginatedResponse<CompetitionRegistrationWithUserAndCompetition>;
  title: string;
}

export default function CompetitionRegistrationClient({ data, meta, title }: CompetitionRegistrationClientProps) {
  const router = useRouter();
  
  const [selectedDetail, setSelectedDetail] = useState<CompetitionRegistrationWithUserAndCompetition | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filterUserType, setFilterUserType] = useState<string>('ALL');
  const [filterCompetitionCategory, setFilterCompetitionCategory] = useState<string>('ALL');

  const competitionCategories = Array.from(new Set(data.map(reg => reg.competition.category)));

  const filteredData = data.filter(reg => {
    const matchSearch = reg.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.user.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.competition.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.status.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchUserType = filterUserType === 'ALL' || reg.user.type === filterUserType;
    const matchCompetitionCategory = filterCompetitionCategory === 'ALL' || reg.competition.category === filterCompetitionCategory;
    
    return matchSearch && matchUserType && matchCompetitionCategory;
  });

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedDetail(null);
      setIsClosing(false);
    }, 200); 
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showFilterModal) {
          setShowFilterModal(false);
        } else if (selectedDetail) {
          handleCloseModal();
        }
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedDetail, showFilterModal]);

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    let rejectionReason = "";

    if (newStatus === "REJECTED") {
      const { value: reason, isDismissed } = await Swal.fire({
        title: 'ALASAN PENOLAKAN',
        input: 'textarea',
        inputPlaceholder: 'Tuliskan alasan penolakan...',
        showCancelButton: true,
        confirmButtonColor: '#1c1c1b',
        cancelButtonColor: '#d33',
        confirmButtonText: 'TOLAK PESERTA',
        cancelButtonText: 'BATAL',
        inputValidator: (value) => {
          if (!value) return 'Alasan penolakan wajib diisi!';
        },
        customClass: {
          popup: 'rounded-none border-4 border-[#1c1c1b]',
          confirmButton: 'rounded-none font-bold uppercase tracking-widest text-lg',
          cancelButton: 'rounded-none font-bold uppercase tracking-widest text-lg',
          input: 'border-2 border-[#1c1c1b] rounded-none focus:ring-0 text-lg p-3',
        }
      });

      if (isDismissed) {
        router.refresh(); 
        return; 
      }
      rejectionReason = reason;
    } else {
      const result = await Swal.fire({
        title: 'KONFIRMASI UPDATE',
        text: `Ubah status menjadi ${newStatus}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#1c1c1b',
        cancelButtonColor: '#d33',
        confirmButtonText: 'YA, PROSES',
        customClass: {
          popup: 'rounded-none border-4 border-[#1c1c1b]',
          confirmButton: 'rounded-none font-bold uppercase tracking-widest text-lg',
          cancelButton: 'rounded-none font-bold uppercase tracking-widest text-lg',
        }
      });

      if (!result.isConfirmed) {
        router.refresh(); 
        return;
      }
    }

    try {
      Swal.fire({
        title: 'SEDANG MEMPROSES...',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
        customClass: { popup: 'rounded-none border-4 border-[#1c1c1b]' }
      });

      await registrationService.updateCompetitionStatus(id, newStatus as RegistrationStatus, rejectionReason);

      await Swal.fire({
        title: 'BERHASIL!',
        icon: 'success',
        confirmButtonColor: '#1c1c1b',
        customClass: { popup: 'rounded-none border-4 border-[#1c1c1b]' }
      });

      if (selectedDetail && selectedDetail.id === id) {
          setSelectedDetail(prev => prev ? { ...prev, status: newStatus as RegistrationStatus, rejection_reason: rejectionReason } : null);
      }

      router.refresh();
    } catch (error: any) {
      Swal.fire({
        title: 'GAGAL!',
        text: error.message || 'Terjadi kesalahan',
        icon: 'error',
        confirmButtonColor: '#1c1c1b',
        customClass: { popup: 'rounded-none border-4 border-[#1c1c1b]' }
      });
      router.refresh();
    }
  };

  const columns: Column<CompetitionRegistrationWithUserAndCompetition>[] = [
    { 
      header: "NO", 
      key: "id", 
      render: (_, index) => <span className="font-black text-lg">{(meta.current_page - 1) * meta.per_page + (index + 1)}</span> 
    },
    { 
      header: "NAMA PESERTA", 
      key: "name", 
      render: (item) => (
        <span className="font-bold uppercase text-base">{item.user.name}</span>
      )
    },
    { 
      header: "EMAIL", 
      key: "email", 
      render: (item) => (
        <span className="text-sm md:text-base font-medium text-[#484847]">{item.user.email}</span>
      )
    },
    { 
      header: "TYPE", 
      key: "type", 
      render: (item) => (
        <span className={`px-3 py-1.5 border-[3px] border-[#1c1c1b] font-bold text-xs uppercase shadow-[3px_3px_0px_#1c1c1b] tracking-wider
          ${item.user.type === 'INTERNAL' ? 'bg-[#1c1c1b] text-white' : 'bg-white text-[#1c1c1b]'}`}>
          {item.user.type}
        </span>
      )
    },
    { 
      header: "COMPETITION", 
      key: "competition", 
      render: (item) => <span className="text-sm md:text-base font-bold block max-w-[200px] leading-snug">{item.competition.name}</span> 
    },
    {
      header: "PAYMENT",
      key: "payment_proof",
      render: (item) => (
        item.payment_proof ? (
          <button
            onClick={() => window.open(`${process.env.NEXT_PUBLIC_API_URL}/storage/${item.payment_proof}`, '_blank')}
            className="px-3 py-1.5 border-[3px] border-[#1c1c1b] bg-white text-xs font-black hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[3px_3px_0px_#1c1c1b] cursor-pointer"
          >
            LIHAT BUKTI
          </button>
        ) : <span className="text-sm italic font-medium text-gray-500">NO_FILE</span>
      )
    },
    { 
      header: "STATUS", 
      key: "status",
      render: (item) => (
        <select 
          value={item.status}
          onChange={(e) => handleUpdateStatus(item.id, e.target.value)}
          className={`px-3 py-1.5 border-[3px] border-[#1c1c1b] font-black text-xs uppercase cursor-pointer outline-none shadow-[4px_4px_0px_#1c1c1b] transition-colors
            ${item.status === 'VERIFIED' ? 'bg-green-400' : item.status === 'REJECTED' ? 'bg-red-500 text-white' : 'bg-yellow-400'}`}
        >
          <option value="PENDING">PENDING</option>
          <option value="VERIFIED">VERIFIED</option>
          <option value="REJECTED">REJECTED</option>
        </select>
      )
    },
    {
      header: "AKSI",
      key: "action",
      render: (item) => (
        <button 
          onClick={() => setSelectedDetail(item)}
          className="px-4 py-1.5 border-[3px] border-[#1c1c1b] bg-[#6A5D52] text-white text-xs font-black hover:bg-[#1c1c1b] transition-all shadow-[3px_3px_0px_#1c1c1b] cursor-pointer tracking-wider"
        >
          DETAIL
        </button>
      )
    }
  ];

  return (
    <div className="relative">
      <div className="mb-8">
        <h1 className="text-3xl font-black font-creato-title uppercase tracking-tight border-b-4 border-[#1c1c1b] pb-2 text-[#1C1C1B]">
          {title}
        </h1>
      </div>

      <div className="mb-6">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search by name, email, type, competition, or status..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border-[3px] border-[#1c1c1b] bg-white font-bold text-[#1c1c1b] placeholder:text-[#6A5D52] placeholder:font-medium focus:outline-none shadow-[4px_4px_0px_#1c1c1b]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1c1c1b] hover:text-[#6A5D52] font-black text-xl"
              >
                ×
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilterModal(true)}
            className="px-6 py-3 border-[3px] border-[#1c1c1b] bg-[#6A5D52] text-white font-black uppercase cursor-pointer hover:bg-[#1c1c1b] transition-all shadow-[4px_4px_0px_#1c1c1b] tracking-wider flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z" />
            </svg>
            FILTER
            {(filterUserType !== 'ALL' || filterCompetitionCategory !== 'ALL') && (
              <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-black">!</span>
            )}
          </button>
        </div>
        {(searchQuery || filterUserType !== 'ALL' || filterCompetitionCategory !== 'ALL') && (
          <p className="mt-2 text-sm font-bold text-[#6A5D52]">
            Found {filteredData.length} result{filteredData.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>
      
      <div className="bg-[#E2E2DE] p-6 border-[3px] border-[#1c1c1b] shadow-[6px_6px_0px_#1c1c1b] mb-6">
        {filteredData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="mb-6 text-[#1c1c1b]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11l3 3l8 -8" /><path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
              </svg>
            </div>
            <h3 className="text-2xl font-black font-creato-title uppercase text-[#1c1c1b] mb-3">{searchQuery ? 'No results found' : 'No registrations yet'}</h3>
            <p className="text-[#6A5D52] font-bold text-center">{searchQuery ? 'Try a different search term' : 'No competition registrations found'}</p>
          </div>
        ) : (
          <UniversalTable columns={columns} data={filteredData} />
        )}
      </div>
      
      <UniversalPagination 
        meta={meta} 
        onPageChange={(page) => router.push(`?page=${page}`)} 
      />

      {showFilterModal && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 transition-opacity duration-200"
          onClick={() => setShowFilterModal(false)}
        >
          <div 
            className="bg-[#E2E2DE] border-4 border-[#1c1c1b] shadow-[12px_12px_0px_#1c1c1b] w-full max-w-md p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowFilterModal(false)}
              className="absolute top-4 right-6 text-4xl font-black text-[#1c1c1b] hover:scale-110 transition-transform cursor-pointer"
            >
              &times;
            </button>
            
            <h2 className="text-2xl md:text-3xl font-black font-creato-title uppercase border-b-4 border-[#1c1c1b] pb-4 mb-6">
              Filter Options
            </h2>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-black text-[#6A5D52] uppercase block mb-2 tracking-wider">User Type</label>
                <select
                  value={filterUserType}
                  onChange={(e) => setFilterUserType(e.target.value)}
                  className="w-full px-4 py-3 border-[3px] border-[#1c1c1b] bg-white font-black text-[#1c1c1b] cursor-pointer focus:outline-none shadow-[4px_4px_0px_#1c1c1b] uppercase"
                >
                  <option value="ALL">ALL TYPES</option>
                  <option value="INTERNAL">INTERNAL</option>
                  <option value="EXTERNAL">EXTERNAL</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-black text-[#6A5D52] uppercase block mb-2 tracking-wider">Competition Category</label>
                <select
                  value={filterCompetitionCategory}
                  onChange={(e) => setFilterCompetitionCategory(e.target.value)}
                  className="w-full px-4 py-3 border-[3px] border-[#1c1c1b] bg-white font-black text-[#1c1c1b] cursor-pointer focus:outline-none shadow-[4px_4px_0px_#1c1c1b] uppercase"
                >
                  <option value="ALL">ALL CATEGORIES</option>
                  {competitionCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => {
                  setFilterUserType('ALL');
                  setFilterCompetitionCategory('ALL');
                }}
                className="flex-1 py-3 px-4 border-[3px] border-[#1c1c1b] bg-white text-[#1c1c1b] font-black uppercase hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[4px_4px_0px_#1c1c1b] cursor-pointer tracking-wider"
              >
                Reset
              </button>
              <button
                onClick={() => setShowFilterModal(false)}
                className="flex-1 py-3 px-4 border-[3px] border-[#1c1c1b] bg-[#6A5D52] text-white font-black uppercase hover:bg-[#1c1c1b] transition-all shadow-[4px_4px_0px_#1c1c1b] cursor-pointer tracking-wider"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedDetail && (
        <div 
          className={`fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 transition-opacity duration-200 ease-in-out ${isClosing ? 'opacity-0' : 'opacity-100'}`} 
          onClick={handleCloseModal}
        >
          <div 
            className={`bg-[#E2E2DE] border-4 border-[#1c1c1b] shadow-[12px_12px_0px_#1c1c1b] w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 md:p-10 relative transition-all duration-200 ease-in-out ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`} 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-6 text-4xl font-black text-[#1c1c1b] hover:scale-110 transition-transform cursor-pointer z-10"
            >
              &times;
            </button>
            
            <h2 className="text-3xl md:text-4xl font-black font-creato-title uppercase border-b-4 border-[#1c1c1b] pb-4 mb-8">
              {selectedDetail.user.name}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3 p-4 bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b]">
                <div className="p-2 bg-[#1C1C1B]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider">Email</p>
                  <p className="font-bold text-md text-[#1C1C1B]">{selectedDetail.user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b]">
                <div className="p-2 bg-[#5B4D4B]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider">Type</p>
                  <p className="font-bold text-lg text-[#5B4D4B] uppercase">{selectedDetail.user.type}</p>
                </div>
              </div>

              {selectedDetail.user.phone && (
                <div className="flex items-center gap-3 p-4 bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b]">
                  <div className="p-2 bg-[#978D82]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider">Phone</p>
                    <p className="font-bold text-lg text-[#978D82]">{selectedDetail.user.phone}</p>
                  </div>
                </div>
              )}

              {selectedDetail.user.institution && (
                <div className="flex items-center gap-3 p-4 bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b]">
                  <div className="p-2 bg-[#B1A79B]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                      <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider">Institution</p>
                    <p className="font-bold text-sm text-[#B1A79B]">{selectedDetail.user.institution}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-black text-[#1C1C1B] uppercase mb-4 border-b-2 border-[#1c1c1b] pb-2">Additional Info</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider mb-1">Major</p>
                  <p className="font-bold text-[#1c1c1b]">{selectedDetail.user.major || '-'}</p>
                </div>
                <div>
                  <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider mb-1">Line ID</p>
                  <p className="font-bold text-[#1c1c1b]">{selectedDetail.user.line || '-'}</p>
                </div>
                {selectedDetail.user.type === 'INTERNAL' && (
                  <div>
                    <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider mb-1">NRP / Batch</p>
                    <p className="font-bold text-[#1c1c1b]">{selectedDetail.user.nrp || '-'} / {selectedDetail.user.batch || '-'}</p>
                  </div>
                )}
                {selectedDetail.user.type === 'INTERNAL' && (
                  <div>
                    <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider mb-2">KTM</p>
                    {selectedDetail.user.ktm_path ? (
                      <a
                        href={`${process.env.NEXT_PUBLIC_API_URL}/storage/${selectedDetail.user.ktm_path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border-[3px] border-[#1c1c1b] bg-white text-xs font-black hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[3px_3px_0px_#1c1c1b] inline-block cursor-pointer tracking-wider"
                      >
                        LIHAT KTM
                      </a>
                    ) : (
                      <p className="text-xs font-bold text-[#6A5D52] italic">Belum Upload</p>
                    )}
                  </div>
                )}
                {selectedDetail.user.type === 'EXTERNAL' && (
                  <div>
                    <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider mb-2">ID Card</p>
                    {selectedDetail.user.id_card_path ? (
                      <a
                        href={`${process.env.NEXT_PUBLIC_API_URL}/storage/${selectedDetail.user.id_card_path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border-[3px] border-[#1c1c1b] bg-white text-xs font-black hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[3px_3px_0px_#1c1c1b] inline-block cursor-pointer tracking-wider"
                      >
                        LIHAT ID CARD
                      </a>
                    ) : (
                      <p className="text-xs font-bold text-[#6A5D52] italic">Belum Upload</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-black text-[#1C1C1B] uppercase mb-4 border-b-2 border-[#1c1c1b] pb-2">Competition Registration</h3>
              <div className="bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b] p-4">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-black text-[#1C1C1B] text-xl">{selectedDetail.competition.name}</h4>
                  <span className={`px-3 py-1 text-xs font-black border-2 border-[#1c1c1b] ${
                    selectedDetail.status === 'VERIFIED' ? 'bg-green-400 text-[#1c1c1b]' :
                    selectedDetail.status === 'REJECTED' ? 'bg-red-400 text-white' :
                    'bg-yellow-300 text-[#1c1c1b]'
                  }`}>
                    {selectedDetail.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-[#6A5D52] font-black uppercase">Registered At</p>
                    <p className="font-bold text-[#1c1c1b]">{new Date(selectedDetail.created_at).toLocaleString('id-ID')}</p>
                  </div>
                  {selectedDetail.payment_proof && (
                    <div>
                      <p className="text-[#6A5D52] font-black uppercase mb-2">Payment Proof</p>
                      <a
                        href={`${process.env.NEXT_PUBLIC_API_URL}/storage/${selectedDetail.payment_proof}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 border-[2px] border-[#1c1c1b] bg-white text-xs font-black hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[2px_2px_0px_#1c1c1b] inline-block cursor-pointer"
                      >
                        VIEW PAYMENT
                      </a>
                    </div>
                  )}
                </div>
                {selectedDetail.status === 'REJECTED' && selectedDetail.rejection_reason && (
                  <div className="mt-4 pt-4 border-t-2 border-[#1c1c1b]">
                    <p className="text-xs font-black text-red-600 uppercase tracking-wider mb-2">Rejection Reason</p>
                    <p className="font-bold text-sm text-red-600 bg-red-100 p-3 border-[2px] border-red-600">
                      {selectedDetail.rejection_reason}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <button 
              onClick={handleCloseModal}
              className="w-full cursor-pointer py-3 px-6 font-black uppercase text-[#1c1c1b] bg-white border-[3px] border-[#1c1c1b] hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[4px_4px_0px_#1c1c1b] tracking-wider"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
