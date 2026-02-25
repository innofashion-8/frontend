'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { themeColors } from '@/lib/theme';

export default function DashboardPage() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="py-4">
      <div 
        className="mb-12 p-8 md:p-12 rounded-[2.5rem] border shadow-sm" 
        style={{ backgroundColor: themeColors.cardBg, borderColor: themeColors.border }}
      >
        <h1 className="text-3xl md:text-5xl font-black mb-4" style={{ color: themeColors.textDark }}>
          Hi, <span style={{ color: themeColors.primary }}>{session?.user?.name?.split(' ')[0]}!</span> 👋
        </h1>
        <p className="text-xl font-medium" style={{ color: themeColors.textMuted }}>
          Pilih jalur pendaftaran Innofashion Show 8 yang ingin kamu ikuti.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* KARTU EVENT */}
        <div 
          onClick={() => router.push('/dashboard/events')}
          className="group relative overflow-hidden border-2 p-10 md:p-12 rounded-[3rem] cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          style={{ backgroundColor: themeColors.cardBg, borderColor: themeColors.border }}
        >
          <div className="text-6xl mb-8">🎟️</div>
          <h2 className="text-4xl font-black mb-4 transition-colors" style={{ color: themeColors.textDark }}>Event</h2>
          <p className="text-xl font-medium mb-10 leading-relaxed" style={{ color: themeColors.textMuted }}>
            Ikuti berbagai rangkaian acara seru, workshop inspiratif, dan pameran karya spektakuler.
          </p>
          <span 
            className="inline-flex items-center px-8 py-4 rounded-xl font-bold transition-transform group-hover:scale-105 shadow-md text-lg"
            style={{ backgroundColor: themeColors.primary, color: themeColors.cardBg }}
          >
            Daftar Event ➔
          </span>
        </div>

        {/* KARTU LOMBA */}
        <div 
          onClick={() => router.push('/dashboard/competitions')}
          className="group relative overflow-hidden border-2 p-10 md:p-12 rounded-[3rem] cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          style={{ backgroundColor: themeColors.cardBg, borderColor: themeColors.border }}
        >
          <div className="text-6xl mb-8">🏆</div>
          <h2 className="text-4xl font-black mb-4 transition-colors" style={{ color: themeColors.textDark }}>Competition</h2>
          <p className="text-xl font-medium mb-10 leading-relaxed" style={{ color: themeColors.textMuted }}>
            Tunjukkan bakat terbaikmu dan bersainglah di panggung megah Innofashion Show 8.
          </p>
          <span 
            className="inline-flex items-center px-8 py-4 rounded-xl font-bold transition-transform group-hover:scale-105 shadow-md text-lg"
            style={{ backgroundColor: themeColors.textDark, color: themeColors.cardBg }}
          >
            Lihat Lomba ➔
          </span>
        </div>

      </div>
    </div>
  );
}