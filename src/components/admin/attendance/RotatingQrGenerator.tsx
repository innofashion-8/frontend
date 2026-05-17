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

// ─── Pre-flight option definitions ────────────────────────────────────────────
const ROTATION_OPTIONS = [
  { label: '30 Seconds', value: 30 },
  { label: '1 Minute', value: 60 },
  { label: '5 Minutes', value: 300 },
  { label: 'Static (Does not change)', value: 43200 },
];

const SESSION_OPTIONS = [
  { label: '10 Minutes', value: 600 },
  { label: '30 Minutes', value: 1800 },
  { label: 'Indefinite (Manual Close)', value: 0 },
];

export default function RotatingQrGenerator({ eventId, onTerminate }: RotatingQrGeneratorProps) {
  // ── Setup / pre-flight state ────────────────────────────────────────────────
  const [setupMode, setSetupMode] = useState(true);
  const [selectedRotation, setSelectedRotation] = useState(30);
  const [selectedSession, setSelectedSession] = useState(600);

  // ── QR / session runtime state ──────────────────────────────────────────────
  const [sessionTime, setSessionTime] = useState(600);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mode, setMode] = useState<'in' | 'out'>('in');

  // ── Fetch rotating token (disabled during setup) ────────────────────────────
  const isStatic = selectedRotation === 43200;

  const { data, isError, error, refetch } = useQuery({
    queryKey: ['rotating-qr', eventId, selectedRotation],
    queryFn: () => eventService.getRotatingQr(eventId, selectedRotation),
    refetchInterval: mode === 'in' && !setupMode
      ? (isStatic ? false : selectedRotation * 1000)
      : false,
    enabled: mode === 'in' && !setupMode,
    retry: 3,
    refetchOnWindowFocus: false,
  });

  // ── URL helpers ─────────────────────────────────────────────────────────────
  const getQrUrl = (token: string) => {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || (typeof window !== 'undefined' ? window.location.origin : '');
    return `${baseUrl}/dashboard/attendance/verify?token=${token}`;
  };

  const getStaticOutUrl = () => {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || (typeof window !== 'undefined' ? window.location.origin : '');
    return `${baseUrl}/dashboard/events/${eventId}/evaluation`;
  };

  // ── Error handler ───────────────────────────────────────────────────────────
  useEffect(() => {
    if (isError && mode === 'in') {
      adminError({
        title: 'SYSTEM FAILURE',
        text: error?.message || 'Failed to initialize secure connection.',
        confirmButtonText: 'ACKNOWLEDGE',
      });
    }
  }, [isError, error, mode]);

  // ── Zoom / ESC modal handler ────────────────────────────────────────────────
  useEffect(() => {
    if (isZoomed) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isZoomed) handleCloseModal();
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

  // ── Session countdown (starts after setup is complete) ──────────────────────
  useEffect(() => {
    if (setupMode) return; // don't start until QR is active

    // Indefinite session — no countdown
    if (selectedSession === 0) return;

    setSessionTime(selectedSession); // reset to chosen value

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
  }, [setupMode, selectedSession, onTerminate]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // ── Handlers ────────────────────────────────────────────────────────────────
  const handleGenerate = () => {
    setSetupMode(false);
  };

  const handleReconfigure = () => {
    setSetupMode(true);
    setSessionTime(selectedSession);
  };

  // ════════════════════════════════════════════════════════════════════════════
  // PRE-FLIGHT SETUP SCREEN
  // ════════════════════════════════════════════════════════════════════════════
  if (setupMode) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-[#E2E2DE] p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-[#1C1C1B] shadow-[8px_8px_0px_#1a1a1a] sm:shadow-[12px_12px_0px_#1a1a1a] flex flex-col items-center">

        {/* Header */}
        <div className="w-full border-b-2 sm:border-b-4 border-[#1C1C1B] pb-3 sm:pb-4 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1C1C1B] uppercase tracking-[0.15em] sm:tracking-[0.2em]">
            QR CODE SETUP
          </h2>
          <p className="text-[#6A5D52] font-bold uppercase tracking-wider mt-1 text-xs sm:text-sm">
            Configure Before Display
          </p>
        </div>

        {/* Dropdown 1 — Rotation Speed */}
        <div className="w-full mb-5">
          <label
            htmlFor="rotation-select"
            className="block text-[10px] sm:text-xs font-black text-[#979086] tracking-widest uppercase mb-2"
          >
            QR Code Rotation Speed
          </label>
          <div className="relative border-2 border-[#1C1C1B] bg-white shadow-[4px_4px_0px_#1C1C1B]">
            <select
              id="rotation-select"
              value={selectedRotation}
              onChange={(e) => setSelectedRotation(Number(e.target.value))}
              className="w-full appearance-none bg-transparent py-3 px-4 font-bold text-[#1C1C1B] text-sm uppercase tracking-wider cursor-pointer focus:outline-none"
            >
              {ROTATION_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {/* Custom caret */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
              <svg className="w-4 h-4 text-[#1C1C1B]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>
          <p className="mt-1.5 text-[10px] text-[#979086] font-bold uppercase tracking-wider">
            {selectedRotation === 43200
              ? 'The QR code will remain the same for the entire session.'
              : `A new QR code will be generated every ${ROTATION_OPTIONS.find(o => o.value === selectedRotation)?.label.toLowerCase()}.`}
          </p>
        </div>

        {/* Dropdown 2 — Session Duration */}
        <div className="w-full mb-8">
          <label
            htmlFor="session-select"
            className="block text-[10px] sm:text-xs font-black text-[#979086] tracking-widest uppercase mb-2"
          >
            Session Duration / Auto-Close
          </label>
          <div className="relative border-2 border-[#1C1C1B] bg-white shadow-[4px_4px_0px_#1C1C1B]">
            <select
              id="session-select"
              value={selectedSession}
              onChange={(e) => setSelectedSession(Number(e.target.value))}
              className="w-full appearance-none bg-transparent py-3 px-4 font-bold text-[#1C1C1B] text-sm uppercase tracking-wider cursor-pointer focus:outline-none"
            >
              {SESSION_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
              <svg className="w-4 h-4 text-[#1C1C1B]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>
          <p className="mt-1.5 text-[10px] text-[#979086] font-bold uppercase tracking-wider">
            {selectedSession === 0
              ? 'The QR screen will stay open until you manually close it.'
              : `The QR screen will automatically close after ${SESSION_OPTIONS.find(o => o.value === selectedSession)?.label.toLowerCase()}.`}
          </p>
        </div>

        {/* Summary strip */}
        <div className="w-full border-2 border-[#1C1C1B] bg-[#1C1C1B] text-[#E2E2DE] p-3 sm:p-4 mb-6 flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-[9px] font-black tracking-widest uppercase text-[#979086]">Rotation</p>
            <p className="text-xs sm:text-sm font-black uppercase tracking-wider mt-0.5">
              {ROTATION_OPTIONS.find(o => o.value === selectedRotation)?.label}
            </p>
          </div>
          <div className="hidden sm:block w-px bg-[#494947]" />
          <div className="text-center sm:text-right">
            <p className="text-[9px] font-black tracking-widest uppercase text-[#979086]">Session</p>
            <p className="text-xs sm:text-sm font-black uppercase tracking-wider mt-0.5">
              {SESSION_OPTIONS.find(o => o.value === selectedSession)?.label}
            </p>
          </div>
        </div>

        {/* Generate button */}
        <button
          type="button"
          onClick={handleGenerate}
          className="w-full py-4 sm:py-5 bg-[#1C1C1B] text-[#E2E2DE] font-black text-base sm:text-lg uppercase tracking-[0.2em] border-2 border-[#1C1C1B] shadow-[6px_6px_0px_#6A5D52] hover:shadow-[2px_2px_0px_#6A5D52] hover:translate-x-1 hover:translate-y-1 transition-all duration-150 cursor-pointer"
        >
          ▶ GENERATE QR
        </button>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════════════════════
  // QR CODE DISPLAY SCREEN
  // ════════════════════════════════════════════════════════════════════════════
  return (
    <div className="w-full max-w-2xl mx-auto bg-[#E2E2DE] p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-[#1C1C1B] shadow-[8px_8px_0px_#1a1a1a] sm:shadow-[12px_12px_0px_#1a1a1a] flex flex-col items-center">

      {/* Header row */}
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
            {selectedSession === 0 ? 'INFINITE' : formatTime(sessionTime)}
          </p>
        </div>
      </div>

      {/* MODE SELECTOR */}
      <div className="w-full flex flex-col sm:flex-row gap-2 mb-6 border-2 border-[#1C1C1B] p-1 bg-[#1C1C1B]">
        <button
          type="button"
          onClick={() => setMode('in')}
          className={`flex-1 py-2 px-3 font-black text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${mode === 'in'
            ? 'bg-[#E2E2DE] text-[#1C1C1B] shadow-[2px_2px_0px_#6A5D52]'
            : 'text-[#E2E2DE] hover:bg-white/10'
            }`}
        >
          REGISTRATION IN (Dynamic)
        </button>
        <button
          type="button"
          onClick={() => setMode('out')}
          className={`flex-1 py-2 px-3 font-black text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer ${mode === 'out'
            ? 'bg-[#E2E2DE] text-[#1C1C1B] shadow-[2px_2px_0px_#6A5D52]'
            : 'text-[#E2E2DE] hover:bg-white/10'
            }`}
        >
          REGISTRATION OUT (Static Link)
        </button>
      </div>

      {/* Rotation info badge */}
      {mode === 'in' && (
        <div className="w-full mb-3 flex justify-between items-center">
          <p className="text-[10px] font-black text-[#979086] tracking-widest uppercase">
            Rotation: {ROTATION_OPTIONS.find(o => o.value === selectedRotation)?.label}
          </p>
          <button
            type="button"
            onClick={handleReconfigure}
            className="text-[10px] font-black text-[#1C1C1B] uppercase tracking-widest border border-[#1C1C1B] px-2 py-0.5 hover:bg-[#1C1C1B] hover:text-[#E2E2DE] transition-all cursor-pointer"
          >
            ← RECONFIGURE
          </button>
        </div>
      )}

      {/* QR Display */}
      <div
        className="relative bg-[#E2E2DE] p-2 sm:p-4 border-2 sm:border-4 border-[#494947] shadow-[4px_4px_0px_#6A5D52] sm:shadow-[8px_8px_0px_#6A5D52] mb-4 sm:mb-8 flex justify-center cursor-pointer hover:shadow-[8px_8px_0px_#1C1C1B] sm:hover:shadow-[12px_12px_0px_#1C1C1B] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 ease-out group w-full max-w-full"
        onClick={() => setIsZoomed(true)}
      >
        <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-[#1C1C1B] text-white text-[8px] sm:text-[10px] font-black px-1.5 py-0.5 sm:px-2 sm:py-1 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          CLICK TO ZOOM
        </div>
        {mode === 'out' ? (
          <QRCodeSVG
            value={getStaticOutUrl()}
            size={400}
            bgColor="#ffffff"
            fgColor="#000000"
            level="L"
            className="p-2 sm:p-4 bg-white w-full h-auto max-w-[280px] sm:max-w-[380px]"
            style={{ width: '100%', height: 'auto' }}
          />
        ) : data?.token ? (
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
                {mode === 'in' ? 'SCAN CHECK-IN' : 'SCAN CHECK-OUT'}
              </h2>
              <p className="text-xs sm:text-sm font-bold text-[#6A5D52] uppercase tracking-wider mt-2">
                {selectedSession === 0 ? 'Session: INFINITE' : `Session: ${formatTime(sessionTime)}`}
              </p>
            </div>
          </div>

          <div className="flex justify-center mb-6">
            {mode === 'out' ? (
              <QRCodeSVG
                value={getStaticOutUrl()}
                size={400}
                bgColor="#ffffff"
                fgColor="#000000"
                level="L"
                className="p-4 sm:p-6 bg-white border-4 border-[#1C1C1B] w-full h-auto max-w-[320px] sm:max-w-[400px] md:max-w-[500px]"
                style={{ width: '100%', height: 'auto' }}
              />
            ) : data?.token ? (
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
