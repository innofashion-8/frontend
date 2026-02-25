import { EventCategory, EventPayload } from '@/types/event';
import { ApiValidationErrors } from '@/types/api';
import { useEffect } from 'react';

interface EventSidebarProps {
  isOpen: boolean;
  isEditing: boolean;
  formData: EventPayload;
  errors: ApiValidationErrors | null;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (data: EventPayload) => void;
}

export default function EventSidebar({ 
  isOpen, 
  isEditing, 
  formData, 
  errors,
  onClose, 
  onSubmit, 
  onChange 
}: EventSidebarProps) {
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
          <h2 className="text-2xl font-bold text-[#1C1C1B]">{isEditing ? 'Edit Event' : 'Add Event'}</h2>
          <button onClick={onClose} className="text-[#7B7D7B] cursor-pointer hover:text-[#1A1A1A] text-4xl transition-colors">&times;</button>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-5 flex-grow overflow-y-auto">
          <div>
            <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">Event Title</label>
            <input 
              type="text" 
              required 
              className="w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors"
              value={formData.title} 
              onChange={(e) => onChange({ ...formData, title: e.target.value })} 
            />
            {errors?.title && <p className="text-red-600 text-sm mt-1">{errors.title[0]}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">Category</label>
            <select 
              required 
              className="w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors"
              value={formData.category} 
              onChange={(e) => onChange({ ...formData, category: e.target.value as EventCategory })}
            >
              <option value="TALKSHOW">TALKSHOW</option>
              <option value="WORKSHOP">WORKSHOP</option>
            </select>
            {errors?.category && <p className="text-red-600 text-sm mt-1">{errors.category[0]}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">Price (Rp)</label>
            <input 
              type="number" 
              required 
              min="0"
              step="1"
              className="w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors"
              value={formData.price} 
              onChange={(e) => onChange({ ...formData, price: parseInt(e.target.value) || 0 })} 
            />
            {errors?.price && <p className="text-red-600 text-sm mt-1">{errors.price[0]}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">Quota</label>
            <input 
              type="number" 
              required 
              min="1"
              step="1"
              className="w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors"
              value={formData.quota} 
              onChange={(e) => onChange({ ...formData, quota: parseInt(e.target.value) || 1 })} 
            />
            {errors?.quota && <p className="text-red-600 text-sm mt-1">{errors.quota[0]}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">Start Time</label>
            <input 
              type="datetime-local" 
              required 
              min={new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 16)} 
                
                // 👇 INI DIA KUMPULAN CLASS SAKTINYA
                className="w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors cursor-pointer
                /* Hack untuk mengubah warna icon kalender di Chrome/Edge/Safari */
                [&::-webkit-calendar-picker-indicator]:cursor-pointer 
                [&::-webkit-calendar-picker-indicator]:opacity-60
                hover:[&::-webkit-calendar-picker-indicator]:opacity-100
                /* Filter ini ngubah warna hitam bawaan icon jadi coklat Walnut lu (#6A5D52) */
                [&::-webkit-calendar-picker-indicator]:invert-[43%] [&::-webkit-calendar-picker-indicator]:sepia-[16%] [&::-webkit-calendar-picker-indicator]:saturate-[500%] [&::-webkit-calendar-picker-indicator]:hue-rotate-[350deg] [&::-webkit-calendar-picker-indicator]:brightness-[90%] [&::-webkit-calendar-picker-indicator]:contrast-[85%]"
                value={formData.start_time} 
              onChange={(e) => onChange({ ...formData, start_time: e.target.value })} 
            />
            {errors?.start_time && <p className="text-red-600 text-sm mt-1">{errors.start_time[0]}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">Description</label>
            <textarea 
              required 
              rows={5} 
              className="w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] resize-none transition-colors"
              value={formData.description} 
              onChange={(e) => onChange({ ...formData, description: e.target.value })}
            ></textarea>
            {errors?.description && <p className="text-red-600 text-sm mt-1">{errors.description[0]}</p>}
          </div>
          
          <div className="mt-auto pt-6 flex gap-4">
            <button type="button" onClick={onClose} className="border-2 border-[#978D82] text-[#7B7D7B] font-bold rounded-lg py-3 px-6 flex-1 hover:bg-[#978D82] hover:text-[#EBEBDD] transition-colors cursor-pointer">
              Cancel
            </button>
            <button type="submit" className="bg-[#5B4D4B] text-[#EBEBDD] font-bold rounded-lg py-3 px-6 flex-1 hover:bg-[#1C1C1B] transition-colors shadow-md cursor-pointer">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
