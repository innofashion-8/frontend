import Link from "next/link";
import { useRef } from "react";

export const ShimmerCard = ({
  href,
  onClick,
  children,
  className = '',
}: {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}) => {
  const shimmerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    const el = shimmerRef.current;
    if (!el) return;
    el.style.transition = 'none';
    el.style.transform = 'skewX(-12deg) translateX(-150%)';
    // Force reflow
    void el.offsetWidth;
    el.style.transition = 'transform 1.5s ease-in-out';
    el.style.transform = 'skewX(-12deg) translateX(200%)';
  };

  const cardStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: '9999px',
    background: 'linear-gradient(180deg, rgba(85,85,85,0.75) 0%, rgba(20,20,20,0.95) 100%)',
    boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.25), 0 8px 24px rgba(0,0,0,0.55)',
    border: '1px solid rgba(255,255,255,0.12)',
    backdropFilter: 'blur(8px)',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'filter 0.25s ease',
  };

  const shimmerStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '150%',
    height: '100%',
    zIndex: 20,
    pointerEvents: 'none',
    transform: 'skewX(-12deg) translateX(-150%)',
    background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
  };

  const inner = (
    <>
      <div ref={shimmerRef} style={shimmerStyle} />
      <span style={{ position: 'relative', zIndex: 10, color: 'white', fontWeight: 900, fontStyle: 'italic', fontSize: 'clamp(13px, 1vw, 16px)', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} style={{ ...cardStyle, padding: '10px 28px' }} className={className} onMouseEnter={handleMouseEnter}>
        {inner}
      </Link>
    );
  }

  return (
    <button style={{ ...cardStyle, padding: '10px 28px' }} className={className} onClick={onClick} onMouseEnter={handleMouseEnter}>
      {inner}
    </button>
  );
};