'use client';

import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react'; 
import Beams from '@/components/ui/Beams'; 

const palette = {
  onyx: '#1C1C1B',
  obsidian: '#1a1a1a',
  walnut: '#6A5D52',
  greige: '#B7AC9B',
  ash: '#979086',
  stucco: '#E2E2DE',
  graphite: '#494947',
  gravel: '#7b787a'
};

export default function DashboardPage() {
  const router = useRouter();
  
  // 🔥 FIX: Tarik "status" dari useSession buat ngecek dia lagi loading atau udah kelar!
  const { data: session, status } = useSession();

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/login' });
  };

  // 🔥 TAMBAHIN INI: Layar Loading Super Singkat ala Dystopian 🔥
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="text-xs font-bold tracking-[0.4em] uppercase animate-pulse" style={{ color: palette.ash }}>
          DECRYPTING IDENTITY...
        </div>
      </div>
    );
  }

  return (
    <div className="relative py-12 min-h-screen flex flex-col justify-center">
      
      {/* REACTBITS BEAMS BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor={palette.greige} 
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        
        {/* WELCOME BANNER */}
        <div 
          className="mb-12 p-10 md:p-16 border bg-black/40 backdrop-blur-md relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:shadow-[0_20px_40px_-15px_rgba(106,93,82,0.3)]" 
          style={{ borderColor: palette.graphite }}
        >
          <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: palette.greige }}></div>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: palette.stucco, boxShadow: `0 0 10px ${palette.stucco}` }}></span>
                <p className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: palette.ash }}>DASHBOARD UTAMA</p>
            </div>
            
            <button 
              onClick={handleLogout}
              className="group flex items-center gap-2 px-4 py-2 border transition-all duration-300 backdrop-blur-sm"
              style={{ borderColor: palette.graphite, backgroundColor: 'rgba(28,28,27,0.5)' }} 
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#ef4444'; 
                e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = palette.graphite;
                e.currentTarget.style.backgroundColor = 'rgba(28,28,27,0.5)';
              }}
            >
              <span className="w-1 h-1 rounded-full bg-red-500 opacity-50 group-hover:opacity-100 transition-opacity"></span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase transition-colors text-gray-400 group-hover:text-red-400">
                DISCONNECT
              </span>
            </button>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-widest" style={{ color: palette.stucco }}>
            {/* Karena loadingnya udah kita tahan, pas render ini 100% datanya udah ada! */}
            WELCOME, <span style={{ color: palette.greige }}>{session?.user?.name?.split(' ')[0] || 'UNKNOWN'}</span>
          </h1>
          <p className="text-lg md:text-xl font-medium tracking-widest max-w-2xl leading-relaxed" style={{ color: palette.ash }}>
            Pilih jalur pendaftaran Innofashion Show 8 yang ingin kamu ikuti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* EVENT CARD */}
          <div 
            onClick={() => router.push('/dashboard/event')}
            className="group relative overflow-hidden border bg-black/40 backdrop-blur-md p-10 md:p-14 cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2 flex flex-col justify-between"
            style={{ borderColor: palette.graphite, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 20px 40px -15px ${palette.walnut}60`}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)'}
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
              <span className="text-9xl font-black italic" style={{ color: palette.stucco }}>E</span>
            </div>
            
            <div>
                <p className="text-[10px] font-bold tracking-[0.3em] mb-8 uppercase" style={{ color: palette.greige }}>[ KATALOG EVENT ]</p>
                <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-widest" style={{ color: palette.stucco }}>EVENTS</h2>
                <p className="text-sm md:text-base mb-12 leading-relaxed font-medium tracking-wide" style={{ color: palette.ash }}>
                  Ikuti berbagai rangkaian acara seru, workshop inspiratif, dan pameran karya spektakuler.
                </p>
            </div>
            
            <div className="flex items-center gap-4 mt-auto">
              <span className="h-[1px] w-12 group-hover:w-24 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{ backgroundColor: palette.ash }}></span>
              <span className="font-bold tracking-widest text-xs uppercase transition-colors group-hover:text-white" style={{ color: palette.stucco }}>DAFTAR EVENT ➔</span>
            </div>
          </div>

          {/* COMPETITION CARD */}
          <div 
            onClick={() => router.push('/dashboard/competition')}
            className="group relative overflow-hidden border bg-black/40 backdrop-blur-md p-10 md:p-14 cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2 flex flex-col justify-between"
            style={{ borderColor: palette.graphite, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 20px 40px -15px ${palette.walnut}60`}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)'}
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
              <span className="text-9xl font-black italic" style={{ color: palette.stucco }}>C</span>
            </div>
            
            <div>
                <p className="text-[10px] font-bold tracking-[0.3em] mb-8 uppercase" style={{ color: palette.greige }}>[ PENDAFTARAN LOMBA ]</p>
                <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-widest" style={{ color: palette.stucco }}>COMPETITIONS</h2>
                <p className="text-sm md:text-base mb-12 leading-relaxed font-medium tracking-wide" style={{ color: palette.ash }}>
                  Tunjukkan bakat terbaikmu dan bersainglah di panggung megah Innofashion Show 8.
                </p>
            </div>
            
            <div className="flex items-center gap-4 mt-auto">
              <span className="h-[1px] w-12 group-hover:w-24 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{ backgroundColor: palette.ash }}></span>
              <span className="font-bold tracking-widest text-xs uppercase transition-colors group-hover:text-white" style={{ color: palette.stucco }}>LIHAT LOMBA ➔</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}