

// // 'use client'

// // import Image from 'next/image'
// // import React, { useEffect, useRef } from 'react'
// // import gsap from 'gsap'
// // import { ScrollTrigger } from 'gsap/ScrollTrigger'

// // gsap.registerPlugin(ScrollTrigger)

// // // ─────────────────────────────────────────────────────────────────────────────
// // // DATA
// // // ─────────────────────────────────────────────────────────────────────────────
// // interface EventLabel {
// //   date: string
// //   name: string
// // }

// // type Side = 'left' | 'right'

// // interface TimelineNode {
// //   side: Side
// //   label?: EventLabel
// // }

// // const nodes: TimelineNode[] = [
// //   { side: 'left',  label: { date: 'Mar 23, 2026', name: 'Open Registration' } },
// //   { side: 'right', label: { date: 'May 18, 2026', name: 'Seminar: What Makes It Fashion' } },
// //   { side: 'left',  label: { date: 'May 22, 2026', name: 'Workshop: Pretty Little Daredevil' } },
// //   { side: 'right', label: { date: 'May 29, 2026', name: 'Workshop: Trinkets (TBA)' } },
// //   { side: 'left',  label: { date: 'Jul 30, 2026', name: 'Competition Deadline' } },
// //   { side: 'right', label: { date: 'Jul 31, 2026', name: 'Briefing Restyling' } },
// //   { side: 'left',  label: { date: 'To Be Announced',          name: 'Grand Exhibition' } },
// //   { side: 'right', label: { date: 'Aug 13, 2026', name: 'Graduation Show & Awarding' } },
// // ]

// // // ─────────────────────────────────────────────────────────────────────────────
// // // Constants
// // // ─────────────────────────────────────────────────────────────────────────────
// // const DOT_SIZE   = 16
// // const ROW_H      = 105
// // const ARM_LEN    = 110
// // const LINE_W     = 2.5
// // const LINE_COLOR = 'rgba(255,255,255,0.55)'

// // const dateStyle: React.CSSProperties = {
// //   color: '#ffffff',
// //   fontWeight: 700,
// //   lineHeight: 1.3,
// //   fontFamily: "'Creato Display', sans-serif",
// //   textShadow: '0 1px 8px rgba(0,0,0,0.95)',
// //   whiteSpace: 'nowrap',
// //   letterSpacing: '0.02em',
// //   margin: 0,
// // }

// // const nameStyle: React.CSSProperties = {
// //   color: '#c0c0c0',
// //   fontStyle: 'italic',
// //   lineHeight: 1.4,
// //   fontFamily: "'Creato Display', sans-serif",
// //   textShadow: '0 1px 8px rgba(0,0,0,0.95)',
// //   whiteSpace: 'nowrap',
// //   margin: 0,
// // }

// // // ─────────────────────────────────────────────────────────────────────────────
// // // PAGE
// // // ─────────────────────────────────────────────────────────────────────────────
// // export default function TimelinePage() {
// //   const sectionRef = useRef<HTMLDivElement>(null)
// //   const titleRef = useRef<HTMLDivElement>(null)
// //   const nodesRef = useRef<(HTMLDivElement | null)[]>([])
// //   const pillarRef = useRef<HTMLDivElement>(null)

// //   useEffect(() => {
// //     const ctx = gsap.context(() => {
// //       // Title — fade in + scale from center (triggers when title enters viewport)
// //       gsap.from(titleRef.current, {
// //         scale: 0.8,
// //         opacity: 0,
// //         y: 50,
// //         duration: 1,
// //         ease: 'power3.out',
// //         scrollTrigger: {
// //           trigger: titleRef.current,
// //           start: 'top 95%',
// //           toggleActions: 'play none none reverse',
// //         },
// //       })

// //       // Timeline nodes — each node animates individually when it scrolls into view
// //       nodesRef.current.forEach((node, idx) => {
// //         if (!node) return
// //         const isLeft = nodes[idx].side === 'left'

// //         // Set initial state hidden
// //         gsap.set(node, { opacity: 0, x: isLeft ? -60 : 60 })

// //         // Animate in when the node's top reaches 80% of the viewport
// //         gsap.to(node, {
// //           x: 0,
// //           opacity: 1,
// //           duration: 0.7,
// //           ease: 'power2.out',
// //           scrollTrigger: {
// //             trigger: node,
// //             start: 'top 80%',
// //             toggleActions: 'play none none reverse',
// //           },
// //         })

// //         // Dot glow pulse on enter
// //         const dot = node.querySelector('.tl-dot')
// //         if (dot) {
// //           gsap.fromTo(dot, {
// //             boxShadow: '0 0 8px rgba(255,255,255,0.3)',
// //           }, {
// //             boxShadow: '0 0 24px rgba(255,255,255,0.9), 0 0 48px rgba(255,255,255,0.4)',
// //             duration: 0.6,
// //             ease: 'power2.inOut',
// //             yoyo: true,
// //             repeat: 1,
// //             scrollTrigger: {
// //               trigger: node,
// //               start: 'top 75%',
// //               toggleActions: 'play none none none',
// //             },
// //           })
// //         }
// //       })

// //       // Vertical pillar grows as you scroll through the bracket area
// //       if (pillarRef.current) {
// //         gsap.from(pillarRef.current, {
// //           scaleY: 0,
// //           transformOrigin: 'top center',
// //           ease: 'none',
// //           scrollTrigger: {
// //             trigger: pillarRef.current,
// //             start: 'top 80%',
// //             end: 'bottom 50%',
// //             scrub: 0.6,
// //           },
// //         })
// //       }
// //     }, sectionRef)

// //     return () => ctx.revert()
// //   }, [])

// //   return (
// //     <div
// //       ref={sectionRef}
// //       style={{
// //         position: 'relative',
// //         width: '100%',
// //         minHeight: '100vh',
// //         overflow: 'clip',
// //         overflowY: 'visible',
// //         background: 'transparent',
// //       }}
// //     >
// //       {/* 🔥 SEMUA LAYER BACKGROUND DAN MASKIMAGE DIHAPUS DARI SINI 🔥 */}

// //       {/* ── Dust overlays (Dikasih efek Masking biar ujungnya nge-blend halus) ── */}
// //       <div style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.28, pointerEvents: 'none', maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' }}>
// //         <Image src="/assets/DUST.png" alt="" fill style={{ objectFit: 'cover' }} unoptimized />
// //       </div>
// //       <div style={{ position: 'absolute', inset: 0, zIndex: 2, opacity: 0.15, pointerEvents: 'none', maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' }}>
// //         <Image src="/assets/DUST-1.png" alt="" fill style={{ objectFit: 'cover' }} unoptimized />
// //       </div>

// //       {/* ── Content ── */}
// //       <div className="tl-content">
// //         {/* ── "TIME LINE" title with dust decorations ── */}
// //         <div className="tl-title-area" ref={titleRef}>
// //           {/* Title image + dust decorations anchored to the image */}
// //           <div style={{ position: 'relative', zIndex: 1, width: 580, maxWidth: '75%' }}>
// //             {/* Dust behind "T" — absolute to image, stays on T */}
// //             <div
// //               style={{
// //                 position: 'absolute',
// //                 left: '-15%',
// //                 top: '50%',
// //                 transform: 'translate(-20%, -50%)',
// //                 width: 280,
// //                 height: 220,
// //                 opacity: 0.75,
// //                 pointerEvents: 'none',
// //                 zIndex: -1,
// //               }}
// //             >
// //               <Image src="/assets/DUST-1.png" alt="" className='-scale-x-100 ' fill style={{ objectFit: 'contain', objectPosition: 'center' }} unoptimized />
// //             </div>

// //             {/* Dust behind "E" — absolute to image, stays on E */}
// //             <div
// //               style={{
// //                 position: 'absolute',
// //                 right: '-15%',
// //                 top: '50%',
// //                 transform: 'translate(20%, -50%)',
// //                 width: 280,
// //                 height: 220,
// //                 opacity: 0.75,
// //                 pointerEvents: 'none',
// //                 zIndex: -1,
// //               }}
// //             >
// //               <Image src="/assets/DUST-1.png" alt="" fill style={{ objectFit: 'contain', objectPosition: 'center' }} unoptimized />
// //             </div>

// //             <Image
// //               src="/assets/TIME LINE.png"
// //               alt="TIME LINE"
// //               width={580}
// //               height={145}
// //               style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1 }}
// //               unoptimized
// //             />
// //           </div>
// //         </div>

// //         {/* ── Bracket container — scales down on small screens ── */}
// //         <div className="tl-bracket-wrapper">
// //           <div
// //             ref={pillarRef}
// //             style={{
// //               position: 'relative',
// //               display: 'flex',
// //               flexDirection: 'column',
// //               borderStyle: 'none',
// //             }}
// //           >
// //             {nodes.map((node, idx) => {
// //               const isLeft = node.side === 'left'
// //               const isFirst = idx === 0
// //               const isLast = idx === nodes.length - 1

// //               return (
// //                 <div
// //                   key={idx}
// //                   ref={(el) => { nodesRef.current[idx] = el }}
// //                 >
// //                   {/* Row: left-side | pillar | right-side */}
// //                   <div
// //                     style={{
// //                       display: 'flex',
// //                       alignItems: 'center',
// //                       height: ROW_H,
// //                     }}
// //                   >
// //                     {/* ═══ LEFT SIDE ═══ */}
// //                     <div
// //                       className="tl-side tl-side-left"
// //                     >
// //                       {isLeft && node.label && (
// //                         <div style={{ textAlign: 'right', marginRight: 14 }}>
// //                           <p className="tl-date" style={dateStyle}>{node.label.date}</p>
// //                           <p className="tl-name" style={nameStyle}>{node.label.name}</p>
// //                         </div>
// //                       )}
// //                       {isLeft && (
// //                         <div
// //                           className="tl-dot"
// //                           style={{
// //                             width: DOT_SIZE,
// //                             height: DOT_SIZE,
// //                             minWidth: DOT_SIZE,
// //                             minHeight: DOT_SIZE,
// //                             borderRadius: '50%',
// //                             background: 'radial-gradient(circle at 38% 35%, #d8d8d8, #5a5a5a)',
// //                             border: '1.5px solid rgba(255,255,255,0.5)',
// //                             boxShadow: '0 0 8px rgba(255,255,255,0.3)',
// //                             flexShrink: 0,
// //                           }}
// //                         />
// //                       )}
// //                       <div
// //                         className="tl-arm"
// //                         style={{
// //                           width: isLeft ? ARM_LEN : 0,
// //                           height: LINE_W,
// //                           background: isLeft ? LINE_COLOR : 'transparent',
// //                         }}
// //                       />
// //                     </div>

// //                     {/* ═══ PILLAR ═══ */}
// //                     <div
// //                       style={{
// //                         width: LINE_W,
// //                         height: '100%',
// //                         background: (isFirst || isLast) ? 'transparent' : LINE_COLOR,
// //                         position: 'relative',
// //                         flexShrink: 0,
// //                       }}
// //                     >
// //                       {isFirst && (
// //                         <div style={{ position: 'absolute', left: 0, top: '50%', bottom: 0, width: LINE_W, background: LINE_COLOR }} />
// //                       )}
// //                       {isLast && (
// //                         <div style={{ position: 'absolute', left: 0, top: 0, height: '50%', width: LINE_W, background: LINE_COLOR }} />
// //                       )}
// //                     </div>

// //                     {/* ═══ RIGHT SIDE ═══ */}
// //                     <div
// //                       className="tl-side tl-side-right"
// //                     >
// //                       <div
// //                         className="tl-arm"
// //                         style={{
// //                           width: isLeft ? 0 : ARM_LEN,
// //                           height: LINE_W,
// //                           background: isLeft ? 'transparent' : LINE_COLOR,
// //                         }}
// //                       />
// //                       {!isLeft && (
// //                         <div
// //                           className="tl-dot"
// //                           style={{
// //                             width: DOT_SIZE,
// //                             height: DOT_SIZE,
// //                             minWidth: DOT_SIZE,
// //                             minHeight: DOT_SIZE,
// //                             borderRadius: '50%',
// //                             background: 'radial-gradient(circle at 38% 35%, #d8d8d8, #5a5a5a)',
// //                             border: '1.5px solid rgba(255,255,255,0.5)',
// //                             boxShadow: '0 0 8px rgba(255,255,255,0.3)',
// //                             flexShrink: 0,
// //                           }}
// //                         />
// //                       )}
// //                       {!isLeft && node.label && (
// //                         <div style={{ textAlign: 'left', marginLeft: 14 }}>
// //                           <p className="tl-date" style={dateStyle}>{node.label.date}</p>
// //                           <p className="tl-name" style={nameStyle}>{node.label.name}</p>
// //                         </div>
// //                       )}
// //                     </div>
// //                   </div>
// //                 </div>
// //               )
// //             })}
// //           </div>
// //         </div>
// //       </div>

// //       <style>{`
// //         .tl-content {
// //           position: relative;
// //           z-index: 10;
// //           min-height: 100vh;
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           padding: 80px 24px 100px;
// //         }

// //         .tl-title-area {
// //           position: relative;
// //           width: 100%;
// //           max-width: 900px;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           margin-bottom: 56px;
// //         }

// //         /* Reset Tailwind preflight borders on timeline containers */
// //         .tl-bracket-wrapper,
// //         .tl-bracket-wrapper > div,
// //         .tl-bracket-wrapper > div > div,
// //         .tl-bracket-wrapper > div > div > div,
// //         .tl-side,
// //         .tl-arm {
// //           border-style: none;
// //         }

// //         /* ── Bracket wrapper ── */
// //         .tl-bracket-wrapper {
// //           overflow-x: hidden;
// //           width: 100%;
// //           display: flex;
// //           justify-content: center;
// //         }

// //         /* ── Side containers ── */
// //         .tl-side {
// //           display: flex;
// //           align-items: center;
// //           flex-shrink: 0;
// //           border: none;
// //         }
// //         .tl-side-left {
// //           justify-content: flex-end;
// //           width: 306px;
// //         }
// //         .tl-side-right {
// //           justify-content: flex-start;
// //           width: 306px;
// //         }

// //         .tl-date {
// //           font-size: 20px;
// //         }
// //         .tl-name {
// //           font-size: 15px;
// //         }
// //         .tl-arm {
// //           transition: width 0.3s ease;
// //         }

// //         @media (max-width: 768px) {
// //           .tl-side-left,
// //           .tl-side-right {
// //             width: 220px;
// //           }
// //           .tl-arm {
// //             width: 60px !important;
// //           }
// //           .tl-date {
// //             font-size: 16px;
// //           }
// //           .tl-name {
// //             font-size: 13px;
// //           }
// //         }

// //         @media (max-width: 480px) {
// //           .tl-side-left,
// //           .tl-side-right {
// //             width: 160px;
// //           }
// //           .tl-arm {
// //             width: 36px !important;
// //           }
// //           .tl-date {
// //             font-size: 14px;
// //           }
// //           .tl-name {
// //             font-size: 12px;
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   )
// // }

// 'use client'

// import Image from 'next/image'
// import React, { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

// // ─────────────────────────────────────────────────────────────────────────────
// // DATA
// // ─────────────────────────────────────────────────────────────────────────────
// interface EventLabel {
//   date: string
//   name: string
// }

// type Side = 'left' | 'right'

// interface TimelineNode {
//   side: Side
//   label?: EventLabel
// }

// const nodes: TimelineNode[] = [
//   { side: 'left',  label: { date: 'Mar 27, 2026', name: 'Open Registration Sketch' } },
//   { side: 'right', label: { date: 'Apr 03, 2026', name: 'Open Registration Restyling' } },
//   { side: 'left', label: { date: 'May 18, 2026', name: 'Seminar: What Makes It Fashion' } },
//   { side: 'right',  label: { date: 'May 22, 2026', name: 'Workshop: Pretty Little Daredevil' } },
//   { side: 'left', label: { date: 'May 29, 2026', name: 'Workshop: Trinkets (TBA)' } },
//   { side: 'right',  label: { date: 'Jul 10, 2026', name: 'Close Registration Sketch' } },
//   { side: 'left',  label: { date: 'Jul 12, 2026', name: 'Last Subsmission Sketch' } },
//   { side: 'right', label: { date: 'Jul 15, 2026', name: 'Penjurian' } },
//   { side: 'left',  label: { date: 'Jul 20, 2026', name: 'Finalist Announcement' } },
//   { side: 'right',  label: { date: 'Jul 30, 2026', name: 'Competition Deadline' } },
//   { side: 'left', label: { date: 'Jul 31, 2026', name: 'Briefing Restyling' } },
//   { side: 'right',  label: { date: 'To Be Announced',          name: 'Grand Exhibition' } },
//   { side: 'left', label: { date: 'Aug 13, 2026', name: 'Graduation Show & Awarding' } },
// ]

// // ─────────────────────────────────────────────────────────────────────────────
// // PAGE
// // ─────────────────────────────────────────────────────────────────────────────
// export default function TimelinePage() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const titleRef = useRef<HTMLDivElement>(null)
//   const containerRef = useRef<HTMLDivElement>(null)
//   const progressLineRef = useRef<HTMLDivElement>(null)
//   const cardsRef = useRef<(HTMLDivElement | null)[]>([])
//   const dotsRef = useRef<(HTMLDivElement | null)[]>([])

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // 1. Title Reveal
//       gsap.from(titleRef.current, {
//         scale: 0.9, opacity: 0, y: 30, filter: 'blur(10px)',
//         duration: 1.2, ease: 'power3.out',
//         scrollTrigger: { trigger: titleRef.current, start: 'top 90%', toggleActions: 'play none none reverse' },
//       })

//       // 2. Glowing Progress Line animates down as you scroll
//       if (progressLineRef.current && containerRef.current) {
//         gsap.fromTo(progressLineRef.current, 
//           { scaleY: 0 }, 
//           {
//             scaleY: 1, transformOrigin: 'top', ease: 'none',
//             scrollTrigger: { trigger: containerRef.current, start: 'top center', end: 'bottom center', scrub: 0.5 }
//           }
//         )
//       }

//       // 3. Cards & Dots Reveal (No more "penyet" animation)
//       cardsRef.current.forEach((card, idx) => {
//         if (!card) return
        
//         const dot = dotsRef.current[idx];
//         const isLeft = nodes[idx].side === 'left'
//         const xOffset = window.innerWidth > 768 ? (isLeft ? -40 : 40) : 0;

//         // Card Entry
//         gsap.fromTo(card,
//           { opacity: 0, x: xOffset, y: 30, filter: 'blur(5px)' },
//           {
//             opacity: 1, x: 0, y: 0, filter: 'blur(0px)',
//             duration: 2.4, ease: 'power2.out',
//             scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' }
//           }
//         )

//         // Dot Ping Entry
//         if (dot) {
//           gsap.fromTo(dot,
//             { scale: 0, backgroundColor: '#1C1C1B' },
//             {
//               scale: 1, backgroundColor: '#E2E2DE', duration: 2.4, ease: 'back.out(1.7)',
//               scrollTrigger: { trigger: card, start: 'top 80%', toggleActions: 'play none none reverse' }
//             }
//           )
//         }
//       })
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <div ref={sectionRef} className="relative w-full min-h-screen overflow-clip bg-transparent">
      
//       {/* ── Dust overlays (Dipertahankan sesuai file aslimu) ── */}
//       <div style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.28, pointerEvents: 'none', maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' }}>
//         <Image src="/assets/dust.png" alt="" fill style={{ objectFit: 'cover' }} unoptimized />
//       </div>
//       <div style={{ position: 'absolute', inset: 0, zIndex: 2, opacity: 0.15, pointerEvents: 'none', maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' }}>
//         <Image src="/assets/DUST-1.png" alt="" fill style={{ objectFit: 'cover' }} unoptimized />
//       </div>

//       {/* ── Content ── */}
//       <div className="relative z-10 flex flex-col items-center pt-24 pb-32 px-4 md:px-8">
        
//         {/* ── "TIME LINE" title with dust decorations ── */}
//         <div className="relative w-full max-w-[900px] flex items-center justify-center mb-24" ref={titleRef}>
//           <div style={{ position: 'relative', zIndex: 1, width: 580, maxWidth: '85%' }}>
//             {/* Dust behind "T" */}
//             <div style={{ position: 'absolute', left: '-15%', top: '50%', transform: 'translate(-20%, -50%)', width: 280, height: 220, opacity: 0.75, pointerEvents: 'none', zIndex: -1 }}>
//               <Image src="/assets/DUST-1.png" alt="" className='-scale-x-100' fill style={{ objectFit: 'contain', objectPosition: 'center' }} unoptimized />
//             </div>
//             {/* Dust behind "E" */}
//             <div style={{ position: 'absolute', right: '-15%', top: '50%', transform: 'translate(20%, -50%)', width: 280, height: 220, opacity: 0.75, pointerEvents: 'none', zIndex: -1 }}>
//               <Image src="/assets/DUST-1.png" alt="" fill style={{ objectFit: 'contain', objectPosition: 'center' }} unoptimized />
//             </div>
//             <Image src="/assets/TIME LINE.png" alt="TIME LINE" width={580} height={145} style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1 }} unoptimized />
//           </div>
//         </div>

//         {/* ── Modern Timeline Layout ── */}
//         <div className="relative w-full max-w-4xl mx-auto" ref={containerRef}>
          
//           {/* Default Dark Track Line */}
//           <div className="absolute left-[28px] md:left-1/2 top-0 bottom-43 w-[2px] md:-translate-x-1/2 bg-[#494947]/30" />
          
//           {/* Glowing Scroll Progress Line */}
//           <div 
//             ref={progressLineRef} 
//             className="absolute left-[28px] md:left-1/2 top-0 bottom-43 w-[2px] md:-translate-x-1/2 bg-[#E2E2DE]"
//             style={{ boxShadow: '0 0 15px 2px rgba(226,226,222,0.6)' }}
//           />

//           {nodes.map((node, idx) => {
//             const isLeft = node.side === 'left'
            
//             return (
//               <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center w-full mb-16 md:mb-24 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                
//                 {/* Spacer for desktop alternation */}
//                 <div className="hidden md:block md:w-1/2" />

//                 {/* Central Dot */}
//                 <div className="absolute left-[28px] md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 w-[18px] h-[18px] z-10 flex items-center justify-center">
//                   <div 
//                     ref={el => { dotsRef.current[idx] = el }}
//                     className="w-full h-full rounded-full border-4 border-[#1C1C1B]"
//                     style={{ boxShadow: '0 0 0 2px rgba(226,226,222,0.3)' }}
//                   />
//                 </div>

//                 {/* Terminal Protocol Card */}
//                 <div 
//                   ref={el => { cardsRef.current[idx] = el }} 
//                   className={`w-full pl-[70px] md:pl-0 md:w-1/2 ${isLeft ? 'md:pr-14' : 'md:pl-14'}`}
//                 >
//                   <div className="group relative p-6 md:p-8 border bg-[#1a1a1a]/40 backdrop-blur-md transition-all duration-500 hover:bg-[#1a1a1a]/80" style={{ borderColor: '#494947' }}>
                    
//                     {/* Subtly Glitchy/Shimmer background on hover */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E2E2DE]/5 to-transparent -translate-x-[100%] group-hover:animate-shimmer pointer-events-none" />
                    
//                     {/* Index Protocol */}
//                     <div className="flex items-center gap-3 mb-4">
//                       <span className="w-[6px] h-[6px] rounded-full bg-[#B7AC9B] group-hover:animate-pulse shadow-[0_0_8px_#B7AC9B]" />
//                       <span className="text-[9px] font-bold tracking-[0.3em] text-[#B7AC9B] uppercase">PHASE // 0{idx + 1}</span>
//                     </div>

//                     {/* Data */}
//                     <h3 className="text-2xl md:text-3xl font-black text-[#E2E2DE] tracking-widest uppercase mb-2" style={{ fontFamily: "'Creato Display', sans-serif" }}>
//                       {node.label?.date}
//                     </h3>
//                     <p className="text-sm md:text-base text-[#979086] font-medium tracking-wider uppercase">
//                       {node.label?.name}
//                     </p>
//                   </div>
//                 </div>

//               </div>
//             )
//           })}
//         </div>
//       </div>

//       <style>{`
//         @keyframes shimmer {
//           100% { transform: translateX(100%); }
//         }
//         .animate-shimmer {
//           animation: shimmer 2s infinite linear;
//         }
//       `}</style>
//     </div>
//   )
// }

'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
const nodes = [
  { date: 'Mar 27, 2026', name: 'Open Registration Sketch' },
  { date: 'Apr 03, 2026', name: 'Open Registration Restyling' },
  { date: 'May 18, 2026', name: 'Seminar: What Makes It Fashion' },
  { date: 'May 22, 2026', name: 'Workshop: Daredevil' },
  { date: 'May 29, 2026', name: 'Workshop: Trinkets' },
  { date: 'Jul 10, 2026', name: 'Close Registration Sketch' },
  { date: 'Jul 12, 2026', name: 'Last Subsmission Sketch' },
  { date: 'Jul 15, 2026', name: 'Penjurian' },
  { date: 'Jul 20, 2026', name: 'Finalist Announcement' },
  { date: 'Jul 30, 2026', name: 'Competition Deadline' },
  { date: 'Jul 31, 2026', name: 'Briefing Restyling' },
  { date: 'TBA',          name: 'Grand Exhibition' },
  { date: 'Aug 13, 2026', name: 'Graduation & Awarding' },
]

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function TimelinePage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const nodesRef = useRef<(HTMLDivElement | null)[]>([])

  const [mounted, setMounted] = useState(false)
  const [cols, setCols] = useState(4)

  useEffect(() => {
    setMounted(true)
    const handleResize = () => setCols(window.innerWidth < 768 ? 2 : 4)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!mounted) return;
    const ctx = gsap.context(() => {
      // Judul
      gsap.from(titleRef.current, {
        scale: 0.9, opacity: 0, y: 30, filter: 'blur(10px)',
        duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: titleRef.current, start: 'top 90%', toggleActions: 'play none none reverse' },
      })

      // Garis Nyala (SVG Draw)
      if (pathRef.current) {
        const length = pathRef.current.getTotalLength()
        gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length })

        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          duration: 3,
          ease: 'power1.inOut',
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%', toggleActions: 'play none none reverse' }
        })
      }

      // Animasi Titik & Kotak Teks
      const stagger = 3 / nodes.length;
      nodesRef.current.forEach((node, i) => {
        if (!node) return;
        gsap.fromTo(node,
          { opacity: 0, scale: 0.5, filter: 'blur(4px)' },
          {
            opacity: 1, scale: 1, filter: 'blur(0px)',
            duration: 0.6, ease: 'back.out(1.5)', delay: i * stagger,
            scrollTrigger: { trigger: containerRef.current, start: 'top 75%', toggleActions: 'play none none reverse' }
          }
        )
      })

    }, sectionRef)
    return () => ctx.revert()
  }, [mounted, cols])

  if (!mounted) return <div className="min-h-screen bg-transparent" />

  const cellW = 1000 / cols;
  const cellH = cols === 4 ? 150 : 130; 
  const rows = Math.ceil(nodes.length / cols);
  const vbH = rows * cellH; 

  const points = nodes.map((node, i) => {
    const r = Math.floor(i / cols);
    const isReverse = r % 2 !== 0; 
    let c = i % cols;
    if (isReverse) c = (cols - 1) - c;

    const cx = (c * cellW) + (cellW / 2);
    const cy = (r * cellH) + (cellH / 2);
    return { x: cx, y: cy, node };
  });

  const pathD = `M ${points[0].x},${points[0].y} ` + points.slice(1).map(p => `L ${p.x},${p.y}`).join(" ");

  return (
    <div ref={sectionRef} className="relative w-full min-h-screen overflow-clip bg-transparent flex flex-col justify-center py-20">
      
      {/* ── Dust overlays ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.28, pointerEvents: 'none', maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' }}>
        <Image src="/assets/DUST.png" alt="" fill style={{ objectFit: 'cover' }} unoptimized />
      </div>
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, opacity: 0.15, pointerEvents: 'none', maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' }}>
        <Image src="/assets/DUST-1.png" alt="" fill style={{ objectFit: 'cover' }} unoptimized />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center w-full px-4">
        
        {/* ── "TIME LINE" title ── */}
        <div className="relative w-full max-w-[900px] flex items-center justify-center mb-10 md:mb-16" ref={titleRef}>
          <div style={{ position: 'relative', zIndex: 1, width: 480, maxWidth: '85%' }}>
            <div style={{ position: 'absolute', left: '-15%', top: '50%', transform: 'translate(-20%, -50%)', width: 280, height: 220, opacity: 0.75, pointerEvents: 'none', zIndex: -1 }}>
              <Image src="/assets/DUST-1.png" alt="" className='-scale-x-100' fill style={{ objectFit: 'contain', objectPosition: 'center' }} unoptimized />
            </div>
            <div style={{ position: 'absolute', right: '-15%', top: '50%', transform: 'translate(20%, -50%)', width: 280, height: 220, opacity: 0.75, pointerEvents: 'none', zIndex: -1 }}>
              <Image src="/assets/DUST-1.png" alt="" fill style={{ objectFit: 'contain', objectPosition: 'center' }} unoptimized />
            </div>
            <Image src="/assets/TIME LINE.png" alt="TIME LINE" width={580} height={145} style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1 }} unoptimized />
          </div>
        </div>

        {/* ── MENGULAR TIMELINE (SVG ZIGZAG GRID) ── */}
        <div className="relative w-full max-w-5xl mx-auto" ref={containerRef} style={{ height: `${(vbH / 1000) * 100}vw`, maxHeight: `${vbH}px`, minHeight: cols === 2 ? '800px' : '450px' }}>
          
          <svg viewBox={`0 0 1000 ${vbH}`} className="absolute inset-0 w-full h-full overflow-visible z-0" preserveAspectRatio="none">
             <path d={pathD} fill="none" stroke="#494947" strokeWidth="3" opacity="0.3" />
             <path ref={pathRef} d={pathD} fill="none" stroke="#E2E2DE" strokeWidth="4" style={{ filter: 'drop-shadow(0 0 8px rgba(226,226,222,0.8))' }} />
          </svg>

          {points.map((p, i) => (
             <div key={i} ref={el => {nodesRef.current[i] = el}} className="absolute flex flex-col items-center justify-center z-10"
                  style={{ left: `${(p.x / 1000) * 100}%`, top: `${(p.y / vbH) * 100}%`, transform: 'translate(-50%, -50%)' }}>

                 {/* 🔥 REVISI: Titik Desktop diperbesar dikit (md:w-7 md:h-7) 🔥 */}
                 <div className="w-4 h-4 md:w-7 md:h-7 rounded-full bg-[#E2E2DE] border-[4px] border-[#1C1C1B] shadow-[0_0_0_2px_#E2E2DE]" />

                 {/* 🔥 REVISI: Box Teks Desktop diperlebar dikit (md:w-[210px], md:p-3) 🔥 */}
                 <div className="absolute top-6 md:top-8 w-[130px] md:w-[210px] p-[6px] md:p-3 rounded-lg bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#494947]/50 text-center">
                    
                    {/* 🔥 REVISI: Teks diperbesar dikit di Desktop 🔥 */}
                    <p className="text-[#E2E2DE] font-black text-[9px] md:text-sm tracking-wider uppercase">{p.node.date}</p>
                    <p className="text-[#979086] font-medium text-[8px] md:text-xs tracking-wide uppercase mt-1 leading-tight">{p.node.name}</p>
                 </div>
             </div>
          ))}
        </div>

      </div>
    </div>
  )
}