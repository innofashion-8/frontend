'use client'

import Image from 'next/image'
import React from 'react'

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
const SIDE_W     = ARM_LEN + DOT_SIZE + 180 // 306px

const dateStyle: React.CSSProperties = {
  color: '#ffffff',
  fontWeight: 700,
  fontSize: 20,
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
  fontSize: 15,
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
  return (
    <div
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
        <div className="tl-title-area">
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
                <div key={idx}>
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
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        width: SIDE_W,
                        flexShrink: 0,
                      }}
                    >
                      {isLeft && node.label && (
                        <div style={{ textAlign: 'right', marginRight: 14 }}>
                          <p style={dateStyle}>{node.label.date}</p>
                          <p style={nameStyle}>{node.label.name}</p>
                        </div>
                      )}
                      {isLeft && <Dot />}
                      <div
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
                        <div style={{ position: 'absolute', left: 0, top: 0, bottom: '50%', width: LINE_W, background: LINE_COLOR }} />
                      )}
                    </div>

                    {/* ═══ RIGHT SIDE ═══ */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        width: SIDE_W,
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          width: isLeft ? 0 : ARM_LEN,
                          height: LINE_W,
                          background: isLeft ? 'transparent' : LINE_COLOR,
                        }}
                      />
                      {!isLeft && <Dot />}
                      {!isLeft && node.label && (
                        <div style={{ textAlign: 'left', marginLeft: 14 }}>
                          <p style={dateStyle}>{node.label.date}</p>
                          <p style={nameStyle}>{node.label.name}</p>
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

        /* ── Bracket wrapper: gentle scaling ── */
        .tl-bracket-wrapper {
          overflow-x: auto;
          width: 100%;
          display: flex;
          justify-content: center;
          transform-origin: top center;
        }

        @media (max-width: 900px) {
          .tl-bracket-wrapper { transform: scale(0.9); }
        }

        @media (max-width: 768px) {
          .tl-bracket-wrapper { transform: scale(0.82); }
        }

        @media (max-width: 640px) {
          .tl-bracket-wrapper { transform: scale(0.75); }
        }

        @media (max-width: 480px) {
          .tl-bracket-wrapper { transform: scale(0.7); }
        }
      `}</style>
    </div>
  )
}
