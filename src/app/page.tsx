// "use client";

// import React, { useState, useEffect } from 'react';
// import Navbar from '@/components/opening/navbar';
// import IntroVideo from '@/components/opening/introvideo';
// import Competition from '@/components/opening/competition';
// import Footer from '@/components/opening/footer';
// import AboutSection from '@/components/About';
// import Timeline from '@/components/Timeline';
// import ContactPage from '@/components/ContactUs';

// export default function Home() {
//   const [showContent, setShowContent] = useState(false);

//   useEffect(() => {
//     // 1. Memaksa halaman ke posisi paling atas saat refresh
//     if ('scrollRestoration' in history) {
//       history.scrollRestoration = 'manual';
//     }
//     window.scrollTo(0, 0);

//     // 2. Timer 7 detik untuk durasi Video Intro sebelum konten muncul
//     const timer = setTimeout(() => {
//       setShowContent(true);
//     }, 7000);

//     // 3. Logika LOCK SCROLL: User tidak bisa scroll selama intro berjalan
//     if (!showContent) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }

//     // Cleanup saat komponen dilepas
//     return () => {
//       clearTimeout(timer);
//       document.body.style.overflow = 'auto';
//     };
//   }, [showContent]);

//   return (
//     <main className="relative min-h-screen bg-[#0a0a0a]">
//       {/* NAVBAR: Muncul otomatis setelah 7 detik. 
//           Menerima props isVisible untuk kontrol animasi 
//       */}
//       <Navbar isVisible={showContent} />
      
//       {/* INTRO VIDEO: Hanya ada di baris pertama halaman (h-screen). 
//           Setelah 7 detik, video akan meredup agar transisi ke bawah lebih halus 
//       */}
//       <IntroVideo isFinished={showContent} />

//       {/* MAIN CONTENT AREA: 
//           Berisi Competition (dengan bg.png Nelson) dan Footer.
//           Muncul dengan efek fade-in setelah 7 detik 
//       */}
//       <div 
//         className={`transition-opacity duration-1000 ease-in-out 
//         ${showContent ? 'opacity-100' : 'opacity-0'}`}
//       >
//         <AboutSection />
//         <Competition />
//         <Timeline />
//         <ContactPage />
//         <Footer />
//       </div>
//     </main>
//   );
// }

"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/opening/navbar';
import IntroVideo from '@/components/opening/introvideo';
import Competition from '@/components/opening/competition';
import Footer from '@/components/opening/footer';
import AboutSection from '@/components/About';
import Timeline from '@/components/Timeline';
import ContactPage from '@/components/ContactUs';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // 1. Memaksa halaman ke posisi paling atas saat refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // 2. Timer 7 detik untuk durasi Video Intro sebelum konten muncul
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 7000);

    // 3. Logika LOCK SCROLL: User tidak bisa scroll selama intro berjalan
    if (!showContent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup saat komponen dilepas
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, [showContent]);

  return (
    <main className="relative min-h-screen bg-[#0a0a0a]">
      {/* NAVBAR */}
      <Navbar isVisible={showContent} />
      
      {/* INTRO VIDEO */}
      <IntroVideo isFinished={showContent} />

      {/* MAIN CONTENT AREA */}
      <div 
        className={`transition-opacity duration-1000 ease-in-out 
        ${showContent ? 'opacity-100' : 'opacity-0'}`}
      >
        <section id="about">
          <AboutSection />
        </section>

        <section id="competitions">
          <Competition />
        </section>

        <section id="timeline">
          <Timeline />
        </section>

        <section id="contact">
          <ContactPage />
        </section>

        <Footer />
      </div>
    </main>
  );
}