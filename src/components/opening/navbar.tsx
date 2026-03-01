"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isVisible: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isVisible }) => {
  const [isOpen, setIsOpen] = useState(false);

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
      <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}
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
                {/* <a href="#registration" className="relative h-10 w-28 lg:h-14 lg:w-34 flex items-center justify-center group transition-transform hover:scale-105">
                  <img src="/photo/register-bg.png" className="absolute inset-0 w-full h-full object-contain" alt="bg" />
                  <span className="relative z-10 text-white font-black italic text-[14px] lg:text-[18px]">REGISTER</span>
                </a> */}
                <a href="/login" className="relative h-8 w-28 lg:h-9 lg:w-34 flex items-center justify-center group transition-transform hover:scale-105">
                  <img src="/photo/signin-bg.png" className="absolute inset-0 w-full h-full object-contain" alt="bg" />
                  <span className="relative z-10 text-white font-black italic text-[14px] lg:text-[18px]">SIGN IN</span>
                </a>
              </div>

              <button className="lg:hidden text-white mr-4 z-50" onClick={() => setIsOpen(!isOpen)}>
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
        </div>
      </div>
    </>
  );
};

export default Navbar;