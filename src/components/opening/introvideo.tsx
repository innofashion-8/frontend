"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface IntroVideoProps {
  isFinished: boolean;
}

const IntroVideo: React.FC<IntroVideoProps> = ({ isFinished }) => {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const line3Ref = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isFinished) return;

    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(line1Ref.current,
      { x: -80, opacity: 0, skewX: -8 },
      { x: 0, opacity: 1, skewX: 0, duration: 1.1, ease: 'power3.out' }
    )
    .fromTo(line2Ref.current,
      { x: -60, opacity: 0, skewX: -6 },
      { x: 0, opacity: 1, skewX: 0, duration: 1.0, ease: 'power3.out' },
      '-=0.75'
    )
    .fromTo(line3Ref.current,
      { x: -40, opacity: 0, skewX: -4 },
      { x: 0, opacity: 1, skewX: 0, duration: 0.9, ease: 'power3.out' },
      '-=0.7'
    )
    .fromTo(subtitleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo(ctaRef.current,
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' },
      '-=0.3'
    );

  }, [isFinished]);

  return (
    <div
      id="home"
      className="relative w-full h-screen overflow-hidden bg-black z-0"
      style={{
        maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
      }}
    >
      {/* VIDEO */}
      <video autoPlay muted loop playsInline className="w-full h-full object-cover">
        <source src="/photo/teaser.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className={`absolute inset-0 bg-black/50 transition-opacity duration-1000 ${isFinished ? 'opacity-100' : 'opacity-0'}`} />

      {/* Gradient desktop: dari kiri */}
      <div
        className="absolute inset-0 pointer-events-none hidden sm:block"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.08) 70%, transparent 100%)',
        }}
      />
      {/* Gradient mobile: dari bawah + kiri penuh */}
      <div
        className="absolute inset-0 pointer-events-none sm:hidden"
        style={{
          background: `
            linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 80%),
            linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 100%)
          `,
        }}
      />

      {/* HERO TEXT */}
      <div
        ref={heroTextRef}
        className={`absolute inset-0 flex transition-opacity duration-500
          items-center pb-14 sm:pb-0
          ${isFinished ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="w-full max-w-[1500px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-full sm:max-w-[52vw]">

            {/* Tag kecil */}
            <div ref={subtitleRef} className="opacity-0 flex items-center gap-2 mb-1">
              <span style={{
                display: 'inline-block', width: '28px', height: '2px', flexShrink: 0,
                background: 'linear-gradient(to right, rgba(255,255,255,0.8), transparent)',
                borderRadius: '99px',
              }} />
              <span style={{
                color: 'rgba(255,255,255,0.55)',
                fontSize: 'clamp(9px, 2.8vw, 13px)',
                fontWeight: 700, fontStyle: 'italic',
                letterSpacing: '0.16em', textTransform: 'uppercase',
              }}>
                Petra Christian University
              </span>
            </div>

            {/* Headline — mobile: penuh lebar layar, desktop: dibatasi */}
            <div className="flex flex-col leading-none">
              {[
                { ref: line1Ref, text: 'INNO', gold: false },
                { ref: line2Ref, text: 'FASHION', gold: true },
                { ref: line3Ref, text: 'SHOW', gold: false },
              ].map(({ ref, text, gold }) => (
                <div
                  key={text}
                  ref={ref}
                  className="opacity-0"
                  style={{
                    fontWeight: 900,
                    fontStyle: 'italic',
                    // Mobile: 20vw bikin full layar, desktop: 6.2vw lebih kecil proporsional
                    fontSize: 'clamp(56px, 20vw, 96px)',
                    lineHeight: 0.88,
                    letterSpacing: '-0.03em',
                    textTransform: 'uppercase',
                    ...(gold ? {
                      background: 'linear-gradient(90deg, #fff 0%, rgba(180,180,180,0.9) 50%, rgba(120,120,120,0.75) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    } : {
                      color: 'white',
                    }),
                  }}
                >
                  {text}
                </div>
              ))}
            </div>

            {/* Deskripsi */}
            <div
              ref={ctaRef}
              className="opacity-0 mt-2 sm:mt-3 md:mt-5"
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: 'clamp(11px, 3.2vw, 15px)',
                fontWeight: 500,
                letterSpacing: '0.04em',
                maxWidth: '340px',
                lineHeight: 1.6,
              }}
            >
              Celebrate creativity, culture, and innovation{' '}
              <br className="hidden sm:block" />
              through the lens of fashion.
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroVideo;