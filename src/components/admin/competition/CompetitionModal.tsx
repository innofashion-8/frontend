import { Competition } from '@/types/competition';
import { useState, useEffect } from 'react';

interface CompetitionModalProps {
  competition: Competition | null;
  onClose: () => void;
}

export default function CompetitionModal({ competition, onClose }: CompetitionModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (competition) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [competition]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 200);
  };

  if (!competition) return null;

  return (
    <div 
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
    >
      <div 
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#E2E2DE] border-4 border-[#1c1c1b] shadow-[12px_12px_0px_#1c1c1b] p-8 md:p-10 transition-all duration-200 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-6 text-4xl font-black text-[#1c1c1b] hover:scale-110 transition-transform cursor-pointer z-10"
          aria-label="Tutup"
        >
          &times;
        </button>

        <h2 className="text-3xl md:text-4xl font-black font-creato-title uppercase border-b-4 border-[#1c1c1b] pb-4 mb-8">
          {competition.name}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center gap-3 p-4 bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b]">
            <div className="p-2 bg-[#1C1C1B]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div>
              <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider">Tipe Peserta</p>
              <p className="font-bold text-lg text-[#1C1C1B] uppercase">{competition.participant_type}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b]">
            <div className="p-2 bg-[#5B4D4B]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
                <path d="M12 12l0 .01" />
                <path d="M3 13a20 20 0 0 0 18 0" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider">Jumlah Anggota</p>
              <p className="font-bold text-lg text-[#5B4D4B]">
                {competition.participant_type === 'INDIVIDUAL' 
                  ? '1 Orang' 
                  : `${competition.min_members || 1} - ${competition.max_members || 1} Orang`
                }
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-black text-[#1C1C1B] uppercase mb-4 border-b-2 border-[#1c1c1b] pb-2">Periode Pendaftaran</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider mb-1">Buka</p>
              <p className="font-bold text-[#1c1c1b]">{new Date(competition.registration_open_at).toLocaleString('id-ID')}</p>
            </div>
            <div>
              <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider mb-1">Tutup</p>
              <p className="font-bold text-[#1c1c1b]">{new Date(competition.registration_close_at).toLocaleString('id-ID')}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-black text-[#1C1C1B] uppercase mb-4 border-b-2 border-[#1c1c1b] pb-2">Periode Submission</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider mb-1">Buka</p>
              <p className="font-bold text-[#1c1c1b]">{new Date(competition.submission_open_at).toLocaleString('id-ID')}</p>
            </div>
            <div>
              <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider mb-1">Tutup</p>
              <p className="font-bold text-[#1c1c1b]">{new Date(competition.submission_close_at).toLocaleString('id-ID')}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-black text-[#1C1C1B] uppercase mb-4 border-b-2 border-[#1c1c1b] pb-2">Deskripsi Kompetisi</h3>
          <div className="text-base text-[#484847] leading-relaxed whitespace-pre-wrap">
            {competition.description}
          </div>
        </div>

        <button 
          onClick={handleClose} 
          className="w-full cursor-pointer py-3 px-6 font-black uppercase text-[#1c1c1b] bg-white border-[3px] border-[#1c1c1b] hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[4px_4px_0px_#1c1c1b] tracking-wider"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}