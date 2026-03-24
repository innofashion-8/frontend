"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation"; // 👈 Tambah ini buat redirect

gsap.registerPlugin(ScrollTrigger);

const Competition = () => {
  const router = useRouter(); // 👈 Inisialisasi router
  const sectionRef = useRef<HTMLElement>(null);
  const titleGroupRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<(HTMLDivElement | null)[]>([]);
  const shimmersRef = useRef<(HTMLDivElement | null)[]>([]);
  const dust1Ref = useRef<HTMLImageElement>(null);
  const dust2Ref = useRef<HTMLImageElement>(null);
  const dust3Ref = useRef<HTMLImageElement>(null);

  // --- STATE UNTUK MENU BRIEFING ---
  // 0 = Tertutup, 1 = Pilih Kategori (Sketch/Restyling), 2 = Pilih Region (National/Intl)
  const [briefingStep, setBriefingStep] = useState(0); 
  const [selectedCategory, setSelectedCategory] = useState("");

  // --- HANDLE ESC KEY ---
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && briefingStep > 0) {
        if (briefingStep === 2) {
          setBriefingStep(1); // Kembali ke step 1
        } else {
          setBriefingStep(0); // Tutup modal
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [briefingStep]);

  const buttons = [
    { id: "briefing", label: "Competition Briefing" },
    { id: "regis", label: "Competition Registration" },
    { id: "submit", label: "Competition Submission" },
  ];

  // --- LOGIC KLIK TOMBOL UTAMA ---
  const handleMainClick = (id: string) => {
    if (id === "briefing") {
      setBriefingStep(1); // Buka menu kategori
    } else if (id === "regis" || id === "submit") {
      router.push("/dashboard"); // Redirect ke dashboard
    }
  };

  // --- LOGIC KLIK DOWNLOAD PDF ---
  const handleDownloadPdf = (region: string) => {
    // Definisi path file PDF (Sesuaikan nama file ini dengan yang ada di folder public/assets/pdf/)
    const pdfPaths: any = {
      sketch: {
        national: "/assets/fashion-sketch-national.pdf",
        international: "/assets/fashion-sketch-international.pdf"
      },
      restyling: {
        national: "/assets/restyling-national.pdf",
        international: "/assets/restyling-international.pdf"
      }
    };

    const fileUrl = pdfPaths[selectedCategory][region];
    window.open(fileUrl, "_blank"); // Buka PDF di tab baru
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (!sectionRef.current || !titleGroupRef.current) return;

      const titleImages = gsap.utils.toArray(".title-img", titleGroupRef.current);
      const btnElements = buttonsRef.current.filter((el): el is HTMLDivElement => el !== null);
      const shimmerElements = shimmersRef.current.filter((el): el is HTMLDivElement => el !== null);

      // --- 1. ANIMASI DEBU ---
      gsap.to(dust1Ref.current, { y: -30, x: 10, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(dust2Ref.current, { y: 30, x: -15, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });
      gsap.to(dust3Ref.current, { y: -20, scale: 1.05, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5 });

      // --- 2. ANIMASI JUDUL ---
      const titleTween = gsap.fromTo(
        titleImages,
        { opacity: 0, x: -50, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 1.5, stagger: 0.3, ease: "power3.out", paused: true }
      );

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 60%",
        end: "top 10%",
        onEnter: () => titleTween.restart(),
        onLeaveBack: () => titleTween.pause(0),
      });

      // --- 3. Set posisi awal kartu & shimmer ---
      gsap.set(btnElements, { opacity: 0 });
      gsap.set(shimmerElements, { xPercent: -150 });

      // --- 4. MASTER TIMELINE SCRUB ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: "top top",
          end: "+=300%",
          scrub: 0.8,
        },
      });

      const SHIMMER_DUR = 0.5;
      const FADE_DUR = 0.25;
      const SLOT = 1;
      const GAP = 0.2;

      btnElements.forEach((btn, i) => {
        const shimmer = shimmerElements[i];
        const startAt = 0.3 + i * (SLOT + GAP);

        tl.fromTo(btn, { opacity: 0 }, { opacity: 1, duration: FADE_DUR, ease: "none" }, startAt);
        tl.fromTo(shimmer, { xPercent: -150 }, { xPercent: 150, duration: SHIMMER_DUR, ease: "none" }, startAt);
      });

      tl.to({}, { duration: 0.8 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const dustMaskStyle: React.CSSProperties = {
    maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
    WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
  };

  return (
    <section ref={sectionRef} id="competitions" className="relative h-screen w-full flex items-center justify-center overflow">
      {/* LAYER 1: DEBU FLOATING */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <img ref={dust1Ref} src="/photo/dust-abu.png" className="absolute bottom-0 lg:-bottom-[13%] -left-[15%] lg:-bottom-[3%] lg:-left-[8%] w-[40%] lg:w-[22%] rotate-10 opacity-100 object-contain" style={dustMaskStyle} alt="" />
        <img ref={dust2Ref} src="/photo/dust-abu.png" className="absolute bottom-0 lg:-bottom-[17%] -right-[15%] lg:-right-[8%] w-[40%] lg:w-[22%] opacity-100 -scale-x-100 -rotate-10" style={dustMaskStyle} alt="" />
        <img ref={dust3Ref} src="/photo/dust-kuning.webp" className="absolute top-[20%] md:top-[12%] lg:top-[-3%] left-[10%] lg:left-[22%] w-[80%] lg:w-[65%] opacity-100 lg:blur-none" style={dustMaskStyle} alt="" />
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

        {/* SISI KANAN: TOMBOL & OVERLAY */}
        <div className="relative w-full flex flex-col items-center lg:items-end gap-5 md:gap-7 lg:gap-9 lg:mt-[-10%] perspective-[1200px]">
          
          {/* MAP TOMBOL UTAMA */}
          {buttons.map((btn, idx) => (
            <div
              key={btn.id}
              ref={(el) => { buttonsRef.current[idx] = el; }}
              onClick={() => handleMainClick(btn.id)} // 👈 Eksekusi Logic Redirect / Buka Modal
              className="relative group cursor-pointer w-full max-w-[280px] md:max-w-[400px] lg:max-w-[500px] rounded-[2rem] overflow-hidden transition-all duration-300 hover:brightness-110"
              style={{
                background: "linear-gradient(180deg, rgba(85,85,85,0.7) 0%, rgba(30,30,30,0.9) 100%)",
                boxShadow: "inset 0 2px 4px rgba(255,255,255,0.3), 0 10px 30px rgba(0,0,0,0.6)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="relative z-10 py-5 sm:py-6 flex items-center justify-center pointer-events-none px-4">
                <span className="text-white font-extrabold text-sm sm:text-base md:text-xl lg:text-2xl italic uppercase tracking-[0.08em] drop-shadow-lg text-center leading-none">
                  {btn.label}
                </span>
              </div>

              {/* ✨ SHIMMER REVEAL */}
              <div
                ref={(el) => { shimmersRef.current[idx] = el; }}
                className="absolute top-0 -inset-full w-[150%] h-full z-20 pointer-events-none -skew-x-12"
                style={{
                  background: `linear-gradient(to right, transparent 0%, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.35) 38%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.35) 62%, rgba(255,255,255,0.08) 80%, transparent 100%)`,
                  filter: "blur(2px)",
                }}
              />

              {/* Shimmer on HOVER */}
              <div
                className="absolute top-0 -inset-full w-[150%] h-full z-20 pointer-events-none transform -skew-x-12 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1500ms] ease-in-out"
                style={{ background: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)" }}
              />
            </div>
          ))}

          {/* 🔥 MODAL OVERLAY BRIEFING 🔥 */}
          <div 
            className={`absolute inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/80 backdrop-blur-lg rounded-[2rem] border border-[#494947] transition-all duration-500 shadow-[0_0_50px_rgba(0,0,0,0.8)]
            ${briefingStep > 0 ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
            onClick={(e) => {
              // Tutup modal kalau klik di background (bukan di konten)
              if (e.target === e.currentTarget) {
                if (briefingStep === 2) {
                  setBriefingStep(1);
                } else {
                  setBriefingStep(0);
                }
              }
            }}
          >
            <h3 className="text-white font-black italic text-xl md:text-2xl tracking-widest mb-2 uppercase drop-shadow-lg" onClick={(e) => e.stopPropagation()}>
              {briefingStep === 1 ? "SELECT CATEGORY" : "SELECT REGION"}
            </h3>

            {/* STEP 1: Pilih Kategori Lomba */}
            {briefingStep === 1 && (
              <div className="flex flex-col items-center gap-4 w-full" onClick={(e) => e.stopPropagation()}>
                <SubButton label="FASHION SKETCH" onClick={() => { setSelectedCategory("sketch"); setBriefingStep(2); }} />
                <SubButton label="RESTYLING" onClick={() => { setSelectedCategory("restyling"); setBriefingStep(2); }} />
                <button 
                  onClick={() => setBriefingStep(0)}
                  className="mt-4 text-[#B7AC9B] font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:text-white transition-colors cursor-pointer"
                >
                  [ CANCEL ]
                </button>
              </div>
            )}

            {/* STEP 2: Pilih Skala (Nasional/Internasional) */}
            {briefingStep === 2 && (
              <div className="flex flex-col items-center gap-4 w-full" onClick={(e) => e.stopPropagation()}>
                <SubButton label="NATIONAL" onClick={() => handleDownloadPdf("national")} />
                <SubButton label="INTERNATIONAL" onClick={() => handleDownloadPdf("international")} />
                <button 
                  onClick={() => setBriefingStep(1)}
                  className="mt-4 text-[#B7AC9B] font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:text-white transition-colors cursor-pointer"
                >
                  [ BACK ]
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

// --- KOMPONEN TOMBOL SUB-MENU ---
function SubButton({ label, onClick }: { label: string, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="relative group cursor-pointer w-[85%] max-w-[400px] rounded-full overflow-hidden transition-all duration-300"
      style={{
        background: "linear-gradient(90deg, rgba(73,73,71,0.4) 0%, rgba(28,28,27,0.8) 100%)",
        border: "1px solid rgba(183,172,155,0.3)",
      }}
    >
      <div className="relative z-10 py-4 flex items-center justify-center">
        <span className="text-white font-extrabold text-sm md:text-lg italic uppercase tracking-[0.1em] drop-shadow-md">
          {label}
        </span>
      </div>
      <div className="absolute inset-0 bg-[#B7AC9B] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
    </div>
  );
}

export default Competition;