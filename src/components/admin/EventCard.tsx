import { EventResource } from '@/types/event'; // 👈 Ubah import

interface EventCardProps {
  event: EventResource; // 👈 Ubah tipe
  onViewDetail: (event: EventResource) => void;
  onEdit: (event: EventResource) => void;
  onDelete: (id: string) => void;
}

export default function EventCard({ event, onViewDetail, onEdit, onDelete }: EventCardProps) {
  return (
    <div className="bg-[#EBEBDD] p-6 rounded-xl border-2 border-[#5B4D4B] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold text-[#1C1C1B] mb-2">{event.title}</h3>
        <span className="inline-flex items-center gap-1 bg-[#B1A79B]/20 text-[#5B4D4B] text-sm font-semibold px-3 py-1 rounded-full mb-2">
          {event.category}
        </span>
        <p className="text-[#1C1C1B] text-sm font-semibold">Price: Rp {event.price.toLocaleString('id-ID')}</p>
        <p className="text-[#978D82] text-xs mt-1">Quota: {event.quota} seats</p>
        {/* 👇 Langsung pakai start_time_input dari Resource */}
        <p className="text-[#978D82] text-xs mt-1">Start: {event.start_time_input.replace('T', ' ')}</p>
      </div>
      <hr className="my-4 border-[#978D82]/30" />
      <div className="flex flex-col gap-3 mt-auto">
        <button onClick={() => onViewDetail(event)} className="bg-[#5B4D4B] cursor-pointer text-[#EBEBDD] px-4 py-2 rounded-md font-semibold hover:bg-[#1C1C1B] transition-colors w-full">
          View Details
        </button>
        <div className="flex gap-3">
          <button onClick={() => onEdit(event)} className="flex-1 border-2 border-[#978D82] cursor-pointer text-[#7B7D7B] px-3 py-2 rounded-md font-semibold hover:bg-[#978D82] hover:text-[#EBEBDD] transition-colors">
            Edit
          </button>
          <button onClick={() => onDelete(event.id)} className="flex-1 bg-[#1A1A1A] cursor-pointer text-[#EBEBDD] px-3 py-2 rounded-md font-semibold hover:bg-[#000000] transition-colors">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}