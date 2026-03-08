import { ParticipantType, CompetitionPayload } from '@/types/competition';
import { ApiValidationErrors } from '@/types/api';
import { useState } from 'react';

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
  const [showMemberFields, setShowMemberFields] = useState(formData.participant_type === 'GROUP');

  const handleParticipantTypeChange = (type: ParticipantType) => {
    setShowMemberFields(type === 'GROUP');
    onChange({ 
      ...formData, 
      participant_type: type,
      min_members: type === 'INDIVIDUAL' ? 1 : formData.min_members,
      max_members: type === 'INDIVIDUAL' ? 1 : formData.max_members
    });
  };
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-[55] transition-opacity duration-300" onClick={onClose} />
      )}

      <div className={`fixed top-0 right-0 h-full w-full md:w-[30rem] bg-white shadow-[-10px_0_50px_rgba(0,0,0,0.15)] border-l border-gray-200 transform transition-transform duration-300 ease-in-out z-[56] p-8 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#1C1C1B]">{isEditing ? 'Edit Kompetisi' : 'Tambah Kompetisi'}</h2>
          <button onClick={onClose} className="text-[#7B7D7B] hover:text-[#1A1A1A] text-4xl transition-colors cursor-pointer">&times;</button>
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
            <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">Tipe Peserta</label>
            <select 
              required 
              className="w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors"
              value={formData.participant_type} 
              onChange={(e) => handleParticipantTypeChange(e.target.value as ParticipantType)}
            >
              <option value="INDIVIDUAL">INDIVIDUAL</option>
              <option value="GROUP">GROUP</option>
            </select>
            {errors?.participant_type && <p className="text-red-600 text-sm mt-1">{errors.participant_type[0]}</p>}
          </div>

          {showMemberFields && (
            <>
              <div>
                <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">Min Members</label>
                <input 
                  type="number" 
                  required 
                  min="2"
                  className="w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors"
                  value={formData.min_members || 2} 
                  onChange={(e) => onChange({ ...formData, min_members: parseInt(e.target.value) || 2 })} 
                />
                {errors?.min_members && <p className="text-red-600 text-sm mt-1">{errors.min_members[0]}</p>}
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">Max Members</label>
                <input 
                  type="number" 
                  required 
                  min={formData.min_members || 2}
                  className="w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors"
                  value={formData.max_members || 5} 
                  onChange={(e) => onChange({ ...formData, max_members: parseInt(e.target.value) || 5 })} 
                />
                {errors?.max_members && <p className="text-red-600 text-sm mt-1">{errors.max_members[0]}</p>}
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">WA Link National</label>
            <input 
              type="url" 
              required 
              className="w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors"
              value={formData.wa_link_national} 
              onChange={(e) => onChange({ ...formData, wa_link_national: e.target.value })} 
            />
            {errors?.wa_link_national && <p className="text-red-600 text-sm mt-1">{errors.wa_link_national[0]}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">WA Link International</label>
            <input 
              type="url" 
              required 
              className="w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors"
              value={formData.wa_link_international} 
              onChange={(e) => onChange({ ...formData, wa_link_international: e.target.value })} 
            />
            {errors?.wa_link_international && <p className="text-red-600 text-sm mt-1">{errors.wa_link_international[0]}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">Registration Open At</label>
            <input 
              type="datetime-local" 
              required 
              className="w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors"
              value={formData.registration_open_at} 
              onChange={(e) => onChange({ ...formData, registration_open_at: e.target.value })} 
            />
            {errors?.registration_open_at && <p className="text-red-600 text-sm mt-1">{errors.registration_open_at[0]}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">Registration Close At</label>
            <input 
              type="datetime-local" 
              required 
              className="w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors"
              value={formData.registration_close_at} 
              onChange={(e) => onChange({ ...formData, registration_close_at: e.target.value })} 
            />
            {errors?.registration_close_at && <p className="text-red-600 text-sm mt-1">{errors.registration_close_at[0]}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">Submission Open At</label>
            <input 
              type="datetime-local" 
              required 
              className="w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors"
              value={formData.submission_open_at} 
              onChange={(e) => onChange({ ...formData, submission_open_at: e.target.value })} 
            />
            {errors?.submission_open_at && <p className="text-red-600 text-sm mt-1">{errors.submission_open_at[0]}</p>}
          </div>

          <div>
            <label className="block text-sm font-bold mb-2 text-[#5B4D4B]">Submission Close At</label>
            <input 
              type="datetime-local" 
              required 
              className="w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors"
              value={formData.submission_close_at} 
              onChange={(e) => onChange({ ...formData, submission_close_at: e.target.value })} 
            />
            {errors?.submission_close_at && <p className="text-red-600 text-sm mt-1">{errors.submission_close_at[0]}</p>}
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
            <button type="button" onClick={onClose} className="border-2 border-[#978D82] text-[#7B7D7B] font-bold rounded-lg py-3 px-6 flex-1 hover:bg-[#978D82] hover:text-[#EBEBDD] transition-colors cursor-pointer">
              Batal
            </button>
            <button type="submit" className="bg-[#5B4D4B] text-[#EBEBDD] font-bold rounded-lg py-3 px-6 flex-1 hover:bg-[#1C1C1B] transition-colors shadow-md cursor-pointer">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
