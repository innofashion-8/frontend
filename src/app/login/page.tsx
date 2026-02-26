'use client';

import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { themeColors } from '@/lib/theme';

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') router.push('/dashboard');
  }, [status, router]);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    await signIn('google-user', { callbackUrl: '/dashboard' });
  };

  if (status === 'loading') return null;

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden"
      // Pasang gambar background bergelombang lu di sini
      style={{ 
        backgroundColor: themeColors.bg,
        backgroundImage: "url('/assets/BACKGROUND.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Efek Dust (Opsional, kalau lu jadi pakai) */}
      {/* <div className="absolute inset-0 bg-[url('/assets/dust.png')] opacity-40 mix-blend-screen pointer-events-none"></div> */}

      <div 
        className="w-full max-w-md p-10 md:p-12 rounded-[2.5rem] text-center relative z-10 backdrop-blur-md border border-white/10"
        style={{ backgroundColor: themeColors.cardBg }}
      >
        <div className="mb-12">
          {/* Teks dengan efek Glow Putih seperti di gambar */}
          <h1 
            className="text-4xl md:text-5xl font-black mb-2 tracking-widest uppercase"
            style={{ 
              color: themeColors.textMain, 
              textShadow: '0 0 20px rgba(255,255,255,0.6)' 
            }}
          >
            INNOFASHION
          </h1>
          <p className="text-sm tracking-widest uppercase font-medium mt-4" style={{ color: themeColors.textMuted }}>
            Enter the Dystopia
          </p>
        </div>

        <button 
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-4 py-4 px-8 rounded-full font-bold uppercase tracking-widest hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 text-black shadow-[0_0_15px_rgba(190,190,191,0.3)] hover:shadow-[0_0_25px_rgba(190,190,191,0.6)]"
          style={{ backgroundColor: themeColors.primary }}
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 bg-white rounded-full p-0.5" />
          <span className="text-sm">{isLoading ? 'CONNECTING...' : 'SIGN IN WITH GOOGLE'}</span>
        </button>

        <p className="mt-8 text-xs p-4 rounded-xl border border-white/20" style={{ color: themeColors.textMuted }}>
          PCU Students must use <strong>@john.petra.ac.id</strong>
        </p>
      </div>
    </div>
  );
}