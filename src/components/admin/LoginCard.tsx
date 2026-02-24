"use client";

import React from "react";

interface AdminLoginCardProps {
  onLogin: () => void;
  isLoading?: boolean;
}

export default function LoginCard({ onLogin, isLoading = false }: AdminLoginCardProps) {
  return (
    <div className="w-11/12 max-w-[45rem] card-bubble-glass shadow-[0_0_30px_rgba(0,0,0,0.5)] p-6 md:p-10 flex flex-col items-center space-y-10 z-10 relative">
      
      {/* JUDUL */}
      <h1 className="font-creato-title mix-blend-lighten text-glowing text-white drop-shadow-md font-bold text-2xl md:text-5xl text-center uppercase tracking-wider">
        Admin
        <br />
        <span className="text-xl text-2xl md:text-5xl block text-cyan-100 font-creato-title">Innofashion 2026</span>
      </h1>

      {/* TOMBOL LOGIN */}
      <button
        onClick={onLogin}
        disabled={isLoading}
        className="w-full font-creato-body font-bold text-white btn-login border-2 border-cyan-400 font-semibold drop-shadow-2xl text-lg md:text-2xl rounded-full py-3 md:py-4 text-center disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {isLoading ? (
          "Memproses..."
        ) : (
          <>
            <svg className="w-6 h-6 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 640 640">
                <path d="M564 325.8C564 467.3 467.1 568 324 568C186.8 568 76 457.2 76 320C76 182.8 186.8 72 324 72C390.8 72 447 96.5 490.3 136.9L422.8 201.8C334.5 116.6 170.3 180.6 170.3 320C170.3 406.5 239.4 476.6 324 476.6C422.2 476.6 459 406.2 464.8 369.7L324 369.7L324 284.4L560.1 284.4C562.4 297.1 564 309.3 564 325.8z"/>
            </svg>
            SIGN IN WITH PCU EMAIL
          </>
        )}
      </button>
      
    </div>
  );
}