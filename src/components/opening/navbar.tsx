"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

interface NavbarProps {
  isVisible: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isVisible }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { id: 'about', label: 'ABOUT US' },
    { id: 'competitions', label: 'COMPETITIONS' },
    { id: 'timeline', label: 'TIMELINE' },
    // { id: 'event', label: 'EVENTS' }, // Buka comment ini kalau section EVENT udah ada di page.tsx
    { id: 'contact', label: 'CONTACT US' },
  ];

  const handleScroll = (id: string) => {
    setIsOpen(false);
    
    // Cek kalau user lagi gak di Home Page
    if (pathname !== '/') {
      // Pindah ke home dulu baru kasih anchor
      router.push(`/#${id}`);
    } else {
      // Kalau udah di home, lgsg scroll smooth
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}
      >
        <div className="w-full flex justify-center py-4 lg:py-6 px-4 bg-transparent">
          <nav className="relative w-full max-w-[1500px] h-16 lg:h-22 flex items-center px-4 lg:px-8">
            <div className="absolute inset-0 bg-black border border-white/10 rounded-full z-0 shadow-2xl"></div>

            <div className="relative z-10 w-full h-full flex items-center justify-between">
              {/* LOGO */}
              <div className="flex justify-start items-center ml-2 lg:ml-6">
                <Link href="/">
                  <img src="/photo/logo.png" alt="LOGO" className="h-7 md:h-12 w-auto object-contain cursor-pointer" />
                </Link>
              </div>

              {/* NAVLINKS DESKTOP */}
              <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleScroll(link.id)}
                    className="text-white font-black italic text-[14px] xl:text-[18px] tracking-tighter hover:text-gray-400 transition-all uppercase whitespace-nowrap"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* BUTTONS DESKTOP - SUDAH BERSIH DARI BENTROKAN */}
              <div className="hidden md:flex items-center space-x-2 mr-2">
                <Link href="/login" className="relative h-10 w-28 lg:h-14 lg:w-34 flex items-center justify-center group transition-transform hover:scale-105">
                  <img src="/photo/register-bg.png" className="absolute inset-0 w-full h-full object-contain" alt="bg" />
                  <span className="relative z-10 text-white font-black italic text-[14px] lg:text-[18px]">REGISTER</span>
                </Link>
                
                <Link href="/login" className="relative h-8 w-28 lg:h-9 lg:w-34 flex items-center justify-center group transition-transform hover:scale-105">
                  <img src="/photo/signin-bg.png" className="absolute inset-0 w-full h-full object-contain" alt="bg" />
                  <span className="relative z-10 text-white font-black italic text-[14px] lg:text-[18px]">SIGN IN</span>
                </Link>
              </div>

              {/* HAMBURGER MENU MOBILE */}
              <button className="lg:hidden text-white mr-4 z-50 relative" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <div className={`fixed inset-0 bg-black z-[40] flex flex-col items-center justify-center transition-all duration-500 lg:hidden
        ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => handleScroll(link.id)} className="text-white font-black italic text-2xl tracking-tighter uppercase">
              {link.label}
            </button>
          ))}
          {/* Tambahan Mobile Login & Register Button */}
          <div className="flex flex-col space-y-4 pt-6 w-full px-12">
             <Link href="/login" onClick={() => setIsOpen(false)} className="text-black bg-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full">
                REGISTER
             </Link>
             <Link href="/login" onClick={() => setIsOpen(false)} className="text-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full">
                SIGN IN
             </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;