"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { eventService } from '@/services/event-service';
import Swal from 'sweetalert2';
import palette from '@/config/palette';

export default function VerifyClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams?.get('token');

  const [status, setStatus] = useState<'INITIALIZING' | 'VERIFYING' | 'GRANTED' | 'DENIED'>('INITIALIZING');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!token) {
      setStatus('DENIED');
      setMessage('MISSING CRYPTOGRAPHIC TOKEN.');
      return;
    }

    const verifyAttendance = async () => {
      setStatus('VERIFYING');
      try {
        const res = await eventService.userScanCheckIn(token);
        setStatus('GRANTED');
        setMessage(res.message);

        Swal.fire({
          icon: 'success',
          title: 'ACCESS GRANTED',
          text: res.message,
          background: palette.onyx,
          color: palette.stucco,
          confirmButtonColor: palette.walnut,
          confirmButtonText: 'ENTER DASHBOARD',
          customClass: {
            popup: 'border-4 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]',
            title: 'font-black tracking-[0.2em] uppercase text-xl',
            confirmButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2 hover:scale-[1.02] transition-all border-2'
          }
        }).then(() => {
          router.push('/dashboard');
        });

      } catch (error: any) {
        setStatus('DENIED');
        
        let errorMessage = 'Verification failed. Target node unresponsive.';
        if (error.message) {
          errorMessage = error.message;
        } else if (error.isValidationError && error.errors) {
          const firstKey = Object.keys(error.errors)[0];
          errorMessage = Array.isArray(error.errors[firstKey]) ? error.errors[firstKey][0] : error.errors[firstKey];
        }

        setMessage(errorMessage);
        
        Swal.fire({
          icon: 'error',
          title: 'ACCESS DENIED',
          text: errorMessage,
          background: palette.onyx,
          color: palette.stucco,
          confirmButtonColor: '#ef4444',
          confirmButtonText: 'REBOOT',
          customClass: {
            popup: 'border-4 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]',
            title: 'font-black tracking-[0.2em] uppercase text-xl text-red-500',
            confirmButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2 hover:bg-red-900 transition-all border-2'
          }
        }).then(() => {
          router.push('/dashboard');
        });
      }
    };

    verifyAttendance();
  }, [token, router]);

  return (
    <div className="w-full min-h-[calc(100vh-80px)] p-4 sm:p-6 flex flex-col items-center justify-center font-creato-body relative z-10">
      <div 
        className="w-full max-w-lg mx-auto border bg-black/40 backdrop-blur-md p-6 sm:p-8 md:p-10 flex flex-col relative overflow-hidden transition-all duration-700"
        style={{ 
          borderColor: palette.graphite, 
          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' 
        }}
      >
        <div 
          className="absolute top-0 left-0 w-2 h-full" 
          style={{ backgroundColor: palette.greige }}
        ></div>
        
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <div 
            className="flex items-center gap-3 border px-3 py-2 sm:px-4 sm:py-2" 
            style={{ 
              borderColor: palette.graphite, 
              backgroundColor: palette.obsidian 
            }}
          >
            <span 
              className={`w-2 h-2 rounded-full ${status === 'VERIFYING' ? 'animate-pulse' : ''}`}
              style={{ 
                backgroundColor: status === 'VERIFYING' ? palette.greige : (status === 'GRANTED' ? '#22c55e' : '#ef4444'),
                boxShadow: `0 0 10px ${status === 'VERIFYING' ? palette.greige : (status === 'GRANTED' ? '#22c55e' : '#ef4444')}`
              }}
            ></span>
            <span 
              className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em]" 
              style={{ color: palette.stucco }}
            >
              {status === 'VERIFYING' ? 'PROCESSING' : status}
            </span>
          </div>
        </div>
        
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-widest mb-4 sm:mb-6 leading-tight" 
          style={{ color: palette.stucco }}
        >
          Identity Verification
        </h2>
        
        <div className="mb-6 sm:mb-8">
          <p 
            className="text-[9px] sm:text-[10px] tracking-[0.2em] mb-2 uppercase" 
            style={{ color: palette.ash }}
          >
            [ NODE LOG ]
          </p>
          <p 
            className="text-sm sm:text-base font-bold tracking-widest mt-1 uppercase" 
            style={{ color: palette.greige }}
          >
            {status === 'VERIFYING' ? 'Decrypting secure token...' : message}
          </p>
        </div>

        <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-[0.03] pointer-events-none">
          <span 
            className="text-7xl sm:text-9xl font-black italic" 
            style={{ color: palette.stucco }}
          >
            V
          </span>
        </div>
      </div>
    </div>
  );
}
