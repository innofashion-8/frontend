import { Competition } from '@/types/competition';

interface CompetitionCardProps {
  competition: Competition;
  onViewDetail: (comp: Competition) => void;
  onEdit: (comp: Competition) => void;
  onDelete: (id: string) => void;
}

export default function CompetitionCard({ competition, onViewDetail, onEdit, onDelete }: CompetitionCardProps) {
  return (
    <div className="bg-[#EBEBDD] p-6 rounded-xl border-2 border-[#5B4D4B] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold text-[#1C1C1B] mb-2">{competition.name}</h3>
        <span className="inline-flex items-center gap-1 bg-[#B1A79B]/20 text-[#5B4D4B] text-sm font-semibold px-3 py-1 rounded-full mb-2">
          {competition.category}
        </span>
        <p className="text-[#1C1C1B] text-sm font-semibold">Fee: Rp {competition.registration_fee.toLocaleString('id-ID')}</p>
      </div>
      <hr className="my-4 border-[#978D82]/30" />
      <div className="flex flex-col gap-3 mt-auto">
        <button onClick={() => onViewDetail(competition)} className="bg-[#5B4D4B] text-[#EBEBDD] px-4 py-2 rounded-md font-semibold hover:bg-[#1C1C1B] transition-colors w-full cursor-pointer">
          View Details
        </button>
        <div className="flex gap-3">
          <button onClick={() => onEdit(competition)} className="flex-1 border-2 border-[#978D82] text-[#7B7D7B] px-3 py-2 rounded-md font-semibold hover:bg-[#978D82] hover:text-[#EBEBDD] transition-colors cursor-pointer">
            Edit
          </button>
          <button onClick={() => onDelete(competition.id)} className="flex-1 bg-[#1A1A1A] text-[#EBEBDD] px-3 py-2 rounded-md font-semibold hover:bg-[#000000] transition-colors cursor-pointer">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
