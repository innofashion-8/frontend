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
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
    >
      <div 
        className={`relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-200 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol Close Absolute */}
        <button 
          onClick={handleClose} 
          className="absolute top-5 right-5 p-2 text-gray-400 bg-gray-50 rounded-full hover:text-gray-700 hover:bg-gray-100 transition-all z-10"
          aria-label="Tutup"
        >
          {/* Icon: X */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>

        {/* Header Section */}
        <div className="pt-8 pb-6 px-6 sm:px-8 border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white">
          <h2 className="text-3xl font-extrabold text-[#1C1C1B] mb-4 pr-8 tracking-tight leading-tight">
            {competition.name}
          </h2>
          
          {/* Highlight Cards: Kategori & Harga dengan warna dari palet */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {/* Kategori Card - Menggunakan warna Onyx #1C1C1B */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="p-2 bg-[#1C1C1B] rounded-xl shadow-sm">
                {/* Icon: Tag - Warna putih agar kontras dengan background Onyx */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</p>
                <p className="font-semibold text-[#1C1C1B] capitalize">{competition.category}</p>
              </div>
            </div>

            {/* Biaya Pendaftaran Card - Menggunakan warna Velvet #5B4D4B */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="p-2 bg-[#5B4D4B] rounded-xl shadow-sm">
                {/* Icon: Wallet - Warna putih agar kontras dengan background Velvet */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                  <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Biaya Pendaftaran</p>
                <p className="font-semibold text-[#5B4D4B]">
                  {competition.registration_fee === 0 
                    ? "Gratis" 
                    : `Rp ${competition.registration_fee.toLocaleString('id-ID')}`
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:px-8 max-h-[50vh] overflow-y-auto custom-scrollbar">
          <div className="flex items-center gap-2 mb-4">
            {/* Icon: Info Circle */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#5B4D4B]" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
              <path d="M12 9h.01" />
              <path d="M11 12h1v4h1" />
            </svg>
            <h3 className="text-lg font-bold text-[#1C1C1B]">Deskripsi Kompetisi</h3>
          </div>
          <div className="prose prose-sm sm:prose-base text-gray-600 leading-relaxed whitespace-pre-wrap">
            {competition.description}
          </div>
        </div>

        {/* Footer / Action Area */}
        <div className="p-6 sm:px-8 bg-gray-50 border-t border-gray-100">
          {/* Secondary Action Only */}
          <button 
            onClick={handleClose} 
            className="w-full flex items-center justify-center py-3 px-6 rounded-xl font-semibold text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}