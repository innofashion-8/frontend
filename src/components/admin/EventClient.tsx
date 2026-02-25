'use client';

import React, { useState } from 'react';
import { EventResource, EventPayload } from '@/types/event';
import { eventService } from '@/services/event-service';
import { ApiValidationErrors } from '@/types/api';
import EventCard from './EventCard';
import EventModal from './EventModal';
import EventSidebar from './EventSidebar';
import Swal from 'sweetalert2';

interface EventClientProps {
  initialEvents: EventResource[];
}

export default function EventClient({ initialEvents }: EventClientProps) {
  const [events, setEvents] = useState<EventResource[]>(initialEvents);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<EventPayload>({ 
    title: '', category: 'TALKSHOW', description: '', price: 0, quota: 1, start_time: '', is_active: true 
  });
  const [errors, setErrors] = useState<ApiValidationErrors | null>(null);
  const [editingId, setEditingId] = useState<string>('');
  const [viewDetail, setViewDetail] = useState<EventResource | null>(null); 

  const handleOpenCreate = () => {
    setFormData({ title: '', category: 'TALKSHOW', description: '', price: 0, quota: 1, start_time: '', is_active: true });
    setErrors(null);
    setIsEditing(false);
    setIsSidebarOpen(true);
  };

  const handleOpenUpdate = (event: EventResource) => {
    setFormData({
      title: event.title,
      category: event.category,
      description: event.description,
      price: event.price,
      quota: event.quota,
      start_time: event.start_time_input, 
      is_active: event.is_active
    });
    setErrors(null);
    setEditingId(event.id);
    setIsEditing(true);
    setIsSidebarOpen(true);
  };

  const handleDelete = async (id: string) => {
    const eventToDelete = events.find(e => e.id === id);
    const eventName = eventToDelete?.title || 'Event ini';

    Swal.fire({
      title: "HAPUS EVENT?", text: `Data "${eventName}" akan dihapus permanen.`, icon: "warning",
      showCancelButton: true, confirmButtonColor: "#1c1c1b", cancelButtonColor: "#979086", 
      confirmButtonText: "YA, HANGUSKAN!", cancelButtonText: "BATAL",
      customClass: { popup: 'rounded-none border-4 border-[#1c1c1b]' }
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          Swal.fire({ title: 'MENGHAPUS...', allowOutsideClick: false, didOpen: () => Swal.showLoading() });
          await eventService.deleteEvent(id);
          setEvents(events.filter((event) => event.id !== id));
          Swal.fire({ title: "TERHAPUS!", icon: "success", confirmButtonColor: "#6A5D52" });
        } catch (error: any) {
          Swal.fire({ title: "GAGAL!", text: error.message, icon: "error" });
        }
      }
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(null);

    const selectedDate = new Date(formData.start_time);
    const now = new Date();
    if (selectedDate <= now) {
      Swal.fire({ title: "TANGGAL INVALID!", text: "Tanggal dan jam event harus setelah waktu sekarang.", icon: "error", confirmButtonColor: "#1c1c1b" });
      return;
    }

    try {
      if (isEditing) {
        const result = await eventService.updateEvent(editingId, formData);
        const resource = (result.data ? result.data : result) as EventResource;
        
        setEvents(events.map((event) => (event.id === editingId ? { ...event, ...resource } : event)));
      } else {
        const result = await eventService.storeEvent(formData);
        const resource = (result.data ? result.data : result) as EventResource;
        
        setEvents([...events, resource]);
      }
      
      setIsSidebarOpen(false);
      Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: isEditing ? 'Update Berhasil' : 'Event Disimpan', showConfirmButton: false, timer: 3000, customClass: { popup: 'border-2 border-[#1c1c1b] rounded-none' } });

    } catch (error: any) {
      if (error.isValidationError) {
        setErrors(error.errors);
      } else {
        Swal.fire({ title: "SYSTEM ERROR", text: error.message || "Terjadi kesalahan saat menyimpan data.", icon: "error", confirmButtonColor: "#1c1c1b", customClass: { popup: 'rounded-none border-4 border-[#1c1c1b]' } });
      }
    }
  };

  return (
    <div className="relative min-h-screen text-[#1C1C1B]">
      <div className="w-full mx-auto mb-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <h1 className="text-3xl font-black font-creato-title uppercase tracking-tight border-b-4 border-[#1c1c1b] pb-2">Manage Events</h1>
          <button 
            onClick={handleOpenCreate}
            className="bg-[#6A5D52] cursor-pointer text-white px-6 py-3 font-black uppercase text-sm hover:bg-[#1C1C1B] transition-colors w-full sm:w-auto border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b] tracking-wider"
          >
            + Add Event
          </button>
        </div>
      </div>

      <div className="w-full mx-auto bg-[#E2E2DE] p-6 sm:p-8 md:p-10 border-[3px] border-[#1c1c1b] shadow-[6px_6px_0px_#1c1c1b]">
        {events.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="mb-6 text-[#1c1c1b]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <h3 className="text-2xl font-black font-creato-title uppercase text-[#1c1c1b] mb-3">No event yet</h3>
            <p className="text-[#6A5D52] mb-6 text-center font-bold">Start adding your first event</p>
            <button onClick={handleOpenCreate} className="bg-[#6A5D52] text-white px-6 py-3 cursor-pointer font-black uppercase text-sm hover:bg-[#1C1C1B] transition-colors border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b] tracking-wider">
              + Add Event
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onViewDetail={setViewDetail}
                onEdit={handleOpenUpdate}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>

      <EventModal event={viewDetail} onClose={() => setViewDetail(null)} />

      <EventSidebar
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
