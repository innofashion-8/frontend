'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
interface EventLabel {
  date: string
  name: string
}

type Side = 'left' | 'right'

interface TimelineNode {
  side: Side
  label?: EventLabel
}

const nodes: TimelineNode[] = [
  { side: 'left',  label: { date: 'Tgl, Bln, Thn', name: 'Nama Event' } },
  { side: 'right', label: { date: 'Tgl, Bln, Thn', name: 'Nama Event' } },
  { side: 'left',  label: { date: 'Tgl, Bln, Thn', name: 'Nama Event' } },
  { side: 'right', label: { date: 'Tgl, Bln, Thn', name: 'Nama Event' } },
  { side: 'left',  label: { date: 'Tgl, Bln, Thn', name: 'Nama Event' } },
  { side: 'right', label: { date: 'Tgl, Bln, Thn', name: 'Nama Event' } },
  { side: 'left',  label: { date: 'Tgl, Bln, Thn', name: 'Nama Event' } },
  { side: 'right', label: { date: 'Tgl, Bln, Thn', name: 'Nama Event' } },
]

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────
const DOT_SIZE   = 16
const ROW_H      = 105
const ARM_LEN    = 110
const LINE_W     = 2.5
const LINE_COLOR = 'rgba(255,255,255,0.55)'

const dateStyle: React.CSSProperties = {
  color: '#ffffff',
  fontWeight: 700,
  lineHeight: 1.3,
  fontFamily: "'Creato Display', sans-serif",
  textShadow: '0 1px 8px rgba(0,0,0,0.95)',
  whiteSpace: 'nowrap',
  letterSpacing: '0.02em',
  margin: 0,
}

const nameStyle: React.CSSProperties = {
  color: '#c0c0c0',
  fontStyle: 'italic',
  lineHeight: 1.4,
  fontFamily: "'Creato Display', sans-serif",
  textShadow: '0 1px 8px rgba(0,0,0,0.95)',
  whiteSpace: 'nowrap',
  margin: 0,
}

// ─────────────────────────────────────────────────────────────────────────────
// Dot
// ─────────────────────────────────────────────────────────────────────────────
function Dot({ size = DOT_SIZE }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 38% 35%, #d8d8d8, #5a5a5a)',
        border: '1.5px solid rgba(255,255,255,0.5)',
        boxShadow: '0 0 8px rgba(255,255,255,0.3)',
        flexShrink: 0,
      }}
    />
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function TimelinePage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const nodesRef = useRef<(HTMLDivElement | null)[]>([])
  const pillarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title — fade in + scale from center
      gsap.from(titleRef.current, {
        scale: 0.7,
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          end: 'top 40%',
          toggleActions: 'play none none reverse',
        },
      })

      // Timeline nodes — staggered entrance, left slides from left, right slides from right
      nodesRef.current.forEach((node, idx) => {
        if (!node) return
        const isLeft = nodes[idx].side === 'left'
        gsap.from(node, {
          x: isLeft ? -100 : 100,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: node,
            start: 'top 90%',
            end: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        })

        // Dot glow pulse on enter
        const dot = node.querySelector('.tl-dot')
        if (dot) {
          gsap.fromTo(dot, {
            boxShadow: '0 0 8px rgba(255,255,255,0.3)',
          }, {
            boxShadow: '0 0 24px rgba(255,255,255,0.9), 0 0 48px rgba(255,255,255,0.4)',
            duration: 0.6,
            ease: 'power2.inOut',
            yoyo: true,
            repeat: 1,
            scrollTrigger: {
              trigger: node,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          })
        }
      })

      // Vertical pillar grows as you scroll
      if (pillarRef.current) {
        gsap.from(pillarRef.current, {
          scaleY: 0,
          transformOrigin: 'top center',
          ease: 'none',
          scrollTrigger: {
            trigger: pillarRef.current,
            start: 'top 85%',
            end: 'bottom 40%',
            scrub: 0.8,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        background: '#0a0a0a',
      }}
    >
      {/* ── Background fabric ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/assets/Layer 32.png"
          alt="background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          priority
          unoptimized
        />
      </div>

      {/* ── Dust overlays ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.28, pointerEvents: 'none' }}>
        <Image src="/assets/DUST.png" alt="" fill style={{ objectFit: 'cover' }} unoptimized />
      </div>
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, opacity: 0.15, pointerEvents: 'none' }}>
        <Image src="/assets/DUST-1.png" alt="" fill style={{ objectFit: 'cover' }} unoptimized />
      </div>

      {/* ── Content ── */}
      <div className="tl-content">
        {/* ── "TIME LINE" title with dust decorations ── */}
        <div className="tl-title-area" ref={titleRef}>
          {/* Title image + dust decorations anchored to the image */}
          <div style={{ position: 'relative', zIndex: 1, width: 580, maxWidth: '75%' }}>
            {/* Dust behind "T" — absolute to image, stays on T */}
            <div
              style={{
                position: 'absolute',
                left: '-15%',
                top: '50%',
                transform: 'translate(-20%, -50%)',
                width: 280,
                height: 220,
                opacity: 0.75,
                pointerEvents: 'none',
                zIndex: -1,
              }}
            >
              <Image src="/assets/DUST-1.png" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center' }} unoptimized />
            </div>

            {/* Dust behind "E" — absolute to image, stays on E */}
            <div
              style={{
                position: 'absolute',
                right: '-15%',
                top: '50%',
                transform: 'translate(20%, -50%)',
                width: 280,
                height: 220,
                opacity: 0.75,
                pointerEvents: 'none',
                zIndex: -1,
              }}
            >
              <Image src="/assets/DUST-1.png" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center' }} unoptimized />
            </div>

            <Image
              src="/assets/TIME LINE.png"
              alt="TIME LINE"
              width={580}
              height={145}
              style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1 }}
              unoptimized
            />
          </div>
        </div>

        {/* ── Bracket container — scales down on small screens ── */}
        <div className="tl-bracket-wrapper">
          <div
            ref={pillarRef}
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {nodes.map((node, idx) => {
              const isLeft = node.side === 'left'
              const isFirst = idx === 0
              const isLast = idx === nodes.length - 1

              return (
                <div
                  key={idx}
                  ref={(el) => { nodesRef.current[idx] = el }}
                >
                  {/* Row: left-side | pillar | right-side */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      height: ROW_H,
                    }}
                  >
                    {/* ═══ LEFT SIDE ═══ */}
                    <div
                      className="tl-side tl-side-left"
                    >
                      {isLeft && node.label && (
                        <div style={{ textAlign: 'right', marginRight: 14 }}>
                          <p className="tl-date" style={dateStyle}>{node.label.date}</p>
                          <p className="tl-name" style={nameStyle}>{node.label.name}</p>
                        </div>
                      )}
                      {isLeft && (
                        <div
                          className="tl-dot"
                          style={{
                            width: DOT_SIZE,
                            height: DOT_SIZE,
                            minWidth: DOT_SIZE,
                            minHeight: DOT_SIZE,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle at 38% 35%, #d8d8d8, #5a5a5a)',
                            border: '1.5px solid rgba(255,255,255,0.5)',
                            boxShadow: '0 0 8px rgba(255,255,255,0.3)',
                            flexShrink: 0,
                          }}
                        />
                      )}
                      <div
                        className="tl-arm"
                        style={{
                          width: isLeft ? ARM_LEN : 0,
                          height: LINE_W,
                          background: isLeft ? LINE_COLOR : 'transparent',
                        }}
                      />
                    </div>

                    {/* ═══ PILLAR ═══ */}
                    <div
                      style={{
                        width: LINE_W,
                        height: '100%',
                        background: (isFirst || isLast) ? 'transparent' : LINE_COLOR,
                        position: 'relative',
                        flexShrink: 0,
                      }}
                    >
                      {isFirst && (
                        <div style={{ position: 'absolute', left: 0, top: '50%', bottom: 0, width: LINE_W, background: LINE_COLOR }} />
                      )}
                      {isLast && (
                        <div style={{ position: 'absolute', left: 0, top: 0, height: '50%', width: LINE_W, background: LINE_COLOR }} />
                      )}
                    </div>

                    {/* ═══ RIGHT SIDE ═══ */}
                    <div
                      className="tl-side tl-side-right"
                    >
                      <div
                        className="tl-arm"
                        style={{
                          width: isLeft ? 0 : ARM_LEN,
                          height: LINE_W,
                          background: isLeft ? 'transparent' : LINE_COLOR,
                        }}
                      />
                      {!isLeft && (
                        <div
                          className="tl-dot"
                          style={{
                            width: DOT_SIZE,
                            height: DOT_SIZE,
                            minWidth: DOT_SIZE,
                            minHeight: DOT_SIZE,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle at 38% 35%, #d8d8d8, #5a5a5a)',
                            border: '1.5px solid rgba(255,255,255,0.5)',
                            boxShadow: '0 0 8px rgba(255,255,255,0.3)',
                            flexShrink: 0,
                          }}
                        />
                      )}
                      {!isLeft && node.label && (
                        <div style={{ textAlign: 'left', marginLeft: 14 }}>
                          <p className="tl-date" style={dateStyle}>{node.label.date}</p>
                          <p className="tl-name" style={nameStyle}>{node.label.name}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        .tl-content {
          position: relative;
          z-index: 10;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 24px 80px;
        }

        .tl-title-area {
          position: relative;
          width: 100%;
          max-width: 900px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
        }

        /* ── Bracket wrapper ── */
        .tl-bracket-wrapper {
          overflow-x: auto;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        /* ── Side containers ── */
        .tl-side {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .tl-side-left {
          justify-content: flex-end;
          width: 306px;
        }
        .tl-side-right {
          justify-content: flex-start;
          width: 306px;
        }

        .tl-date {
          font-size: 20px;
        }
        .tl-name {
          font-size: 15px;
        }
        .tl-arm {
          transition: width 0.3s ease;
        }

        @media (max-width: 768px) {
          .tl-side-left,
          .tl-side-right {
            width: 220px;
          }
          .tl-arm {
            width: 60px !important;
          }
          .tl-date {
            font-size: 16px;
          }
          .tl-name {
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .tl-side-left,
          .tl-side-right {
            width: 160px;
          }
          .tl-arm {
            width: 36px !important;
          }
          .tl-date {
            font-size: 14px;
          }
          .tl-name {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  )
}
