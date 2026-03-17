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
    <main className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      
      {/* 🔥 1. BACKGROUND FULL PARALLAX 🔥 */}
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

      <div className="relative z-10">
        <Navbar isVisible={showContent} />
        
        {/* Intro Video: Tetap solid black */}
        <div className='bg-[#0a0a0a]'>
          <IntroVideo isFinished={showContent} />
        </div>

        {/* MAIN CONTENT AREA */}
        <div className={`transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          
          {/* ABOUT: Solid Black dengan gradient fade-out ke bawah menjorok keluar (-bottom-40) */}
          <section 
            id="about" 
            className="relative bg-[#0a0a0a] after:content-[''] after:absolute after:-bottom-40 after:left-0 after:w-full after:h-40 after:bg-gradient-to-b after:from-[#0a0a0a] after:to-transparent after:pointer-events-none"
          >
            <AboutSection />
          </section>

          {/* COMPETITIONS: Transparan (Background parallax kelihatan) */}
          {/* Kasih padding atas-bawah biar kontennya gak ketabrak efek gradient dari section sebelahnya */}
          <section id="competitions" className="relative py-20">
            <Competition />
          </section>

          {/* TIMELINE: Solid Black di tengah. Ada gradient masuk dari atas (before) dan keluar ke bawah (after) */}
          <section 
            id="timeline" 
            className="relative bg-[#0a0a0a] 
                       before:content-[''] before:absolute before:-top-40 before:left-0 before:w-full before:h-40 before:bg-gradient-to-b before:from-transparent before:to-[#0a0a0a] before:pointer-events-none 
                       after:content-[''] after:absolute after:-bottom-40 after:left-0 after:w-full after:h-40 after:bg-gradient-to-b after:from-[#0a0a0a] after:to-transparent after:pointer-events-none"
          >
            <Timeline />
          </section>

          {/* CONTACT: Transparan (Background parallax kelihatan) */}
          <section id="contact" className="relative">
            <ContactPage />
          </section>
          
          {/* FOOTER: Solid Black dengan gradient fade-in dari atas menjorok keluar (-top-40) */}
          <div 
            className="relative z-20 bg-[#0a0a0a] before:content-[''] before:absolute before:-top-40 before:left-0 before:w-full before:h-40 before:bg-gradient-to-b before:from-transparent before:to-[#0a0a0a] before:pointer-events-none"
          >
            <Footer />
          </div>
          
        </div>
      </div>

    </main>
  );
}