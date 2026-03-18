"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./loader.css";
const BRAND_TEXT = "INNOFASHION SHOW";
const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

const SPARKLE_POSITIONS = [
  { top: "8%", left: "12%", delay: 0.0, duration: 2.2 },
  { top: "12%", right: "10%", delay: 0.5, duration: 1.8 },
  { top: "78%", left: "8%", delay: 0.8, duration: 2.5 },
  { top: "82%", right: "15%", delay: 1.3, duration: 2.0 },
  { top: "50%", left: "3%", delay: 0.3, duration: 2.3 },
  { top: "48%", right: "4%", delay: 0.9, duration: 1.9 },
  { top: "25%", left: "45%", delay: 0.6, duration: 2.1 },
  { top: "88%", left: "50%", delay: 1.1, duration: 2.4 },
  { top: "35%", left: "5%", delay: 1.5, duration: 2.0 },
  { top: "65%", right: "6%", delay: 0.2, duration: 2.6 },
  { top: "18%", left: "30%", delay: 1.7, duration: 1.7 },
  { top: "75%", right: "35%", delay: 0.7, duration: 2.2 },
];

const FLOAT_PARTICLES = [
  { left: "20%", bottom: "30%", delay: 0, duration: 4 },
  { left: "35%", bottom: "25%", delay: 1.2, duration: 3.5 },
  { left: "50%", bottom: "35%", delay: 0.5, duration: 4.5 },
  { left: "65%", bottom: "28%", delay: 1.8, duration: 3.8 },
  { left: "80%", bottom: "32%", delay: 0.8, duration: 4.2 },
  { left: "25%", bottom: "40%", delay: 2.0, duration: 3.2 },
  { left: "70%", bottom: "38%", delay: 1.5, duration: 3.6 },
  { left: "45%", bottom: "20%", delay: 2.5, duration: 4.0 },
];

interface LuxuryLoaderProps {
  isLoading: boolean;
}

export default function LuxuryLoader({ isLoading }: LuxuryLoaderProps) {
  const [scrambledText, setScrambledText] = useState("");
  const [isRevealing, setIsRevealing] = useState(false);

  useEffect(() => {
    let iteration = 0;
    let intervalId: NodeJS.Timeout;

    if (isLoading) {
      // Start the scrambling effect
      intervalId = setInterval(() => {
        setScrambledText(
          BRAND_TEXT.split("")
            .map((char, index) => {
              if (index < iteration) {
                return char;
              }
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            })
            .join(""),
        );

        if (iteration >= BRAND_TEXT.length) {
          clearInterval(intervalId);
          setIsRevealing(true);
        }

        iteration += 1 / 3; // Controls the speed of reveal
      }, 50);
    } else {
      // Instantly reveal if not loading
      setScrambledText(BRAND_TEXT);
      setIsRevealing(true);
    }

    return () => clearInterval(intervalId);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeIn", delay: 0.5 }}
        >
          <motion.div
            className="silver-ambient"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
          />
          <motion.div
            className="silver-ambient-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mb-8 relative inline-flex"
          >
            <Image
              src="/logo_INNOF.png"
              alt="INNOFASHION SHOW"
              width={280}
              height={70}
              priority
              className="object-contain"
            />
            <div className="logo-shimmer-silver z-20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="flex flex-col items-center justify-center gap-4 relative z-50 w-full"
          >
            <div className="font-mono text-xs tracking-[0.3em] text-white/80 h-4 text-silver-glow whitespace-nowrap flex">
              {scrambledText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  exit={
                    i === 3
                      ? {
                          scale: 600,
                          opacity: 1, // Stay opaque to create the fly-through hole illusion
                          transition: {
                            duration: 1.5,
                            ease: [0.32, 0, 0.67, 0],
                          }, // Accelerating cubic bezier
                        }
                      : {
                          opacity: 0,
                          transition: { duration: 0.2, ease: "easeOut" },
                        }
                  }
                  style={
                    i === 3
                      ? {
                          display: "inline-block",
                          transformOrigin: "center",
                          position: "relative",
                          zIndex: 100,
                        }
                      : { display: "inline-block" }
                  }
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            <motion.div
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-48 h-[1px] bg-white/10 relative overflow-hidden rounded-full z-20 mt-2"
            >
              <motion.div
                className="absolute top-0 left-0 h-full silver-progress-fill"
                initial={{ width: "0%" }}
                animate={{ width: isRevealing ? "100%" : "80%" }}
                transition={{
                  duration: isRevealing ? 0.5 : 2.5,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          {SPARKLE_POSITIONS.map((spark, i) => (
            <motion.div
              key={`sparkle-${i}`}
              className="sparkle"
              style={{
                top: spark.top,
                left: spark.left,
                right: spark.right,
              }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + spark.delay }}
            >
              <div
                className="sparkle-inner"
                style={
                  {
                    "--delay": `${spark.delay}s`,
                    "--duration": `${spark.duration}s`,
                  } as React.CSSProperties
                }
              />
            </motion.div>
          ))}

          {FLOAT_PARTICLES.map((p, i) => (
            <motion.div
              key={`float-${i}`}
              className="float-particle"
              style={
                {
                  left: p.left,
                  bottom: p.bottom,
                  background: "rgba(255,255,255,0.4)",
                  boxShadow: "0 0 10px rgba(230,230,250,0.5)",
                  "--float-delay": `${p.delay}s`,
                  "--float-duration": `${p.duration}s`,
                } as React.CSSProperties
              }
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.0 + p.delay }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
