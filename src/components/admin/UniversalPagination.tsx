export function UniversalPagination({ meta, onPageChange }: { meta: any, onPageChange: (p: number) => void }) {
  // Debug log
  console.log('UniversalPagination meta:', meta);
  
  const pMeta = meta?.meta || meta;

  if (!pMeta || !pMeta.last_page || pMeta.last_page <= 1) return null;

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mt-6 font-creato-title">
      <p className="text-xs font-bold uppercase text-[#484847]">
        Showing {pMeta.from || 0} to {pMeta.to || 0} of {pMeta.total || 0} Entries
      </p>
      <div className="flex gap-2">
        <button 
          disabled={pMeta.current_page === 1}
          onClick={() => onPageChange(pMeta.current_page - 1)}
          className="px-4 py-2 border-[3px] border-[#1c1c1b] font-black uppercase text-xs hover:bg-[#1c1c1b] hover:text-white disabled:opacity-30 transition-all shadow-[4px_4px_0px_#1c1c1b] active:shadow-none active:translate-x-1 active:translate-y-1 bg-white"
        >
          PREV
        </button>
        <button 
          disabled={pMeta.current_page === pMeta.last_page}
          onClick={() => onPageChange(pMeta.current_page + 1)}
          className="px-4 py-2 border-[3px] border-[#1c1c1b] font-black uppercase text-xs hover:bg-[#1c1c1b] hover:text-white disabled:opacity-30 transition-all shadow-[4px_4px_0px_#1c1c1b] active:shadow-none active:translate-x-1 active:translate-y-1 bg-white"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}