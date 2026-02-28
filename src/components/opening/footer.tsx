"use client";

import React from 'react';
import { Instagram, Mail, MessageCircle } from 'lucide-react'; // Ikon cadangan jika diperlukan

const Footer = () => {
  return (
    <footer className="relative w-full bg-black py-8 lg:py-12 border-t border-white/10">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* 1. LOGO INNOFASHION (Menggunakan Asset PNG Nelson) */}
        <div className="flex flex-col items-center md:items-start">
          <img 
            src="/photo/logo.png" 
            alt="INNOFASHION SHOW" 
            className="h-8 md:h-12 w-auto object-contain" 
          />
        </div>

        {/* 2. SOSIAL MEDIA & COPYRIGHT */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          
          {/* DERETAN IKON KLIKBEL */}
          <div className="flex items-center space-x-6">
            {/* TIKTOK */}
            <a href="https://tiktok.com/@username_kamu" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
               <img src="/photo/logo-tiktok.png" className="h-12 md:h-16 w-auto mt-[-20]" alt="TikTok" />
            </a>
            
            {/* INSTAGRAM */}
            <a href="https://instagram.com/username_kamu" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
               <img src="/photo/logo-ig.png" className="h-12 md:h-16 w-auto mt-[-20]" alt="Instagram" />
            </a>

            {/* LINE */}
            <a href="https://line.me/ti/p/@id_kamu" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
               <img src="/photo/logo-line.png" className="h-12 md:h-16 w-auto mt-[-20]" alt="Line" />
            </a>

            {/* EMAIL */}
            <a href="mailto:email@kamu.com" className="hover:scale-110 transition-transform duration-300">
               <img src="/photo/logo-gmail.png" className="h-12 md:h-16 w-auto mt-[-20]" alt="Gmail" />
            </a>
          </div>

        <div className="text-center md:text-right">
            <p className="text-white font-normal text-[10px] md:text-[12px] mt-[-10] uppercase tracking-[0.15em] leading-tight">
            @2026 INNOFASHION SHOW.
            </p>
            <p className="text-white font-normal text-[10px] md:text-[12px] mt-[-2] uppercase tracking-[0.15em] leading-tight">
            All Right Reserved
            </p>
        </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;