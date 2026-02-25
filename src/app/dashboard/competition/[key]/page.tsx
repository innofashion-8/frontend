'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { competitionService } from '@/services/competition-service';
import toast from 'react-hot-toast';
import { themeColors } from '@/lib/theme';

export default function CompetitionRegisterPage() {
  const params = useParams();
  const router = useRouter();
  const key = params.key as string;

  const { data: competition, isLoading } = useQuery({
    queryKey: ['competition', key],
    queryFn: () => competitionService.getCompetition(key),
  });

  const [paymentFile, setPaymentFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!paymentFile) return toast.error('Harap upload bukti pembayaran terlebih dahulu.');
    if (!window.confirm('Yakin ingin submit final? Data tidak bisa diubah lagi.')) return;

    setIsSubmitting(true);
    try {
      await competitionService.submitFinal(key, paymentFile);
      toast.success('Pendaftaran lomba berhasil disubmit!');
      router.push('/dashboard'); 
    } catch (error: any) {
      if (error.isValidationError) setFormErrors(error.errors);
      toast.error(error.message || 'Pendaftaran gagal.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) return <div className="p-10 text-center font-bold" style={{ color: themeColors.primary }}>Memuat Detail...</div>;
  if (!competition) return <div className="p-10 text-center font-bold">Lomba tidak ditemukan.</div>;

  return (
    <div className="max-w-2xl mx-auto py-8">
      <button onClick={() => router.back()} className="mb-8 font-bold text-lg hover:underline" style={{ color: themeColors.textMuted }}>
        ← Kembali
      </button>

      <div 
        className="p-10 md:p-12 rounded-[3rem] shadow-xl border"
        style={{ backgroundColor: themeColors.cardBg, borderColor: themeColors.border }}
      >
        <h1 className="text-3xl md:text-4xl font-black mb-3" style={{ color: themeColors.textDark }}>Daftar {competition.name}</h1>
        <p className="mb-8 text-lg font-medium" style={{ color: themeColors.textMuted }}>Selesaikan pembayaran untuk mengunci slot pendaftaranmu.</p>

        <div className="border p-6 rounded-2xl mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4" style={{ backgroundColor: themeColors.bg, borderColor: themeColors.border }}>
          <span className="font-bold uppercase tracking-wide" style={{ color: themeColors.textMuted }}>Biaya Pendaftaran</span>
          <span className="text-3xl font-black" style={{ color: themeColors.primary }}>
            Rp {competition.registration_fee.toLocaleString('id-ID')}
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-sm font-bold mb-3 uppercase tracking-wide" style={{ color: themeColors.textDark }}>
              Upload Bukti Pembayaran (JPG/PNG/PDF) *
            </label>
            <input 
              type="file" accept=".jpg,.jpeg,.png,.pdf"
              onChange={(e) => setPaymentFile(e.target.files?.[0] || null)}
              className="w-full text-lg border-2 p-3 rounded-2xl cursor-pointer font-medium file:mr-6 file:py-3 file:px-6 file:rounded-xl file:border-0 file:font-bold transition-all"
              style={{ 
                backgroundColor: themeColors.bg, borderColor: themeColors.border, color: themeColors.textDark,
                // Mengakali warna tombol choose file default browser
                WebkitTextFillColor: themeColors.textDark
              }}
            />
            {formErrors?.payment_proof && <p className="text-red-500 text-sm mt-2 font-bold">⚠️ {formErrors.payment_proof[0]}</p>}
          </div>

          <button 
            type="submit" disabled={isSubmitting}
            className="w-full p-5 rounded-2xl font-black text-xl hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-50"
            style={{ backgroundColor: themeColors.primary, color: themeColors.cardBg }}
          >
            {isSubmitting ? 'Memproses...' : 'Submit Pendaftaran'}
          </button>
        </form>
      </div>
    </div>
  );
}