

'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const contacts = [
  {
    platformIcon: null,
    username: '@innofashion.pcu',
    href: 'https://instagram.com/innofashion.pcu',
    type: 'instagram',
    label: 'COMM.LINK // IG',
  },
  {
    platformIcon: '/assets/LOGO LINE.png',
    username: '@182dplyt',
    href: 'https://line.me/ti/p/@182dplyt',
    type: 'line',
    label: 'COMM.LINK // LN',
  },
  {
    platformIcon: '/assets/LOGO TIKTOK.png',
    username: '@innofashionshow',
    href: 'https://tiktok.com/@innofashionshow',
    type: 'tiktok',
    label: 'COMM.LINK // TT',
  },
]

const InstagramIcon = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4.5"/>
    <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
  </svg>
)

export default function ContactPage() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const modelRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Model — slide in from left (Desktop) / bottom (Mobile)
      gsap.from(modelRef.current, {
        x: window.innerWidth > 600 ? -150 : 0,
        y: window.innerWidth <= 600 ? 100 : 0,
        opacity: 0,
        duration: 1.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      })

      // Title — slide in from right
      gsap.from(titleRef.current, {
        x: 120,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 55%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      })

      // Modern Cards Reveal — stagger fade up & blur (Biar sama kayak Timeline)
      const cardElements = cardsRef.current.filter((el): el is HTMLAnchorElement => el !== null)
      
      cardElements.forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 30, filter: 'blur(5px)' },
          {
            opacity: 1, y: 0, filter: 'blur(0px)',
            duration: 0.8, delay: i * 0.15, ease: 'power2.out',
            scrollTrigger: { 
              trigger: sectionRef.current, 
              start: 'top 50%', 
              toggleActions: 'play none none reverse' 
            }
          }
        )
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="contact-root" ref={sectionRef}>
      <div className="contact-content">

        {/* LEFT: Model */}
        <div className="contact-model" ref={modelRef}>
          <Image src="/assets/ASET ORANG SHADOW (KALO KURANG JELAS).png" alt="model shadow" fill className="model-img" />
          <Image src="/assets/DUST ABU.png" alt="dust" fill className="model-img dust-left" />
          <Image src="/assets/DUST KUNING.png" alt="dust" fill className="model-img dust-right" />
          <Image src="/assets/ASET ORANG.png" alt="model" fill className="model-img" />
        </div>

        {/* RIGHT: Content */}
        <div className="contact-right">
          <div className="contact-title-wrap" ref={titleRef}>
            <Image
              src="/assets/CONTACT US.png"
              alt="CONTACT US"
              fill
              style={{ objectFit: 'contain', objectPosition: 'center', top: '10%' }}
            />
          </div>

          <div className="contact-cards">
            {contacts.map((contact, i) => (
              <a
                key={contact.type}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                ref={el => { cardsRef.current[i] = el }}
                className="group relative p-5 md:p-7 border bg-[#1a1a1a]/40 backdrop-blur-md transition-all duration-500 hover:bg-[#1a1a1a]/80 block w-full overflow-hidden" 
                style={{ borderColor: '#494947' }}
              >
                {/* ✨ SHIMMER HOVER — subtle sweep saat hover (Identik Timeline) */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E2E2DE]/5 to-transparent -translate-x-[100%] group-hover:animate-shimmer pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex flex-col gap-2">
                    
                    {/* Index Protocol */}
                    <div className="flex items-center gap-3 mb-1">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#B7AC9B] group-hover:animate-pulse shadow-[0_0_8px_#B7AC9B]" />
                      <span className="text-[8px] md:text-[9px] font-bold tracking-[0.3em] text-[#B7AC9B] uppercase">
                        {contact.label}
                      </span>
                    </div>

                    {/* Username */}
                    <h3 className="text-sm md:text-[17px] font-black text-[#E2E2DE] tracking-widest uppercase" style={{ fontFamily: "'Creato Display', sans-serif" }}>
                      {contact.username}
                    </h3>

                  </div>

                  {/* Icon */}
                  <div className="w-8 h-8 md:w-10 md:h-10 relative opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 flex items-center justify-center flex-shrink-0">
                    {contact.type === 'instagram'
                      ? <InstagramIcon />
                      : <Image src={contact.platformIcon!} alt={contact.type} fill style={{ objectFit: 'contain' }} />
                    }
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* ─── Root ─────────────────────────────────────────── */
        .contact-root {
          width: 100vw;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background-color: transparent;
          font-family: var(--font-creato-title);
        }

        /* ─── Main layout ───────────────────────────────────── */
        .contact-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: row;
          height: 100vh;
        }

        /* ─── LEFT: Model ───────────────────────────────────── */
        .contact-model {
          flex: 0 0 45%;
          position: relative;
          height: 100%;
        }
        .model-img {
          object-fit: contain;
          object-position: bottom center;
        }
        .dust-left  { transform: translateX(-10%); }
        .dust-right { transform: translateX(15%); }

        /* ─── RIGHT: Content ────────────────────────────────── */
        .contact-right {
          flex: 0 0 50%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          padding-top: 2%;
          padding-left: 0;
          gap: 0;
        }

        /* ─── Title ─────────────────────────────────────────── */
        .contact-title-wrap {
          position: relative;
          width: 100%;
          height: clamp(120px, 26vh, 240px);
          margin-bottom: 3vh;
          align-self: flex-end;
        }

        /* ─── Cards container ───────────────────────────────── */
        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 85%;
          max-width: 480px;
          margin-top: 2vh;
        }

        /* ✨ Shimmer Animation (Tailwind integration) */
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }

        /* ─── TABLET (≤ 900px) ──────────────────────────────── */
        @media (max-width: 900px) {
          .contact-model { flex: 0 0 38%; }
          .contact-right {
            flex: 0 0 62%;
            padding-right: 24px;
            padding-top: 8%;
          }
          .contact-title-wrap {
            height: 100px;
            margin-bottom: 20px;
          }
          .contact-cards {
            width: 90%;
            max-width: 400px;
            gap: 16px;
            margin-top: 30px;
          }
        }

        /* ─── MOBILE (≤ 600px) ──────────────────────────────── */
        @media (max-width: 600px) {
          .contact-root { min-height: 100svh; }
          .contact-content {
            flex-direction: column;
            height: 100svh;
            overflow-x: hidden;
          }
          .contact-right {
            flex: none;
            width: 100%;
            padding: 40px 20px 20px;
            justify-content: flex-start;
            align-items: center;
            order: 1;
          }
          .contact-model {
            flex: none;
            width: 100vw;
            margin-left: 2px;
            height: 80vw;
            min-height: 300px;
            max-height: 500px;
            order: 2;
            overflow: hidden;
            margin-top: auto;
          }
          .model-img {
            object-fit: cover !important;
            object-position: top center !important;
          }
          .dust-left  { transform: translateX(0) scale(1.1) !important; }
          .dust-right { transform: translateX(0) scale(1.1) !important; }
          .contact-title-wrap {
            height: clamp(60px, 18vw, 100px);
            margin-bottom: 12px;
            align-self: center;
          }
          .contact-cards {
            width: 100%;
            max-width: 360px;
            gap: 14px;
            margin-top: 10px;
          }
        }

        /* ─── SMALL MOBILE (≤ 380px) ────────────────────────── */
        @media (max-width: 380px) {
          .contact-model { height: 100vw; min-height: 250px; }
          .contact-cards { width: 95%; }
        }
      `}</style>
    </div>
  )
}