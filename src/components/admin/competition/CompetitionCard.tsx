import { Competition } from '@/types/competition';

interface CompetitionCardProps {
  competition: Competition;
  onViewDetail: (comp: Competition) => void;
  onEdit: (comp: Competition) => void;
  onDelete: (id: string) => void;
}

export default function CompetitionCard({ competition, onViewDetail, onEdit, onDelete }: CompetitionCardProps) {
  return (
    <div className="bg-[#E2E2DE] p-6 border-[3px] border-[#1c1c1b] shadow-[6px_6px_0px_#1c1c1b] hover:shadow-[8px_8px_0px_#1c1c1b] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-black font-creato-title uppercase text-[#1C1C1B] mb-3 leading-tight">{competition.name}</h3>
        <span className="inline-flex items-center gap-1 bg-[#1C1C1B] text-white text-xs font-black px-3 py-1.5 border-2 border-[#1c1c1b] shadow-[2px_2px_0px_#1c1c1b] mb-3 uppercase tracking-wider">
          {competition.category}
        </span>
        <p className="text-[#1C1C1B] text-sm font-bold">Fee: Rp {competition.registration_fee.toLocaleString('id-ID')}</p>
      </div>
      <hr className="my-4 border-[#1c1c1b] border-2" />
      <div className="flex flex-col gap-3 mt-auto">
        <button onClick={() => onViewDetail(competition)} className="bg-[#6A5D52] text-white px-4 py-2.5 font-black uppercase text-xs hover:bg-[#1C1C1B] transition-colors w-full cursor-pointer border-[3px] border-[#1c1c1b] shadow-[3px_3px_0px_#1c1c1b] tracking-wider">
          View Details
        </button>
        <div className="flex gap-3">
          <button onClick={() => onEdit(competition)} className="flex-1 border-[3px] border-[#1c1c1b] text-[#1c1c1b] bg-white px-3 py-2 font-black uppercase text-xs hover:bg-[#1c1c1b] hover:text-white transition-colors cursor-pointer shadow-[3px_3px_0px_#1c1c1b] tracking-wider">
            Edit
          </button>
          <button onClick={() => onDelete(competition.id)} className="flex-1 bg-[#1c1c1b] text-white px-3 py-2 font-black uppercase text-xs hover:bg-black transition-colors cursor-pointer border-[3px] border-[#1c1c1b] shadow-[3px_3px_0px_#1c1c1b] tracking-wider">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
