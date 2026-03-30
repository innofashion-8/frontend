import { Competition } from '@/types/competition';

interface CompetitionCardProps {
  competition: Competition;
  onViewDetail: (comp: Competition) => void;
  onEdit: (comp: Competition) => void;
  onDelete: (id: string) => void;
}

export default function CompetitionCard({ competition, onViewDetail, onEdit, onDelete }: CompetitionCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-[#E2E2DE] p-6 border-[3px] border-[#1c1c1b] shadow-[6px_6px_0px_#1c1c1b] hover:shadow-[8px_8px_0px_#1c1c1b] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-black font-creato-title uppercase text-[#1C1C1B] mb-3 leading-tight">{competition.name}</h3>
        <span className="inline-flex items-center gap-1 bg-[#1C1C1B] text-white text-xs font-black px-3 py-1.5 border-2 border-[#1c1c1b] shadow-[2px_2px_0px_#1c1c1b] mb-3 uppercase tracking-wider">
          {competition.participant_type}
        </span>
        <div className="space-y-2 mt-3">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#6A5D52]" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <p className="text-[#1C1C1B] text-sm font-bold">
              {competition.participant_type === 'INDIVIDUAL' 
                ? '1 Peserta' 
                : `${competition.min_members || 1} - ${competition.max_members || 1} Peserta`
              }
            </p>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#6A5D52]" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <rect x="4" y="5" width="16" height="16" rx="2"/><line x1="16" y1="3" x2="16" y2="7"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="4" y1="11" x2="20" y2="11"/>
            </svg>
            <p className="text-[#1C1C1B] text-xs font-bold">
              {formatDate(competition.registration_open_at)} - {formatDate(competition.registration_close_at)}
            </p>
          </div>
        </div>
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
