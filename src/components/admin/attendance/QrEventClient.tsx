"use client";

import React, { useState } from 'react';
import { EventResource } from '@/types/event';
import RotatingQrGenerator from './RotatingQrGenerator';

interface QrEventClientProps {
  initialEvents: EventResource[];
}

export default function QrEventClient({ initialEvents }: QrEventClientProps) {
  const [selectedEventId, setSelectedEventId] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (selectedEventId) {
      setIsGenerating(true);
    }
  };

  const handleReset = () => {
    setIsGenerating(false);
    setSelectedEventId("");
  };

  return (
    <div className="relative min-h-screen text-[#1C1C1B] px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-black font-creato-title uppercase tracking-tight border-b-2 sm:border-b-4 border-[#1c1c1b] pb-2">
          QR Event Broadcast
        </h1>
        <p className="mt-2 text-xs sm:text-sm font-bold text-[#6A5D52] uppercase tracking-wider">
          Initiate Projection Node for Event Check-In
        </p>
      </div>

      {!isGenerating ? (
        <div className="w-full max-w-2xl mx-auto bg-[#E2E2DE] p-4 sm:p-6 md:p-8 border-2 sm:border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b] sm:shadow-[6px_6px_0px_#1c1c1b]">
          <h2 className="text-lg sm:text-xl font-black font-creato-title uppercase text-[#1C1C1B] mb-4 sm:mb-6 border-b-2 border-[#1c1c1b] pb-2">
            Select Target Event
          </h2>

          <div className="mb-4 sm:mb-6">
            <label className="text-xs sm:text-sm font-black text-[#6A5D52] uppercase block mb-2 tracking-wider">
              Event Node
            </label>
            <select
              value={selectedEventId}
              onChange={(e) => setSelectedEventId(e.target.value)}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border-2 sm:border-[3px] border-[#1c1c1b] bg-white font-bold text-[#1c1c1b] text-sm sm:text-base shadow-[3px_3px_0px_#1c1c1b] sm:shadow-[4px_4px_0px_#1c1c1b] focus:outline-none appearance-none cursor-pointer"
            >
              <option value="" disabled>-- SELECT EVENT PROTOCOL --</option>
              {initialEvents.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.title} ({event.category})
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleGenerate}
            disabled={!selectedEventId}
            className="w-full bg-[#1c1c1b] text-white px-4 py-3 sm:px-6 sm:py-4 font-black uppercase tracking-widest text-sm sm:text-base border-2 sm:border-[3px] border-[#1c1c1b] shadow-[3px_3px_0px_#1c1c1b] sm:shadow-[4px_4px_0px_#1c1c1b] hover:bg-[#6A5D52] hover:border-[#6A5D52] disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            INITIALIZE GENERATOR
          </button>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
            <h2 className="text-lg sm:text-xl font-black text-[#1C1C1B] uppercase tracking-widest">
              BROADCAST ACTIVE
            </h2>
            <button
              onClick={handleReset}
              className="bg-[#E2E2DE] cursor-pointer text-[#1c1c1b] px-3 py-2 sm:px-4 sm:py-2 font-black uppercase text-xs tracking-wider border-2 sm:border-[3px] border-[#1c1c1b] shadow-[2px_2px_0px_#1c1c1b] sm:shadow-[3px_3px_0px_#1c1c1b] hover:bg-[#1c1c1b] hover:text-white transition-all"
            >
              TERMINATE
            </button>
          </div>

          <RotatingQrGenerator eventId={selectedEventId} onTerminate={handleReset} />
        </div>
      )}
    </div>
  );
}
