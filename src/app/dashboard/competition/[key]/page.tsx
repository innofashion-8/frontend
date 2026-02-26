'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { competitionService } from '@/services/competition-service';
import toast from 'react-hot-toast';
import { themeColors } from '@/lib/theme';

export default function CompetitionRegisterPage() {
  const params = useParams();
  const router = useRouter();
  const queryClient = useQueryClient();
  
  // Tangkap key dari URL
  const key = params?.key as string;

  const { data: competition, isLoading } = useQuery({
    queryKey: ['competition', key],
    queryFn: () => competitionService.getCompetition(key),
    enabled: !!key, 
  });

  const [paymentFile, setPaymentFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors(null);

    // Lomba WAJIB upload bukti bayar
    if (!paymentFile) {
      return toast.error('PAYMENT PROOF IS REQUIRED.');
    }

    if (!window.confirm('Are you sure you want to submit? Data cannot be changed later.')) return;

    setIsSubmitting(true);
    try {
      await competitionService.submitFinal(key, paymentFile);
      toast.success('Registration submitted successfully!');
      
      // Reset cache biar status pendaftaran di dashboard ke-update
      queryClient.invalidateQueries({ queryKey: ['competition', key] });
      router.push('/dashboard'); 
    } catch (error: any) {
      if (error.isValidationError) {
        setFormErrors(error.errors);
        toast.error('Please check your input.');
      } else {
        toast.error(error.message || 'Registration failed.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) return <div className="p-10 text-center font-bold tracking-widest uppercase" style={{ color: themeColors.textMain }}>SCANNING BATTLEFIELD...</div>;
  if (!competition) return <div className="p-10 text-center font-bold tracking-widest text-red-500 uppercase">COMPETITION NOT FOUND.</div>;

  return (
    <div className="max-w-3xl mx-auto py-8">
      <button onClick={() => router.back()} className="mb-8 font-bold text-sm tracking-widest uppercase hover:text-white transition-colors" style={{ color: themeColors.textMuted }}>
        ← RETURN
      </button>

      <div 
        className="p-10 md:p-12 border backdrop-blur-sm relative overflow-hidden"
        style={{ backgroundColor: themeColors.cardBg, borderColor: themeColors.border, borderRadius: '2rem' }}
      >
        <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl pointer-events-none">🏆</div>
        
        <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-widest relative z-10" style={{ color: themeColors.textMain }}>
          {competition.name || 'Unknown Competition'}
        </h1>
        <p className="mb-10 text-sm font-medium uppercase tracking-widest relative z-10" style={{ color: themeColors.textMuted }}>
          {competition.description || 'Secure your slot in this competition.'}
        </p>

        <div className="border p-6 rounded-2xl mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10" style={{ backgroundColor: themeColors.bg, borderColor: themeColors.border }}>
          <span className="font-bold uppercase tracking-widest text-sm" style={{ color: themeColors.textMuted }}>REGISTRATION FEE</span>
          <span className="text-3xl font-black" style={{ color: themeColors.primary }}>
            {/* Asumsi properti fee bernama registration_fee atau price */}
            Rp {Number(competition.registration_fee || competition.price || 0).toLocaleString('id-ID')}
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          <div>
            <label className="block text-sm font-bold mb-4 uppercase tracking-widest" style={{ color: themeColors.textMain }}>
              PAYMENT PROOF (JPG/PNG/PDF) *
            </label>
            <input 
              type="file" accept=".jpg,.jpeg,.png,.pdf"
              onChange={(e) => setDocumentFile(e.target.files?.[0] || null)}
              className="w-full text-sm border p-4 cursor-pointer file:mr-6 file:py-3 file:px-6 file:border-0 file:font-bold file:uppercase file:tracking-widest file:bg-white file:text-black hover:file:bg-gray-200 transition-all rounded-2xl"
              style={{ backgroundColor: themeColors.bg, borderColor: themeColors.border, color: themeColors.textMuted }}
            />
            {formErrors?.payment_proof && <p className="text-red-500 text-xs mt-3 font-bold uppercase tracking-widest">⚠️ {formErrors.payment_proof[0]}</p>}
          </div>

          <button 
            type="submit" disabled={isSubmitting}
            className="w-full p-6 font-black text-xl uppercase tracking-widest hover:-translate-y-1 transition-all disabled:opacity-50 rounded-2xl"
            style={{ backgroundColor: themeColors.primary, color: '#000', boxShadow: '0 0 20px rgba(190,190,191,0.2)' }}
          >
            {isSubmitting ? 'PROCESSING...' : 'SUBMIT PAYMENT'}
          </button>
        </form>
      </div>
    </div>
  );
}