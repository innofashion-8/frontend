'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { eventService } from '@/services/event-service';
import toast from 'react-hot-toast';
import Beams from '@/components/ui/Beams';
import Swal from 'sweetalert2'

// INJEKSI COLOR PALETTE DYSTOPIAN
const palette = {
  onyx: '#1C1C1B',
  obsidian: '#1a1a1a',
  walnut: '#6A5D52',
  greige: '#B7AC9B',
  ash: '#979086',
  stucco: '#E2E2DE',
  graphite: '#494947',
  gravel: '#7b787a'
};

export default function EventRegisterPage() {
  const params = useParams();
  const router = useRouter();
  const queryClient = useQueryClient();
  
  const key = params?.key as string;

  // 🔥 TARIK DATA EVENT DARI DATABASE BERDASARKAN SLUG 🔥
  const { data: event, isLoading } = useQuery({
    queryKey: ['event', key],
    queryFn: () => eventService.getEvent(key),
    enabled: !!key, 
  });

  const [paymentFile, setPaymentFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<any>(null);

  // Deteksi Event Berbayar / Gratis dari Database
  const isPaid = event ? Number(event.price) > 0 : false;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors(null);

    if (!paymentFile) {
      return toast.error('PAYMENT PROOF IS REQUIRED.', {
        style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` }
      });
    }

    // 🔥 GANTI WINDOW.CONFIRM JADI SWEETALERT DYSTOPIAN 🔥
    const confirmation = await Swal.fire({
      icon: 'warning',
      title: 'INITIATE PROTOCOL?',
      text: 'Are you sure you want to submit? Data cannot be altered later.',
      background: palette.onyx,
      color: palette.stucco,
      showCancelButton: true,
      confirmButtonColor: palette.walnut,
      cancelButtonColor: palette.graphite,
      confirmButtonText: 'SECURE PASS',
      cancelButtonText: 'ABORT',
      customClass: {
        popup: 'border border-[#7b787a] rounded-none',
        title: 'font-black tracking-[0.2em] uppercase text-xl',
        confirmButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2',
        cancelButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2'
      }
    });

    if (!confirmation.isConfirmed) return; // Kalau user klik ABORT, stop di sini

    setIsSubmitting(true);
    try {
      await eventService.submitFinal(key, paymentFile);
      toast.success('Registration protocol submitted successfully!', {
        style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` }
      });
      
      queryClient.invalidateQueries({ queryKey: ['competition', key] });
      router.push('/dashboard/competition'); 
    } catch (error: any) {
      if (error.isValidationError) {
        const validationErrors = error.errors;

        if (validationErrors.status) {
          Swal.fire({
            title: 'ACCESS RESTRICTED',
            text: validationErrors.status[0],
            icon: 'warning',
            background: palette.onyx,
            color: palette.stucco,
            confirmButtonColor: palette.walnut,
            confirmButtonText: 'RETURN TO TERMINAL',
            customClass: {
              popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]', 
              title: 'font-black tracking-[0.2em]',
            }
          }).then(() => {
            router.push('/dashboard');
          });
        } 
        
        else {
          setFormErrors(validationErrors);
          
          Swal.fire({
            title: 'DATA REJECTED',
            text: 'Data entry protocol rejected. Please verify your clearance fee proof.',
            icon: 'error',
            background: palette.onyx,
            color: palette.stucco,
            confirmButtonColor: '#ef4444',
            confirmButtonText: 'RECALIBRATE',
            customClass: {
              popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]', 
              title: 'font-black tracking-[0.2em]',
            }
          });
        }

      } else {
        Swal.fire({
          title: 'SYSTEM FAILURE',
          text: error.message || 'Registration protocol failed to execute.',
          icon: 'error',
          background: palette.onyx,
          color: palette.stucco,
          confirmButtonColor: '#ef4444',
          confirmButtonText: 'ACKNOWLEDGE',
          customClass: {
            popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]', 
            title: 'font-black tracking-[0.2em]',
          }
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) return <div className="min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase animate-pulse bg-[#0a0a0a]" style={{ color: palette.ash }}>DECRYPTING PROTOCOL...</div>;
  if (!event) return <div className="min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase bg-[#0a0a0a]" style={{ color: palette.ash }}>SYSTEM NOTICE: EVENT PROTOCOL NOT FOUND.</div>;

  return (
    <div className="relative py-12 min-h-screen bg-[#0a0a0a]">
      {/* Background Beams di Layout Utama, jadi gak perlu dirender lagi di sini kalau lu udah pasang di layout */}
      
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <button onClick={() => router.back()} className="mb-12 font-bold text-xs tracking-[0.3em] uppercase transition-colors flex items-center gap-3 hover:text-white" style={{ color: palette.ash }}>
          <span className="w-8 h-[1px] block transition-all" style={{ backgroundColor: palette.ash }}></span> ABORT ENTRY
        </button>

        <div className="p-10 md:p-14 border backdrop-blur-md relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{ backgroundColor: palette.onyx, borderColor: palette.graphite, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}>
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
            <span className="text-9xl font-black italic" style={{ color: palette.stucco }}>E</span>
          </div>
          
          <div className="flex items-center gap-3 mb-6 relative z-10">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: palette.stucco, boxShadow: `0 0 10px ${palette.stucco}` }}></span>
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: palette.ash }}>PASS GENERATION PROTOCOL</p>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-widest relative z-10" style={{ color: palette.stucco }}>
            {event.title || 'UNKNOWN EVENT'}
          </h1>
          <p className="mb-10 text-sm font-medium tracking-wide leading-relaxed relative z-10" style={{ color: palette.ash }}>
            {event.description || 'Secure your pass for this exclusive gathering.'}
          </p>

          <div className="border p-8 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 relative z-10" style={{ backgroundColor: palette.obsidian, borderColor: palette.graphite }}>
            <div>
              <p className="text-[10px] tracking-[0.2em] mb-2 uppercase" style={{ color: palette.ash }}>CLEARANCE FEE</p>
              <span className="text-3xl font-black tracking-widest" style={{ color: isPaid ? palette.stucco : palette.greige }}>
                {isPaid ? `Rp ${Number(event.price).toLocaleString('id-ID')}` : 'NO CHARGE'}
              </span>
            </div>
            <div className="text-right hidden md:block">
                <p className="text-[10px] tracking-[0.2em] mb-2 uppercase" style={{ color: palette.ash }}>SYSTEM STATUS</p>
                <div className="text-xs font-bold uppercase tracking-widest" style={{ color: palette.greige }}>
                    {isPaid ? 'AWAITING PAYMENT' : 'READY TO SECURE'}
                </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
            {isPaid && (
              <div>
                <label className="block text-[10px] font-bold mb-4 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>
                  PAYMENT PROOF (JPG/PNG/PDF) *
                </label>
                {/* INI UDAH DIJAMIN BENER PAKAI setPaymentFile */}
                <input 
                  type="file" accept=".jpg,.jpeg,.png,.pdf"
                  onChange={(e) => setPaymentFile(e.target.files?.[0] || null)}
                  className="w-full text-sm border p-4 cursor-pointer file:mr-6 file:py-3 file:px-6 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none focus:border-white/50"
                  style={{ backgroundColor: palette.obsidian, borderColor: formErrors?.payment_proof ? '#ef4444' : palette.graphite, color: palette.ash }}
                />
                {formErrors?.payment_proof && <p className="text-red-500 text-[10px] mt-3 font-bold uppercase tracking-[0.2em]">⚠️ {formErrors.payment_proof[0]}</p>}
              </div>
            )}

            <button 
              type="submit" disabled={isSubmitting}
              className="w-full py-5 font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
              style={{ backgroundColor: palette.stucco, color: palette.onyx, boxShadow: `0 0 15px ${palette.greige}40` }}
            >
              {isSubmitting ? 'GENERATING PASS...' : 'OBTAIN PASS NOW'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}