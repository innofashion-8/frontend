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
      className="min-h-screen flex flex-col items-center justify-center p-6 font-sans"
      style={{ backgroundColor: themeColors.bg }}
    >
      <div 
        className="w-full max-w-md p-8 md:p-12 rounded-[2rem] shadow-2xl border text-center"
        style={{ backgroundColor: themeColors.cardBg, borderColor: themeColors.border }}
      >
        <div className="mb-10">
          <h1 
            className="text-4xl font-black mb-3 tracking-tight"
            style={{ color: themeColors.textDark }}
          >
            Innofashion 8
          </h1>
          <p className="text-lg" style={{ color: themeColors.textMuted }}>
            Masuk untuk memulai perjalananmu.
          </p>
        </div>

        <button 
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-4 py-4 px-6 rounded-xl font-bold hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl"
          style={{ backgroundColor: themeColors.primary, color: themeColors.cardBg }}
        >
          <div className="bg-white p-1 rounded-full">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          </div>
          <span>{isLoading ? 'Menghubungkan...' : 'Lanjutkan dengan Google'}</span>
        </button>

        <p className="mt-8 text-sm p-4 rounded-xl border" style={{ backgroundColor: themeColors.bg, color: themeColors.textMuted, borderColor: themeColors.border }}>
          Mahasiswa UK Petra wajib menggunakan email <strong>@john.petra.ac.id</strong>
        </p>
      </div>
    </div>
  );
}