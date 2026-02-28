"use client";

import React from 'react';

const Competition = () => {
  const buttons = [
    { id: 'briefing', label: 'Briefing Lomba', icon: '/photo/briefing-lomba.png', bg: '/photo/board-transparant.png' },
    { id: 'regis', label: 'Pendaftaran Lomba', icon: '/photo/pendaftaran-lomba.png', bg: '/photo/board-transparant.png' },
    { id: 'submit', label: 'Pengumpulan Karya', icon: '/photo/pengumpulan-karya.png', bg: '/photo/board-transparant.png' },
  ];

  return (
    <section id="competitions" className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center py-10 lg:py-20">
      
      {/* LAYER 1: BACKGROUND UTAMA */}
      <div className="absolute inset-0 z-0">
        <img src="/photo/bg.png" alt="Main BG" className="w-full h-full object-cover opacity-100" />
      </div>

      {/* LAYER 2: DUST LAYERS (RESPONSIVE) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <img 
          src="/photo/dust-abu.png" 
          className="absolute -bottom-[5%] -left-[10%] lg:-bottom-[3%] lg:-left-[3%] w-[40%] lg:w-[22%] opacity-100 rotate-[-12deg]" 
          alt="Dust Abu Kiri" 
        />

        <img 
          src="/photo/dust-abu.png" 
          className="absolute -bottom-[10%] -right-[5%] lg:-right-[0%] w-[40%] lg:w-[20%] opacity-100 rotate-[270deg]" 
          alt="Dust Abu Kanan" 
        />

        <img 
          src="/photo/dust-kuning.png" 
          className="absolute top-[0%] lg:top-[-3%] left-[10%] lg:left-[22%] w-[80%] lg:w-[65%] opacity-100 blur-xl lg:blur-none" 
          alt="Dust Kuning Layer 1" 
        />
      </div>

      <div className="relative z-20 w-full max-w-[1400px] px-6 lg:px-10 flex flex-col lg:flex-row items-center lg:items-start pt-10 lg:pt-25">
        <div className="relative flex flex-col items-center lg:items-start space-y-2 animate-reveal-left mt-8 lg:mt-12 lg:ml-[-130px] w-full lg:w-auto">        
          <div className="w-[90%] md:w-[700px]">
            <img src="/photo/compe.png" alt="COMPE" className="w-full h-auto drop-shadow-2xl" />
          </div>
          <div className="w-[80%] md:w-[600px] lg:ml-45 -mt-6 md:-mt-16">
            <img src="/photo/tition.png" alt="TITION" className="w-full h-auto drop-shadow-2xl" />
          </div>
        </div>
        
        <div className="flex flex-col items-center lg:items-end w-full lg:w-auto ml-auto mt-16 lg:mt-10">
          
          {/* 1. TOMBOL BRIEFING */}
          <div className="relative group cursor-pointer transition-transform hover:scale-105 duration-300 mb-8 lg:mb-14">
            <img 
              src={buttons[0].bg} 
              className="w-[280px] md:w-[600px] h-auto opacity-100 group-hover:opacity-60 transition-opacity" 
              alt="Briefing BG" 
            />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <img src={buttons[0].icon} className="w-[50%] h-auto object-contain" alt="Briefing Icon" />
            </div>
          </div>

          {/* 2. GRUP TOMBOL PENDAFTARAN & PENGUMPULAN */}
          <div className="flex flex-col space-y-8 lg:space-y-14 items-center lg:items-end w-full">
            {buttons.slice(1).map((btn) => (
              <div key={btn.id} className="relative group cursor-pointer transition-transform hover:scale-105 duration-300">
                <img 
                  src={btn.bg} 
                  className="w-[280px] md:w-[600px] h-auto opacity-100 group-hover:opacity-60 transition-opacity" 
                  alt="Button BG" 
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <img src={btn.icon} className="w-[60%] h-auto object-contain" alt={btn.label} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes revealLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-reveal-left { animation: revealLeft 1.5s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default Competition;