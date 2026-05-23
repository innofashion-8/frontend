"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Navbar from "@/components/opening/navbar";
import IntroVideo from "@/components/opening/introvideo";
import Competition from "@/components/opening/competition";
import Footer from "@/components/opening/footer";
import AboutSection from "@/components/About";
import Timeline from "@/components/Timeline";
import ContactPage from "@/components/ContactUs";
import LogoLoop from "@/components/Logoloop";

const sponsorLogos = [
  { src: "/assets/logoloop/Anita’s kitchen.PNG", alt: "Anita's Kitchen" },
  {
    src: "/assets/logoloop/DeMandailing - Logo EPS 2x2m.jpeg",
    alt: "DeMandailing",
  },
  { src: "/assets/logoloop/IMG_0799.JPG", alt: "Partner Logo" },
  { src: "/assets/logoloop/MAKE OVER - LOGO Putih.png", alt: "Make Over" },
  { src: "/assets/logoloop/logo pnp hijau tua-1.png", alt: "PNP" },
];

const renderSponsorItem = (item: any) => {
  return (
    <div className="relative flex items-center justify-center h-24 md:h-36 w-56 md:w-80 rounded-2xl md:rounded-3xl bg-transparent border border-white/[0.06] backdrop-blur-md transition-all duration-500 hover:bg-white/[0.03] hover:border-[#B7AC9B]/40 hover:shadow-[0_0_35px_rgba(183,172,155,0.15),inset_0_1px_1px_rgba(255,255,255,0.05)] hover:scale-[1.03] overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:animate-shimmer pointer-events-none" />
      <img
        src={item.src}
        alt={item.alt || "Sponsor"}
        className="h-12 md:h-20 max-w-[85%] max-h-[75%] w-auto object-contain transition-all duration-500 filter grayscale group-hover:grayscale-0 contrast-[1.1]"
      />
    </div>
  );
};

export default function HomeClient() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    if (!showContent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [showContent]);

  return (
    // 🔥 1. HAPUS overflow-x-hidden di sini agar posisi 'sticky' bisa bekerja! 🔥
    <main className="relative min-h-screen bg-[#0a0a0a] overflow-x-clip">
      {/* 🔥 2. BACKGROUND FULL PARALLAX (Tetap fixed di belakang) 🔥 */}
      <div
        className={`fixed inset-0 z-0 w-full h-full pointer-events-none transition-opacity duration-1000 ease-in-out ${showContent ? "opacity-100" : "opacity-0"}`}
        style={{
          backgroundImage: "url('/assets/BACKGROUND FULL.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      />

      <Navbar isVisible={showContent} />

      {/* 🔥 3. GRUP OVERLAP (Hanya Video & About yang ada di grup ini) 🔥 */}
      <div className="relative w-full z-10">
        {/* Intro Video: Akan lengket (sticky) TAPI HANYA selama grup ini masih di layar */}
        <div className="sticky top-0 h-screen w-full bg-[#0a0a0a] z-0 flex items-center justify-center">
          <IntroVideo isFinished={showContent} />
        </div>

        {/* About Section: Dibungkus relative z-10 supaya dia bisa meluncur ke atas menindih Video */}
        <div
          className={`relative z-10 bg-[#0a0a0a] transition-opacity duration-1000 ease-in-out ${showContent ? "opacity-100" : "opacity-0"}`}
        >
          <section
            id="about"
            className="relative bg-[#0a0a0a] after:content-[''] after:absolute after:-bottom-40 after:left-0 after:w-full after:h-40 after:bg-gradient-to-b after:from-[#0a0a0a] after:to-transparent after:pointer-events-none"
          >
            <AboutSection />
          </section>
        </div>
      </div>
      
      <section className="relative bg-transparent py-24 border-t border-white/5 overflow-hidden no-scrollbar">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-[#B7AC9B]/[0.02] blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-[1500px] mx-auto px-6 mb-16 flex items-center justify-center gap-6">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/5 to-white/15" />
            <h2
              className="text-[11px] md:text-xs font-bold tracking-[0.4em] text-[#B7AC9B] uppercase whitespace-nowrap"
              style={{ fontFamily: "'Creato Display', sans-serif" }}
            >
              COLLABORATIONS & SPONSORS
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-white/5 to-white/15" />
          </div>

          <LogoLoop
            logos={sponsorLogos}
            speed={40}
            logoHeight={144}
            gap={56}
            fadeOut={true}
            fadeOutColor="#0a0a0a"
            scaleOnHover={false}
            renderItem={renderSponsorItem}
            className="no-scrollbar"
          />
        </section>

      {/* 🔥 4. SISA KONTEN (Terpisah dari grup overlap supaya parallax kelihatan) 🔥 */}
      <div
        className={`relative z-10 transition-opacity duration-1000 ease-in-out ${showContent ? "opacity-100" : "opacity-0"}`}
      >
        <section id="competitions" className="relative py-20">
          <Competition />
        </section>

        <section
          id="timeline"
          className="relative bg-[#0a0a0a]
                     before:content-[''] before:absolute before:-top-40 before:left-0 before:w-full before:h-40 before:bg-gradient-to-b before:from-transparent before:to-[#0a0a0a] before:pointer-events-none 
                     after:content-[''] after:absolute after:-bottom-40 after:left-0 after:w-full after:h-40 after:bg-gradient-to-b after:from-[#0a0a0a] after:to-transparent after:pointer-events-none"
        >
          <Timeline />
        </section>

        <section id="contact" className="relative">
          <ContactPage />
        </section>

        <div className="relative z-20 bg-[#0a0a0a] before:content-[''] before:absolute before:-top-40 before:left-0 before:w-full before:h-40 before:bg-gradient-to-b before:from-transparent before:to-[#0a0a0a] before:pointer-events-none">
          <Footer />
        </div>
      </div>

      <Link
        href="/login?next=/dashboard"
        className={`fixed bottom-5 right-4 z-40 group flex items-center gap-3 rounded-full border border-white/20 bg-white/95 px-5 py-3 text-black shadow-[0_16px_40px_rgba(0,0,0,0.55)] transition-all duration-500 hover:-translate-y-1 hover:bg-white sm:bottom-8 sm:right-8 sm:px-6 sm:py-4 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`}
        aria-label="Register now"
      >
        <span className="flex flex-col leading-none">
          <span className="text-[10px] font-black uppercase tracking-[0.18em] text-black/55">Start Here</span>
          <span className="whitespace-nowrap text-sm font-black italic uppercase tracking-[0.06em] text-black sm:text-base">
            Register Now
          </span>
        </span>
        <span className="text-lg font-black transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
      </Link>

    </main>
  );
}

