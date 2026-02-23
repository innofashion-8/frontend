"use client";

import { useSession, signOut } from "next-auth/react";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="p-10 text-center">Tunggu bentar bro...</div>;
  }

  if (status === "unauthenticated" || !session) {
    return <div className="p-10 text-center text-red-500">Lu belum login!</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Selamat Datang di Dashboard PCE 2026!</h1>
      
      <div className="bg-gray-100 p-6 rounded-lg shadow max-w-2xl">
        <p><strong>Nama:</strong> {session.user.name}</p>
        <p><strong>Email:</strong> {session.user.email}</p>
        <p><strong>Tipe User:</strong> {session.user.userType}</p>
        <p><strong>Role Admin:</strong> {session.user.role || 'Bukan Admin'}</p>
        
        <p className="mt-4 text-xs text-gray-500 break-all">
          <strong>Token Laravel:</strong> {session.accessToken}
        </p>

        <button 
          onClick={() => signOut({ callbackUrl: '/login' })}
          className="mt-6 bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}