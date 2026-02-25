'use client';

import React, { useState, useEffect } from 'react';
import { UserWithRegistrations } from '@/types/user';
import UserModal from '@/components/admin/UserModal';
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
    <div className="p-4 md:p-8 relative">
      <div className="mb-8">
        <h1 className="text-3xl font-black font-creato-title uppercase tracking-tight border-b-4 border-[#1c1c1b] pb-2 text-[#1C1C1B]">
          Manage Users
        </h1>
      </div>

      <div className="bg-[#E2E2DE] p-6 border-[3px] border-[#1c1c1b] shadow-[6px_6px_0px_#1c1c1b] mb-6">
        {data.data.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="mb-6 text-[#1c1c1b]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 className="text-2xl font-black font-creato-title uppercase text-[#1c1c1b] mb-3">No users yet</h3>
            <p className="text-[#6A5D52] font-bold text-center">No registered users found</p>
          </div>
        ) : (
          <UniversalTable columns={columns} data={data.data} />
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
