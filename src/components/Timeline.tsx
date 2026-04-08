'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
const nodes = [
  { date: 'Mar 27, 2026', name: 'Open Registration Sketch' },
  { date: 'Apr 03, 2026', name: 'Open Registration Restyling' },
  { date: 'May 18, 2026', name: 'Seminar: What Makes It Fashion' },
  { date: 'May 22, 2026', name: 'Workshop: Daredevil' },
  { date: 'May 29, 2026', name: 'Workshop: Trinkets' },
  { date: 'Jul 10, 2026', name: 'Close Registration Sketch' },
  { date: 'Jul 12, 2026', name: 'Last Subsmission Sketch' },
  { date: 'Jul 15, 2026', name: 'Penjurian' },
  { date: 'Jul 20, 2026', name: 'Finalist Announcement' },
  { date: 'Jul 30, 2026', name: 'Competition Deadline' },
  { date: 'Jul 31, 2026', name: 'Briefing Restyling' },
  { date: 'TBA',          name: 'Grand Exhibition' },
  { date: 'Aug 13, 2026', name: 'Graduation & Awarding' },
]

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function TimelinePage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressLineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Title Reveal
      gsap.from(titleRef.current, {
        scale: 0.9, opacity: 0, y: 30, filter: 'blur(10px)',
        duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 90%', toggleActions: 'play none none reverse' },
      })

      // 2. HORIZONTAL SCROLL MAGIC
      if (trackRef.current && sectionRef.current && progressLineRef.current) {
        
        const getScrollAmount = () => {
          let trackWidth = trackRef.current ? trackRef.current.scrollWidth : 0;
          return -(trackWidth - window.innerWidth);
        }

        gsap.to(trackRef.current, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            start: "top top",
            end: () => `+=${trackRef.current?.scrollWidth || 3000}`, 
            scrub: 1, 
            invalidateOnRefresh: true
          }
        });

        gsap.to(progressLineRef.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${trackRef.current?.scrollWidth || 3000}`,
            scrub: 1,
            invalidateOnRefresh: true
          }
        });
      }

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-transparent flex flex-col items-center">
      
      {/* ── Dust overlays ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.28, pointerEvents: 'none', maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' }}>
        <Image src="/assets/DUST.png" alt="" fill style={{ objectFit: 'cover' }} unoptimized />
      </div>
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, opacity: 0.15, pointerEvents: 'none', maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' }}>
        <Image src="/assets/DUST-1.png" alt="" fill style={{ objectFit: 'cover' }} unoptimized />
      </div>

      {/* ── "TIME LINE" title (Fixed di atas) ── */}
      <div className="absolute top-[10%] md:top-[8%] w-full max-w-[900px] flex items-center justify-center z-20 pointer-events-none" ref={titleRef}>
        <div style={{ position: 'relative', zIndex: 1, width: 480, maxWidth: '75%' }}>
          <div style={{ position: 'absolute', left: '-15%', top: '50%', transform: 'translate(-20%, -50%)', width: 280, height: 220, opacity: 0.75, pointerEvents: 'none', zIndex: -1 }}>
            <Image src="/assets/DUST-1.png" alt="" className='-scale-x-100' fill style={{ objectFit: 'contain', objectPosition: 'center' }} unoptimized />
          </div>
          <div style={{ position: 'absolute', right: '-15%', top: '50%', transform: 'translate(20%, -50%)', width: 280, height: 220, opacity: 0.75, pointerEvents: 'none', zIndex: -1 }}>
            <Image src="/assets/DUST-1.png" alt="" fill style={{ objectFit: 'contain', objectPosition: 'center' }} unoptimized />
          </div>
          <Image src="/assets/TIME LINE.png" alt="TIME LINE" width={580} height={145} style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1 }} unoptimized />
        </div>
      </div>

      {/* ── HORIZONTAL TRACK ── */}
      <div 
        ref={trackRef} 
        className="absolute top-[12vh] md:top-[18vh] left-0 h-[88vh] md:h-[82vh] flex flex-row items-center w-max z-10 px-[50vw] md:px-[40vw] gap-10 md:gap-16"
      >
        {/* Default Dark Track Line (Background) */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-[#494947]/30 z-0" />
        
        {/* Glowing Scroll Progress Line (Foreground) */}
        <div 
          ref={progressLineRef} 
          className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-[#E2E2DE] z-0 origin-left scale-x-0"
          style={{ boxShadow: '0 0 15px 2px rgba(226,226,222,0.6)' }}
        />

        {/* Nodes */}
        {nodes.map((node, idx) => {
          const isTop = idx % 2 === 0; 
          
          return (
            <div key={idx} className="relative flex flex-col items-center justify-center w-[260px] md:w-[320px] shrink-0">
              
              {/* Central Dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-6 md:h-6 z-10 flex items-center justify-center rounded-full bg-[#E2E2DE] border-4 border-[#1C1C1B] shadow-[0_0_0_2px_rgba(226,226,222,0.3)]" />

              {/* 🔥 REVISI: Garis Vertikal Dipendekin (h-[50px] di Desktop) biar ga nyundul 🔥 */}
              <div className={`absolute left-1/2 w-[2px] bg-[#494947]/60 -translate-x-1/2 ${isTop ? 'bottom-[calc(50%+10px)] h-[40px] md:h-[60px]' : 'top-[calc(50%+10px)] h-[40px] md:h-[60px]'}`} />

              {/* 🔥 REVISI: Jarak Kartu ke Tengah Dideketin (bottom/top 80px di Desktop) 🔥 */}
              <div className={`absolute left-1/2 -translate-x-1/2 w-full ${isTop ? 'bottom-[calc(50%+60px)] md:bottom-[calc(50%+80px)]' : 'top-[calc(50%+60px)] md:top-[calc(50%+80px)]'}`}>
                <div className="group relative p-4 md:p-6 border bg-[#1a1a1a]/60 backdrop-blur-md transition-all duration-500 hover:bg-[#1a1a1a]/90 hover:-translate-y-1" style={{ borderColor: '#494947' }}>
                  
                  {/* Glitchy/Shimmer background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E2E2DE]/5 to-transparent -translate-x-[100%] group-hover:animate-shimmer pointer-events-none" />
                  
                  {/* Index Protocol */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#B7AC9B] group-hover:animate-pulse shadow-[0_0_8px_#B7AC9B]" />
                    <span className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] text-[#B7AC9B] uppercase">PHASE // {idx < 9 ? `0${idx + 1}` : idx + 1}</span>
                  </div>

                  {/* Data */}
                  <h3 className="text-xl md:text-2xl font-black text-[#E2E2DE] tracking-widest uppercase mb-1" style={{ fontFamily: "'Creato Display', sans-serif" }}>
                    {node.date}
                  </h3>
                  <p className="text-xs md:text-sm text-[#979086] font-medium tracking-wider uppercase">
                    {node.name}
                  </p>
                </div>
              </div>

            </div>
          )
        })}
      </div>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </div>
  )
}