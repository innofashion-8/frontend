"use client"; // Error components harus Client Components

import { useEffect } from "react";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Opsional: Log error ke layanan pelaporan
    console.error("Admin Error:", error);
  }, [error]);

  return (
    // 1. Container Utama: Background Limestone
    <div className="min-h-screen w-full bg-[#dcdad9] flex flex-col items-center justify-center p-4 relative overflow-hidden font-creato-body">
      
      {/* Elemen Dekoratif Brutalis (Background Noise/Shape) */}
      {/* Menggunakan warna Ash dan Greige untuk elemen geometris acak di belakang */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#979086] opacity-20 rotate-12 pointer-events-none border-4 border-[#1c1c1b]"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[30vw] h-[60vh] bg-[#B7AC9B] opacity-20 -rotate-6 pointer-events-none border-4 border-[#1c1c1b]"></div>

      {/* 2. Wrapper Utama dengan Efek "Hard Offset Shadow" */}
      <div className="relative z-10 max-w-2xl w-full">
        {/* Layer Belakang (Bayangan Keras Onyx) */}
        <div className="absolute top-3 left-3 w-full h-full bg-[#1c1c1b] -z-10"></div>
        
        {/* Layer Depan (Kartu Utama Stucco) */}
        <div className="bg-[#E2E2DE] border-[6px] border-[#1c1c1b] p-8 md:p-12 flex flex-col items-start">
          
          {/* Header: Tipografi Raksasa */}
          <h1 className="font-creato-title text-7xl md:text-9xl font-black text-[#1c1c1b] leading-none tracking-tighter uppercase mb-2">
            SYSTEM
            <br />
            FAILURE.
          </h1>
          
          {/* Sub-header dengan aksen */}
          <div className="w-full h-2 bg-[#1c1c1b] mb-6"></div>

          {/* Area Pesan Error (Raw Data Look) */}
          {/* Menggunakan warna Mist untuk area 'data mentah' */}
          <div className="w-full bg-[#bebebf] border-4 border-[#1c1c1b] p-4 mb-8 font-mono text-sm text-[#1a1a1a] overflow-auto max-h-48">
            <p className="font-bold mb-2 uppercase">[ERROR_LOG_OUTPUT]:</p>
            <code className="block whitespace-pre-wrap break-words">
              {error.message || "Unknown error occurred during operation."}
            </code>
             {error.digest && (
              <code className="block mt-2 text-xs opacity-70">
                Digest: {error.digest}
              </code>
            )}
          </div>

          {/* Tombol Aksi Brutalis */}
          <button
            onClick={() => reset()}
            className="group relative w-full md:w-auto inline-block focus:outline-none focus:ring"
          >
             {/* Layer Belakang Tombol (Offset Onyx) */}
            <span className="absolute top-2 left-2 w-full h-full bg-[#1c1c1b] group-hover:top-0 group-hover:left-0 transition-all duration-150"></span>
            
             {/* Layer Depan Tombol (Walnut -> Onyx saat hover) */}
             {/* Menggunakan Walnut sebagai warna 'aksi' yang menonjol */}
            <span className="relative block w-full border-4 border-[#1c1c1b] bg-[#6A5D52] py-4 px-8 font-creato-title font-bold uppercase tracking-widest text-[#E2E2DE] group-hover:bg-[#1c1c1b] group-hover:text-[#6A5D52] transition-colors duration-150 text-center">
              REBOOT_SYSTEM (TRY AGAIN)
            </span>
          </button>

        </div>
      </div>
    </div>
  );
}