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
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
    >
      <div 
        className={`relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-200 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={handleClose} 
          className="absolute top-5 right-5 p-2 text-gray-400 bg-gray-50 rounded-full hover:text-gray-700 hover:bg-gray-100 transition-all z-10"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>

        <div className="pt-8 pb-6 px-6 sm:px-8 border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white">
          <h2 className="text-3xl font-extrabold text-[#1C1C1B] mb-4 pr-8 tracking-tight leading-tight">
            {user.name}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="p-2 bg-[#1C1C1B] rounded-xl shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                  <path d="M3 7l9 6l9 -6" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Email</p>
                <p className="font-semibold text-[#1C1C1B] text-sm">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="p-2 bg-[#5B4D4B] rounded-xl shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Type</p>
                <p className="font-semibold text-[#5B4D4B] capitalize">{user.type}</p>
              </div>
            </div>

            {user.phone && (
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <div className="p-2 bg-[#978D82] rounded-xl shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</p>
                  <p className="font-semibold text-[#978D82]">{user.phone}</p>
                </div>
              </div>
            )}

            {user.institution && (
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <div className="p-2 bg-[#B1A79B] rounded-xl shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                    <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Institution</p>
                  <p className="font-semibold text-[#B1A79B] text-sm">{user.institution}</p>
                </div>
              </div>
            )}

            {user.line && (
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                <div className="p-2 bg-[#7B7D7B] rounded-xl shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M21 10.663c0 -4.224 -4.041 -7.663 -9 -7.663c-4.959 0 -9 3.439 -9 7.663c0 3.783 3.201 6.958 7.527 7.56c.293 .066 .692 .196 .792 .448c.094 .239 .061 .613 .029 .855l-.127 .777c-.039 .235 -.177 .923 .8 .504c.977 -.42 5.277 -3.121 7.203 -5.342c1.327 -1.448 1.776 -2.92 1.776 -4.802z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Line ID</p>
                  <p className="font-semibold text-[#7B7D7B]">{user.line}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 sm:px-8 max-h-[50vh] overflow-y-auto">
          {user.major && (
            <div className="mb-4">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Major</p>
              <p className="text-gray-700">{user.major}</p>
            </div>
          )}
          {user.nrp && (
            <div className="mb-4">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">NRP</p>
              <p className="text-gray-700">{user.nrp}</p>
            </div>
          )}
          {user.batch && (
            <div className="mb-4">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Batch</p>
              <p className="text-gray-700">{user.batch}</p>
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="mb-4">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Event Registrations</p>
              {user.event_registrations && user.event_registrations.length > 0 ? (
                <ul className="space-y-2">
                  {user.event_registrations.map((reg, index) => (
                    <li key={index} className="text-gray-700 bg-gray-50 px-3 py-2 rounded-lg">
                      • {reg.event?.title || 'Event'} - <span className="text-sm text-gray-500">{reg.status}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">-</p>
              )}
            </div>

            <div className="mb-4">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Competition Registrations</p>
              {user.competition_registrations && user.competition_registrations.length > 0 ? (
                <ul className="space-y-2">
                  {user.competition_registrations.map((reg, index) => (
                    <li key={index} className="text-gray-700 bg-gray-50 px-3 py-2 rounded-lg">
                      • {reg.competition?.name || 'Competition'} - <span className="text-sm text-gray-500">{reg.status}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">-</p>
              )}
            </div>
          </div>
        </div>

        <div className="p-6 sm:px-8 bg-gray-50 border-t border-gray-100">
          <button 
            onClick={handleClose} 
            className="w-full flex items-center justify-center py-3 px-6 rounded-xl font-semibold text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
