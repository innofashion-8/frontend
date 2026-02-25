"use client";

import { signIn } from "next-auth/react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // 👈 Import ini buat baca URL
import Swal from "sweetalert2"; // 👈 Import Swal

export default function LoginCard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const searchParams = useSearchParams(); // 👈 Inisiasi

  // 👇 MUNCULIN ERROR KALAU ADA DI URL
  useEffect(() => {
    const error = searchParams?.get("error");
    if (error) {
      // Bikin isLoggedIn jadi false lagi biar tombol bisa diklik
      setIsLoggedIn(false); 

      // Munculin popup error brutalist
      Swal.fire({
        title: "AKSES DITOLAK!",
        text: "Harap gunakan email @john.petra.ac.id untuk masuk ke area admin.",
        icon: "error",
        confirmButtonColor: "#1c1c1b",
        confirmButtonText: "MENGERTI",
        customClass: {
          popup: "rounded-none border-4 border-[#1c1c1b]",
          title: "font-creato-title font-black uppercase text-[#1c1c1b]",
          confirmButton: "rounded-none font-creato-title font-bold uppercase tracking-widest",
        },
      });
    }
  }, [searchParams]);

  const handleGoogleLogin = async () => {
    setIsLoggedIn(true);
    await signIn("google-admin", { callbackUrl: "/admin/dashboard" });
  };

  return (
    <div className="w-11/12 max-w-[45rem] card-bubble-glass shadow-[0_0_30px_rgba(0,0,0,0.5)] p-6 md:p-10 flex flex-col items-center space-y-10 z-10 relative">
      
      {/* JUDUL */}
      <h1 className="font-creato-title mix-blend-lighten text-glowing text-white drop-shadow-md font-bold text-2xl md:text-5xl text-center uppercase tracking-wider">
        Admin
        <br />
        <span className="text-2xl md:text-5xl block text-cyan-100 font-creato-title">Innofashion 2026</span>
      </h1>

      {/* TOMBOL LOGIN */}
      <button
        onClick={handleGoogleLogin}
        disabled={isLoggedIn}
        className="w-full font-creato-body font-bold text-white btn-login border-2 border-cyan-400 drop-shadow-2xl text-lg md:text-2xl rounded-full py-3 md:py-4 text-center disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {isLoggedIn ? (
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