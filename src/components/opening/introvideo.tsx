"use client";

import React from 'react';

interface IntroVideoProps {
  isFinished: boolean;
}

const IntroVideo: React.FC<IntroVideoProps> = ({ isFinished }) => {
  return (
    <div id="home" className="relative w-full h-screen overflow-hidden bg-black z-0" style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}>
      <video autoPlay muted loop playsInline className="w-full h-full object-cover">
        <source src="/photo/dummyvideo.mp4" type="video/mp4" />
      </video>
      
      <div className={`absolute inset-0 bg-black/50 transition-opacity duration-1000 
        ${isFinished ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

export default IntroVideo;