"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Competition = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleGroupRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<(HTMLDivElement | null)[]>([]);
  const shimmersRef = useRef<(HTMLDivElement | null)[]>([]);
  const dust1Ref = useRef<HTMLImageElement>(null);
  const dust2Ref = useRef<HTMLImageElement>(null);
  const dust3Ref = useRef<HTMLImageElement>(null);

  const buttons = [
    { id: 'briefing', label: 'Briefing Lomba' },
    { id: 'regis', label: 'Pendaftaran Lomba' },
    { id: 'submit', label: 'Pengumpulan Karya' },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (!sectionRef.current || !titleGroupRef.current) return;

      const titleImages = gsap.utils.toArray('.title-img', titleGroupRef.current);
      const btnElements = buttonsRef.current.filter((el): el is HTMLDivElement => el !== null);
      const shimmerElements = shimmersRef.current.filter((el): el is HTMLDivElement => el !== null);

      // --- 1. ANIMASI DEBU ---
      gsap.to(dust1Ref.current, { y: -30, x: 10, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to(dust2Ref.current, { y: 30, x: -15, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 });
      gsap.to(dust3Ref.current, { y: -20, scale: 1.05, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5 });

      // --- 2. ANIMASI JUDUL — reset & play ulang setiap kali masuk/keluar ---
      const titleTween = gsap.fromTo(titleImages,
        { opacity: 0, x: -50, scale: 0.95 },
        {
          opacity: 1, x: 0, scale: 1,
          duration: 1.5,
          stagger: 0.3,
          ease: 'power3.out',
          paused: true, // kita kontrol manual via ScrollTrigger callbacks
        }
      );

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'top 10%', // batas atas — kalau section naik melewati ini, anggap "keluar"
        onEnter: () => {
          // Scroll turun masuk → reset ke awal lalu play
          titleTween.restart();
        },
        onLeaveBack: () => {
          // Scroll naik keluar → langsung balik ke state awal (hilang)
          titleTween.pause(0);
        },
      });

      // --- 3. Set posisi awal kartu & shimmer ---
      gsap.set(btnElements, { opacity: 0 });
      gsap.set(shimmerElements, { xPercent: -150 });

      // --- 4. MASTER TIMELINE SCRUB ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: 'top top',
          end: '+=300%',
          scrub: 0.8,
        }
      });

      const SHIMMER_DUR = 0.5;
      const FADE_DUR = 0.25;
      const SLOT = 1;
      const GAP = 0.2;

      btnElements.forEach((btn, i) => {
        const shimmer = shimmerElements[i];
        const startAt = 0.3 + i * (SLOT + GAP);

        tl.fromTo(btn,
          { opacity: 0 },
          { opacity: 1, duration: FADE_DUR, ease: 'none' },
          startAt
        );

        tl.fromTo(shimmer,
          { xPercent: -150 },
          { xPercent: 150, duration: SHIMMER_DUR, ease: 'none' },
          startAt
        );
      });

      tl.to({}, { duration: 0.8 });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const dustMaskStyle: React.CSSProperties = {
    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
  };

  return (
    <section ref={sectionRef} id="competitions" className="relative h-screen w-full flex items-center justify-center overflow">

      {/* LAYER 1: DEBU FLOATING */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <img ref={dust1Ref} src="/photo/dust-abu.png"
          className="absolute bottom-0 lg:-bottom-[13%] -left-[15%] lg:-bottom-[3%] lg:-left-[8%] w-[40%] lg:w-[22%] rotate-10 opacity-100 object-contain"
          style={dustMaskStyle} alt="" />
        <img ref={dust2Ref} src="/photo/dust-abu.png"
          className="absolute bottom-0 lg:-bottom-[17%] -right-[15%] lg:-right-[8%] w-[40%] lg:w-[22%] opacity-100 -scale-x-100 -rotate-10"
          style={dustMaskStyle} alt="" />
        <img ref={dust3Ref} src="/photo/dust-kuning.png"
          className="absolute top-[20%] md:top-[12%] lg:top-[-3%] left-[10%] lg:left-[22%] w-[80%] lg:w-[65%] opacity-100 lg:blur-none"
          style={dustMaskStyle} alt="" />
      </div>

      {/* LAYER 2: KONTEN UTAMA */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:grid lg:grid-cols-2 items-center justify-center gap-10 md:gap-16 lg:gap-8">

        {/* SISI KIRI: JUDUL */}
        <div ref={titleGroupRef} className="w-full flex justify-center lg:justify-start -mt-5 md:-mt-10 lg:-mt-16">
          <div className="flex flex-col items-center lg:items-start gap-4 md:gap-6 lg:gap-8 w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[550px]">
            <div className="w-full overflow-hidden py-2">
              <img src="/photo/compe.png" alt="COMPE" className="title-img w-full h-auto drop-shadow-2xl opacity-0" />
            </div>
            <div className="w-[85%] lg:w-[90%] ml-auto lg:ml-20 -mt-[10%] md:-mt-[12%] lg:-mt-[15%] overflow-hidden py-2">
              <img src="/photo/tition.png" alt="TITION" className="title-img w-full h-auto drop-shadow-2xl opacity-0" />
            </div>
          </div>
        </div>

        {/* SISI KANAN: TOMBOL */}
        <div className="w-full flex flex-col items-center lg:items-end gap-5 md:gap-7 lg:gap-9 lg:mt-[-10%] perspective-[1200px]">
          {buttons.map((btn, idx) => (
            <div
              key={btn.id}
              ref={el => { buttonsRef.current[idx] = el }}
              className="relative group cursor-pointer w-full max-w-[280px] md:max-w-[400px] lg:max-w-[500px] rounded-[2rem] overflow-hidden transition-all duration-300 hover:brightness-110"
              style={{
                background: 'linear-gradient(180deg, rgba(85,85,85,0.7) 0%, rgba(30,30,30,0.9) 100%)',
                boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3), 0 10px 30px rgba(0,0,0,0.6)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="relative z-10 py-5 sm:py-6 flex items-center justify-center pointer-events-none px-4">
                <span className="text-white font-extrabold text-sm sm:text-base md:text-xl lg:text-2xl italic uppercase tracking-[0.08em] drop-shadow-lg text-center leading-none">
                  {btn.label}
                </span>
              </div>

              {/* ✨ SHIMMER REVEAL */}
              <div
                ref={el => { shimmersRef.current[idx] = el }}
                className="absolute top-0 -inset-full w-[150%] h-full z-20 pointer-events-none -skew-x-12"
                style={{
                  background: `linear-gradient(
                    to right,
                    transparent               0%,
                    rgba(255,255,255,0.08)    20%,
                    rgba(255,255,255,0.35)    38%,
                    rgba(255,255,255,0.75)    50%,
                    rgba(255,255,255,0.35)    62%,
                    rgba(255,255,255,0.08)    80%,
                    transparent               100%
                  )`,
                  filter: 'blur(2px)',
                }}
              />

              {/* Shimmer on HOVER */}
              <div
                className="absolute top-0 -inset-full w-[150%] h-full z-20 pointer-events-none transform -skew-x-12 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1500ms] ease-in-out"
                style={{
                  background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competition;