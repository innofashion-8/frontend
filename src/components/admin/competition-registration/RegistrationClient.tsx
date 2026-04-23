"use client";

import React, { useState, useEffect } from "react";
import { UniversalTable, Column } from "@/components/admin/UniversalTable";
import { UniversalPagination } from "@/components/admin/UniversalPagination";
import { useRouter } from "next/navigation";
import { registrationService } from "@/services/registration-service"; 
import Swal from "sweetalert2";
import { CompetitionRegistrationWithUserAndCompetition, RegistrationStatus } from "@/types/registration";
import { PaginatedResponse } from "@/types";
import { competitionService } from "@/services/competition-service";

interface CompetitionRegistrationClientProps {
  data: CompetitionRegistrationWithUserAndCompetition[];
  meta: PaginatedResponse<CompetitionRegistrationWithUserAndCompetition>;
  title: string;
}

import { useSearchParams } from "next/navigation";

export default function CompetitionRegistrationClient({ data, meta, title }: CompetitionRegistrationClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [selectedDetail, setSelectedDetail] = useState<CompetitionRegistrationWithUserAndCompetition | null>(null);
  const [selectedSubmission, setSelectedSubmission] = useState<CompetitionRegistrationWithUserAndCompetition | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isSubmissionClosing, setIsSubmissionClosing] = useState(false);
  
  // Ambil state awal dari URL params
  const [searchQuery, setSearchQuery] = useState(searchParams?.get('search') || '');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filterUserType, setFilterUserType] = useState<string>(searchParams?.get('user_type') || 'ALL');
  const [filterCompetitionCategory, setFilterCompetitionCategory] = useState<string>(searchParams?.get('category') || 'ALL');
  const [filterCompetitionName, setFilterCompetitionName] = useState<string>(searchParams?.get('competition_name') || '');
  const [filterStatus, setFilterStatus] = useState<string>(searchParams?.get('status') || 'ALL');
  const [isExporting, setIsExporting] = useState(false);
  const [competitionOptions, setCompetitionOptions] = useState<string[]>([]);

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const comps = await competitionService.getCompetitions();
        setCompetitionOptions(comps.map(c => c.name));
      } catch (err) {
        console.error("Failed to fetch competition options", err);
      }
    };
    fetchCompetitions();
  }, []);

  const applyFilters = (search?: string) => {
    const params = new URLSearchParams();
    
    // Kita paksakan page=1 tiap kali apply filter
    params.set('page', '1');
    
    const finalSearch = search !== undefined ? search : searchQuery;
    if (finalSearch) params.set('search', finalSearch);
    if (filterUserType !== 'ALL') params.set('user_type', filterUserType);
    if (filterCompetitionCategory !== 'ALL') params.set('category', filterCompetitionCategory);
    if (filterCompetitionName) params.set('competition_name', filterCompetitionName);
    if (filterStatus !== 'ALL') params.set('status', filterStatus);
    
    router.push(`?${params.toString()}`);
  };

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    applyFilters();
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    applyFilters('');
  };

  const handleExport = async () => {
    try {
      setIsExporting(true);
      await registrationService.exportCompetitionsRegistrations();
    } catch (error) {
      alert("Gagal mengexport data");
    } finally {
      setIsExporting(false);
    }
  };

  const filteredData = data;

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedDetail(null);
      setIsClosing(false);
    }, 200); 
  };

  const handleCloseSubmissionModal = () => {
    setIsSubmissionClosing(true);
    setTimeout(() => {
      setSelectedSubmission(null);
      setIsSubmissionClosing(false);
    }, 200);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showFilterModal) {
          setShowFilterModal(false);
        } else if (selectedSubmission) {
          handleCloseSubmissionModal();
        } else if (selectedDetail) {
          handleCloseModal();
        }
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedDetail, selectedSubmission, showFilterModal]);

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
      header: "NAMA PESERTA / KETUA", 
      key: "name", 
      render: (item) => (
        <span className="font-bold uppercase text-base">{item.user.name}</span>
      )
    },
    { 
      header: "COMPETITION", 
      key: "competition", 
      render: (item) => <span className="text-sm md:text-base font-bold block max-w-[200px] leading-snug">{item.competition.name}</span> 
    },
    {
      header: "GROUP NAME",
      key: "group_name",
      render: (item) => (
        <span className="text-sm font-bold">{item.group_name || '-'}</span>
      )
    },
    {
      header: "REGION / TIER",
      key: "region",
      render: (item) => (
        <div>
           <span className="text-xs font-bold uppercase block">{item.region || '-'}</span>
           <span className="text-[10px] text-[#6A5D52] font-bold uppercase block">{item.category || '-'}</span>
        </div>
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
      header: "VIEW SUBMISSION",
      key: "submission",
      render: (item) => (
        <button 
          onClick={() => setSelectedSubmission(item)}
          disabled={!item.submissions || item.submissions.length === 0}
          className={`px-4 py-1.5 border-[3px] border-[#1c1c1b] text-xs font-black transition-all shadow-[3px_3px_0px_#1c1c1b] tracking-wider ${
            item.submissions && item.submissions.length > 0
              ? 'bg-[#6A5D52] text-white hover:bg-[#1c1c1b] cursor-pointer'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {item.submissions && item.submissions.length > 0 ? 'VIEW' : 'NO DATA'}
        </button>
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
          <form onSubmit={handleSearchSubmit} className="flex-1 relative">
            <input
              type="text"
              placeholder="Cari nama, email, lomba, grup..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border-[3px] border-[#1c1c1b] bg-white font-bold text-[#1c1c1b] placeholder:text-[#6A5D52] placeholder:font-medium focus:outline-none shadow-[4px_4px_0px_#1c1c1b]"
            />
            <button type="submit" className="hidden"></button>
            {searchQuery && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1c1c1b] hover:text-[#6A5D52] font-black text-xl"
              >
                ×
              </button>
            )}
          </form>
          <button
            onClick={() => setShowFilterModal(true)}
            className="px-6 py-3 border-[3px] border-[#1c1c1b] bg-[#6A5D52] text-white font-black uppercase cursor-pointer hover:bg-[#1c1c1b] transition-all shadow-[4px_4px_0px_#1c1c1b] tracking-wider flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z" />
            </svg>
            FILTER
            {(filterUserType !== 'ALL' || filterCompetitionCategory !== 'ALL' || filterCompetitionName || filterStatus !== 'ALL') && (
              <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-black">!</span>
            )}
          </button>
          <button
            onClick={handleExport}
            disabled={isExporting}
            className={`px-6 py-3 border-[3px] border-[#1c1c1b] font-black uppercase transition-all tracking-wider shadow-[4px_4px_0px_#1c1c1b] flex items-center gap-2 ${isExporting ? 'bg-gray-400 text-[#1c1c1b] cursor-not-allowed' : 'bg-green-600 text-white hover:bg-[#1c1c1b] cursor-pointer'}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M14 3v4a1 1 0 0 0 1 1h4" />
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
              <path d="M12 11v6" />
              <path d="M9.5 13.5l2.5 2.5l2.5 -2.5" />
            </svg>
            {isExporting ? 'EXPORTING...' : 'EXPORT EXCEL'}
          </button>
        </div>
        {(searchQuery || filterUserType !== 'ALL' || filterCompetitionCategory !== 'ALL' || filterCompetitionName || filterStatus !== 'ALL') && (
          <p className="mt-2 text-sm font-bold text-[#6A5D52]">
            Found {meta.total} result{meta.total !== 1 ? 's' : ''} in Total
          </p>
        )}
      </div>
      
      <div className="bg-[#E2E2DE] p-6 border-[3px] border-[#1c1c1b] shadow-[6px_6px_0px_#1c1c1b] mb-6 overflow-x-auto">
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
                <label className="text-sm font-black text-[#6A5D52] uppercase block mb-2 tracking-wider">Tier (Category)</label>
                <select
                  value={filterCompetitionCategory}
                  onChange={(e) => setFilterCompetitionCategory(e.target.value)}
                  className="w-full px-4 py-3 border-[3px] border-[#1c1c1b] bg-white font-black text-[#1c1c1b] cursor-pointer focus:outline-none shadow-[4px_4px_0px_#1c1c1b] uppercase"
                >
                  <option value="ALL">ALL TIERS</option>
                  <option value="INTERMEDIATE">INTERMEDIATE</option>
                  <option value="ADVANCED">ADVANCED</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm font-black text-[#6A5D52] uppercase block mb-2 tracking-wider">Nama Lomba</label>
                <select
                  value={filterCompetitionName}
                  onChange={(e) => setFilterCompetitionName(e.target.value)}
                  className="w-full px-4 py-3 border-[3px] border-[#1c1c1b] bg-white font-black text-[#1c1c1b] cursor-pointer focus:outline-none shadow-[4px_4px_0px_#1c1c1b] uppercase"
                >
                  <option value="">ALL COMPETITIONS</option>
                  {competitionOptions.map(name => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-black text-[#6A5D52] uppercase block mb-2 tracking-wider">Status</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full px-4 py-3 border-[3px] border-[#1c1c1b] bg-white font-black text-[#1c1c1b] cursor-pointer focus:outline-none shadow-[4px_4px_0px_#1c1c1b] uppercase"
                >
                  <option value="ALL">ALL STATUSES</option>
                  <option value="PENDING">PENDING</option>
                  <option value="VERIFIED">VERIFIED</option>
                  <option value="REJECTED">REJECTED</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => {
                  setFilterUserType('ALL');
                  setFilterCompetitionCategory('ALL');
                  setFilterCompetitionName('');
                  setFilterStatus('ALL');
                  setIsClosing(true);
                  setTimeout(() => {
                    setShowFilterModal(false);
                    // Langsung router ganti url
                    router.push('?page=1');
                    setIsClosing(false);
                  }, 100);
                }}
                className="flex-1 py-3 px-4 border-[3px] border-[#1c1c1b] bg-white text-[#1c1c1b] font-black uppercase hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[4px_4px_0px_#1c1c1b] cursor-pointer tracking-wider"
              >
                Reset
              </button>
              <button
                onClick={() => {
                  setShowFilterModal(false);
                  applyFilters();
                }}
                className="flex-1 py-3 px-4 border-[3px] border-[#1c1c1b] bg-[#6A5D52] text-white font-black uppercase hover:bg-[#1c1c1b] transition-all shadow-[4px_4px_0px_#1c1c1b] cursor-pointer tracking-wider"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedSubmission && (
        <div 
          className={`fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 transition-opacity duration-200 ease-in-out ${isSubmissionClosing ? 'opacity-0' : 'opacity-100'}`} 
          onClick={handleCloseSubmissionModal}
        >
          <div 
            className={`bg-[#E2E2DE] border-4 border-[#1c1c1b] shadow-[12px_12px_0px_#1c1c1b] w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 md:p-10 relative transition-all duration-200 ease-in-out ${isSubmissionClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`} 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={handleCloseSubmissionModal}
              className="absolute top-4 right-6 text-4xl font-black text-[#1c1c1b] hover:scale-110 transition-transform cursor-pointer z-10"
            >
              &times;
            </button>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b-4 border-[#1c1c1b] pb-4">
               <h2 className="text-3xl md:text-4xl font-black font-creato-title uppercase text-[#1C1C1B]">
                 SUBMISSION DETAILS
               </h2>
               <div className="mt-2 md:mt-0 text-right">
                  <span className="text-sm font-black text-[#6A5D52] uppercase block">{selectedSubmission.competition.name}</span>
                  <span className="text-xs font-bold text-[#1c1c1b] block">{selectedSubmission.group_name || selectedSubmission.user.name}</span>
               </div>
            </div>

            {selectedSubmission.submissions && selectedSubmission.submissions.length > 0 ? (
              <div className="space-y-4">
                {selectedSubmission.submissions.map((sub, index) => (
                  <div key={sub.id} className="bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b] p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-[#1c1c1b] text-white text-xs font-black px-3 py-1 uppercase">FILE {index + 1}</span>
                          <span className="text-sm font-black text-[#1c1c1b] uppercase">{sub.file_type}</span>
                        </div>
                        <p className="text-xs text-[#6A5D52] font-bold mb-1">
                          Submitted: {new Date(sub.submitted_at).toLocaleDateString('id-ID', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                        {sub.file_path && (
                          <p className="text-xs text-[#6A5D52] font-mono break-all">{sub.file_path.split('/').pop()}</p>
                        )}
                      </div>
                      <a
                        href={`${process.env.NEXT_PUBLIC_API_URL}/storage/${sub.file_path}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border-[3px] border-[#1c1c1b] bg-[#6A5D52] text-white text-xs font-black hover:bg-[#1c1c1b] transition-all shadow-[4px_4px_0px_#1c1c1b] cursor-pointer tracking-wider uppercase"
                      >
                        DOWNLOAD
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 px-4">
                <div className="mb-6 text-[#6A5D52]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black font-creato-title uppercase text-[#1c1c1b] mb-3">No Submissions Yet</h3>
                <p className="text-[#6A5D52] font-bold text-center">This participant hasn't submitted any files</p>
              </div>
            )}

            <button 
              onClick={handleCloseSubmissionModal}
              className="w-full cursor-pointer py-4 font-black uppercase text-[#1c1c1b] bg-[#E2E2DE] border-[3px] border-[#1c1c1b] hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[4px_4px_0px_#1c1c1b] tracking-widest mt-6"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

      {selectedDetail && (
        <div 
          className={`fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 transition-opacity duration-200 ease-in-out ${isClosing ? 'opacity-0' : 'opacity-100'}`} 
          onClick={handleCloseModal}
        >
          <div 
            className={`bg-[#E2E2DE] border-4 border-[#1c1c1b] shadow-[12px_12px_0px_#1c1c1b] w-full max-w-5xl max-h-[90vh] overflow-y-auto p-8 md:p-10 relative transition-all duration-200 ease-in-out ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`} 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-6 text-4xl font-black text-[#1c1c1b] hover:scale-110 transition-transform cursor-pointer z-10"
            >
              &times;
            </button>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b-4 border-[#1c1c1b] pb-4">
               <h2 className="text-3xl md:text-4xl font-black font-creato-title uppercase text-[#1C1C1B]">
                 {selectedDetail.group_name || selectedDetail.user.name}
               </h2>
               <div className="mt-2 md:mt-0 text-right">
                  <span className="text-sm font-black text-[#6A5D52] uppercase block">{selectedDetail.competition.name}</span>
                  <span className={`inline-block mt-1 px-3 py-1 text-xs font-black border-2 border-[#1c1c1b] ${
                    selectedDetail.status === 'VERIFIED' ? 'bg-green-400 text-[#1c1c1b]' :
                    selectedDetail.status === 'REJECTED' ? 'bg-red-400 text-white' :
                    'bg-yellow-300 text-[#1c1c1b]'
                  }`}>
                    {selectedDetail.status}
                  </span>
               </div>
            </div>

            {/* --- DATA ANGGOTA TIM --- */}
            <div className="mb-8">
              <h3 className="text-xl font-black text-[#1C1C1B] uppercase mb-4 bg-[#1C1C1B] text-white py-2 px-4 inline-block">Data Peserta / Anggota Tim</h3>
              
              {selectedDetail.members && selectedDetail.members.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedDetail.members.map((member) => (
                    <div key={member.id} className="bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b] p-5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-[#1c1c1b] text-white text-[10px] font-black px-3 py-1 uppercase">
                         {member.member_order === 1 ? 'LEADER' : `MEMBER ${member.member_order}`}
                      </div>
                      
                      <div className="space-y-3 mt-4">
                        <div>
                          <p className="text-[10px] font-black text-[#6A5D52] uppercase tracking-wider">Name</p>
                          <p className="font-bold text-[#1c1c1b] text-base">{member.user?.name || '-'}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-[#6A5D52] uppercase tracking-wider">Email / Phone</p>
                          <p className="font-bold text-[#1c1c1b] text-sm">{member.user?.email || '-'}</p>
                          <p className="font-bold text-[#1c1c1b] text-sm">{member.user?.phone || '-'}</p>
                        </div>
                        
                        {/* Dokumen Identitas */}
                        <div className="pt-3 border-t-2 border-dashed border-gray-300">
                          <p className="text-[10px] font-black text-[#6A5D52] uppercase tracking-wider mb-2">Dokumen Identitas</p>
                          {member.user?.id_card_path || member.user?.ktm_path ? (
                            <a
                              href={`${process.env.NEXT_PUBLIC_API_URL}/storage/${member.user.id_card_path || member.user.ktm_path}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-1.5 border-[2px] border-[#1c1c1b] bg-[#E2E2DE] text-[#1c1c1b] text-xs font-black hover:bg-[#1c1c1b] hover:text-white transition-all inline-block cursor-pointer tracking-wider"
                            >
                              BUKA {member.user.id_card_path ? 'KTP / ID CARD' : 'KTM'}
                            </a>
                          ) : (
                            <p className="text-xs font-bold text-red-500 italic">BELUM UPLOAD KTP/KTM!</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                 <p className="text-sm font-bold text-red-500">Error: Tidak ada data anggota ditemukan.</p>
              )}
            </div>

            {/* --- KARYA / SUBMISSION (HANYA MUNCUL KALAU ADA) --- */}
            {selectedDetail.submissions && selectedDetail.submissions.length > 0 && (
              <div className="mb-8">
                 <h3 className="text-xl font-black text-[#1C1C1B] uppercase mb-4 bg-[#6A5D52] text-white py-2 px-4 inline-block">Karya & Konsep (Submissions)</h3>
                 <div className="bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b] p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedDetail.submissions.map(sub => (
                        <div key={sub.id} className="border-2 border-[#1c1c1b] p-4 flex justify-between items-center bg-[#E2E2DE]">
                           <div>
                             <p className="text-xs font-black text-[#1c1c1b] uppercase tracking-wider">{sub.file_type}</p>
                             <p className="text-[10px] text-[#6A5D52] font-bold">Uploaded: {new Date(sub.submitted_at).toLocaleDateString('id-ID')}</p>
                           </div>
                           <a
                              href={`${process.env.NEXT_PUBLIC_API_URL}/storage/${sub.file_path}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 border-[2px] border-[#1c1c1b] bg-[#1c1c1b] text-white text-xs font-black hover:bg-white hover:text-[#1c1c1b] transition-all inline-block cursor-pointer"
                            >
                              UNDUH PDF
                            </a>
                        </div>
                      ))}
                    </div>
                 </div>
              </div>
            )}

            {/* --- DETAIL PENDAFTARAN --- */}
            <div className="mb-6">
              <h3 className="text-xl font-black text-[#1C1C1B] uppercase mb-4 border-b-2 border-[#1c1c1b] pb-2">Registration Details</h3>
              <div className="bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b] p-5">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm mb-3">
                  <div>
                    <p className="text-[#6A5D52] text-[10px] font-black uppercase tracking-wider mb-1">Date</p>
                    <p className="font-bold text-[#1c1c1b]">{new Date(selectedDetail.created_at).toLocaleDateString('id-ID')}</p>
                  </div>
                  <div>
                    <p className="text-[#6A5D52] text-[10px] font-black uppercase tracking-wider mb-1">Region</p>
                    <p className="font-bold text-[#1c1c1b] uppercase">{selectedDetail.region || '-'}</p>
                  </div>
                  <div>
                    <p className="text-[#6A5D52] text-[10px] font-black uppercase tracking-wider mb-1">Tier / Category</p>
                    <p className="font-bold text-[#1c1c1b] uppercase">{selectedDetail.category || '-'}</p>
                  </div>
                  <div>
                    <p className="text-[#6A5D52] text-[10px] font-black uppercase tracking-wider mb-1">Inst. / Asal</p>
                    <p className="font-bold text-[#1c1c1b] uppercase">{selectedDetail.user?.institution || '-'}</p>
                  </div>
                </div>
                
                {selectedDetail.status === 'REJECTED' && selectedDetail.rejection_reason && (
                  <div className="mt-4 pt-4 border-t-2 border-dashed border-[#1c1c1b]">
                    <p className="text-[10px] font-black text-red-600 uppercase tracking-wider mb-2">Rejection Reason</p>
                    <p className="font-bold text-sm text-red-600 bg-red-100 p-3 border-[2px] border-red-600">
                      {selectedDetail.rejection_reason}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <button 
              onClick={handleCloseModal}
              className="w-full cursor-pointer py-4 font-black uppercase text-[#1c1c1b] bg-[#E2E2DE] border-[3px] border-[#1c1c1b] hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[4px_4px_0px_#1c1c1b] tracking-widest mt-4"
            >
              TUTUP PANEL
            </button>
          </div>
        </div>
      )}
    </div>
  );
}