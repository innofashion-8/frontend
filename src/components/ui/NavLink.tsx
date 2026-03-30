export const NavLink = ({ label, onClick }: { label: string; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0', color: 'white' }}
      className="nav-link-item"
    >
      <span style={{ fontWeight: 900, fontStyle: 'italic', fontSize: 'clamp(13px, 1.1vw, 17px)', letterSpacing: '-0.02em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
        {label}
      </span>
      {/* Underline gradient */}
      <span className="nav-underline" />
      <style>{`
        .nav-link-item .nav-underline {
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 100%;
          height: 2px;
          border-radius: 99px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.9), transparent);
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          transform-origin: center;
        }
        .nav-link-item:hover .nav-underline {
          transform: translateX(-50%) scaleX(1);
        }
        .nav-link-item:hover span:first-child {
          color: rgba(255,255,255,0.75);
          transition: color 0.2s ease;
        }
      `}</style>
    </button>
  );
};