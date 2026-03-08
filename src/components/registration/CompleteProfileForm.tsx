'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { userService } from '@/services/user-service'; 
import { useSession } from 'next-auth/react';
import Swal from 'sweetalert2'; 
import imageCompression from 'browser-image-compression';

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

const getErrorMsg = (err: any) => {
  if (!err) return null;
  if (Array.isArray(err)) return typeof err[0] === 'string' ? err[0] : JSON.stringify(err[0]);
  if (typeof err === 'string') return err;
  return JSON.stringify(err);
};

export function CompleteProfileForm() {
  const router = useRouter(); 
  const { data: session, status, update } = useSession();
  const userType = session?.user?.userType; 
  const queryClient = useQueryClient();

  const { data: statusData, isLoading: isLoadingStatus } = useQuery({
      queryKey: ['profileStatus'],
      queryFn: userService.checkStatus,
      enabled: status === 'authenticated'
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

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return setDocumentFile(null);

    if (file.type === 'application/pdf') {
      return setDocumentFile(file);
    }

    try {
      const options = {
        maxSizeMB: 0.5, 
        maxWidthOrHeight: 1280, 
        useWebWorker: true,
      };

      const compressedFile = await imageCompression(file, options);
      setDocumentFile(compressedFile);
    } catch (error) {
      console.error("Gagal compress:", error);
      setDocumentFile(file); 
    }
  };

  useEffect(() => {
    if (statusData?.is_completed) {
      if (session?.user?.is_profile_complete !== true) {
        console.log("[SYSTEM] Sinkronisasi Token...");
        update({ is_profile_complete: true }).then(() => {
          window.location.href = '/dashboard';
        });
      } else {
        router.push('/dashboard');
      }
      return; 
    }
    
    const data = statusData as any;
    if (data?.draft_data) {
      setPhone(data.draft_data.phone || '');
      setLine(data.draft_data.line || ''); 
      setMajor(data.draft_data.major || '');
      setNrp(data.draft_data.nrp || '');
      setBatch(data.draft_data.batch || '');
      setInstitution(data.draft_data.institution || '');
    }

    if (userType === 'INTERNAL' && data?.profile_data) {
      if (data.profile_data.nrp && !nrp) setNrp(data.profile_data.nrp);
      if (data.profile_data.batch && !batch) setBatch(data.profile_data.batch);
    }
  }, [statusData, session, router, update, userType]);


  // 🔥 2. AUTO-SAVE DRAFT (DEBOUNCE 2 DETIK) 🔥
  const isInitialMount = useRef(true); // Ref buat ngecek apakah ini render pertama kali
  
  useEffect(() => {
    // Biar nggak nge-save pas baru aja halamannya keload (nge-save draft kosong)
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    
    if (isLoadingStatus || statusData?.is_completed || isLoading) return;

    // Tunggu selama 2 detik. Kalau selama 2 detik ini user ngetik sesuatu lagi, 
    // timer yang lama bakal dibatalin (clearTimeout) dan dibikin timer baru.
    const timer = setTimeout(() => {
      // Cek apakah minimal ada 1 field yang diisi sebelum ngesave ke server
      if (phone || line || major || nrp || batch || institution) {
        const draftForm = new FormData();
        if (phone) draftForm.append('draft_data[phone]', phone);
        if (line) draftForm.append('draft_data[line]', line);
        if (major) draftForm.append('draft_data[major]', major);
        if (nrp) draftForm.append('draft_data[nrp]', nrp);
        if (batch) draftForm.append('draft_data[batch]', batch);
        if (institution) draftForm.append('draft_data[institution]', institution);

        // Opsional: Kalau lu mau nge-save foto KTP-nya juga ke draft (Kaya lomba kemaren)
        // if (documentFile) draftForm.append('draft_data[document_path]', documentFile);

        userService.saveDraft(draftForm)
          .then(() => console.log("Draft profile auto-saved"))
          .catch(() => console.error("Failed to auto-save profile draft"));
      }
    }, 2000); // <-- 2000 ms (2 detik). Ubah jadi 3000 kalau mau 3 detik.

    // Cleanup function: Kunci dari "Debounce". Ini bakal dipanggil setiap kali
    // salah satu *dependencies* (phone, line, major, dll) berubah SEBELUM timernya selesai.
    return () => clearTimeout(timer);
    
  }, [phone, line, major, nrp, batch, institution, documentFile]); // <-- Masukin state yang memicu save


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors(null);

    if (!documentFile) {
      return Swal.fire({
        icon: 'warning',
        title: 'FILE MISSING',
        text: `Please upload your ${userType === 'INTERNAL' ? 'KTM' : 'ID Card'}!`,
        background: palette.onyx,
        color: palette.stucco,
        confirmButtonColor: palette.walnut,
        customClass: {
            popup: 'border border-[#7b787a] rounded-none',
            title: 'font-black tracking-[0.2em] uppercase text-xl',
            confirmButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2'
        }
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

      await userService.submitProfile(formData as any); 
      await queryClient.invalidateQueries({ queryKey: ['profileStatus'] });
      await update({ is_profile_complete: true });
      
      await Swal.fire({
        icon: 'success',
        title: 'ACCESS GRANTED',
        text: 'Profile completed successfully!',
        background: palette.onyx,
        color: palette.stucco,
        timer: 1500,
        showConfirmButton: false,
        customClass: {
            popup: 'border border-[#7b787a] rounded-none',
            title: 'font-black tracking-[0.2em] uppercase text-xl',
        }
      });

      window.location.href = '/dashboard';
      
    } catch (error: any) {
      console.error("DEBUG ERROR DARI LARAVEL:", error);
      
      if (error.isValidationError) {
        setFormErrors(error.errors);
        Swal.fire({
          icon: 'error',
          title: 'ACCESS DENIED',
          text: 'Please check your inputs! Some data are invalid.',
          background: palette.onyx,
          color: palette.stucco,
          confirmButtonColor: '#ef4444',
          customClass: {
            popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]', 
            title: 'font-black tracking-[0.2em]',
            confirmButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2'
          }
        });
      } else {
        const safeErrorMsg = typeof error.message === 'string' ? error.message : JSON.stringify(error.message || 'SYSTEM FAILURE');
        Swal.fire({
          icon: 'error',
          title: 'SYSTEM ERROR',
          text: safeErrorMsg,
          background: palette.onyx,
          color: palette.stucco,
          confirmButtonColor: '#ef4444',
          customClass: {
            popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]', 
            title: 'font-black tracking-[0.2em]',
            confirmButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2'
          }
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoadingStatus || status === 'loading') {
    return <div className="relative z-10 text-xs font-bold tracking-[0.4em] uppercase animate-pulse" style={{ color: palette.ash }}>DECRYPTING IDENTITY...</div>;
  }
  if (statusData?.is_completed) {
      return <div className="relative z-10 text-xs font-bold tracking-[0.4em] uppercase" style={{ color: palette.stucco }}>PROFILE COMPLETED. REDIRECTING...</div>;
  }
  if (!userType) return null;

  return (
    <div className="relative z-10 w-full max-w-3xl mx-auto px-4 my-10">
      <div 
        className="p-10 md:p-14 border bg-black/40 backdrop-blur-md relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{ borderColor: palette.graphite, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}
      >
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
          <span className="text-9xl font-black italic" style={{ color: palette.stucco }}>P</span>
        </div>

        <div className="flex items-center gap-3 mb-6 relative z-10">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: palette.stucco, boxShadow: `0 0 10px ${palette.stucco}` }}></span>
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: palette.ash }}>IDENTITY VERIFICATION PROTOCOL</p>
        </div>

        <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-widest relative z-10" style={{ color: palette.stucco }}>
          COMPLETE PROFILE
        </h1>
        <p className="mb-10 text-sm font-medium tracking-wide leading-relaxed relative z-10" style={{ color: palette.ash }}>
          Provide your valid credentials to gain full access to the Innofashion Show 8 terminal.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          {userType === 'INTERNAL' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <DystopianInput 
                label="NRP" 
                placeholder="E.g. c112xxxx" 
                value={nrp} 
                onChange={setNrp} 
                error={formErrors?.nrp}
                disabled={!!(statusData as any)?.profile_data?.nrp}
              />
              <DystopianInput 
                label="BATCH / ANGKATAN" 
                placeholder="E.g. 2024" 
                value={batch} 
                onChange={setBatch} 
                error={formErrors?.batch}
                disabled={!!(statusData as any)?.profile_data?.batch}
              />
            </div>
          )}
          {userType === 'EXTERNAL' && (
            <DystopianInput label="INSTITUTION / SCHOOL" placeholder="Enter your institution" value={institution} onChange={setInstitution} error={formErrors?.institution} />
          )}

          <DystopianInput label="MAJOR / JURUSAN" placeholder="Enter your major" value={major} onChange={setMajor} error={formErrors?.major} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <DystopianInput label="ACTIVE WHATSAPP" placeholder="+62..." value={phone} onChange={setPhone} error={formErrors?.phone} />
              <DystopianInput label="LINE ID (OPTIONAL)" placeholder="Your Line ID" value={line} onChange={setLine} required={false} error={formErrors?.line} />
          </div>

          <div className="pt-4">
            <label className="block text-[10px] font-bold mb-4 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>
              UPLOAD {userType === 'INTERNAL' ? 'KTM (STUDENT ID)' : 'ID CARD'} (JPG/PNG/PDF) *
            </label>
            <input 
              type="file" accept=".jpg,.jpeg,.png,.pdf"
              onChange={handleFileUpload}
              className="w-full text-sm border p-4 cursor-pointer file:mr-6 file:py-3 file:px-6 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none focus:border-white/50"
              style={{ 
                backgroundColor: palette.obsidian, 
                borderColor: formErrors?.ktm_path || formErrors?.id_card_path ? '#ef4444' : palette.graphite, 
                color: palette.ash,
              }}
            />
            {formErrors?.ktm_path && <p className="text-red-500 text-[10px] mt-3 font-bold uppercase tracking-[0.2em]">⚠️ {getErrorMsg(formErrors.ktm_path)}</p>}
            {formErrors?.id_card_path && <p className="text-red-500 text-[10px] mt-3 font-bold uppercase tracking-[0.2em]">⚠️ {getErrorMsg(formErrors.id_card_path)}</p>}
          </div>

          <button 
            type="submit" disabled={isLoading}
            className="w-full py-5 font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 mt-6 cursor-pointer"
            style={{ backgroundColor: palette.stucco, color: palette.onyx, boxShadow: `0 0 15px ${palette.greige}40` }}
          >
            {isLoading ? 'SYNCING DATA...' : 'SUBMIT & CONTINUE'}
          </button>
        </form>
      </div>
    </div>
  );
}

function DystopianInput({ label, placeholder, value, onChange, required = true, error, disabled = false }: any) {
  const errorMsg = getErrorMsg(error);
  return (
    <div className="w-full">
      <label className="block text-[10px] font-bold mb-3 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>
        {label} {required && '*'}
      </label>
      <input 
        type="text" 
        required={required} 
        placeholder={placeholder} 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
        disabled={disabled}
        className="w-full text-sm border p-4 transition-all focus:outline-none focus:border-white/50 bg-transparent font-medium tracking-widest placeholder:text-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ 
          backgroundColor: palette.obsidian, 
          borderColor: errorMsg ? '#ef4444' : palette.graphite, 
          color: palette.stucco 
        }}
      />
      {errorMsg && <p className="text-red-500 text-[10px] mt-3 font-bold tracking-[0.2em] uppercase">⚠️ {errorMsg}</p>}
    </div>
  );
}