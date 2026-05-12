"use client";

import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { QRCodeSVG } from 'qrcode.react';
import { eventService } from '@/services/event-service';
import { adminError } from '@/lib/admin-swal';

interface RotatingQrGeneratorProps {
  eventId: string;
  onTerminate?: () => void;
}

export default function RotatingQrGenerator({ eventId, onTerminate }: RotatingQrGeneratorProps) {
  const [sessionTime, setSessionTime] = useState(600); // 10 minutes
  const [isZoomed, setIsZoomed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Fetch token every 30 seconds to reduce server load
  const { data, isError, error, refetch } = useQuery({
    queryKey: ['rotating-qr', eventId],
    queryFn: () => eventService.getRotatingQr(eventId),
    refetchInterval: 30000,
    retry: 3,
  });

  // Calculate full URL for QR code
  const getQrUrl = (token: string) => {
    // Gunakan env URL jika ada, jika tidak fallback ke origin window (buat testing lokal)
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || (typeof window !== 'undefined' ? window.location.origin : '');
    return `${baseUrl}/dashboard/attendance/verify?token=${token}`;
  };

  useEffect(() => {
    if (isError) {
      adminError({
        title: 'SYSTEM FAILURE',
        text: error?.message || 'Failed to initialize secure connection.',
        confirmButtonText: 'ACKNOWLEDGE',
      });
    }
  }, [isError, error]);

  // ESC key handler untuk close modal
  useEffect(() => {
    if (isZoomed) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isZoomed) {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isZoomed]);

  const handleCloseModal = () => {
    setIsVisible(false);
    setTimeout(() => setIsZoomed(false), 200);
  };

  // Token auto-rotates via useQuery refetchInterval

  useEffect(() => {
    // 10 minutes session countdown
    const sessionInterval = setInterval(() => {
      setSessionTime((prev) => {
        if (prev <= 1) {
          clearInterval(sessionInterval);
          if (onTerminate) onTerminate();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(sessionInterval);
  }, [onTerminate]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-[#E2E2DE] p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-[#1C1C1B] shadow-[8px_8px_0px_#1a1a1a] sm:shadow-[12px_12px_0px_#1a1a1a] flex flex-col items-center">
      <div className="w-full border-b-2 sm:border-b-4 border-[#1C1C1B] pb-3 sm:pb-4 mb-4 sm:mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1C1C1B] uppercase tracking-[0.15em] sm:tracking-[0.2em]">
            ATTENDANCE PROTOCOL
          </h2>
          <p className="text-[#6A5D52] font-bold uppercase tracking-wider sm:tracking-widest mt-1 text-xs sm:text-sm">
            Secure Node Broadcast
          </p>
        </div>
        <div className="text-left sm:text-right">
          <p className="text-[10px] sm:text-xs font-black text-[#979086] tracking-widest uppercase">
            SESSION EXPIRES
          </p>
          <p className="text-sm sm:text-base text-[#1C1C1B] font-black tracking-widest uppercase animate-pulse">
            {formatTime(sessionTime)}
          </p>
        </div>
      </div>

      <div
        className="relative bg-[#E2E2DE] p-2 sm:p-4 border-2 sm:border-4 border-[#494947] shadow-[4px_4px_0px_#6A5D52] sm:shadow-[8px_8px_0px_#6A5D52] mb-4 sm:mb-8 flex justify-center cursor-pointer hover:shadow-[8px_8px_0px_#1C1C1B] sm:hover:shadow-[12px_12px_0px_#1C1C1B] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 ease-out group w-full max-w-full"
        onClick={() => setIsZoomed(true)}
      >
        <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-[#1C1C1B] text-white text-[8px] sm:text-[10px] font-black px-1.5 py-0.5 sm:px-2 sm:py-1 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          CLICK TO ZOOM
        </div>
        {data?.token ? (
          <QRCodeSVG
            value={getQrUrl(data.token)}
            size={400}
            bgColor="#ffffff"
            fgColor="#000000"
            level="L"
            className="p-2 sm:p-4 bg-white w-full h-auto max-w-[280px] sm:max-w-[380px]"
            style={{ width: '100%', height: 'auto' }}
          />
        ) : (
          <div className="w-full max-w-[280px] sm:max-w-[380px] aspect-square flex items-center justify-center p-2 sm:p-4 bg-white">
            <p className="text-[#1C1C1B] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] animate-pulse text-xs sm:text-base">
              ENCRYPTING...
            </p>
          </div>
        )}
      </div>

      {/* ZOOM MODAL */}
      <div
        className={`fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 transition-opacity duration-200 ${isZoomed && isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={handleCloseModal}
      >
        <div
          className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#E2E2DE] border-4 border-[#1C1C1B] shadow-[12px_12px_0px_#1c1c1b] p-6 sm:p-8 md:p-10 transition-all duration-200 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-6 text-4xl font-black text-[#1c1c1b] hover:scale-110 transition-transform cursor-pointer"
            aria-label="Tutup"
          >
            &times;
          </button>

          <div className="w-full flex justify-center items-center border-b-4 border-[#1C1C1B] pb-4 mb-6">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1C1C1B] uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                SCAN NOW
              </h2>
              <p className="text-xs sm:text-sm font-bold text-[#6A5D52] uppercase tracking-wider mt-2">
                Session: {formatTime(sessionTime)}
              </p>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            {data?.token ? (
              <QRCodeSVG
                value={getQrUrl(data.token)}
                size={400}
                bgColor="#ffffff"
                fgColor="#000000"
                level="L"
                className="p-4 sm:p-6 bg-white border-4 border-[#1C1C1B] w-full h-auto max-w-[320px] sm:max-w-[400px] md:max-w-[500px]"
                style={{ width: '100%', height: 'auto' }}
              />
            ) : (
              <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] aspect-square flex items-center justify-center p-4 sm:p-6 bg-white border-4 border-[#1C1C1B]">
                <p className="text-[#1C1C1B] text-base sm:text-xl md:text-2xl font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] animate-pulse">
                  ENCRYPTING...
                </p>
              </div>
            )}
          </div>

          <button
            onClick={handleCloseModal}
            className="w-full cursor-pointer py-3 px-6 font-black uppercase text-[#1c1c1b] bg-white border-[3px] border-[#1c1c1b] hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[4px_4px_0px_#1c1c1b] tracking-wider"
          >
            Close (ESC)
          </button>
        </div>
      </div>
    </div>
  );
}
