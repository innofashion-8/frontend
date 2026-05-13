"use client";

import React, { useState, useEffect } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import Swal from "sweetalert2";
import { eventService } from "@/services/event-service";

export default function UserQrScanner() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [cameraActive, setCameraActive] = useState(true);
  const [deviceId, setDeviceId] = useState<string | undefined>(undefined);
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [isSwitching, setIsSwitching] = useState(false);

  const getCameras = async () => {
    try {
      const allDevices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = allDevices.filter(device => device.kind === 'videoinput');
      setDevices(videoDevices);
    } catch (err) {
      console.warn("Camera init failed:", err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getCameras();
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleCameraChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDeviceId = e.target.value || undefined;
    
    setIsSwitching(true);
    setDeviceId(newDeviceId);
    
    setTimeout(() => {
      setIsSwitching(false);
    }, 500);
  };

  const processScan = async (token: string) => {
    if (isProcessing || !token) return;

    setIsProcessing(true);

    try {
      const res = await eventService.userScanCheckIn(token);

      Swal.fire({
        icon: 'success',
        title: 'ACCESS GRANTED',
        text: res.message,
        background: '#1C1C1B',
        color: '#E2E2DE',
        confirmButtonColor: '#6A5D52',
        confirmButtonText: 'ACKNOWLEDGE',
        customClass: {
          popup: 'border-4 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]',
          title: 'font-black tracking-[0.2em] uppercase text-xl text-[#E2E2DE]',
          confirmButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2 hover:scale-[1.02] transition-all border-2 border-[#E2E2DE]'
        }
      });
    } catch (error: any) {
      let errorMessage = 'Verification failed. Target node unresponsive.';
      if (error.message) {
        errorMessage = error.message;
      } else if (error.isValidationError && error.errors) {
        const firstKey = Object.keys(error.errors)[0];
        errorMessage = Array.isArray(error.errors[firstKey]) ? error.errors[firstKey][0] : error.errors[firstKey];
      }

      Swal.fire({
        icon: 'error',
        title: 'ACCESS DENIED',
        text: errorMessage,
        background: '#1C1C1B',
        color: '#E2E2DE',
        confirmButtonColor: '#6A5D52',
        confirmButtonText: 'REBOOT',
        customClass: {
          popup: 'border-4 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]',
          title: 'font-black tracking-[0.2em] uppercase text-xl text-red-500',
          confirmButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2 hover:bg-red-900 transition-all border-2 border-[#E2E2DE]'
        }
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleScan = (detectedCodes: any[]) => {
    if (detectedCodes.length > 0) {
      const scannedText = detectedCodes[0].rawValue;
      processScan(scannedText);
    }
  };

  return (
    <div className="w-full bg-[#1C1C1B] p-3 sm:p-4 md:p-6 border-4 border-[#494947] shadow-[12px_12px_0px_#1a1a1a] flex flex-col items-center">
      
      <div className="w-full border-b-4 border-[#494947] pb-2 sm:pb-3 mb-3 sm:mb-4">
        <h1 className="text-lg sm:text-xl md:text-2xl font-black text-[#E2E2DE] uppercase tracking-[0.2em] text-center">
          IDENTITY LINK
        </h1>
        <p className="mt-1 text-[9px] sm:text-[10px] font-bold text-[#979086] uppercase tracking-widest text-center">
          Scan Event Broadcast Node
        </p>
      </div>

      <div className="w-full mb-3 sm:mb-4">
        <label className="text-[9px] sm:text-[10px] font-black text-[#979086] uppercase block mb-1.5 sm:mb-2 tracking-widest">
          OPTICAL SENSOR
        </label>
        <select
          value={deviceId || ""}
          onClick={getCameras}
          onChange={handleCameraChange}
          className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border-2 border-[#494947] bg-[#1C1C1B] font-bold text-[#E2E2DE] text-[10px] sm:text-xs uppercase tracking-wider focus:outline-none focus:border-[#B7AC9B] transition-colors appearance-none cursor-pointer"
        >
          <option value="">Default Interface</option>
          {devices.map((device) => (
            <option key={device.deviceId} value={device.deviceId}>
              {device.label || `LENS-${device.deviceId.substring(0, 5)}`}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full aspect-square relative border-4 border-[#494947] bg-black overflow-hidden p-1 shadow-[8px_8px_0px_#1a1a1a] max-w-sm mx-auto">
        {cameraActive && !isSwitching ? (
          <>
            <Scanner 
              key={deviceId || 'default'}
              onScan={handleScan} 
              onError={(error: any) => console.log(error?.message || error)}
              constraints={deviceId ? { deviceId: { exact: deviceId } } : undefined}
              components={{
                audio: false, 
                onOff: true, 
                torch: true,
              } as any}
              styles={{
                container: { width: '100%', height: '100%' },
                video: { objectFit: 'cover' },
              }}
            />
            {/* Cyberpunk Scanner Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#B7AC9B] shadow-[0_0_8px_#B7AC9B] animate-[scan_2s_linear_infinite]"></div>
            
            {/* Targeting Reticle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-[#6A5D52] opacity-50 pointer-events-none">
                <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-t-4 border-l-4 border-[#E2E2DE]"></div>
                <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-t-4 border-r-4 border-[#E2E2DE]"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-b-4 border-l-4 border-[#E2E2DE]"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-b-4 border-r-4 border-[#E2E2DE]"></div>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#1C1C1B]">
            <p className="text-lg font-black text-[#6A5D52] tracking-[0.2em] uppercase">
              SENSOR OFFLINE
            </p>
          </div>
        )}
      </div>

      <div className="mt-3 sm:mt-4 w-full flex items-center justify-between border-2 border-[#494947] p-2 bg-[#1C1C1B]">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 border border-[#494947] ${cameraActive ? 'bg-[#E2E2DE] animate-pulse shadow-[0_0_8px_#E2E2DE]' : 'bg-[#6A5D52]'}`}></span>
          <p className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-[#979086]">
            {cameraActive ? 'LINK ACTIVE' : 'CONNECTION SEVERED'}
          </p>
        </div>
        {!cameraActive && !isProcessing && (
          <button 
            onClick={() => setCameraActive(true)}
            className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#1C1C1B] bg-[#E2E2DE] px-2 py-1 hover:bg-[#B7AC9B] transition-colors"
          >
            RE-ENGAGE
          </button>
        )}
      </div>

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
