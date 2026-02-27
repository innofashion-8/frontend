'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { themeColors } from '@/lib/theme';

export default function CompetitionCatalogPage() {
  const router = useRouter();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  // State untuk nyimpen pilihan kategori (contoh: selectedCategory['comp-sketch'] = 'advanced')
  const [selectedCategory, setSelectedCategory] = useState<Record<string, string>>({});

  // DATA DUMMY SESUAI REQUEST:
  const competitions = [
    { 
      id: 'comp-sketch', 
      name: 'FASHION SKETCH', 
      price: 150000, 
      hasAdvanced: true, // Punya 2 kategori
      desc: 'Tuangkan imajinasimu ke atas kertas! Rancang sketsa busana bertema masa depan dengan teknik manual maupun digital. Penilaian mencakup orisinalitas, proporsi, dan kesesuaian tema.'
    },
    { 
      id: 'comp-styling', 
      name: 'FASHION STYLING', 
      price: 100000, 
      hasAdvanced: false, // Cuma Intermediate aja
      desc: 'Tantang kemampuan mix-and-match kamu! Padukan berbagai elemen busana untuk menciptakan satu look yang utuh dan ikonik di atas panggung.'
    },
  ];

  const handleSelectCategory = (compId: string, category: string) => {
    setSelectedCategory(prev => ({ ...prev, [compId]: category }));
  };

  const handleRegisterClick = (compId: string, hasAdvanced: boolean) => {
    // Kalau dia ada pilihan Advanced tapi user belum milih, cegah!
    if (hasAdvanced && !selectedCategory[compId]) {
      alert("Pilih kategori (Intermediate/Advanced) terlebih dahulu!");
      return;
    }

    const category = selectedCategory[compId] || 'intermediate'; // Default intermediate
    router.push(`/dashboard/competition/${compId}?category=${category}`);
  };

  return (
    <div className="py-8">
      <button onClick={() => router.push('/dashboard')} className="mb-8 font-bold text-sm tracking-widest uppercase hover:text-white transition-colors" style={{ color: themeColors.textMuted }}>
        ← BACK TO TERMINAL
      </button>

      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-widest" style={{ color: themeColors.textMain, textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
          COMPETITIONS
        </h1>
        <p className="text-lg font-medium uppercase tracking-widest" style={{ color: themeColors.textMuted }}>
          Choose your battlefield.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {competitions.map((comp) => (
          <div key={comp.id} className="border-2 p-8 rounded-3xl transition-all duration-300 flex flex-col" style={{ backgroundColor: themeColors.cardBg, borderColor: themeColors.border }}>
            
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-black uppercase tracking-widest text-white">{comp.name}</h2>
              <div className="text-4xl">🏆</div>
            </div>
            
            {/* HARGA DAN INFO KATEGORI (DI LUAR EXPAND) */}
            <div className="flex justify-between items-center mb-8 pb-6 border-b border-white/10">
                <div className="font-black text-2xl text-white tracking-widest">
                  Rp {comp.price.toLocaleString('id-ID')}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest" style={{ color: themeColors.textMuted }}>
                    {comp.hasAdvanced ? 'INTERMEDIATE & ADVANCED' : 'INTERMEDIATE ONLY'}
                </div>
            </div>

            {/* COUNTDOWN TIMER DYSTOPIAN */}
            <div className="mb-8 p-4 rounded-xl border flex gap-4 text-center justify-center bg-black/50" style={{ borderColor: themeColors.border }}>
              <div><span className="block text-2xl font-black text-white">14</span><span className="text-[10px] tracking-widest uppercase" style={{color: themeColors.textMuted}}>DAYS</span></div>
              <div className="text-2xl font-black text-white/50 animate-pulse">:</div>
              <div><span className="block text-2xl font-black text-white">08</span><span className="text-[10px] tracking-widest uppercase" style={{color: themeColors.textMuted}}>HRS</span></div>
              <div className="text-2xl font-black text-white/50 animate-pulse">:</div>
              <div><span className="block text-2xl font-black text-white">45</span><span className="text-[10px] tracking-widest uppercase" style={{color: themeColors.textMuted}}>MINS</span></div>
            </div>

            {/* EXPANDABLE AREA (DESKRIPSI, PILIH KATEGORI, DAN TOMBOL) */}
            <div className="flex-grow">
              {expandedId === comp.id ? (
                <div className="animate-in fade-in zoom-in-95 duration-200">
                  <p className="text-sm leading-relaxed mb-6" style={{ color: themeColors.textMuted }}>
                    {comp.desc}
                  </p>
                  
                  {/* SELECTION KATEGORI */}
                  <div className="mb-6">
                      <label className="block text-xs font-bold uppercase tracking-widest mb-3" style={{ color: themeColors.textMain }}>
                          SELECT CATEGORY:
                      </label>
                      <div className="flex gap-3">
                          <button 
                              onClick={() => handleSelectCategory(comp.id, 'intermediate')}
                              className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest border-2 rounded-xl transition-all ${(!comp.hasAdvanced || selectedCategory[comp.id] === 'intermediate') ? 'bg-white text-black border-white' : 'text-gray-500 border-gray-600 hover:border-gray-400'}`}
                          >
                              Intermediate
                          </button>
                          
                          {comp.hasAdvanced && (
                              <button 
                                  onClick={() => handleSelectCategory(comp.id, 'advanced')}
                                  className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest border-2 rounded-xl transition-all ${selectedCategory[comp.id] === 'advanced' ? 'bg-white text-black border-white' : 'text-gray-500 border-gray-600 hover:border-gray-400'}`}
                              >
                                  Advanced
                              </button>
                          )}
                      </div>
                  </div>

                  {/* TOMBOL DAFTAR (HANYA MUNCUL DI DALAM SINI) */}
                  <button 
                    onClick={() => handleRegisterClick(comp.id, comp.hasAdvanced)}
                    className="w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    style={{ backgroundColor: themeColors.primary, color: '#000' }}
                  >
                    DAFTAR BATTLE ➔
                  </button>

                  <button onClick={() => setExpandedId(null)} className="block w-full text-center mt-4 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors" style={{color: themeColors.textMuted}}>
                    ↑ CLOSE DETAILS
                  </button>
                </div>
              ) : (
                <button onClick={() => setExpandedId(comp.id)} className="w-full py-4 font-bold uppercase tracking-widest text-sm border-2 rounded-xl hover:bg-white hover:text-black transition-all" style={{color: themeColors.primary, borderColor: themeColors.primary}}>
                  SEE MORE TO REGISTER
                </button>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}