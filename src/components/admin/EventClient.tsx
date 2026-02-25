'use client';

import React, { useState } from 'react';
import { Event, EventPayload } from '@/types/event';
import { eventService } from '@/services/event-service';
import { ApiValidationErrors } from '@/types/api';
import EventCard from './EventCard';
import EventModal from './EventModal';
import EventSidebar from './EventSidebar';

interface EventClientProps {
  initialEvents: Event[];
}

export default function EventClient({ initialEvents }: EventClientProps) {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<EventPayload>({ 
    title: '', 
    category: 'TALKSHOW', 
    description: '', 
    price: 0,
    quota: 1,
    start_time: '',
    is_active: true 
  });
  const [errors, setErrors] = useState<ApiValidationErrors | null>(null);
  const [editingId, setEditingId] = useState<string>('');
  const [viewDetail, setViewDetail] = useState<Event | null>(null);

  const handleOpenCreate = () => {
    setFormData({ title: '', category: 'TALKSHOW', description: '', price: 0, quota: 1, start_time: '', is_active: true });
    setErrors(null);
    setIsEditing(false);
    setIsSidebarOpen(true);
  };

  const handleOpenUpdate = (event: Event) => {
    // Use start_time directly from API without timezone conversion
    // Assuming API returns format like "2024-03-15 14:20:00" or ISO string
    let startTimeLocal = '';
    if (event.start_time) {
      // If API returns ISO string, extract date and time without timezone conversion
      const dateStr = event.start_time.replace(' ', 'T').slice(0, 16);
      startTimeLocal = dateStr;
    }
    
    setFormData({
      title: event.title,
      category: event.category,
      description: event.description,
      price: event.price,
      quota: event.quota,
      start_time: startTimeLocal,
      is_active: event.is_active
    });
    setErrors(null);
    setEditingId(event.id);
    setIsEditing(true);
    setIsSidebarOpen(true);
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this event?');
    if (confirmDelete) {
      try {
        await eventService.deleteEvent(id);
        setEvents(events.filter((event) => event.id !== id));
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
        const result = await eventService.updateEvent(editingId, formData);
        setEvents(events.map((event) => (event.id === editingId ? { ...event, ...result.data } : event)));
      } else {
        const result = await eventService.storeEvent(formData);
        setEvents([...events, result.data as any]);
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
          <h1 className="text-3xl font-bold tracking-tight">Manage Events</h1>
          <button 
            onClick={handleOpenCreate}
            className="bg-[#5B4D4B] text-[#EBEBDD] px-6 py-3 rounded-lg font-semibold hover:bg-[#4B4D4B] transition-colors shadow-md w-full sm:w-auto"
          >
            + Add Event
          </button>
        </div>
      </div>

      <div className="w-full mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-400 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
        {events.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="mb-6 text-[#5B4D4B]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#5B4D4B] mb-3">No event yet</h3>
            <p className="text-[#978D82] mb-6 text-center">Start adding your first event</p>
            <button onClick={handleOpenCreate} className="bg-[#5B4D4B] text-[#EBEBDD] px-6 py-3 rounded-lg font-semibold hover:bg-[#4B4D4B] transition-colors shadow-md">
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
