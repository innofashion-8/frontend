'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { profileService } from '@/services/user-service'; 
import toast from 'react-hot-toast';
import { themeColors } from '@/lib/theme';

export default function CompleteRegistrationPage() {
  const router = useRouter();
  const { data: statusData, isLoading: isLoadingStatus } = useQuery({
      queryKey: ['profileStatus'],
      queryFn: profileService.checkStatus,
  });

  const [whatsapp, setWhatsapp] = useState('');
  const [lineId, setLineId] = useState('');
  const [school, setSchool] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (statusData?.is_completed) router.push('/dashboard');
    if (statusData?.draft_data) {
      setWhatsapp(statusData.draft_data.whatsapp || '');
      setLineId(statusData.draft_data.line_id || '');
      setSchool(statusData.draft_data.asal_sekolah || '');
    }
  }, [statusData, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await profileService.submitProfile({ whatsapp, line_id: lineId, asal_sekolah: school } as any); 
      toast.success('Pendaftaran berhasil dilengkapi!');
      window.location.href = '/dashboard';
    } catch (error: any) {
      toast.error(error.isValidationError ? 'Cek kembali form Anda.' : error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoadingStatus || statusData?.is_completed) return null;

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ backgroundColor: themeColors.bg }}>
      <div 
        className="w-full max-w-lg p-10 md:p-12 rounded-[2.5rem] shadow-xl border" 
        style={{ backgroundColor: themeColors.cardBg, borderColor: themeColors.border }}
      >
        <h1 className="text-3xl md:text-4xl font-black mb-3" style={{ color: themeColors.textDark }}>Lengkapi Profil ✍️</h1>
        <p className="mb-10 text-lg font-medium" style={{ color: themeColors.textMuted }}>Satu langkah lagi untuk bisa memilih acara.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: 'Nomor WhatsApp *', val: whatsapp, set: setWhatsapp, req: true, ph: '08123456789' },
            { label: 'ID Line (Opsional)', val: lineId, set: setLineId, req: false, ph: 'john.doe' },
            { label: 'Asal Sekolah / Kampus *', val: school, set: setSchool, req: true, ph: 'Universitas Kristen Petra' },
          ].map((field, idx) => (
            <div key={idx}>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wide" style={{ color: themeColors.textDark }}>{field.label}</label>
              <input 
                type="text" 
                required={field.req}
                placeholder={field.ph}
                value={field.val} 
                onChange={(e) => field.set(e.target.value)} 
                className="w-full border-2 p-4 rounded-xl focus:outline-none focus:ring-4 transition-all font-medium" 
                style={{ 
                  backgroundColor: themeColors.bg, 
                  borderColor: themeColors.border, 
                  color: themeColors.textDark,
                  outlineColor: themeColors.primaryHover
                }}
              />
            </div>
          ))}

          <button 
            type="submit" disabled={isLoading}
            className="w-full p-4 rounded-xl font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all mt-6 disabled:opacity-50"
            style={{ backgroundColor: themeColors.primary, color: themeColors.cardBg }}
          >
            {isLoading ? 'Menyimpan...' : 'Simpan & Lanjutkan 🚀'}
          </button>
        </form>
      </div>
    </div>
  );
}