import React, { Suspense } from 'react';
import VerifyClient from '@/components/user/attendance/VerifyClient';
import palette from '@/config/palette';

export default function VerifyAttendancePage() {
  return (
    <Suspense fallback={
      <div className="w-full min-h-[calc(100vh-80px)] p-4 sm:p-6 flex flex-col items-center justify-center font-creato-body relative z-10">
        <div 
          className="w-full max-w-lg mx-auto border bg-black/40 backdrop-blur-md p-6 sm:p-8 flex flex-col relative items-center justify-center" 
          style={{ 
            borderColor: palette.graphite, 
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' 
          }}
        >
          <p 
            className="text-sm sm:text-xl font-black uppercase tracking-widest animate-pulse text-center" 
            style={{ color: palette.stucco }}
          >
            INITIALIZING...
          </p>
        </div>
      </div>
    }>
      <VerifyClient />
    </Suspense>
  );
}
