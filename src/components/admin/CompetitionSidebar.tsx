import { CompetitionCategory, CompetitionPayload } from '@/types/competition';
import { ApiValidationErrors } from '@/types/api';

interface CompetitionSidebarProps {
  isOpen: boolean;
  isEditing: boolean;
  formData: CompetitionPayload;
  errors: ApiValidationErrors | null;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (data: CompetitionPayload) => void;
}

export default function CompetitionSidebar({ 
  isOpen, 
  isEditing, 
  formData, 
  errors,
  onClose, 
  onSubmit, 
  onChange 
}: CompetitionSidebarProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-[55] transition-opacity duration-300" onClick={onClose} />
      )}

      <div className={`fixed top-0 right-0 h-full w-full md:w-[30rem] bg-white shadow-[-10px_0_50px_rgba(0,0,0,0.15)] border-l border-gray-200 transform transition-transform duration-300 ease-in-out z-[56] p-8 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#1C1C1B]">{isEditing ? 'Edit Kompetisi' : 'Tambah Kompetisi'}</h2>
          <button onClick={onClose} className="text-[#7B7D7B] hover:text-[#1A1A1A] text-4xl transition-colors">&times;</button>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-5 flex-grow overflow-y-auto">
          <div>
            <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">Judul Kompetisi</label>
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
            <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">Category</label>
            <select 
              required 
              className="w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors"
              value={formData.category} 
              onChange={(e) => onChange({ ...formData, category: e.target.value as CompetitionCategory })}
            >
              <option value="INTERMEDIATE">INTERMEDIATE</option>
              <option value="ADVANCED">ADVANCED</option>
            </select>
            {errors?.category && <p className="text-red-600 text-sm mt-1">{errors.category[0]}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">Registration Fee (Rp)</label>
            <input 
              type="number" 
              required 
              min="0"
              step="1"
              className="w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors"
              value={formData.registration_fee} 
              onChange={(e) => onChange({ ...formData, registration_fee: parseInt(e.target.value) || 0 })} 
            />
            {errors?.registration_fee && <p className="text-red-600 text-sm mt-1">{errors.registration_fee[0]}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">Deskripsi</label>
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
            <button type="button" onClick={onClose} className="border-2 border-[#978D82] text-[#7B7D7B] font-bold rounded-lg py-3 px-6 flex-1 hover:bg-[#978D82] hover:text-[#EBEBDD] transition-colors">
              Batal
            </button>
            <button type="submit" className="bg-[#5B4D4B] text-[#EBEBDD] font-bold rounded-lg py-3 px-6 flex-1 hover:bg-[#1C1C1B] transition-colors shadow-md">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
