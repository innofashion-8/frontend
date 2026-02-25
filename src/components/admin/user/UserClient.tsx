'use client';

import React, { useState, useEffect } from 'react';
import { UserWithRegistrations } from '@/types/user';
import UserModal from './UserModal';
import { UniversalTable, Column } from '@/components/admin/UniversalTable';
import { UniversalPagination } from '@/components/admin/UniversalPagination';
import { PaginatedResponse } from '@/types';
import { useRouter } from 'next/navigation';

interface UserClientProps {
  data: PaginatedResponse<UserWithRegistrations>;
}

export default function UserClient({ data }: UserClientProps) {
  const router = useRouter();
  const [viewDetail, setViewDetail] = useState<UserWithRegistrations | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('ALL');

  const filteredData = data.data.filter(user => {
    const matchSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (user.institution && user.institution.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (user.phone && user.phone.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchType = filterType === 'ALL' || user.type === filterType;
    
    return matchSearch && matchType;
  });

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

  return (
    <div className="relative">
      <div className="mb-8">
        <h1 className="text-3xl font-black font-creato-title uppercase tracking-tight border-b-4 border-[#1c1c1b] pb-2 text-[#1C1C1B]">
          Manage Users
        </h1>
      </div>

      {/* SEARCH BAR */}
      <div className="mb-6">
        <div className="flex gap-3 mb-3">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search by name, email, type, institution, or phone..."
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
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-3 border-[3px] border-[#1c1c1b] bg-white font-black text-[#1c1c1b] cursor-pointer focus:outline-none shadow-[4px_4px_0px_#1c1c1b] uppercase text-sm"
          >
            <option value="ALL">ALL TYPES</option>
            <option value="INTERNAL">INTERNAL</option>
            <option value="EXTERNAL">EXTERNAL</option>
          </select>
        </div>
        {(searchQuery || filterType !== 'ALL') && (
          <p className="text-sm font-bold text-[#6A5D52]">
            Found {filteredData.length} result{filteredData.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      <div className="bg-[#E2E2DE] p-6 border-[3px] border-[#1c1c1b] shadow-[6px_6px_0px_#1c1c1b] mb-6">
        {filteredData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="mb-6 text-[#1c1c1b]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 className="text-2xl font-black font-creato-title uppercase text-[#1c1c1b] mb-3">{searchQuery ? 'No results found' : 'No users yet'}</h3>
            <p className="text-[#6A5D52] font-bold text-center">{searchQuery ? 'Try a different search term' : 'No registered users found'}</p>
          </div>
        ) : (
          <UniversalTable columns={columns} data={filteredData} />
        )}
      </div>

      <UniversalPagination 
        meta={data} 
        onPageChange={(page) => router.push(`?page=${page}`)} 
      />

      <UserModal user={viewDetail} onClose={handleCloseModal} />
    </div>
  );
}
