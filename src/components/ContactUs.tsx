'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const contacts = [
  {
    platformIcon: null,
    username: '@innofashionshow.pcu',
    href: 'https://instagram.com/innofashionshow.pcu',
    type: 'instagram',
  },
  {
    platformIcon: '/assets/LOGO LINE.png',
    username: '@182dplyt',
    href: 'https://line.me/ti/p/@182dplyt',
    type: 'line',
  },
  {
    platformIcon: '/assets/LOGO TIKTOK.png',
    username: '@innofashionshow',
    href: 'https://tiktok.com/@innofashionshow',
    type: 'tiktok',
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
  const shimmersRef = useRef<(HTMLDivElement | null)[]>([])

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

      // Cards — staggered fade + shimmer reveal saat masuk
      const cardElements = cardsRef.current.filter((el): el is HTMLAnchorElement => el !== null)
      const shimmerElements = shimmersRef.current.filter((el): el is HTMLDivElement => el !== null)

      gsap.set(cardElements, { opacity: 0 })
      gsap.set(shimmerElements, { xPercent: -150 })

      cardElements.forEach((card, i) => {
        const shimmer = shimmerElements[i]

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 50%',
          toggleActions: 'play none none reverse',
          onEnter: () => {
            // Fade in kartu
            gsap.to(card, {
              opacity: 1,
              duration: 0.5,
              delay: i * 0.15,
              ease: 'power2.out',
            })

            // Shimmer sweep bold — identik dengan Competition
            if (shimmer) {
              gsap.set(shimmer, { xPercent: -150 })
              gsap.to(shimmer, {
                xPercent: 150,
                duration: 1.6,
                delay: i * 0.15 + 0.1,
                ease: 'power2.inOut',
              })
            }
          },
          onLeaveBack: () => {
            gsap.to(card, { opacity: 0, duration: 0.3, ease: 'power2.in' })
            if (shimmer) gsap.set(shimmer, { xPercent: -150 })
          },
        })
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
                className="contact-card group"
                ref={el => { cardsRef.current[i] = el }}
              >
                {/* ✨ SHIMMER REVEAL — bold, identik Competition */}
                <div
                  ref={el => { shimmersRef.current[i] = el }}
                  className="shimmer-reveal"
                />

                {/* Shimmer HOVER — subtle, menyapu saat hover */}
                <div className="shimmer-hover" />

                <div className="card-icon">
                  {contact.type === 'instagram'
                    ? <InstagramIcon />
                    : <Image src={contact.platformIcon!} alt={contact.type} fill style={{ objectFit: 'contain' }} />
                  }
                </div>
                <span className="card-username">{contact.username}</span>
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
          margin-bottom: 6vh;
          align-self: flex-end;
        }

        /* ─── Cards container ───────────────────────────────── */
        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 75%;
          max-width: 420px;
          margin-top: 5vh;
        }

        /* ─── Card — gaya Competition ───────────────────────── */
        .contact-card {
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 14px;
          padding: clamp(14px, 1.6vh, 22px) 28px;
          border-radius: 2rem;
          overflow: hidden;
          cursor: pointer;
          text-decoration: none;
          background: linear-gradient(180deg, rgba(85,85,85,0.7) 0%, rgba(30,30,30,0.9) 100%);
          box-shadow: inset 0 2px 4px rgba(255,255,255,0.3), 0 10px 30px rgba(0,0,0,0.6);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: filter 0.3s ease;
        }
        .contact-card:hover {
          filter: brightness(1.15);
        }

        /* ✨ Shimmer REVEAL — bold & terang (digerakkan GSAP) */
        .shimmer-reveal {
          position: absolute;
          top: 0;
          /* -inset-full trick: left = -100% agar width 150% bisa sweep penuh */
          left: -100%;
          width: 150%;
          height: 100%;
          z-index: 20;
          pointer-events: none;
          transform: skewX(-12deg);
          background: linear-gradient(
            to right,
            transparent               0%,
            rgba(255,255,255,0.04)    20%,
            rgba(255,255,255,0.12)    38%,
            rgba(255,255,255,0.25)    50%,
            rgba(255,255,255,0.12)    62%,
            rgba(255,255,255,0.04)    80%,
            transparent               100%
          );
          
        }

        /* Shimmer HOVER — subtle, CSS transition */
        .shimmer-hover {
          position: absolute;
          top: 0;
          left: -100%;
          width: 150%;
          height: 100%;
          z-index: 20;
          pointer-events: none;
          transform: skewX(-12deg) translateX(-150%);
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255,255,255,0.15) 50%,
            transparent 100%
          );
          transition: transform 1.5s ease-in-out;
        }
        .contact-card:hover .shimmer-hover {
          transform: skewX(-12deg) translateX(200%);
        }

        /* ─── Icon ──────────────────────────────────────────── */
        .card-icon {
          width: clamp(28px, 4vw, 44px);
          height: clamp(28px, 4vw, 44px);
          position: relative;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        /* ─── Username ──────────────────────────────────────── */
        .card-username {
          color: rgba(255,255,255,0.9);
          font-size: clamp(11px, 1.2vw, 15px);
          font-weight: 700;
          letter-spacing: 0.06em;
          font-style: italic;
          text-transform: uppercase;
          text-align: left;
          line-height: 1.2;
          z-index: 10;
          position: relative;
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
            width: 85%;
            max-width: 340px;
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
            margin-bottom: 24px;
            align-self: center;
          }
          .contact-cards {
            width: 100%;
            max-width: 320px;
            gap: 14px;
            margin-top: 10px;
          }
          .contact-card { padding: 12px 20px; }
          .card-icon { width: 28px; height: 28px; }
          .card-username { font-size: clamp(10px, 3.5vw, 13px); }
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