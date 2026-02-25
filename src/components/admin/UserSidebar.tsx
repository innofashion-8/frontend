import { UserTypes } from '@/types/user';
import { ApiValidationErrors } from '@/types/api';
import { useEffect } from 'react';

export interface UserPayload {
  name: string;
  email: string;
  type: UserTypes;
  institution?: string;
  phone?: string;
  line?: string;
}

interface UserSidebarProps {
  isOpen: boolean;
  isEditing: boolean;
  formData: UserPayload;
  errors: ApiValidationErrors | null;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (data: UserPayload) => void;
}

export default function UserSidebar({ 
  isOpen, 
  isEditing, 
  formData, 
  errors,
  onClose, 
  onSubmit, 
  onChange 
}: UserSidebarProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-[55] transition-opacity duration-300" onClick={onClose} />
      )}

      <div className={`fixed top-0 right-0 h-full w-full md:w-[30rem] bg-white shadow-[-10px_0_50px_rgba(0,0,0,0.15)] border-l border-gray-200 transform transition-transform duration-300 ease-in-out z-[56] p-8 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#1C1C1B]">{isEditing ? 'Edit User' : 'Add User'}</h2>
          <button onClick={onClose} className="text-[#7B7D7B] hover:text-[#1A1A1A] text-4xl transition-colors">&times;</button>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-5 flex-grow overflow-y-auto">
          <div>
            <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">Name</label>
            <input 
              type="text" 
              required 
              className="w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors"
              value={formData.name} 
              onChange={(e) => onChange({ ...formData, name: e.target.value })} 
            />
            {errors?.name && <p className="text-red-600 text-sm mt-1">{errors.name[0]}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">Email</label>
            <input 
              type="email" 
              required 
              className="w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors"
              value={formData.email} 
              onChange={(e) => onChange({ ...formData, email: e.target.value })} 
            />
            {errors?.email && <p className="text-red-600 text-sm mt-1">{errors.email[0]}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">Type</label>
            <select 
              required 
              className="w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors"
              value={formData.type} 
              onChange={(e) => onChange({ ...formData, type: e.target.value as UserTypes })}
            >
              <option value="INTERNAL">INTERNAL</option>
              <option value="EXTERNAL">EXTERNAL</option>
            </select>
            {errors?.type && <p className="text-red-600 text-sm mt-1">{errors.type[0]}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">Institution</label>
            <input 
              type="text" 
              className="w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors"
              value={formData.institution || ''} 
              onChange={(e) => onChange({ ...formData, institution: e.target.value })} 
            />
            {errors?.institution && <p className="text-red-600 text-sm mt-1">{errors.institution[0]}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">Phone</label>
            <input 
              type="tel" 
              className="w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors"
              value={formData.phone || ''} 
              onChange={(e) => onChange({ ...formData, phone: e.target.value })} 
            />
            {errors?.phone && <p className="text-red-600 text-sm mt-1">{errors.phone[0]}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">Line ID</label>
            <input 
              type="text" 
              className="w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors"
              value={formData.line || ''} 
              onChange={(e) => onChange({ ...formData, line: e.target.value })} 
            />
            {errors?.line && <p className="text-red-600 text-sm mt-1">{errors.line[0]}</p>}
          </div>
          
          <div className="mt-auto pt-6 flex gap-4">
            <button type="button" onClick={onClose} className="border-2 border-[#978D82] text-[#7B7D7B] font-bold rounded-lg py-3 px-6 flex-1 hover:bg-[#978D82] hover:text-[#EBEBDD] transition-colors">
              Cancel
            </button>
            <button type="submit" className="bg-[#5B4D4B] text-[#EBEBDD] font-bold rounded-lg py-3 px-6 flex-1 hover:bg-[#1C1C1B] transition-colors shadow-md">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
