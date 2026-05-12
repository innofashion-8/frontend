'use client';

import React, { useState } from 'react';
import { Competition, CompetitionPayload } from '@/types/competition';
import { competitionService } from '@/services/competition-service';
import { ApiValidationErrors } from '@/types/api';
import CompetitionCard from './CompetitionCard';
import CompetitionModal from './CompetitionModal';
import CompetitionSidebar from './CompetitionSidebar';
import { adminConfirm, adminSuccess, adminError, adminLoading, adminToast } from '@/lib/admin-swal';

interface CompetitionClientProps {
  initialCompetitions: Competition[];
}

export default function CompetitionClient({ initialCompetitions }: CompetitionClientProps) {
  const [competitions, setCompetitions] = useState<Competition[]>(initialCompetitions);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<CompetitionPayload>({ 
    name: '', 
    participant_type: 'INDIVIDUAL', 
    min_members: 1,
    max_members: 1,
    wa_link_national: '',
    wa_link_international: '',
    description: '', 
    is_active: true,
    registration_open_at: '',
    registration_close_at: '',
    submission_open_at: '',
    submission_close_at: ''
  });
  const [errors, setErrors] = useState<ApiValidationErrors | null>(null);
  const [editingId, setEditingId] = useState<string>('');
  const [viewDetail, setViewDetail] = useState<Competition | null>(null);

  const handleOpenCreate = () => {
    setFormData({ 
      name: '', 
      participant_type: 'INDIVIDUAL', 
      min_members: 1,
      max_members: 1,
      wa_link_national: '',
      wa_link_international: '',
      description: '', 
      is_active: true,
      registration_open_at: '',
      registration_close_at: '',
      submission_open_at: '',
      submission_close_at: ''
    });
    setErrors(null);
    setIsEditing(false);
    setIsSidebarOpen(true);
  };

  const handleOpenUpdate = (comp: Competition) => {
    // Convert datetime to datetime-local format (YYYY-MM-DDTHH:mm)
    const formatDateTimeLocal = (dateString: string) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    setFormData({
      name: comp.name,
      participant_type: comp.participant_type,
      min_members: comp.min_members,
      max_members: comp.max_members,
      wa_link_national: comp.wa_link_national,
      wa_link_international: comp.wa_link_international,
      description: comp.description || '',
      is_active: comp.is_active,
      registration_open_at: formatDateTimeLocal(comp.registration_open_at),
      registration_close_at: formatDateTimeLocal(comp.registration_close_at),
      submission_open_at: formatDateTimeLocal(comp.submission_open_at),
      submission_close_at: formatDateTimeLocal(comp.submission_close_at)
    });
    setErrors(null);
    setEditingId(comp.id);
    setIsEditing(true);
    setIsSidebarOpen(true);
  };

  const handleDelete = async (id: string) => {
    const compToDelete = competitions.find(c => c.id === id);
    const compName = compToDelete?.name || 'Kompetisi ini';

    adminConfirm({
      title: "HAPUS KOMPETISI?",
      text: `Data "${compName}" akan dihapus permanen dan tidak bisa dikembalikan.`,
      confirmButtonText: "YA, HANGUSKAN!",
      cancelButtonText: "BATAL",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          adminLoading('MENGHAPUS...');
          await competitionService.deleteEvent(id);
          setCompetitions(competitions.filter((comp) => comp.id !== id));
          adminSuccess({ title: "TERHAPUS!", text: "Kompetisi berhasil dilenyapkan dari database." });
        } catch (error: any) {
          adminError({ title: "GAGAL!", text: error.message || "Server lagi ngambek, coba lagi nanti." });
        }
      }
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(null);
    try {
      if (isEditing) {
        const result = await competitionService.updateCompetition(editingId, formData);
        setCompetitions(competitions.map((comp) => (comp.id === editingId ? result.data : comp)));
      } else {
        const result = await competitionService.storeCompetition(formData);
        setCompetitions([...competitions, result.data]);
      }
      setIsSidebarOpen(false);
      
      adminToast(isEditing ? 'Update Berhasil' : 'Kompetisi Disimpan');

    } catch (error: any) {
      if (error.isValidationError) {
        setErrors(error.errors);
      } else {
        adminError({ title: "SYSTEM ERROR", text: error.message || "Terjadi kesalahan saat menyimpan data." });
      }
    }
  };

  return (
    <div className="relative min-h-screen text-[#1C1C1B]">
      <div className="w-full mx-auto mb-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <h1 className="text-3xl font-black font-creato-title uppercase tracking-tight border-b-4 border-[#1c1c1b] pb-2">Manage Competitions</h1>
          <button 
            onClick={handleOpenCreate}
            className="bg-[#6A5D52] text-white px-6 py-3 font-black uppercase text-sm hover:bg-[#1C1C1B] transition-colors w-full sm:w-auto cursor-pointer border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b] tracking-wider"
          >
            + Add Competition
          </button>
        </div>
      </div>

      <div className="w-full mx-auto bg-[#E2E2DE] p-6 sm:p-8 md:p-10 border-[3px] border-[#1c1c1b] shadow-[6px_6px_0px_#1c1c1b]">
        {competitions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="mb-6 text-[#1c1c1b]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-black font-creato-title uppercase text-[#1c1c1b] mb-3">No competition yet</h3>
            <p className="text-[#6A5D52] mb-6 text-center font-bold">Start adding your first competition</p>
            <button onClick={handleOpenCreate} className="bg-[#6A5D52] text-white px-6 py-3 font-black uppercase text-sm hover:bg-[#1C1C1B] transition-colors cursor-pointer border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b] tracking-wider">
              + Add Competition
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitions.map((comp) => (
              <CompetitionCard
                key={comp.id}
                competition={comp}
                onViewDetail={setViewDetail}
                onEdit={handleOpenUpdate}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>

      <CompetitionModal competition={viewDetail} onClose={() => setViewDetail(null)} />

      <CompetitionSidebar
        isOpen={isSidebarOpen}
        isEditing={isEditing}
        formData={formData}
        errors={errors}
        onClose={() => setIsSidebarOpen(false)}
        onSubmit={handleSave}
        onChange={setFormData}
      />
    </div>
  );
}
