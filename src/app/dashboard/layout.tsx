'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { profileService } from '@/services/user-service';
import { useSession } from 'next-auth/react';
import { themeColors } from '@/lib/theme';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { status: sessionStatus } = useSession();

  const { data: statusData, isLoading } = useQuery({
    queryKey: ['profileStatus'],
    queryFn: profileService.checkStatus,
    enabled: sessionStatus === 'authenticated', 
  });

  useEffect(() => {
    if (statusData && !statusData.is_completed) router.push('/registration'); 
  }, [statusData, router]);

  if (isLoading || sessionStatus === 'loading' || !statusData?.is_completed) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: themeColors.bg }}>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin mb-4" style={{ borderColor: themeColors.primary, borderTopColor: 'transparent' }}></div>
          <p className="font-bold text-lg animate-pulse" style={{ color: themeColors.primary }}>Memuat Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: themeColors.bg }}>
      <main className="max-w-6xl mx-auto p-6 md:p-10">
        {children}
      </main>
    </div>
  );
}