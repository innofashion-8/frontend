'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { userService } from '@/services/user-service'; 
import { useSession } from 'next-auth/react';
import Swal from 'sweetalert2'; 
import { themeColors } from '@/lib/theme';

export function CompleteProfileForm() {
  const router = useRouter(); 
  const { data: session, update } = useSession();
  const userType = session?.user?.userType; 
  const queryClient = useQueryClient();

  const { data: statusData, isLoading: isLoadingStatus } = useQuery({
      queryKey: ['profileStatus'],
      queryFn: userService.checkStatus,
  });

  const [phone, setPhone] = useState('');
  const [line, setLine] = useState(''); 
  const [major, setMajor] = useState('');
  const [documentFile, setDocumentFile] = useState<File | null>(null);
  const [nrp, setNrp] = useState('');
  const [batch, setBatch] = useState('');
  const [institution, setInstitution] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<any>(null);

  // 1. 🔥 JURUS AUTO-HEAL SINKRONISASI 🔥
  useEffect(() => {
    // Kalau Laravel bilang udah komplit...
    if (statusData?.is_completed) {
      // Tapi NextAuth masih nganggap belum...
      if (session?.user?.is_profile_complete !== true) {
        console.log("[SYSTEM] Sinkronisasi Token...");
        update({ is_profile_complete: true }).then(() => {
          window.location.href = '/dashboard';
        });
      } else {
        // Kalau udah sinkron dua-duanya
        router.push('/dashboard');
      }
      return; 
    }
    
    // Tarik Draft
    const data = statusData as any;
    if (data?.draft_data) {
      setPhone(data.draft_data.phone || '');
      setLine(data.draft_data.line || ''); 
      setMajor(data.draft_data.major || '');
      setNrp(data.draft_data.nrp || '');
      setBatch(data.draft_data.batch || '');
      setInstitution(data.draft_data.institution || '');
    }
  }, [statusData, session, router, update]);

  // 2. AUTO-SAVE DRAFT 
  useEffect(() => {
    if (isLoadingStatus || statusData?.is_completed) return;

    const timer = setTimeout(() => {
      if (phone || line || major || nrp || batch || institution) {
        const draftForm = new FormData();
        if (phone) draftForm.append('draft_data[phone]', phone);
        if (line) draftForm.append('draft_data[line]', line);
        if (major) draftForm.append('draft_data[major]', major);
        if (nrp) draftForm.append('draft_data[nrp]', nrp);
        if (batch) draftForm.append('draft_data[batch]', batch);
        if (institution) draftForm.append('draft_data[institution]', institution);

        userService.saveDraft(draftForm).catch(() => {});
      }
    }, 2000); 

    return () => clearTimeout(timer);
  }, [phone, line, major, nrp, batch, institution, isLoadingStatus, statusData]);

  // 3. Handle Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors(null);

    if (!documentFile) {
      return Swal.fire({
        icon: 'warning',
        title: 'FILE MISSING',
        text: `Please upload your ${userType === 'INTERNAL' ? 'KTM' : 'ID Card'}!`,
        background: themeColors.cardBg,
        color: themeColors.textMain,
        confirmButtonColor: themeColors.primary
      });
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('phone', phone);
      if (line) formData.append('line', line); 
      formData.append('major', major);

      if (userType === 'INTERNAL') {
        formData.append('nrp', nrp);
        formData.append('batch', batch);
        formData.append('ktm_path', documentFile); 
        formData.append('institution', 'Petra Christian University'); 
      } else {
        formData.append('institution', institution);
        formData.append('id_card_path', documentFile); 
      }

      // Submit ke API
      await userService.submitProfile(formData as any); 

      // Reset memori cache API
      await queryClient.invalidateQueries({ queryKey: ['profileStatus'] });
      
      // 🔥 UPDATE TOKEN SEKARANG JUGA! 🔥
      await update({ is_profile_complete: true });
      
      // Kasih delay pake Swal buat memastikan cookie nyangkut
      await Swal.fire({
        icon: 'success',
        title: 'ACCESS GRANTED',
        text: 'Profile completed successfully!',
        background: themeColors.cardBg,
        color: themeColors.textMain,
        timer: 1500,
        showConfirmButton: false
      });

      // Banting pintu masuk dashboard!
      window.location.href = '/dashboard';
      
    } catch (error: any) {
      if (error.isValidationError) {
        setFormErrors(error.errors);
        Swal.fire({
          icon: 'error',
          title: 'ACCESS DENIED',
          text: 'Please check your inputs! Some data are invalid.',
          background: themeColors.cardBg,
          color: themeColors.textMain,
          confirmButtonColor: themeColors.primary
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'SYSTEM ERROR',
          text: error.message || 'Failed to submit profile.',
          background: themeColors.cardBg,
          color: themeColors.textMain,
          confirmButtonColor: themeColors.primary
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoadingStatus || statusData?.is_completed || !userType) return null;

  return (
    <div className="w-full max-w-xl relative z-10 flex flex-col items-center my-10 backdrop-blur-sm p-8 rounded-3xl border border-white/10" style={{ backgroundColor: themeColors.cardBg }}>
      <h1 
        className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-widest text-center" 
        style={{ color: themeColors.textMain, textShadow: '0 0 25px rgba(255,255,255,0.8)' }}
      >
        COMPLETE PROFILE
      </h1>

      <form onSubmit={handleSubmit} className="w-full space-y-5">
        {userType === 'INTERNAL' && (
          <>
            <InputPill placeholder="NRP *" value={nrp} onChange={setNrp} error={formErrors?.nrp} />
            <InputPill placeholder="Batch / Angkatan (e.g. 2024) *" value={batch} onChange={setBatch} error={formErrors?.batch} />
          </>
        )}
        {userType === 'EXTERNAL' && (
          <InputPill placeholder="Institution / School *" value={institution} onChange={setInstitution} error={formErrors?.institution} />
        )}

        <InputPill placeholder="Major / Jurusan *" value={major} onChange={setMajor} error={formErrors?.major} />
        <InputPill placeholder="Active WhatsApp Number *" value={phone} onChange={setPhone} error={formErrors?.phone} />
        <InputPill placeholder="Line ID (Optional)" value={line} onChange={setLine} required={false} error={formErrors?.line} />

        <div className="w-full">
          <label className="block text-sm font-bold mb-3 uppercase tracking-widest pl-4" style={{ color: themeColors.textMain }}>
            UPLOAD {userType === 'INTERNAL' ? 'KTM (STUDENT ID)' : 'ID CARD'} *
          </label>
          <input 
            type="file" accept=".jpg,.jpeg,.png,.pdf"
            onChange={(e) => setDocumentFile(e.target.files?.[0] || null)}
            className="w-full px-6 py-4 rounded-full text-sm focus:outline-none transition-all font-medium file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-bold file:uppercase file:tracking-widest file:bg-black file:text-white hover:file:bg-gray-800"
            style={{ backgroundColor: themeColors.inputBg, color: '#1a1a1a' }}
          />
          {formErrors?.ktm_path && <p className="text-red-500 text-xs mt-2 pl-4 font-bold tracking-widest">⚠️ {formErrors.ktm_path[0]}</p>}
          {formErrors?.id_card_path && <p className="text-red-500 text-xs mt-2 pl-4 font-bold tracking-widest">⚠️ {formErrors.id_card_path[0]}</p>}
        </div>

        <button 
          type="submit" disabled={isLoading}
          className="w-full py-5 rounded-full font-black text-xl hover:-translate-y-1 transition-all mt-8 disabled:opacity-50 uppercase tracking-widest"
          style={{ backgroundColor: themeColors.textMain, color: themeColors.bg, boxShadow: '0 0 15px rgba(255,255,255,0.3)' }}
        >
          {isLoading ? 'SUBMITTING...' : 'SUBMIT & CONTINUE'}
        </button>
      </form>
    </div>
  );
}

function InputPill({ placeholder, value, onChange, required = true, error }: any) {
  return (
    <div className="w-full">
      <input 
        type="text" required={required} placeholder={placeholder} value={value} 
        onChange={(e) => onChange(e.target.value)} 
        className="w-full px-8 py-5 rounded-full text-lg focus:outline-none transition-all placeholder:text-black/60 font-medium" 
        style={{ backgroundColor: themeColors.inputBg, color: '#1a1a1a', boxShadow: 'inset 0 4px 6px rgba(0,0,0,0.1)' }}
      />
      {error && <p className="text-red-500 text-xs mt-2 pl-4 font-bold tracking-widest uppercase">⚠️ {error[0]}</p>}
    </div>
  );
}