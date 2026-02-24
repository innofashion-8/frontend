'use client'

import Image from 'next/image'

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
    href: '#',
    type: 'line',
  },
  {
    platformIcon: '/assets/LOGO TIKTOK.png',
    username: '@innofashionshow',
    href: 'https://tiktok.com/@innofashionshow',
    type: 'tiktok',
  },
  {
    platformIcon: '/assets/Layer 13.png',
    username: 'innofashionshow@gmail.com',
    href: 'mailto:innofashionshow@gmail.com',
    type: 'email',
  },
]

const InstagramIcon = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4.5"/>
    <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
  </svg>
)

const EmailIcon = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <polyline points="2,4 12,13 22,4"/>
  </svg>
)

export default function ContactPage() {
  return (
    <div className="contact-root">

      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image src="/assets/Layer 31.png" alt="background" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
      </div>

      <div style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none', background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.40) 100%)' }} />

      <div className="contact-content">

        <div className="contact-model animate-fade-in-left">
          <Image
            src="/assets/DUST ABU.png"
            alt="dust"
            fill
            style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
          />
          <Image
            src="/assets/DUST KUNING.png"
            alt="dust"
            fill
            style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
          />
          <Image
            src="/assets/ASET ORANG SHADOW (KALO KURANG JELAS).png"
            alt="model shadow"
            fill
            style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
          />
          <Image
            src="/assets/ASET ORANG.png"
            alt="model"
            fill
            style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
          />
        </div>

        <div className="contact-right">
          <div className="contact-title-wrap animate-fade-in-right">
            <Image
              src="/assets/CONTACT US.png"
              alt="CONTACT US"
              fill
              style={{ objectFit: 'contain', objectPosition: 'center' }}
            />
          </div>

          <div className="contact-cards">
            {contacts.map((contact, i) => (
              <a
                key={contact.type}
                href={contact.href}
                className="contact-card animate-fade-in-right"
                style={{ animationDelay: `${0.1 + i * 0.12}s` }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'rgba(80,80,80,0.75)'
                  el.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'rgba(50,50,50,0.62)'
                  el.style.transform = 'translateY(0)'
                }}
              >
                <div className="card-shine" />
                <div className="card-icon">
                  {contact.type === 'instagram' ? (
                    <InstagramIcon />
                  ) : contact.type === 'email' ? (
                    <EmailIcon />
                  ) : (
                    <Image src={contact.platformIcon!} alt={contact.type} fill style={{ objectFit: 'contain' }} />
                  )}
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
          background-color: #1a1a1a;
          font-family: 'Helvetica Neue', Arial, sans-serif;
        }

        /* ─── Main layout ───────────────────────────────────── */
        .contact-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: row;        /* desktop: side by side */
          height: 100vh;
        }

        /* ─── LEFT: Model ───────────────────────────────────── */
        .contact-model {
          flex: 0 0 40%;
          position: relative;
          height: 100%;
        }

        /* ─── RIGHT: Content ────────────────────────────────── */
        .contact-right {
          flex: 0 0 60%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          padding-top: 8%;
          padding-right: 40px;
          padding-left: 0;
          gap: 0;
        }

        /* ─── Title ─────────────────────────────────────────── */
        .contact-title-wrap {
          position: relative;
          width: 100%;
          height: clamp(90px, 18vh, 170px);
          margin-bottom: 3vh;
          align-self: flex-end;
        }

        /* ─── Cards container ───────────────────────────────── */
        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: clamp(8px, 1.5vh, 14px);
          width: 75%;
          max-width: 380px;
        }

        /* ─── Single Card ───────────────────────────────────── */
        .contact-card {
          opacity: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          padding: clamp(8px, 1.4vh, 16px) 24px;
          background: rgba(50, 50, 50, 0.62);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.12), 0 6px 24px rgba(0,0,0,0.35);
          cursor: pointer;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }

        .card-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 55%);
          border-radius: 50px;
          pointer-events: none;
        }

        .card-icon {
          width: clamp(28px, 4vw, 40px);
          height: clamp(28px, 4vw, 40px);
          position: relative;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-username {
          color: rgba(255, 255, 255, 0.88);
          font-size: clamp(10px, 1.2vw, 14px);
          letter-spacing: 0.02em;
          font-weight: 400;
          text-align: center;
          line-height: 1.2;
        }

        /* ─── Animations ────────────────────────────────────── */
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left  { animation: fadeInLeft  0.8s ease forwards; }
        .animate-fade-in-right { animation: fadeInRight 0.8s ease forwards; }

        /* ─── TABLET (≤ 900px): kompres layout ─────────────── */
        @media (max-width: 900px) {
          .contact-model { flex: 0 0 38%; }
          .contact-right {
            flex: 0 0 62%;
            padding-right: 24px;
            padding-top: 6%;
          }
          .contact-title-wrap { height: clamp(70px, 14vh, 120px); }
          .contact-cards { width: 85%; max-width: 320px; }
          .card-username { font-size: clamp(10px, 1.6vw, 13px); }
        }

        /* ─── MOBILE (≤ 600px): stack vertikal ─────────────── */
        @media (max-width: 600px) {
          .contact-root { min-height: 100dvh; }

          .contact-content {
            flex-direction: column;      /* stack vertikal */
            height: auto;
            min-height: 100dvh;
          }

          /* Model di atas, lebih kecil */
          .contact-model {
            flex: none;
            width: 100%;
            height: 42vw;               /* proporsional sama width */
            min-height: 180px;
            max-height: 280px;
          }

          /* Konten di bawah model */
          .contact-right {
            flex: none;
            width: 100%;
            padding: 16px 20px 32px;
            justify-content: flex-start;
            align-items: center;
          }

          .contact-title-wrap {
            height: clamp(60px, 18vw, 100px);
            margin-bottom: 16px;
            align-self: center;
          }

          .contact-cards {
            width: 92%;
            max-width: 340px;
          }

          .contact-card {
            padding: 10px 20px;
            gap: 4px;
          }

          .card-icon {
            width: 28px;
            height: 28px;
          }

          .card-username { font-size: clamp(9px, 3.2vw, 13px); }
        }

        /* ─── SMALL MOBILE (≤ 380px) ────────────────────────── */
        @media (max-width: 380px) {
          .contact-model { height: 38vw; min-height: 150px; }
          .contact-cards { width: 96%; }
          .card-username { font-size: 10px; }
        }
      `}</style>
    </div>
  )
}