"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface InnoFashionLoaderProps {
  cycleDuration?: number;
  onComplete?: () => void;
  show?: boolean;
}

export default function InnoFashionLoader({
  cycleDuration = 1800,
  onComplete,
  show = true,
}: InnoFashionLoaderProps) {
  const [visible, setVisible] = useState(show);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!show) {
      setFadeOut(true);
      const t = setTimeout(() => {
        setVisible(false);
        onComplete?.();
      }, 700);
      return () => clearTimeout(t);
    }
  }, [show, onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`innof-loader-overlay ${fadeOut ? "fade-out" : ""}`}
      aria-label="Loading"
      role="status"
    >
      <div className="innof-scanlines" />

      <div className="innof-logo-wrapper">
        <div className="innof-logo-base">
          <Image
            src="/logo_INNOF.png"
            alt="INNOFASHION SHOW"
            width={520}
            height={130}
            priority
            draggable={false}
          />
        </div>

        <div
          className="innof-logo-fill"
          style={
            {
              "--cycle": `${cycleDuration}ms`,
            } as React.CSSProperties
          }
        >
          <Image
            src="/logo_INNOF.png"
            alt=""
            aria-hidden="true"
            width={520}
            height={130}
            priority
            draggable={false}
          />
        </div>
      </div>

      <div className="innof-dots">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="innof-dot"
            style={{ animationDelay: `${i * 250}ms` }}
          />
        ))}
      </div>

      <style>{`
        /* ─── Root Variables ─────────────────────────────── */
        :root {
          --innof-bg: #000000;
          --innof-glow: rgba(255, 255, 255, 0.9);
          --innof-dim: rgba(255, 255, 255, 0.08);
        }

        /* ─── Overlay ─────────────────────────────────────── */
        .innof-loader-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: var(--innof-bg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 40px;
          transition: opacity 0.7s ease;
          font-family: "Creato Display", sans-serif;
        }

        .innof-loader-overlay.fade-out {
          opacity: 0;
          pointer-events: none;
        }

        /* ─── Scanlines ───────────────────────────────────── */
        .innof-scanlines {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            to bottom,
            transparent,
            transparent 2px,
            rgba(255, 255, 255, 0.015) 2px,
            rgba(255, 255, 255, 0.015) 4px
          );
          pointer-events: none;
          z-index: 1;
        }

        /* ─── Logo Wrapper ────────────────────────────────── */
        .innof-logo-wrapper {
          position: relative;
          width: 520px;
          max-width: 90vw;
          z-index: 2;
          filter: drop-shadow(0 0 32px rgba(255,255,255,0.06));
        }

        /* Base: dim white logo */
        .innof-logo-base {
          width: 100%;
          opacity: 0.08;
          user-select: none;
        }

        .innof-logo-base img,
        .innof-logo-fill img {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Fill: bright logo, revealed by sweeping clip-path */
        .innof-logo-fill {
          position: absolute;
          inset: 0;
          overflow: hidden;
          animation: innof-sweep var(--cycle, 1800ms) cubic-bezier(0.4, 0, 0.2, 1) infinite;
          filter:
            brightness(1.3)
            drop-shadow(0 0 10px rgba(255,255,255,0.85))
            drop-shadow(0 0 25px rgba(255,255,255,0.4));
        }

        /*
          Sweep: clip-path goes from left=0%→100% (fill in),
          then pauses fully filled, then collapses back 100%→0% (empty out).
          We use inset() clip to create the horizontal wipe.
        */
        @keyframes innof-sweep {
          /* start empty */
          0%   { clip-path: inset(0 100% 0 0); opacity: 0.95; }
          /* fill left→right */
          38%  { clip-path: inset(0 0% 0 0);   opacity: 1; }
          /* hold full */
          55%  { clip-path: inset(0 0% 0 0);   opacity: 1; }
          /* drain left←right (right side goes away first) */
          90%  { clip-path: inset(0 0% 0 100%); opacity: 0.95; }
          /* brief pause fully empty */
          100% { clip-path: inset(0 100% 0 0); opacity: 0.95; }
        }

        /* ─── Loading Dots ────────────────────────────────── */
        .innof-dots {
          display: flex;
          gap: 10px;
          z-index: 2;
        }

        .innof-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          animation: innof-pulse 1.2s ease-in-out infinite;
        }

        @keyframes innof-pulse {
          0%, 100% { opacity: 0.15; transform: scale(0.8); }
          50%       { opacity: 1;    transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
}
