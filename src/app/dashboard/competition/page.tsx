'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { competitionService } from '@/services/competition-service';
import Swal from 'sweetalert2';
import { Competition } from '@/types/competition';
import Beams from '@/components/ui/Beams';

// INJEKSI COLOR PALETTE DYSTOPIAN
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

export default function CompetitionCatalogPage() {
  const router = useRouter();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Record<string, string>>({});

  const { data: competitions, isLoading } = useQuery({
    queryKey: ['competitions'],
    queryFn: competitionService.getCompetitions,
  });

  const groupedCompetitions = useMemo(() => {
    if (!competitions) return [];

    const grouped: Record<string, any> = {};

    competitions.forEach((comp: Competition) => {
      const isSketch = comp.name.toLowerCase().includes('sketch');
      const groupKey = isSketch ? 'sketch' : 'styling';

      if (!grouped[groupKey]) {
        grouped[groupKey] = {
          id: groupKey, 
          name: isSketch ? 'FASHION SKETCH' : 'FASHION STYLING',
          description: comp.description,
          price: Number(comp.registration_fee || 0),
          hasAdvanced: isSketch, 
          slugs: {
            INTERMEDIATE: comp.slug,
            ADVANCED: comp.slug 
          },
          originalSlug: comp.slug
        };
      }

      const cat = comp.category?.toUpperCase();
      if (cat === 'ADVANCED') {
        grouped[groupKey].slugs.ADVANCED = comp.slug;
      } else if (cat === 'INTERMEDIATE') {
        grouped[groupKey].slugs.INTERMEDIATE = comp.slug;
      }
    });

    return Object.values(grouped);
  }, [competitions]);

  const handleSelectCategory = (groupId: string, category: string) => {
    setSelectedCategory(prev => ({ ...prev, [groupId]: category }));
  };

  // 🔥 FIX TOTAL: FUNGSI REGISTER YANG ANTI-STUCK 🔥
  const handleRegisterClick = (group: any) => {
    // 1. CEK TIER: Kalau wajib milih Tier tapi belum milih
    if (group.hasAdvanced && !selectedCategory[group.id]) {
      Swal.fire({
        icon: 'warning',
        title: 'TIER NOT SELECTED',
        text: 'Please select your Tier (INT / ADV) to proceed.',
        background: palette.onyx,
        color: palette.stucco,
        confirmButtonColor: palette.walnut,
        confirmButtonText: 'ACKNOWLEDGE',
        customClass: {
          popup: 'border border-[#7b787a] rounded-none', // Fix styling border tanpa querySelector
          title: 'font-black tracking-[0.2em] uppercase text-xl',
          confirmButton: 'font-bold tracking-widest uppercase rounded-none px-8 py-3'
        }
      });
      return; // Stop di sini
    }
    
    // 2. AMBIL SLUG
    const cat = group.hasAdvanced ? selectedCategory[group.id] : 'INTERMEDIATE';
    const slugToUse = group.slugs[cat] || group.originalSlug;

    // 3. CEK SLUG: Jaga-jaga kalau data dari backend error/kosong biar gak stuck
    if (!slugToUse || slugToUse === 'undefined') {
       Swal.fire({
        icon: 'error',
        title: 'SYSTEM ERROR',
        text: 'Protocol data is missing or corrupted. Please contact administrator.',
        background: palette.onyx,
        color: palette.stucco,
        confirmButtonColor: '#ef4444',
        customClass: {
          popup: 'border border-red-500 rounded-none',
        }
      });
      return;
    }

    // 4. LANJUT: Kalau semua aman, gas pindah halaman!
    router.push(`/dashboard/competition/${slugToUse}?category=${cat}`);
  };

  if (isLoading) {
    return <div className="min-h-[60vh] flex items-center justify-center font-bold tracking-[0.3em] uppercase animate-pulse" style={{ color: palette.ash }}>ESTABLISHING CONNECTION...</div>;
  }

  return (
    <div className="relative py-12 min-h-screen bg-[#0a0a0a]">
      
      {/* 🔥 REACTBITS BEAMS BACKGROUND 🔥 */}
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

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <button onClick={() => router.push('/dashboard')} className="mb-12 font-bold text-xs tracking-[0.3em] uppercase transition-colors flex items-center gap-3 hover:text-white" style={{ color: palette.ash }}>
          <span className="w-8 h-[1px] block transition-all" style={{ backgroundColor: palette.ash }}></span> RETURN TO TERMINAL
        </button>

        <div className="mb-16">
          <p className="text-xs font-bold tracking-[0.3em] mb-4" style={{ color: palette.greige }}>[ PENDAFTARAN LOMBA ]</p>
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-widest" style={{ color: palette.stucco }}>
            COMPETITIONS
          </h1>
          <p className="text-lg font-medium tracking-widest max-w-2xl leading-relaxed" style={{ color: palette.ash }}>
            Tunjukkan bakat terbaikmu dan bersainglah di panggung megah Innofashion Show 8.
          </p>
        </div>

        {groupedCompetitions.length === 0 ? (
          <div className="p-12 border text-center" style={{ backgroundColor: palette.onyx, borderColor: palette.graphite }}>
            <p className="font-bold tracking-[0.3em] uppercase" style={{ color: palette.ash }}>SYSTEM NOTICE: NO PROTOCOLS FOUND.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {groupedCompetitions.map((group: any, idx: number) => {
              const isOthersExpanded = expandedId !== null && expandedId !== group.id;

              return (
                <div 
                  key={group.id} 
                  className={`group relative border p-8 md:p-10 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] 
                    ${isOthersExpanded ? 'opacity-30 scale-[0.97] blur-[2px] grayscale pointer-events-none' : 'hover:-translate-y-2'}`} 
                  style={{ 
                    backgroundColor: palette.onyx, 
                    borderColor: palette.graphite,
                    boxShadow: isOthersExpanded ? 'none' : '0 10px 30px -10px rgba(0,0,0,0.5)'
                  }}
                  onMouseEnter={(e) => { if(!isOthersExpanded) e.currentTarget.style.boxShadow = `0 20px 40px -15px ${palette.walnut}60` }}
                  onMouseLeave={(e) => { if(!isOthersExpanded) e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)' }}
                >
                  
                  <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none transition-opacity duration-700 group-hover:opacity-10">
                    <span className="text-8xl font-black italic" style={{ color: palette.stucco }}>0{idx + 1}</span>
                  </div>

                  <div className="mb-10">
                    <h2 className="text-3xl font-black uppercase tracking-widest mb-2" style={{ color: palette.stucco }}>{group.name}</h2>
                    <div className="text-xs font-bold tracking-[0.2em]" style={{ color: palette.ash }}>
                      STATUS: <span style={{ color: palette.greige }}>ACTIVE_</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-end mb-10 pb-6 border-b" style={{ borderColor: palette.graphite }}>
                      <div>
                        <p className="text-[10px] tracking-[0.2em] mb-2 uppercase" style={{ color: palette.ash }}>REGISTRATION FEE</p>
                        <div className="font-black text-2xl tracking-widest" style={{ color: palette.stucco }}>
                          Rp {group.price.toLocaleString('id-ID')}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] tracking-[0.2em] mb-2 uppercase" style={{ color: palette.ash }}>TIER ACCESS</p>
                        <div className="text-xs font-bold uppercase tracking-widest" style={{ color: palette.greige }}>
                            {group.hasAdvanced ? 'INT / ADV' : 'INTERMEDIATE'}
                        </div>
                      </div>
                  </div>

                  <div className="mb-10 grid grid-cols-3 gap-4 border p-4" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
                    <div className="text-center">
                      <span className="block text-2xl font-black" style={{ color: palette.stucco }}>14</span>
                      <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: palette.ash }}>DAYS</span>
                    </div>
                    <div className="text-center border-x" style={{ borderColor: palette.graphite }}>
                      <span className="block text-2xl font-black" style={{ color: palette.stucco }}>08</span>
                      <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: palette.ash }}>HRS</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-2xl font-black" style={{ color: palette.stucco }}>45</span>
                      <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: palette.ash }}>MIN</span>
                    </div>
                  </div>

                  <div className="flex-grow flex flex-col justify-end">
                    {expandedId === group.id ? (
                      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                        <p className="text-sm leading-relaxed mb-8" style={{ color: palette.ash }}>
                          {group.description || 'Prepare your futuristic concept. Originality and innovation are paramount.'}
                        </p>
                        
                        {group.hasAdvanced && (
                            <div className="mb-8">
                                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: palette.greige }}>
                                    SELECT TIER:
                                </label>
                                <div className="flex gap-4 mb-6">
                                    <button 
                                        onClick={() => handleSelectCategory(group.id, 'INTERMEDIATE')}
                                        className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest border transition-all duration-300`}
                                        style={{
                                          backgroundColor: selectedCategory[group.id] === 'INTERMEDIATE' ? palette.greige : 'transparent',
                                          color: selectedCategory[group.id] === 'INTERMEDIATE' ? palette.onyx : palette.ash,
                                          borderColor: selectedCategory[group.id] === 'INTERMEDIATE' ? palette.greige : palette.graphite
                                        }}
                                    >
                                        INT
                                    </button>
                                    <button 
                                        onClick={() => handleSelectCategory(group.id, 'ADVANCED')}
                                        className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest border transition-all duration-300`}
                                        style={{
                                          backgroundColor: selectedCategory[group.id] === 'ADVANCED' ? palette.greige : 'transparent',
                                          color: selectedCategory[group.id] === 'ADVANCED' ? palette.onyx : palette.ash,
                                          borderColor: selectedCategory[group.id] === 'ADVANCED' ? palette.greige : palette.graphite
                                        }}
                                    >
                                        ADV
                                    </button>
                                </div>
                                
                                <div className="p-4 border-l-2" style={{ borderColor: palette.walnut, backgroundColor: palette.obsidian }}>
                                    <p className="text-[11px] font-medium mb-2 leading-relaxed" style={{ color: palette.ash }}>
                                        <span className="font-bold tracking-widest uppercase" style={{ color: palette.stucco }}>INT:</span> High School level (Grade 10-12).
                                    </p>
                                    <p className="text-[11px] font-medium leading-relaxed" style={{ color: palette.ash }}>
                                        <span className="font-bold tracking-widest uppercase" style={{ color: palette.stucco }}>ADV:</span> University level or equivalent.
                                    </p>
                                </div>
                            </div>
                        )}

                        <button 
                          onClick={() => handleRegisterClick(group)}
                          className="w-full py-5 font-black uppercase tracking-[0.2em] transition-all duration-300 text-sm hover:scale-[1.03]"
                          style={{ backgroundColor: palette.stucco, color: palette.onyx, boxShadow: `0 0 15px ${palette.greige}40` }}
                        >
                          INITIATE REGISTRATION
                        </button>

                        <button onClick={() => setExpandedId(null)} className="block w-full text-center mt-6 font-bold uppercase tracking-widest text-[10px] transition-colors" style={{ color: palette.gravel }}>
                          [ ABORT DETAIL VIEW ]
                        </button>
                      </div>
                    ) : (
                      <button onClick={() => setExpandedId(group.id)} className="w-full py-5 font-bold uppercase tracking-[0.2em] text-xs border transition-all duration-300" style={{ color: palette.greige, borderColor: palette.graphite, backgroundColor: 'transparent' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = palette.greige; e.currentTarget.style.color = palette.onyx; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = palette.greige; }}>
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