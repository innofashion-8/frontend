'use client';

import React, { useState } from 'react';
import { Competition, CompetitionPayload } from '@/types/competition';
import { competitionService } from '@/services/competition-service';
import { ApiValidationErrors } from '@/types/api';
import CompetitionCard from './CompetitionCard';
import CompetitionModal from './CompetitionModal';
import CompetitionSidebar from './CompetitionSidebar';

interface CompetitionClientProps {
  initialCompetitions: Competition[];
}

export default function CompetitionClient({ initialCompetitions }: CompetitionClientProps) {
  const [competitions, setCompetitions] = useState<Competition[]>(initialCompetitions);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<CompetitionPayload>({ 
    name: '', 
    category: 'INTERMEDIATE', 
    description: '', 
    registration_fee: 0,
    is_active: true 
  });
  const [errors, setErrors] = useState<ApiValidationErrors | null>(null);
  const [editingId, setEditingId] = useState<string>('');
  const [viewDetail, setViewDetail] = useState<Competition | null>(null);

  const handleOpenCreate = () => {
    setFormData({ name: '', category: 'INTERMEDIATE', description: '', registration_fee: 0, is_active: true });
    setErrors(null);
    setIsEditing(false);
    setIsSidebarOpen(true);
  };

  const handleOpenUpdate = (comp: Competition) => {
    setFormData({
      name: comp.name,
      category: comp.category,
      description: comp.description,
      registration_fee: comp.registration_fee,
      is_active: comp.is_active
    });
    setErrors(null);
    setEditingId(comp.id);
    setIsEditing(true);
    setIsSidebarOpen(true);
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm('Yakin ingin menghapus kompetisi ini?');
    if (confirmDelete) {
      try {
        await competitionService.deleteEvent(id);
        setCompetitions(competitions.filter((comp) => comp.id !== id));
      } catch (error: any) {
        alert(error.message);
      }
    }
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
    } catch (error: any) {
      if (error.isValidationError) {
        setErrors(error.errors);
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className="relative min-h-screen text-[#1C1C1B]">
      <div className="w-full mx-auto mb-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Manage Competitions</h1>
          <button 
            onClick={handleOpenCreate}
            className="bg-[#5B4D4B] text-[#EBEBDD] px-6 py-3 rounded-lg font-semibold hover:bg-[#4B4D4B] transition-colors shadow-md w-full sm:w-auto"
          >
            + Add Competition
          </button>
        </div>
      </div>

      <div className="w-full mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-400 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        {competitions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="mb-6 text-[#5B4D4B]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#5B4D4B] mb-3">No competition yet</h3>
            <p className="text-[#978D82] mb-6 text-center">Start adding your first competition</p>
            <button onClick={handleOpenCreate} className="bg-[#5B4D4B] text-[#EBEBDD] px-6 py-3 rounded-lg font-semibold hover:bg-[#4B4D4B] transition-colors shadow-md">
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
