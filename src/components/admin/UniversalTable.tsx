"use client";

import React from 'react';

export interface Column<T> {
  header: string;
  key: string;
  render?: (item: T, index: number) => React.ReactNode;
}

interface UniversalTableProps<T> {
  columns: Column<T>[];
  data: T[];
  isLoading?: boolean;
}

export function UniversalTable<T>({ columns, data, isLoading }: UniversalTableProps<T>) {
  return (
    <div className="w-full overflow-x-auto border-[3px] border-[#1c1c1b] bg-[#fdfdfd] shadow-[8px_8px_0px_#1c1c1b] mb-4">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#1c1c1b] text-[#E2E2DE] font-creato-title uppercase tracking-widest text-xs md:text-sm">
            {columns.map((col, idx) => (
              <th key={idx} className="p-4 border-b-2 border-[#1c1c1b] font-black">{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="font-creato-body text-[#1c1c1b]">
          {isLoading ? (
            <tr><td colSpan={columns.length} className="p-10 text-center font-bold animate-pulse text-[#6A5D52]">LOADING_DATA...</td></tr>
          ) : data.length === 0 ? (
            <tr><td colSpan={columns.length} className="p-10 text-center font-bold text-[#979086]">NO_DATA_FOUND.</td></tr>
          ) : (
            data.map((item, rowIdx) => (
              <tr key={rowIdx} className="border-b-2 border-[#1c1c1b] hover:bg-[#dcdad9]/40 transition-colors group">
                {columns.map((col, colIdx) => (
                  <td key={colIdx} className="p-4">
                    {col.render ? col.render(item, rowIdx) : (item as any)[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
