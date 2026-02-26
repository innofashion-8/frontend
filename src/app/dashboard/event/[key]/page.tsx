'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { eventService } from '@/services/event-service';
import toast from 'react-hot-toast';
import { themeColors } from '@/lib/theme';

export default function EventRegisterPage() {
  const params = useParams();
  const router = useRouter();
  const queryClient = useQueryClient();
  
  const key = params?.key as string;

  const { data: eventData, isLoading } = useQuery({
    queryKey: ['event', key],
    queryFn: () => eventService.getEvent(key),
    enabled: !!key, 
  });

  const [paymentFile, setPaymentFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<any>(null);

  // Deteksi apakah event ini berbayar
  const isPaid = Number(eventData?.registration_fee || eventData?.price || 0) > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors(null);

    // Validasi: Kalau bayar, wajib ada file
    if (isPaid && !paymentFile) {
      return toast.error('PAYMENT PROOF IS REQUIRED FOR PAID EVENTS.');
    }

    if (!window.confirm('Are you sure you want to register for this event?')) return;

    setIsSubmitting(true);
    try {
      await eventService.submitFinal(key, paymentFile);
      toast.success('Successfully registered for the event!');
      
      queryClient.invalidateQueries({ queryKey: ['event', key] });
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

  if (isLoading) return <div className="p-10 text-center font-bold tracking-widest uppercase" style={{ color: themeColors.textMain }}>SCANNING EVENT...</div>;
  if (!eventData) return <div className="p-10 text-center font-bold tracking-widest text-red-500 uppercase">EVENT NOT FOUND.</div>;

  return (
    <div className="max-w-3xl mx-auto py-8">
      <button onClick={() => router.back()} className="mb-8 font-bold text-sm tracking-widest uppercase hover:text-white transition-colors" style={{ color: themeColors.textMuted }}>
        ← RETURN
      </button>

      <div 
        className="p-10 md:p-12 border backdrop-blur-sm relative overflow-hidden"
        style={{ backgroundColor: themeColors.cardBg, borderColor: themeColors.border, borderRadius: '2rem' }}
      >
        <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl pointer-events-none">🎟️</div>
        
        <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-widest relative z-10" style={{ color: themeColors.textMain }}>
          {eventData.name || 'Unknown Event'}
        </h1>
        <p className="mb-10 text-sm font-medium uppercase tracking-widest relative z-10" style={{ color: themeColors.textMuted }}>
          {eventData.description || 'Join our spectacular event.'}
        </p>

        <div className="border p-6 rounded-2xl mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10" style={{ backgroundColor: themeColors.bg, borderColor: themeColors.border }}>
          <span className="font-bold uppercase tracking-widest text-sm" style={{ color: themeColors.textMuted }}>TICKET PRICE</span>
          <span className="text-3xl font-black" style={{ color: isPaid ? themeColors.primary : '#4ade80' }}>
            {isPaid ? `Rp ${Number(eventData.registration_fee || eventData.price).toLocaleString('id-ID')}` : 'FREE'}
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          
          {/* Cuma tampilin Upload File kalau event-nya BAYAR */}
          {isPaid && (
            <div>
              <label className="block text-sm font-bold mb-4 uppercase tracking-widest" style={{ color: themeColors.textMain }}>
                PAYMENT PROOF (JPG/PNG/PDF) *
              </label>
              <input 
                type="file" accept=".jpg,.jpeg,.png,.pdf"
                onChange={(e) => setPaymentFile(e.target.files?.[0] || null)}
                className="w-full text-sm border p-4 cursor-pointer file:mr-6 file:py-3 file:px-6 file:border-0 file:font-bold file:uppercase file:tracking-widest file:bg-white file:text-black hover:file:bg-gray-200 transition-all rounded-2xl"
                style={{ backgroundColor: themeColors.bg, borderColor: themeColors.border, color: themeColors.textMuted }}
              />
              {formErrors?.payment_proof && <p className="text-red-500 text-xs mt-3 font-bold uppercase tracking-widest">⚠️ {formErrors.payment_proof[0]}</p>}
            </div>
          )}

          <button 
            type="submit" disabled={isSubmitting}
            className="w-full p-6 font-black text-xl uppercase tracking-widest hover:-translate-y-1 transition-all disabled:opacity-50 rounded-2xl"
            style={{ 
              backgroundColor: isPaid ? themeColors.primary : themeColors.textMain, 
              color: isPaid ? '#000' : themeColors.bg, 
              boxShadow: isPaid ? '0 0 20px rgba(190,190,191,0.2)' : '0 0 20px rgba(255,255,255,0.2)' 
            }}
          >
            {isSubmitting ? 'PROCESSING...' : (isPaid ? 'SUBMIT PAYMENT' : 'REGISTER NOW')}
          </button>
        </form>
      </div>
    </div>
  );
}