'use client';

import React, { useState, useEffect } from 'react';
import { UserWithRegistrations } from '@/types/user';
import { profileService } from '@/services/user-service';
import UserModal from '@/components/admin/UserModal';

export default function UserClient() {
  const [users, setUsers] = useState<UserWithRegistrations[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewDetail, setViewDetail] = useState<UserWithRegistrations | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await profileService.getUsers();
        setUsers(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="relative min-h-screen text-[#1C1C1B]">
        <div className="w-full mx-auto mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Manage Users</h1>
        </div>
        <div className="flex items-center justify-center py-20">
          <div className="text-[#5B4D4B] text-lg">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-[#1C1C1B]">
      <div className="w-full mx-auto mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Manage Users</h1>
      </div>

      <div className="w-full mx-auto bg-white rounded-2xl border border-gray-400 shadow-[0_0_15px_rgba(0,0,0,0.1)] overflow-hidden">
        {users.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="mb-6 text-[#5B4D4B]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#5B4D4B] mb-3">No users yet</h3>
            <p className="text-[#978D82] mb-6 text-center">No registered users found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#5B4D4B] text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Institution</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Phone</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Line ID</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map((user, index) => (
                  <tr 
                    key={user.id} 
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-[#EBEBDD]/30 transition-colors`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-[#1C1C1B]">{user.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                        user.type === 'INTERNAL' 
                          ? 'bg-[#5B4D4B]/20 text-[#5B4D4B]' 
                          : 'bg-[#B1A79B]/20 text-[#978D82]'
                      }`}>
                        {user.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{user.institution || '-'}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{user.phone || '-'}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{user.line || '-'}</td>
                    <td className="px-6 py-4 text-center">
                      <button 
                        onClick={() => setViewDetail(user)}
                        className="bg-[#5B4D4B] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#4B3D3B] transition-colors"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <UserModal user={viewDetail} onClose={() => setViewDetail(null)} />
    </div>
  );
}
