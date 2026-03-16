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
      
      {/* 🔥 1. BACKGROUND FULL PARALLAX (DARI ATAS SAMPAI BAWAH) 🔥 */}
      <div 
        className={`fixed inset-0 z-0 w-full h-full pointer-events-none transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: "url('/assets/BACKGROUNDFULL.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="relative z-10">
        <Navbar isVisible={showContent} />
        <IntroVideo isFinished={showContent} />

        {/* MAIN CONTENT AREA */}
        <div className={`transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          
          <section id="about" className="relative">
            <AboutSection />
          </section>

          <div className="w-full h-40 bg-gradient-to-b from-transparent via-[#0a0a0a] to-transparent pointer-events-none" />

          <section id="competitions" className="relative">
            <Competition />
          </section>

          <div className="w-full h-40 bg-gradient-to-b from-transparent via-[#0a0a0a] to-transparent pointer-events-none" />

          <section id="timeline" className="relative">
            <Timeline />
          </section>

          <div className="w-full h-40 bg-gradient-to-b from-transparent via-[#0a0a0a] to-transparent pointer-events-none" />

          <section id="contact" className="relative">
            <ContactPage />
          </section>
          
          <div className="relative z-20 bg-[#0a0a0a]">
            <Footer />
          </div>
          
        </div>
      </div>

    </main>
  );
}