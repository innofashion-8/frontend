"use client";

import React, { useState, useEffect } from "react";
import { UniversalTable, Column } from "@/components/admin/UniversalTable";
import { UniversalPagination } from "@/components/admin/UniversalPagination";
import { useRouter, useSearchParams } from "next/navigation";
import { registrationService } from "@/services/registration-service";
import { adminConfirm, adminSuccess, adminError } from '@/lib/admin-swal';
import { EventRegistrationWithUserAndEvent } from "@/types/registration";
import { PaginatedResponse } from "@/types";
import { eventService } from "@/services/event-service";

interface AttendanceClientProps {
  data: EventRegistrationWithUserAndEvent[];
  meta: PaginatedResponse<EventRegistrationWithUserAndEvent>;
  title: string;
}

export default function AttendanceClient({ data, meta, title }: AttendanceClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams?.get('search') || '');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filterUserType, setFilterUserType] = useState<string>(searchParams?.get('user_type') || 'ALL');
  const [filterEventName, setFilterEventName] = useState<string>(searchParams?.get('event_name') || '');
  const [eventOptions, setEventOptions] = useState<string[]>([]);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const evts = await eventService.getEvents();
        setEventOptions(evts.map(e => e.title));
      } catch (err) {
        console.error("Failed to fetch event options", err);
      }
    };
    fetchEvents();
  }, []);

  const applyFilters = (search?: string) => {
    const params = new URLSearchParams();
    params.set('page', '1');
    const finalSearch = search !== undefined ? search : searchQuery;
    if (finalSearch) params.set('search', finalSearch);
    if (filterUserType !== 'ALL') params.set('user_type', filterUserType);
    if (filterEventName) params.set('event_name', filterEventName);
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

  const handleAttendance = async (id: string, currentAttended: boolean) => {
    const newAttended = !currentAttended;
    const result = await adminConfirm({
      title: 'KONFIRMASI',
      text: `Tandai sebagai ${newAttended ? 'HADIR' : 'TIDAK HADIR'}?`,
      confirmButtonText: 'YA',
      cancelButtonText: 'BATAL',
    });

    if (!result.isConfirmed) return;

    setLoadingId(id);
    try {
      await registrationService.updateEventAttendance(id, newAttended);

      await adminSuccess({
        title: 'BERHASIL!',
        text: `Kehadiran berhasil ${newAttended ? 'ditandai' : 'dibatalkan'}`,
      });

      router.refresh();
    } catch (error: any) {
      adminError({ title: 'GAGAL!', text: error.message || 'Terjadi kesalahan' });
    } finally {
      setLoadingId(null);
    }
  };

  const columns: Column<EventRegistrationWithUserAndEvent>[] = [
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
      header: "EVENT",
      key: "event",
      render: (item) => <span className="text-sm md:text-base font-bold block max-w-[200px] leading-snug">{item.event.title}</span>
    },
    {
      header: "KEHADIRAN",
      key: "attended",
      render: (item) => {
        const attended = (item as any).attended;
        return attended ? (
          <span className="px-3 py-1.5 border-[3px] border-[#1c1c1b] bg-green-400 text-[#1c1c1b] font-black text-xs uppercase shadow-[3px_3px_0px_#1c1c1b] tracking-wider inline-flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l5 5l10 -10" />
            </svg>
            HADIR
          </span>
        ) : (
          <span className="px-3 py-1.5 border-[3px] border-[#1c1c1b] bg-gray-300 text-[#1c1c1b] font-black text-xs uppercase shadow-[3px_3px_0px_#1c1c1b] tracking-wider inline-flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
            BELUM
          </span>
        );
      }
    },
    {
      header: "AKSI",
      key: "action",
      render: (item) => {
        const attended = (item as any).attended;
        return (
          <button
            onClick={() => handleAttendance(item.id, attended)}
            disabled={loadingId === item.id}
            className={`px-4 py-1.5 border-[3px] border-[#1c1c1b] text-white text-xs font-black transition-all shadow-[3px_3px_0px_#1c1c1b] cursor-pointer tracking-wider
              ${loadingId === item.id ? 'bg-gray-400 cursor-not-allowed' : attended ? 'bg-red-600 hover:bg-[#1c1c1b]' : 'bg-green-600 hover:bg-[#1c1c1b]'}`}
          >
            {loadingId === item.id ? 'LOADING...' : attended ? 'BATALKAN' : 'TANDAI HADIR'}
          </button>
        );
      }
    }
  ];

  return (
    <div className="relative">
      <div className="mb-8">
        <h1 className="text-3xl font-black font-creato-title uppercase tracking-tight border-b-4 border-[#1c1c1b] pb-2 text-[#1C1C1B]">
          {title}
        </h1>
      </div>

      {/* SEARCH BAR & FILTER */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-3">
          <form onSubmit={handleSearchSubmit} className="flex-1 relative w-full">
            <input
              type="text"
              placeholder="Search by name or email..."
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
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z" />
            </svg>
            FILTER
            {(filterUserType !== 'ALL' || filterEventName) && (
              <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-black">!</span>
            )}
          </button>
        </div>
        {(searchQuery || filterUserType !== 'ALL' || filterEventName) && (
          <p className="mt-2 text-sm font-bold text-[#6A5D52]">
            Found {meta.total} result{meta.total !== 1 ? 's' : ''} in Total
          </p>
        )}
      </div>

      <div className="bg-[#E2E2DE] p-6 border-[3px] border-[#1c1c1b] shadow-[6px_6px_0px_#1c1c1b] mb-6">
        {data.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="mb-6 text-[#1c1c1b]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11l3 3l8 -8" /><path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
              </svg>
            </div>
            <h3 className="text-2xl font-black font-creato-title uppercase text-[#1c1c1b] mb-3">{searchQuery ? 'No results found' : 'No attendance data'}</h3>
            <p className="text-[#6A5D52] font-bold text-center">{searchQuery ? 'Try a different search term' : 'No verified registrations found'}</p>
          </div>
        ) : (
          <UniversalTable columns={columns} data={data} />
        )}
      </div>

      <UniversalPagination
        meta={meta}
        onPageChange={(page) => router.push(`?page=${page}`)}
      />

      {/* FILTER MODAL */}
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
                <label className="text-sm font-black text-[#6A5D52] uppercase block mb-2 tracking-wider">Event Name</label>
                <select
                  value={filterEventName}
                  onChange={(e) => setFilterEventName(e.target.value)}
                  className="w-full px-4 py-3 border-[3px] border-[#1c1c1b] bg-white font-black text-[#1c1c1b] cursor-pointer focus:outline-none shadow-[4px_4px_0px_#1c1c1b] uppercase"
                >
                  <option value="">ALL EVENTS</option>
                  {eventOptions.map(name => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                onClick={() => {
                  setFilterUserType('ALL');
                  setFilterEventName('');
                  setShowFilterModal(false);
                  router.push('?page=1');
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
    </div>
  );
}
