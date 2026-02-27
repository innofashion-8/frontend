'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { themeColors } from '@/lib/theme';

export default function EventCatalogPage() {
  const router = useRouter();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // DATA DUMMY SESUAI REQUEST:
  const events = [
    { 
      id: 'evt-seminar', 
      name: 'FUTURE FASHION SEMINAR', 
      type: 'seminar',
      price: 0, 
      quota: null, // null = unlimited
      desc: 'Pelajari tren fashion masa depan, sustainable materials, dan bagaimana teknologi akan mengubah industri pakaian selamanya. Dibawakan oleh pakar industri terkemuka.'
    },
    { 
      id: 'evt-workshop', 
      name: 'DYSTOPIAN STYLING WORKSHOP', 
      type: 'workshop',
      price: 150000, 
      quota: null, 
      desc: 'Workshop interaktif! Bawa pakaian lama mu dan pelajari cara me-rekonstruksinya menjadi mahakarya bergaya cyberpunk dan post-apocalyptic.'
    },
    { 
      id: 'evt-fashionshow', 
      name: 'INNOFASHION 8: THE SHOW', 
      type: 'show',
      price: 0, 
      quota: 50, // Kuota terbatas
      desc: 'Saksikan malam puncak penganugerahan dan runway megah menampilkan karya-karya terbaik dari desainer muda se-Indonesia. Tempat sangat terbatas!'
    },
  ];

  return (
    <div className="py-8">
      <button onClick={() => router.push('/dashboard')} className="mb-8 font-bold text-sm tracking-widest uppercase hover:text-white transition-colors" style={{ color: themeColors.textMuted }}>
        ← BACK TO TERMINAL
      </button>

      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-widest" style={{ color: themeColors.textMain, textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
          EVENTS
        </h1>
        <p className="text-lg font-medium uppercase tracking-widest" style={{ color: themeColors.textMuted }}>
          Expand your vision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((evt) => {
          // LOGIKA LABEL DAN WARNA
          let badgeText = '';
          let badgeColor = '';
          
          if (evt.type === 'seminar') {
            badgeText = 'FREE SEMINAR';
            badgeColor = 'text-green-400 border-green-400';
          } else if (evt.type === 'workshop') {
            badgeText = 'PAID WORKSHOP';
            badgeColor = 'text-yellow-400 border-yellow-400';
          } else {
            badgeText = 'LIMITED FREE SHOW';
            badgeColor = 'text-cyan-400 border-cyan-400';
          }

          return (
            <div key={evt.id} className="border-2 p-6 rounded-3xl transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-2xl" style={{ backgroundColor: themeColors.cardBg, borderColor: themeColors.border }}>
              <div className="flex justify-between items-start mb-6">
                <span className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full border ${badgeColor}`}>
                  {badgeText}
                </span>
                <div className="text-2xl opacity-80">🎟️</div>
              </div>
              
              <h2 className="text-2xl font-black uppercase tracking-widest text-white mb-4 leading-snug">{evt.name}</h2>
              
              {/* TAMPILAN KUOTA */}
              <div className="mb-6 p-4 rounded-xl bg-black/30 border border-white/5">
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: themeColors.textMuted }}>
                      STATUS KUOTA: <span className="text-white ml-2">{evt.quota ? `${evt.quota} SLOTS LEFT` : 'UNLIMITED ACCESS'}</span>
                  </p>
              </div>

              {/* EXPANDABLE DESCRIPTION */}
              <div className="mb-8 flex-grow">
                {expandedId === evt.id ? (
                  <div className="text-sm leading-relaxed" style={{ color: themeColors.textMuted }}>
                    {evt.desc}
                    <button onClick={() => setExpandedId(null)} className="block mt-4 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors" style={{color: themeColors.primary}}>
                      ↑ CLOSE DETAILS
                    </button>
                  </div>
                ) : (
                  <button onClick={() => setExpandedId(evt.id)} className="font-bold uppercase tracking-widest text-sm hover:text-white transition-colors" style={{color: themeColors.primary}}>
                    ↓ SEE MORE DETAILS
                  </button>
                )}
              </div>

              {/* HARGA DAN TOMBOL */}
              <div className="mt-auto pt-6 border-t border-white/10">
                <div className="mb-6 font-black text-3xl tracking-widest" style={{ color: evt.price > 0 ? themeColors.primary : '#4ade80' }}>
                  {evt.price > 0 ? `Rp ${evt.price.toLocaleString('id-ID')}` : 'FREE'}
                </div>
                <button 
                  onClick={() => router.push(`/dashboard/event/${evt.id}`)}
                  className="w-full py-4 rounded-xl font-bold uppercase tracking-widest border-2 hover:bg-white hover:text-black transition-all"
                  style={{ borderColor: themeColors.textMain, color: themeColors.textMain }}
                >
                  SECURE ACCESS ➔
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}