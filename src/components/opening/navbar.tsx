"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 7000); 

    if (!showNavbar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, [showNavbar, isOpen]);

  const navLinks = [
    { id: 'about', label: 'ABOUT US' },
    { id: 'timeline', label: 'TIMELINE' },
    { id: 'competitions', label: 'COMPETITIONS' },
    { id: 'event', label: 'EVENTS' },
    { id: 'contact', label: 'CONTACT US' },
    { id: 'profile', label: 'DFT PROFILE' },
  ];

  const handleScroll = (id: string) => {
    setIsOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. BACKGROUND VIDEO */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden bg-black">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/photo/dummyvideo.mp4" type="video/mp4" />
        </video>
        <div className={`absolute inset-0 bg-black/40 transition-opacity duration-1000 z-10 
          ${showNavbar ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* 2. NAVBAR UI */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out 
        ${showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}
      >
        <div className="w-full flex justify-center py-4 lg:py-6 px-4 bg-transparent">
          <nav className="relative w-full max-w-[1500px] h-16 lg:h-22 flex items-center px-4 lg:px-8">
            <div className="absolute inset-0 bg-black border border-white/10 rounded-full z-0 shadow-2xl"></div>

            <div className="relative z-10 w-full h-full flex items-center justify-between">
              {/* LOGO */}
              <div className="flex justify-start items-center ml-2 lg:ml-6">
                <a href="/">
                  <img src="/photo/logo.png" alt="LOGO" className="h-7 md:h-12 w-auto object-contain" />
                </a>
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

              {/* BUTTONS DESKTOP */}
              <div className="hidden md:flex items-center space-x-2 mr-2">
                <a href="#registration" className="relative h-10 w-28 lg:h-14 lg:w-34 flex items-center justify-center group transition-transform hover:scale-105">
                  <img src="/photo/register-bg.png" className="absolute inset-0 w-full h-full object-contain" alt="bg" />
                  <span className="relative z-10 text-white font-black italic text-[14px] lg:text-[18px]">REGISTER</span>
                </a>
                <a href="#login" className="relative h-8 w-28 lg:h-9 lg:w-34 flex items-center justify-center group transition-transform hover:scale-105">
                  <img src="/photo/signin-bg.png" className="absolute inset-0 w-full h-full object-contain" alt="bg" />
                  <span className="relative z-10 text-white font-black italic text-[14px] lg:text-[18px]">SIGN IN</span>
                </a>
              </div>

              {/* MOBILE MENU BUTTON */}
              <button 
                className="lg:hidden text-white mr-4 z-50"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* 3. MOBILE OVERLAY MENU */}
      <div className={`fixed inset-0 bg-black z-[40] flex flex-col items-center justify-center transition-all duration-500 lg:hidden
        ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="text-white font-black italic text-2xl tracking-tighter uppercase"
            >
              {link.label}
            </button>
          ))}
          <div className="flex flex-col space-y-4 pt-10">
            <a href="#registration" className="text-white border border-white px-10 py-3 rounded-full font-black italic uppercase">REGISTER</a>
            <a href="#login" className="text-white font-black italic uppercase text-center">SIGN IN</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;