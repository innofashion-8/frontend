import { UserWithRegistrations } from '@/types/user';
import { useState, useEffect } from 'react';

interface UserModalProps {
  user: UserWithRegistrations | null;
  onClose: () => void;
}

export default function UserModal({ user, onClose }: UserModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (user) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && user) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [user]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 200);
  };

  if (!user) return null;

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
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-3xl md:text-4xl font-black font-creato-title uppercase border-b-4 border-[#1c1c1b] pb-4 mb-8">
          {user.name}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="flex items-center gap-3 p-4 bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b]">
            <div className="p-2 bg-[#1C1C1B]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider">Email</p>
              <p className="font-bold text-md text-[#1C1C1B]">{user.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b]">
            <div className="p-2 bg-[#5B4D4B]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider">Type</p>
              <p className="font-bold text-lg text-[#5B4D4B] uppercase">{user.type}</p>
            </div>
          </div>

          {user.phone && (
            <div className="flex items-center gap-3 p-4 bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b]">
              <div className="p-2 bg-[#978D82]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider">Phone</p>
                <p className="font-bold text-lg text-[#978D82]">{user.phone}</p>
              </div>
            </div>
          )}

          {user.institution && (
            <div className="flex items-center gap-3 p-4 bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b]">
              <div className="p-2 bg-[#B1A79B]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                  <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider">Institution</p>
                <p className="font-bold text-sm text-[#B1A79B]">{user.institution}</p>
              </div>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-black text-[#1C1C1B] uppercase mb-4 border-b-2 border-[#1c1c1b] pb-2">Additional Info</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider mb-1">Major</p>
              <p className="font-bold text-[#1c1c1b]">{user.major || '-'}</p>
            </div>
            <div>
              <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider mb-1">Line ID</p>
              <p className="font-bold text-[#1c1c1b]">{user.line || '-'}</p>
            </div>
            {user.type === 'INTERNAL' && (
              <div>
                <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider mb-1">NRP / Batch</p>
                <p className="font-bold text-[#1c1c1b]">{user.nrp || '-'} / {user.batch || '-'}</p>
              </div>
            )}
            {user.type === 'INTERNAL' && (
              <div>
                <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider mb-2">KTM</p>
                {user.ktm_path ? (
                  <a
                    href={`${process.env.NEXT_PUBLIC_API_URL}/storage/${user.ktm_path}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border-[3px] border-[#1c1c1b] bg-white text-xs font-black hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[3px_3px_0px_#1c1c1b] inline-block cursor-pointer tracking-wider"
                  >
                    LIHAT KTM
                  </a>
                ) : (
                  <p className="text-xs font-bold text-[#6A5D52] italic">Belum Upload</p>
                )}
              </div>
            )}
            {user.type === 'EXTERNAL' && (
              <div>
                <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider mb-2">ID Card</p>
                {user.id_card_path ? (
                  <a
                    href={`${process.env.NEXT_PUBLIC_API_URL}/storage/${user.id_card_path}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border-[3px] border-[#1c1c1b] bg-white text-xs font-black hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[3px_3px_0px_#1c1c1b] inline-block cursor-pointer tracking-wider"
                  >
                    LIHAT ID CARD
                  </a>
                ) : (
                  <p className="text-xs font-bold text-[#6A5D52] italic">Belum Upload</p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-black text-[#1C1C1B] uppercase mb-4 border-b-2 border-[#1c1c1b] pb-2">Registrations</h3>
          <div className="space-y-6">
            <div>
              <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider mb-3">Events</p>
              {user.event_registrations && user.event_registrations.length > 0 ? (
                <div className="space-y-3">
                  {user.event_registrations.map((reg, index) => (
                    <div key={index} className="bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b] p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-black text-[#1C1C1B] text-base">{reg.event?.title || 'Event'}</h4>
                        <span className={`px-3 py-1 text-xs font-black border-2 border-[#1c1c1b] ${
                          reg.status === 'APPROVED' ? 'bg-green-400 text-[#1c1c1b]' :
                          reg.status === 'REJECTED' ? 'bg-red-400 text-white' :
                          'bg-yellow-300 text-[#1c1c1b]'
                        }`}>
                          {reg.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <p className="text-[#6A5D52] font-black uppercase">Registered</p>
                          <p className="font-bold text-[#1c1c1b]">{new Date(reg.created_at).toLocaleDateString('id-ID')}</p>
                        </div>
                        {reg.payment_proof && (
                          <div>
                            <p className="text-[#6A5D52] font-black uppercase">Payment</p>
                            <a
                              href={`${process.env.NEXT_PUBLIC_API_URL}/storage/${reg.payment_proof}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#1c1c1b] font-bold underline hover:text-[#5B4D4B]"
                            >
                              View Proof
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[#6A5D52] font-bold">-</p>
              )}
            </div>

            <div>
              <p className="text-xs font-black text-[#6A5D52] uppercase tracking-wider mb-3">Competitions</p>
              {user.competition_registrations && user.competition_registrations.length > 0 ? (
                <div className="space-y-3">
                  {user.competition_registrations.map((reg, index) => (
                    <div key={index} className="bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b] p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-black text-[#1C1C1B] text-base">{reg.competition?.name || 'Competition'}</h4>
                        <span className={`px-3 py-1 text-xs font-black border-2 border-[#1c1c1b] ${
                          reg.status === 'APPROVED' ? 'bg-green-400 text-[#1c1c1b]' :
                          reg.status === 'REJECTED' ? 'bg-red-400 text-white' :
                          'bg-yellow-300 text-[#1c1c1b]'
                        }`}>
                          {reg.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                        <div>
                          <p className="text-[#6A5D52] font-black uppercase">Team</p>
                          <p className="font-bold text-[#1c1c1b]">{reg.team_name || '-'}</p>
                        </div>
                        <div>
                          <p className="text-[#6A5D52] font-black uppercase">Registered</p>
                          <p className="font-bold text-[#1c1c1b]">{new Date(reg.created_at).toLocaleDateString('id-ID')}</p>
                        </div>
                      </div>
                      {reg.payment_proof && (
                        <div className="mt-2">
                          <a
                            href={`${process.env.NEXT_PUBLIC_API_URL}/storage/${reg.payment_proof}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 border-[2px] border-[#1c1c1b] bg-white text-xs font-black hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[2px_2px_0px_#1c1c1b] inline-block cursor-pointer"
                          >
                            VIEW PAYMENT
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[#6A5D52] font-bold">-</p>
              )}
            </div>
          </div>
        </div>

        <button 
          onClick={handleClose} 
          className="w-full cursor-pointer py-3 px-6 font-black uppercase text-[#1c1c1b] bg-white border-[3px] border-[#1c1c1b] hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[4px_4px_0px_#1c1c1b] tracking-wider"
        >
          Close
        </button>
      </div>
    </div>
  );
}
