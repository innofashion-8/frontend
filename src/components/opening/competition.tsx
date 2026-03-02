"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Competition = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleGroupRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<(HTMLDivElement | null)[]>([]);
  const dust1Ref = useRef<HTMLImageElement>(null);
  const dust2Ref = useRef<HTMLImageElement>(null);
  const dust3Ref = useRef<HTMLImageElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const buttons = [
    { id: 'briefing', label: 'Briefing Lomba', icon: '/photo/briefing-lomba.png', bg: '/photo/board-transparant.png' },
    { id: 'regis', label: 'Pendaftaran Lomba', icon: '/photo/pendaftaran-lomba.png', bg: '/photo/board-transparant.png' },
    { id: 'submit', label: 'Pengumpulan Karya', icon: '/photo/pengumpulan-karya.png', bg: '/photo/board-transparant.png' },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // Sembunyikan elemen dulu secara instan lewat GSAP
      gsap.set([titleGroupRef.current, buttonsRef.current], { opacity: 0, y: 50 });

      // --- 1. Fade In + Slide Up Judul ---
      gsap.to(titleGroupRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%', // Kita naikkan pemicunya agar lebih sensitif
          toggleActions: 'play none none reverse',
        },
      });

      // --- 2. Fade In + Stagger Tombol ---
      const btnElements = buttonsRef.current.filter(el => el !== null);
      gsap.to(btnElements, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      // --- 3. Parallax Debu ---
      if (dust1Ref.current) gsap.to(dust1Ref.current, { yPercent: -15, ease: 'none', scrollTrigger: { trigger: sectionRef.current, scrub: 1 } });
      if (dust2Ref.current) gsap.to(dust2Ref.current, { yPercent: -25, ease: 'none', scrollTrigger: { trigger: sectionRef.current, scrub: 1.5 } });
      if (dust3Ref.current) gsap.to(dust3Ref.current, { yPercent: 10, ease: 'none', scrollTrigger: { trigger: sectionRef.current, scrub: 2 } });

    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <section ref={sectionRef} id="competitions" className="relative min-h-screen w-full bg-transparent overflow-hidden flex items-center justify-center py-10 lg:py-20">
      
      {/* LAYER 0: BACKGROUND UTAMA */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay agar konten lebih kontras */}
        <img src="/photo/bg.png" alt="" className="w-full h-full object-cover opacity-100" />
      </div>

      {/* LAYER 1: DEBU PARALLAX */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <img ref={dust1Ref} src="/photo/dust-abu.png" className="absolute -bottom-[5%] -left-[10%] lg:-bottom-[3%] lg:-left-[3%] w-[40%] lg:w-[22%] opacity-100 rotate-[-12deg]" alt="" />
        <img ref={dust2Ref} src="/photo/dust-abu.png" className="absolute -bottom-[10%] -right-[5%] lg:-right-[0%] w-[40%] lg:w-[20%] opacity-100 rotate-[270deg]" alt="" />
        <img ref={dust3Ref} src="/photo/dust-kuning.png" className="absolute top-[0%] lg:top-[-3%] left-[10%] lg:left-[22%] w-[80%] lg:w-[65%] opacity-100 blur-xl lg:blur-none" alt="" />
      </div>

      {/* LAYER 2: KONTEN UTAMA */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:grid lg:grid-cols-2 items-center lg:items-center gap-10 md:gap-12 lg:gap-8min-h-[75vh] lg:min-h-[85vh]">
  
{/* SISI KIRI: JUDUL */}
<div ref={titleGroupRef} className="w-full flex justify-center lg:justify-start -mt-5 md:-mt-10 lg:-mt-16">
  {/* Gunakan flex-col dengan gap responsif untuk mengatur jarak COMPE dan TITION */}
  <div className="flex flex-col items-center lg:items-start 
    gap-4 md:gap-6 lg:gap-8
    w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[550px]">
    
    {/* COMPE */}
    <div className="w-full">
      <img src="/photo/compe.png" alt="COMPE" className="w-full h-auto drop-shadow-2xl" />
    </div>
    
    {/* TITION */}
    <div className="w-[85%] lg:w-[90%] ml-auto lg:ml-20 -mt-[10%] md:-mt-[12%] lg:-mt-[15%]">
      <img 
        src="/photo/tition.png" 
        alt="TITION"
        className="w-full h-auto drop-shadow-2xl" 
      />
    </div>
  </div>
</div>
{/* SISI KANAN: TOMBOL */}
<div className="w-full flex flex-col items-center lg:items-end gap-4 md:gap-6 lg:gap-8 lg:mt-[-10%]">
  {buttons.map((btn, idx) => (
    <div 
      key={btn.id}
      ref={el => { buttonsRef.current[idx] = el }}
      onMouseEnter={handleMouseEnter} // Tambahkan ini
      onMouseLeave={handleMouseLeave} // Tambahkan ini
      className="relative group cursor-pointer w-full max-w-[280px] md:max-w-[400px] lg:max-w-[500px] transition-transform duration-500 hover:scale-105"
    >
      {/* 1. Board Frame (Dasar) */}
      <div className="relative z-0">
        <img 
          src={btn.bg} 
          className="w-full h-auto brightness-110 group-hover:brightness-125 transition-all" 
          alt="Board" 
        />
      </div>
      
      {/* 2. Container Teks (Lapisan Atas) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none px-4">
        {/* Menggunakan Teks Asli agar Tajam dan Terpusat Otomatis */}
        <span className="text-white font-bold text-sm sm:text-base md:text-xl lg:text-2xl italic uppercase tracking-wider drop-shadow-md text-center leading-tight">
          {btn.label}
        </span>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default Competition;