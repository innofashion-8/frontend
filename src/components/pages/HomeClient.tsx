'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/opening/navbar';
import IntroVideo from '@/components/opening/introvideo';
import Competition from '@/components/opening/competition';
import Footer from '@/components/opening/footer';
import AboutSection from '@/components/About';
import Timeline from '@/components/Timeline';
import ContactPage from '@/components/ContactUs';

export default function HomeClient() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 7000);

    if (!showContent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, [showContent]);

  return (
    // 🔥 1. HAPUS overflow-x-hidden di sini agar posisi 'sticky' bisa bekerja! 🔥
    <main className="relative min-h-screen bg-[#0a0a0a] overflow-x-clip">
      
      {/* 🔥 2. BACKGROUND FULL PARALLAX (Tetap fixed di belakang) 🔥 */}
      <div 
        className={`fixed inset-0 z-0 w-full h-full pointer-events-none transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: "url('/assets/BACKGROUND FULL.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <Navbar isVisible={showContent} />

      {/* 🔥 3. GRUP OVERLAP (Hanya Video & About yang ada di grup ini) 🔥 */}
      <div className="relative w-full z-10">
        
        {/* Intro Video: Akan lengket (sticky) TAPI HANYA selama grup ini masih di layar */}
        <div className='sticky top-0 h-screen w-full bg-[#0a0a0a] z-0 flex items-center justify-center'>
          <IntroVideo isFinished={showContent} />
        </div>

        {/* About Section: Dibungkus relative z-10 supaya dia bisa meluncur ke atas menindih Video */}
        <div className={`relative z-10 bg-[#0a0a0a] transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <section 
            id="about" 
            className="relative bg-[#0a0a0a] after:content-[''] after:absolute after:-bottom-40 after:left-0 after:w-full after:h-40 after:bg-gradient-to-b after:from-[#0a0a0a] after:to-transparent after:pointer-events-none"
          >
            <AboutSection />
          </section>
        </div>
      </div>

      {/* 🔥 4. SISA KONTEN (Terpisah dari grup overlap supaya parallax kelihatan) 🔥 */}
      <div className={`relative z-10 transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        
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

    </main>
  );
}