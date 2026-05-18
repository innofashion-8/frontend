'use client';

import React, { useState, useEffect } from 'react';
import { UserWithRegistrations } from '@/types/user';
import UserModal from './UserModal';
import { UniversalTable, Column } from '@/components/admin/UniversalTable';
import { UniversalPagination } from '@/components/admin/UniversalPagination';
import { PaginatedResponse } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';
import { userService } from '@/services/user-service';

interface UserClientProps {
  data: PaginatedResponse<UserWithRegistrations>;
}

export default function UserClient({ data }: UserClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [viewDetail, setViewDetail] = useState<UserWithRegistrations | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  // Init state dari URL params
  const [searchQuery, setSearchQuery] = useState(searchParams?.get('search') || '');
  const [filterType, setFilterType] = useState<string>(searchParams?.get('type') || 'ALL');

  const applyFilters = (search?: string, type?: string) => {
    const params = new URLSearchParams();

    // Selalu reset ke page 1 saat filter berubah
    params.set('page', '1');

    const finalSearch = search !== undefined ? search : searchQuery;
    const finalType = type !== undefined ? type : filterType;

    if (finalSearch) params.set('search', finalSearch);
    if (finalType && finalType !== 'ALL') params.set('type', finalType);

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

  const handleTypeChange = (val: string) => {
    setFilterType(val);
    applyFilters(undefined, val);
  };

  const handlePageChange = (page: number) => {
    // Preserve all active filters saat pindah halaman
    const params = new URLSearchParams();
    params.set('page', String(page));
    if (searchQuery) params.set('search', searchQuery);
    if (filterType && filterType !== 'ALL') params.set('type', filterType);
    router.push(`?${params.toString()}`);
  };

  const handleExport = async () => {
    try {
      setIsExporting(true);
      await userService.exportUsers();
    } catch (error) {
      alert("Gagal mengexport data");
    } finally {
      setIsExporting(false);
    }
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setViewDetail(null);
      setIsClosing(false);
    }, 200);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && viewDetail) handleCloseModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [viewDetail]);

  const columns: Column<UserWithRegistrations>[] = [
    {
      header: "NO",
      key: "id",
      render: (_, index) => <span className="font-black text-lg">{(data.current_page - 1) * data.per_page + (index + 1)}</span>
    },
    {
      header: "NAMA",
      key: "name",
      render: (item) => <span className="font-bold uppercase text-base">{item.name}</span>
    },
    {
      header: "EMAIL",
      key: "email",
      render: (item) => <span className="text-sm md:text-base font-medium text-[#484847]">{item.email}</span>
    },
    {
      header: "TYPE",
      key: "type",
      render: (item) => (
        <span className={`px-3 py-1.5 border-[3px] border-[#1c1c1b] font-bold text-xs uppercase shadow-[3px_3px_0px_#1c1c1b] tracking-wider
          ${item.type === 'INTERNAL' ? 'bg-[#1c1c1b] text-white' : 'bg-white text-[#1c1c1b]'}`}>
          {item.type}
        </span>
      )
    },
    {
      header: "INSTITUSI",
      key: "institution",
      render: (item) => <span className="text-sm font-bold">{item.institution || '-'}</span>
    },
    {
      header: "PHONE",
      key: "phone",
      render: (item) => <span className="text-sm font-medium">{item.phone || '-'}</span>
    },
    {
      header: "AKSI",
      key: "action",
      render: (item) => (
        <button
          onClick={() => setViewDetail(item)}
          className="px-4 py-1.5 border-[3px] border-[#1c1c1b] bg-[#6A5D52] text-white text-xs font-black hover:bg-[#1c1c1b] transition-all shadow-[3px_3px_0px_#1c1c1b] cursor-pointer tracking-wider"
        >
          DETAIL
        </button>
      )
    }
  ];

  const hasActiveFilter = !!searchQuery || filterType !== 'ALL';

  return (
    <div className="relative">
      <div className="mb-8">
        <h1 className="text-3xl font-black font-creato-title uppercase tracking-tight border-b-4 border-[#1c1c1b] pb-2 text-[#1C1C1B]">
          Manage Users
        </h1>
      </div>

      {/* SEARCH BAR & FILTER */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-3 mb-3">
          {/* Search */}
          <form onSubmit={handleSearchSubmit} className="flex-1 relative w-full">
            <input
              type="text"
              placeholder="Search by name, email, institution, or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border-[3px] border-[#1c1c1b] bg-white font-bold text-[#1c1c1b] placeholder:text-[#6A5D52] placeholder:font-medium focus:outline-none shadow-[4px_4px_0px_#1c1c1b]"
            />
            <button type="submit" className="hidden" />
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

          {/* Type Filter + Export */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <select
              value={filterType}
              onChange={(e) => handleTypeChange(e.target.value)}
              className="px-4 py-3 border-[3px] border-[#1c1c1b] bg-white font-black text-[#1c1c1b] cursor-pointer focus:outline-none shadow-[4px_4px_0px_#1c1c1b] uppercase text-sm"
            >
              <option value="ALL">ALL TYPES</option>
              <option value="INTERNAL">INTERNAL</option>
              <option value="EXTERNAL">EXTERNAL</option>
            </select>

            {hasActiveFilter && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilterType('ALL');
                  router.push('?page=1');
                }}
                className="px-6 py-3 border-[3px] border-[#1c1c1b] bg-white text-[#1c1c1b] font-black uppercase hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[4px_4px_0px_#1c1c1b] cursor-pointer tracking-wider"
              >
                RESET
              </button>
            )}

            <button
              onClick={handleExport}
              disabled={isExporting}
              className={`px-6 py-3 border-[3px] border-[#1c1c1b] font-black uppercase transition-all tracking-wider shadow-[4px_4px_0px_#1c1c1b] ${isExporting ? 'bg-gray-400 cursor-not-allowed text-[#1c1c1b]' : 'bg-[#6A5D52] text-white hover:bg-[#1c1c1b] cursor-pointer'}`}
            >
              {isExporting ? 'EXPORTING...' : 'EXPORT EXCEL'}
            </button>
          </div>
        </div>

        {hasActiveFilter && (
          <p className="text-sm font-bold text-[#6A5D52]">
            Found {data.total} result{data.total !== 1 ? 's' : ''} in Total
          </p>
        )}
      </div>

      <div className="bg-[#E2E2DE] p-6 border-[3px] border-[#1c1c1b] shadow-[6px_6px_0px_#1c1c1b] mb-6">
        {data.data.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="mb-6 text-[#1c1c1b]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 className="text-2xl font-black font-creato-title uppercase text-[#1c1c1b] mb-3">
              {hasActiveFilter ? 'No results found' : 'No users yet'}
            </h3>
            <p className="text-[#6A5D52] font-bold text-center">
              {hasActiveFilter ? 'Try a different search term or filter' : 'No registered users found'}
            </p>
          </div>
        ) : (
          <UniversalTable columns={columns} data={data.data} />
        )}
      </div>

      <UniversalPagination
        meta={data}
        onPageChange={handlePageChange}
      />

      <UserModal user={viewDetail} onClose={handleCloseModal} />
    </div>
  );
}
