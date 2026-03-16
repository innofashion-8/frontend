// 'use client';

// import React, { useState, useEffect } from 'react';
// import Navbar from '@/components/opening/navbar';
// import IntroVideo from '@/components/opening/introvideo';
// import Competition from '@/components/opening/competition';
// import Footer from '@/components/opening/footer';
// import AboutSection from '@/components/About';
// import Timeline from '@/components/Timeline';
// import ContactPage from '@/components/ContactUs';

// export default function HomeClient() {
//   const [showContent, setShowContent] = useState(false);

//   useEffect(() => {
//     if ('scrollRestoration' in history) {
//       history.scrollRestoration = 'manual';
//     }
//     window.scrollTo(0, 0);

//     const timer = setTimeout(() => {
//       setShowContent(true);
//     }, 7000);

//     if (!showContent) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }

//     return () => {
//       clearTimeout(timer);
//       document.body.style.overflow = 'auto';
//     };
//   }, [showContent]);

//   return (
//     <main className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
//       <Navbar isVisible={showContent} />
//       <IntroVideo isFinished={showContent} />
//       <div className={`transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
//         <section id="about"><AboutSection /></section>
//         <section id="competitions"><Competition /></section>
//         <section id="timeline"><Timeline /></section>
//         <section id="contact"><ContactPage /></section>
//         <Footer />
//       </div>
//     </main>
//   );
// }

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
          backgroundImage: "url('/assets/BACKGROUNDFULL.png')", // 👈 Pastikan URL ini benar
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundAttachment: 'fixed', // 👈 Kunci dari efek Paralaks mulus!
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="relative z-10">
        <Navbar isVisible={showContent} />
        <IntroVideo isFinished={showContent} />

        {/* MAIN CONTENT AREA */}
        <div className={`transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <section id="about"><AboutSection /></section>
          <section id="competitions"><Competition /></section>
          <section id="timeline"><Timeline /></section>
          <section id="contact"><ContactPage /></section>
          <Footer />
        </div>
      </div>

    </main>
  );
}