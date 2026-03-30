"use client";

import React, { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import Swal from "sweetalert2";
import { fetchClient } from "@/lib/fetch-client";

export default function AttendanceClient() {
  const [manualId, setManualId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [cameraActive, setCameraActive] = useState(true);

  const processCheckIn = async (registrationId: string) => {
    if (isProcessing || !registrationId) return;

    setIsProcessing(true);
    setCameraActive(false); // Pause kamera biar gak ke-scan dobel

    try {
      const res = await fetchClient<any>(`/api/admin/scan/attendance`, {
        method: "POST",
        body: JSON.stringify({ registration_id: registrationId }),
      });

      Swal.fire({
        title: "ACCESS GRANTED",
        text: res.message,
        icon: "success",
        background: "#E2E2DE",
        color: "#1C1C1B",
        confirmButtonColor: "#1C1C1B",
        confirmButtonText: "NEXT SCAN",
        customClass: {
          popup: "rounded-none border-4 border-[#1C1C1B] shadow-[8px_8px_0px_#1C1C1B]",
          title: "font-black font-creato-title tracking-widest uppercase text-2xl",
          confirmButton: "rounded-none font-black uppercase tracking-widest border-[3px] border-[#1C1C1B] shadow-[4px_4px_0px_#1C1C1B] px-6 py-2 hover:bg-white hover:text-[#1C1C1B] transition-all",
        },
      }).then(() => {
        setCameraActive(true);
      });

      setManualId(""); 
    } catch (error: any) {
      Swal.fire({
        title: "ACCESS DENIED",
        text: error.message || "ID tidak valid atau belum diverifikasi.",
        icon: "error",
        background: "#E2E2DE",
        color: "#ef4444",
        confirmButtonColor: "#1C1C1B",
        confirmButtonText: "TUTUP",
        customClass: {
          popup: "rounded-none border-4 border-[#1C1C1B] shadow-[8px_8px_0px_#1C1C1B]",
          title: "font-black font-creato-title tracking-widest uppercase text-2xl text-[#ef4444]",
          confirmButton: "rounded-none font-black uppercase tracking-widest border-[3px] border-[#1C1C1B] shadow-[4px_4px_0px_#1C1C1B] px-6 py-2 hover:bg-[#ef4444] transition-all",
        },
      }).then(() => {
        setCameraActive(true);
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleScan = (detectedCodes: any[]) => {
    if (detectedCodes.length > 0) {
      const scannedText = detectedCodes[0].rawValue;
      processCheckIn(scannedText);
    }
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    processCheckIn(manualId);
  };

  return (
    <div className="relative pb-10">
      
      {/* HEADER BRUTALIST */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black font-creato-title uppercase tracking-tight border-b-4 border-[#1c1c1b] pb-2 text-[#1C1C1B]">
          Attendance Scanner
        </h1>
        <p className="mt-2 text-sm font-bold text-[#6A5D52] uppercase tracking-wider">
          Verify Ticket Protocol / Scan Access Pass
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* KOLOM KIRI: KAMERA SCANNER */}
        <div className="bg-[#E2E2DE] p-6 md:p-8 border-[3px] border-[#1c1c1b] shadow-[6px_6px_0px_#1c1c1b] flex flex-col items-center">
          <h2 className="text-2xl font-black font-creato-title uppercase text-[#1c1c1b] mb-6 border-b-2 border-[#1c1c1b] pb-2 w-full text-center">
            Optical Scanner
          </h2>

          {cameraActive ? (
            <div className="w-full max-w-sm aspect-square relative border-4 border-[#1c1c1b] shadow-[8px_8px_0px_#1c1c1b] bg-black overflow-hidden p-2">
              <Scanner 
                onScan={handleScan} 
                onError={(error: any) => console.log(error?.message || error)}
                components={{
                  audio: false, 
                  onOff: true, 
                  torch: true,
                }as any}
                styles={{
                  container: { width: '100%', height: '100%' },
                }}
              />
              {/* Garis Scan Ala Mesin Fotokopi/Scanner Kasir */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-[#22c55e] animate-[scan_2s_linear_infinite]"></div>
            </div>
          ) : (
            <div className="w-full max-w-sm aspect-square border-4 border-[#1c1c1b] shadow-[8px_8px_0px_#1c1c1b] bg-white flex flex-col items-center justify-center text-center p-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-[#1c1c1b] animate-spin mb-4" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 3a9 9 0 1 0 9 9"></path>
              </svg>
              <p className="text-xl font-black font-creato-title uppercase text-[#1c1c1b]">
                PROCESSING...
              </p>
            </div>
          )}
          
          <div className="mt-6 flex items-center gap-2 px-4 py-2 border-[2px] border-[#1c1c1b] bg-white shadow-[3px_3px_0px_#1c1c1b]">
            <span className={`w-3 h-3 border border-[#1c1c1b] ${cameraActive ? 'bg-green-500 animate-pulse' : 'bg-yellow-400'}`}></span>
            <p className="text-xs font-bold tracking-widest uppercase text-[#1c1c1b]">
              {cameraActive ? 'CAMERA ACTIVE' : 'SYSTEM PAUSED'}
            </p>
          </div>
        </div>

        {/* KOLOM KANAN: MANUAL INPUT */}
        <div className="bg-[#E2E2DE] p-6 md:p-8 border-[3px] border-[#1c1c1b] shadow-[6px_6px_0px_#1c1c1b] flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-2xl font-black font-creato-title uppercase text-[#1c1c1b] mb-4 border-b-2 border-[#1c1c1b] pb-2">
              Manual Override
            </h2>
            <p className="text-sm font-bold text-[#6A5D52]">
              Gunakan terminal ini jika QR Code Access Pass peserta rusak atau tidak terbaca oleh kamera.
            </p>
          </div>

          <form onSubmit={handleManualSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-black text-[#6A5D52] uppercase block mb-2 tracking-wider">
                TICKET ID / UUID
              </label>
              <input
                type="text"
                value={manualId}
                onChange={(e) => setManualId(e.target.value)}
                className="w-full px-4 py-4 border-[3px] border-[#1c1c1b] bg-white font-bold text-[#1c1c1b] placeholder:text-gray-400 placeholder:font-medium focus:outline-none shadow-[4px_4px_0px_#1c1c1b]"
                placeholder="Paste ID Tiket disini..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full py-4 border-[3px] border-[#1c1c1b] bg-[#1c1c1b] text-white font-black uppercase hover:bg-[#6A5D52] hover:border-[#6A5D52] transition-all shadow-[4px_4px_0px_#1c1c1b] cursor-pointer tracking-wider disabled:opacity-50 text-lg"
            >
              {isProcessing ? "VERIFYING..." : "FORCE CHECK-IN"}
            </button>
          </form>
        </div>

      </div>

      {/* Style Animasi Scan */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
      `}} />
    </div>
  );
}