

'use client';

import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react'; 
import { useQuery } from '@tanstack/react-query';
import { fetchClient } from '@/lib/fetch-client';
import Navbar from '@/components/opening/navbar';

const palette = {
  onyx: '#1C1C1B', obsidian: '#1a1a1a', walnut: '#6A5D52', greige: '#B7AC9B',
  ash: '#979086', stucco: '#E2E2DE', graphite: '#494947', gravel: '#7b787a'
};

export default function DashboardClient() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const { data: registrations, isLoading: isRegLoading } = useQuery({
    queryKey: ['my-registrations'],
    queryFn: async () => {
      const res = await fetchClient<any>('/api/registrations', { method: 'GET' });
      return res.data; 
    },
    enabled: status === 'authenticated'
  });

  const handleLogout = async () => await signOut({ callbackUrl: '/login' });

  if (status === 'loading') return <div className="min-h-screen flex items-center justify-center bg-transparent"><div className="text-xs font-bold tracking-[0.4em] uppercase animate-pulse" style={{ color: palette.ash }}>DECRYPTING IDENTITY...</div></div>;

  const getStatusColor = (statusReg: string) => {
    const s = (statusReg || '').toUpperCase();
    if (s.includes('REJECT') || s.includes('TOLAK')) return '#ef4444'; 
    if (s.includes('VERIFI') || s.includes('ACCEPT') || s.includes('APPROV')) return '#22c55e'; 
    if (s.includes('PENDING') || s.includes('WAIT')) return palette.greige; 
    return palette.ash; 
  };

  // 🔥 LOGIKA SAKTI BUAT NENTUIN LINK WA BERDASARKAN LOMBA & REGION 🔥
  const getWhatsAppLink = (reg: any) => {
    if (reg?.event) return reg.event.whatsapp_link; // Kalau event, tetep ngambil dari DB

    if (reg?.competition) {
      const compName = (reg.competition.name || '').toUpperCase();
      const isRestyling = compName.includes('RESTYLING') || compName.includes('STYLING');
      
      // Ambil region dari data registrasi (Bisa dari kolom region atau dari draft_data fallback)
      const userRegion = (reg.region || reg.draft_data?.region || 'NATIONAL').toUpperCase();

      if (isRestyling) {
        return userRegion === 'INTERNATIONAL' 
          ? 'https://chat.whatsapp.com/FLQMOjegOjN81OyYVXFlSR' 
          : 'https://chat.whatsapp.com/DVRPtov9lUxCKV9Kre08J8';
      } else {
        // Fashion Sketch
        return userRegion === 'INTERNATIONAL'
          ? 'https://chat.whatsapp.com/CYwpVZVJYwFIAIScHHj2KU'
          : 'https://chat.whatsapp.com/DgvcobX4nYMGPQhKpvvAcH';
      }
    }
    return null;
  };

  let allRegistrations: any[] = [];
  if (registrations) {
    allRegistrations = Array.isArray(registrations) ? registrations : [...(registrations.competitions || []), ...(registrations.events || [])];
  }

  return (
    <>
      <Navbar isVisible={true} />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 mt-10">
        
        {/* WELCOME BANNER */}
        <div className="mb-12 p-10 md:p-16 border bg-black/40 backdrop-blur-md relative overflow-hidden transition-all duration-700 hover:shadow-[0_20px_40px_-15px_rgba(106,93,82,0.3)]" style={{ borderColor: palette.graphite }}>
          <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: palette.greige }}></div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: palette.stucco, boxShadow: `0 0 10px ${palette.stucco}` }}></span>
                <p className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: palette.ash }}>DASHBOARD UTAMA</p>
            </div>
            <button onClick={handleLogout} className="group flex items-center gap-2 px-4 py-2 border transition-all duration-300 backdrop-blur-sm cursor-pointer" style={{ borderColor: palette.graphite, backgroundColor: 'rgba(28,28,27,0.5)' }}>
              <span className="w-1 h-1 rounded-full bg-red-500 opacity-50 group-hover:opacity-100 transition-opacity"></span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase transition-colors text-gray-400 group-hover:text-red-400">LOG OUT</span>
            </button>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-widest" style={{ color: palette.stucco }}>
            WELCOME, <span style={{ color: palette.greige }}>{session?.user?.name?.split(' ')[0] || 'UNKNOWN'}</span>
          </h1>
          <p className="text-lg md:text-xl font-medium tracking-widest max-w-2xl leading-relaxed" style={{ color: palette.ash }}>
            Pilih jalur pendaftaran Innofashion Show 8 yang ingin kamu ikuti atau pantau status kelulusanmu.
          </p>
        </div>

        {/* STATUS REGISTRASI */}
        <div className="mb-12 border p-8 bg-black/40 backdrop-blur-md" style={{ borderColor: palette.graphite }}>
          <div className="flex items-center gap-3 mb-8 pb-4 border-b" style={{ borderColor: palette.graphite }}>
            <p className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: palette.greige }}>[ STATUS PROTOKOL REGISTRASI ]</p>
          </div>
          {isRegLoading ? (
            <div className="text-xs font-bold tracking-[0.3em] uppercase animate-pulse" style={{ color: palette.ash }}>SYNCING WITH DATABASE...</div>
          ) : allRegistrations.length === 0 ? (
            <div className="text-sm font-medium tracking-widest uppercase" style={{ color: palette.ash }}>NO ACTIVE REGISTRATIONS FOUND.</div>
          ) : (
            <div className="space-y-4">
              {allRegistrations.map((reg, idx) => {
                const itemName = reg?.competition?.name || reg?.event?.title || 'UNKNOWN PROTOCOL';
                const itemType = reg?.competition ? 'COMPETITION' : 'EVENT';
                const statusStr = (reg?.status || 'PENDING').toUpperCase();
                const isRejected = statusStr.includes('REJECT') || statusStr.includes('TOLAK');
                
                const isAccepted = statusStr.includes('VERIFI') || statusStr.includes('ACCEPT') || statusStr.includes('APPROV');
                const finalWaLink = getWhatsAppLink(reg); 

                return (
                  <div key={idx} className="flex flex-col p-4 border transition-colors hover:bg-white/5" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
                      <div className="mb-4 md:mb-0">
                        <div className="text-[9px] tracking-[0.2em] mb-1 uppercase" style={{ color: palette.ash }}>{itemType}</div>
                        <div className="font-bold text-lg tracking-widest uppercase" style={{ color: palette.stucco }}>{itemName}</div>
                        {/* Menampilkan Detail Region / Tier jika ada */}
                        {(reg?.region || reg?.category) && (
                          <div className="text-[10px] font-bold tracking-widest uppercase mt-2" style={{ color: palette.greige }}>
                            {reg?.region} {reg?.category && `| ${reg.category}`}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        {/* 🔥 TOMBOL WHATSAPP HIJAU TIPIS 🔥 */}
                        {isAccepted && finalWaLink && (
                          <a 
                            href={finalWaLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-4 py-2 border font-bold text-[10px] tracking-widest uppercase bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all cursor-pointer"
                            style={{ borderColor: '#25D366' }}
                          >
                            JOIN WHATSAPP
                          </a>
                        )}

                        <div className="flex items-center gap-3 px-4 py-2 border" style={{ borderColor: palette.graphite, backgroundColor: 'rgba(0,0,0,0.5)' }}>
                          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: getStatusColor(statusStr), boxShadow: `0 0 10px ${getStatusColor(statusStr)}` }}></span>
                          <span className="text-xs font-black tracking-widest uppercase" style={{ color: getStatusColor(statusStr) }}>{statusStr}</span>
                        </div>
                      </div>
                    </div>
                    {isRejected && reg?.rejection_reason && (
                      <div className="mt-4 p-4 border border-red-500/50 bg-red-500/10">
                        <p className="text-[10px] font-bold tracking-[0.2em] text-red-400 uppercase mb-1">REJECTION REASON:</p>
                        <p className="text-sm font-medium text-red-200">{reg.rejection_reason}</p>
                        <p className="text-[10px] font-bold tracking-[0.2em] text-white uppercase mt-4">➔ PLEASE RE-REGISTER FROM THE CATALOG BELOW</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* MENU CARD TETAP SAMA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div onClick={() => router.push('/dashboard/event')} className="group relative overflow-hidden border bg-black/40 backdrop-blur-md p-10 md:p-14 cursor-pointer transition-all duration-700 hover:-translate-y-2 flex flex-col justify-between" style={{ borderColor: palette.graphite, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}>
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"><span className="text-9xl font-black italic" style={{ color: palette.stucco }}>E</span></div>
            <div>
                <p className="text-[10px] font-bold tracking-[0.3em] mb-8 uppercase" style={{ color: palette.greige }}>[ KATALOG EVENT ]</p>
                <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-widest" style={{ color: palette.stucco }}>EVENTS</h2>
                <p className="text-sm md:text-base mb-12 leading-relaxed font-medium tracking-wide" style={{ color: palette.ash }}>Ikuti berbagai rangkaian acara seru, workshop inspiratif, dan pameran karya spektakuler.</p>
            </div>
            <div className="flex items-center gap-4 mt-auto">
                <span className="h-[1px] w-12 group-hover:w-24 transition-all duration-700" style={{ backgroundColor: palette.ash }}></span>
                <span className="font-bold tracking-widest text-xs uppercase transition-colors group-hover:text-white" style={{ color: palette.stucco }}>DAFTAR EVENT ➔</span>
            </div>
          </div>

          <div onClick={() => router.push('/dashboard/competition')} className="group relative overflow-hidden border bg-black/40 backdrop-blur-md p-10 md:p-14 cursor-pointer transition-all duration-700 hover:-translate-y-2 flex flex-col justify-between" style={{ borderColor: palette.graphite, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}>
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"><span className="text-9xl font-black italic" style={{ color: palette.stucco }}>C</span></div>
            <div>
                <p className="text-[10px] font-bold tracking-[0.3em] mb-8 uppercase" style={{ color: palette.greige }}>[ PENDAFTARAN LOMBA ]</p>
                <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-widest" style={{ color: palette.stucco }}>COMPETITIONS</h2>
                <p className="text-sm md:text-base mb-12 leading-relaxed font-medium tracking-wide" style={{ color: palette.ash }}>Tunjukkan bakat terbaikmu dan bersainglah di panggung megah Innofashion Show 8.</p>
            </div>
            <div className="flex items-center gap-4 mt-auto">
                <span className="h-[1px] w-12 group-hover:w-24 transition-all duration-700" style={{ backgroundColor: palette.ash }}></span>
                <span className="font-bold tracking-widest text-xs uppercase transition-colors group-hover:text-white" style={{ color: palette.stucco }}>LIHAT LOMBA ➔</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}