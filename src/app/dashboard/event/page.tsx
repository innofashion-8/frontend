'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
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

export default function EventCatalogPage() {
  const router = useRouter();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const events = [
    { 
      id: 'evt-seminar', 
      name: 'FUTURE FASHION SEMINAR', 
      type: 'seminar',
      price: 0, 
      quota: null, 
      desc: 'Analyze upcoming trends, sustainable material integration, and technological disruptions in modern attire. A vital data transfer for future designers.'
    },
    { 
      id: 'evt-workshop', 
      name: 'DYSTOPIAN STYLING WORKSHOP', 
      type: 'workshop',
      price: 150000, 
      quota: null, 
      desc: 'Hands-on reconstruction protocol. Bring your old garments and re-engineer them into cyberpunk and post-apocalyptic masterpieces under expert guidance.'
    },
    { 
      id: 'evt-fashionshow', 
      name: 'INNOFASHION 8: THE RUNWAY', 
      type: 'show',
      price: 0, 
      quota: 50, 
      desc: 'The grand exhibition. Witness the convergence of art and dystopian aesthetics on the main runway. Highly restricted access. Secure your slot immediately.'
    },
  ];

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

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <button onClick={() => router.push('/dashboard')} className="mb-12 font-bold text-xs tracking-[0.3em] uppercase transition-colors flex items-center gap-3 hover:text-white" style={{ color: palette.ash }}>
          <span className="w-8 h-[1px] block transition-all" style={{ backgroundColor: palette.ash }}></span> RETURN TO TERMINAL
        </button>

        <div className="mb-16">
          <p className="text-xs font-bold tracking-[0.3em] mb-4 uppercase" style={{ color: palette.greige }}>[ KATALOG EVENT ]</p>
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-widest" style={{ color: palette.stucco }}>
            EVENTS
          </h1>
          <p className="text-lg font-medium tracking-widest max-w-2xl leading-relaxed uppercase" style={{ color: palette.ash }}>
            Ikuti berbagai rangkaian acara seru, workshop inspiratif, dan pameran karya spektakuler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((evt, idx) => {
            let badgeText = '';
            let dotColor = '';
            
            if (evt.type === 'seminar') {
              badgeText = 'OPEN FREQUENCY (FREE)';
              dotColor = palette.ash; 
            } else if (evt.type === 'workshop') {
              badgeText = 'RESTRICTED WORKSHOP';
              dotColor = palette.walnut; 
            } else {
              badgeText = 'EXCLUSIVE EXHIBITION';
              dotColor = palette.stucco; 
            }

            const isOthersExpanded = expandedId !== null && expandedId !== evt.id;

            return (
              <div 
                key={evt.id} 
                className={`group relative border p-8 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] 
                  ${isOthersExpanded ? 'opacity-30 scale-[0.97] blur-[2px] grayscale pointer-events-none' : 'hover:-translate-y-2'}`} 
                style={{ 
                    backgroundColor: palette.onyx, 
                    borderColor: palette.graphite,
                    boxShadow: isOthersExpanded ? 'none' : '0 10px 30px -10px rgba(0,0,0,0.5)'
                }}
                onMouseEnter={(e) => { if(!isOthersExpanded) e.currentTarget.style.boxShadow = `0 20px 40px -15px ${palette.walnut}60` }}
                onMouseLeave={(e) => { if(!isOthersExpanded) e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)' }}
              >
                
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-3 border px-4 py-2" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: dotColor, boxShadow: `0 0 10px ${dotColor}` }}></span>
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em]" style={{ color: palette.stucco }}>
                      {badgeText}
                    </span>
                  </div>
                  <span className="text-sm font-black tracking-widest" style={{ color: palette.ash }}>0{idx + 1}</span>
                </div>
                
                <h2 className="text-2xl font-black uppercase tracking-widest mb-6 leading-tight" style={{ color: palette.stucco }}>{evt.name}</h2>
                
                <div className="mb-8 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[9px] tracking-[0.2em] mb-2 uppercase" style={{ color: palette.ash }}>CLEARANCE FEE</p>
                    <p className="text-lg font-black tracking-widest" style={{ color: evt.price > 0 ? palette.stucco : palette.greige }}>
                      {evt.price > 0 ? `Rp ${evt.price.toLocaleString('id-ID')}` : 'NO CHARGE'}
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px] tracking-[0.2em] mb-2 uppercase" style={{ color: palette.ash }}>CAPACITY</p>
                    <p className="text-sm font-bold tracking-widest mt-1 uppercase" style={{ color: evt.quota ? palette.stucco : palette.ash }}>
                      {evt.quota ? `${evt.quota} SLOTS LEFT` : 'UNLIMITED'}
                    </p>
                  </div>
                </div>

                <div className="flex-grow flex flex-col justify-end">
                  {expandedId === evt.id ? (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                      <p className="text-sm leading-relaxed mb-8" style={{ color: palette.ash }}>
                        {evt.desc}
                      </p>
                      
                      <button 
                        onClick={() => router.push(`/dashboard/event/${evt.id}`)}
                        className="w-full py-5 font-black uppercase tracking-[0.2em] transition-all duration-300 text-sm hover:scale-[1.03]"
                        style={{ backgroundColor: palette.stucco, color: palette.onyx, boxShadow: `0 0 15px ${palette.greige}40` }}
                      >
                        OBTAIN PASS
                      </button>

                      <button onClick={() => setExpandedId(null)} className="block w-full text-center mt-6 font-bold uppercase tracking-widest text-[10px] transition-colors" style={{ color: palette.gravel }}>
                        [ ABORT DETAIL VIEW ]
                      </button>
                    </div>
                  ) : (
                    <button onClick={() => setExpandedId(evt.id)} className="w-full py-5 font-bold uppercase tracking-[0.2em] text-xs border transition-all duration-300" style={{ color: palette.greige, borderColor: palette.graphite, backgroundColor: 'transparent' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = palette.greige; e.currentTarget.style.color = palette.onyx; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = palette.greige; }}>
                      EXPAND PROTOCOL
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}