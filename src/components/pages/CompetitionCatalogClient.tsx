
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { competitionService } from '@/services/competition-service';
import Swal from 'sweetalert2';

const palette = {
  onyx: '#1C1C1B', obsidian: '#1a1a1a', walnut: '#6A5D52', greige: '#B7AC9B',
  ash: '#979086', stucco: '#E2E2DE', graphite: '#494947', gravel: '#7b787a'
};

export default function CompetitionCatalogPage() {
  const router = useRouter();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const { data: competitions, isLoading } = useQuery({
    queryKey: ['competitions'],
    queryFn: competitionService.getCompetitions,
  });

  const handleRegisterClick = (comp: any) => {
    if (!comp.slug || comp.slug === 'undefined') {
       Swal.fire({
        icon: 'error', title: 'SYSTEM ERROR', text: 'Protocol data is missing or corrupted. Please contact administrator.',
        background: palette.onyx, color: palette.stucco, confirmButtonColor: '#ef4444',
        customClass: { popup: 'border border-red-500 rounded-none' }
      });
      return;
    }
    // Langsung arahin ke form registrasi
    router.push(`/dashboard/competition/${comp.slug}`);
  };

  if (isLoading) return <div className="min-h-[60vh] flex items-center justify-center font-bold tracking-[0.3em] uppercase animate-pulse" style={{ color: palette.ash }}>ESTABLISHING CONNECTION...</div>;

  return (
    <div className="relative py-12 min-h-screen bg-[#0a0a0a]">
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <button onClick={() => router.push('/dashboard')} className="mb-12 font-bold cursor-pointer text-xs tracking-[0.3em] uppercase transition-colors flex items-center gap-3 hover:text-white" style={{ color: palette.ash }}>
          <span className="w-8 h-[1px] block transition-all" style={{ backgroundColor: palette.ash }}></span> RETURN TO TERMINAL
        </button>

        <div className="mb-16">
          <p className="text-xs font-bold tracking-[0.3em] mb-4" style={{ color: palette.greige }}>[ PENDAFTARAN LOMBA ]</p>
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-widest" style={{ color: palette.stucco }}>COMPETITIONS</h1>
          <p className="text-lg font-medium tracking-widest max-w-2xl leading-relaxed" style={{ color: palette.ash }}>
            Tunjukkan bakat terbaikmu dan bersainglah di panggung megah Innofashion Show 8.
          </p>
        </div>

        {!competitions || competitions.length === 0 ? (
          <div className="p-12 border text-center" style={{ backgroundColor: palette.onyx, borderColor: palette.graphite }}>
            <p className="font-bold tracking-[0.3em] uppercase" style={{ color: palette.ash }}>SYSTEM NOTICE: NO PROTOCOLS FOUND.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {competitions.map((comp: any, idx: number) => {
              const isOthersExpanded = expandedId !== null && expandedId !== comp.id;
              // Ngambil tipe partisipan langsung dari database API
              const isGroup = comp.participant_type === 'GROUP';
              
              return (
                <div 
                  key={comp.id} 
                  className={`group relative border p-8 md:p-10 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] 
                    ${isOthersExpanded ? 'opacity-30 scale-[0.97] blur-[2px] grayscale pointer-events-none' : 'hover:-translate-y-2'}`} 
                  style={{ backgroundColor: palette.onyx, borderColor: palette.graphite, boxShadow: isOthersExpanded ? 'none' : '0 10px 30px -10px rgba(0,0,0,0.5)' }}
                  onMouseEnter={(e) => { if(!isOthersExpanded) e.currentTarget.style.boxShadow = `0 20px 40px -15px ${palette.walnut}60` }}
                  onMouseLeave={(e) => { if(!isOthersExpanded) e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)' }}
                >
                  <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none transition-opacity duration-700 group-hover:opacity-10">
                    <span className="text-8xl font-black italic" style={{ color: palette.stucco }}>0{idx + 1}</span>
                  </div>

                  <div className="mb-10">
                    <h2 className="text-3xl font-black uppercase tracking-widest mb-2" style={{ color: palette.stucco }}>{comp.name}</h2>
                    <div className="text-xs font-bold tracking-[0.2em]" style={{ color: palette.ash }}>
                      STATUS: <span style={{ color: palette.greige }}>ACTIVE_</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-end mb-10 pb-6 border-b" style={{ borderColor: palette.graphite }}>
                      <div>
                        <p className="text-[10px] tracking-[0.2em] mb-2 uppercase" style={{ color: palette.ash }}>REGISTRATION FEE</p>
                        <div className="font-black text-2xl tracking-widest" style={{ color: palette.stucco }}>NO CHARGE</div>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] tracking-[0.2em] mb-2 uppercase" style={{ color: palette.ash }}>PARTICIPANT</p>
                        <div className="text-xs font-bold uppercase tracking-widest" style={{ color: palette.greige }}>
                            {isGroup ? 'GROUP (2-3)' : 'INDIVIDUAL'}
                        </div>
                      </div>
                  </div>

                  <div className="flex-grow flex flex-col justify-end">
                    {expandedId === comp.id ? (
                      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                        <p className="text-sm leading-relaxed mb-8" style={{ color: palette.ash }}>
                          {comp.description || 'Prepare your futuristic concept. Originality and innovation are paramount.'}
                        </p>
                        
                        <button 
                          onClick={() => handleRegisterClick(comp)}
                          className="w-full py-5 cursor-pointer font-black uppercase tracking-[0.2em] transition-all duration-300 text-sm hover:scale-[1.03]"
                          style={{ backgroundColor: palette.stucco, color: palette.onyx, boxShadow: `0 0 15px ${palette.greige}40` }}
                        >
                          INITIATE REGISTRATION
                        </button>

                        <button onClick={() => setExpandedId(null)} className="block w-full text-center mt-6 cursor-pointer font-bold uppercase tracking-widest text-[10px] transition-colors" style={{ color: palette.gravel }}>
                          [ ABORT DETAIL VIEW ]
                        </button>
                      </div>
                    ) : (
                      <button onClick={() => setExpandedId(comp.id)} className="w-full cursor-pointer py-5 font-bold uppercase tracking-[0.2em] text-xs border transition-all duration-300" style={{ color: palette.greige, borderColor: palette.graphite, backgroundColor: 'transparent' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = palette.greige; e.currentTarget.style.color = palette.onyx; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = palette.greige; }}>
                        EXPAND PROTOCOL
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}