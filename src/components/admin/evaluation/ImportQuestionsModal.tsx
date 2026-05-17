"use client";

import React, { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { evaluationQuestionService } from '@/services/evaluation-question-service';
import { eventService } from '@/services/event-service';
import { adminSuccess, adminError } from '@/lib/admin-swal';

interface ImportQuestionsModalProps {
  targetEventId: string;
  onClose: (shouldRefresh: boolean) => void;
}

export default function ImportQuestionsModal({ targetEventId, onClose }: ImportQuestionsModalProps) {
  const [selectedEventId, setSelectedEventId] = useState('');

  const { data: events = [], isLoading: eventsLoading } = useQuery({
    queryKey: ['events-list'],
    queryFn: () => eventService.getEvents(),
  });

  const importMutation = useMutation({
    mutationFn: (sourceEventId: string) =>
      evaluationQuestionService.importQuestions(targetEventId, sourceEventId),
    onSuccess: (result) => {
      adminSuccess({
        title: 'Import Complete',
        text: `${result.data.length} questions imported successfully.`,
      });
      onClose(true);
    },
    onError: (error: any) => {
      adminError({ title: 'Import Failed', text: error.message });
    },
  });

  const availableEvents = events.filter((event) => event.id !== targetEventId);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={() => onClose(false)}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto border-[3px] border-[#1C1C1B] bg-[#E2E2DE] p-6 shadow-[12px_12px_0px_#1C1C1B]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 className="font-creato-title text-2xl font-black uppercase tracking-wider text-[#1C1C1B]">
              Import from Previous Event
            </h2>
            <p className="mt-1 text-sm font-bold text-[#6A5D52]">
              Clone every evaluation question from another event into this form.
            </p>
          </div>
          <button
            onClick={() => onClose(false)}
            className="border-2 border-[#1C1C1B] bg-white px-3 py-1 font-black text-[#1C1C1B] hover:bg-[#1C1C1B] hover:text-white"
            aria-label="Close"
          >
            X
          </button>
        </div>

        {eventsLoading ? (
          <div className="border-2 border-dashed border-[#979086] bg-white/70 p-8 text-center text-sm font-bold text-[#6A5D52]">
            Loading events...
          </div>
        ) : availableEvents.length === 0 ? (
          <div className="border-2 border-dashed border-[#979086] bg-white/70 p-8 text-center text-sm font-bold text-[#6A5D52]">
            No other events are available.
          </div>
        ) : (
          <div className="max-h-[420px] space-y-2 overflow-y-auto border-[3px] border-[#1C1C1B] bg-white p-2">
            {availableEvents.map((event) => (
              <label
                key={event.id}
                className={`flex cursor-pointer items-start gap-3 border-2 p-4 transition ${
                  selectedEventId === event.id
                    ? 'border-[#1C1C1B] bg-[#B7AC9B]/40'
                    : 'border-[#1C1C1B] bg-white hover:bg-[#F5F3EF]'
                }`}
              >
                <input
                  type="radio"
                  name="source_event"
                  value={event.id}
                  checked={selectedEventId === event.id}
                  onChange={(changeEvent) => setSelectedEventId(changeEvent.target.value)}
                  className="mt-1 h-4 w-4"
                />
                <div>
                  <p className="font-black text-[#1C1C1B]">{event.title}</p>
                  <p className="mt-1 text-sm font-bold text-[#6A5D52]">
                    {event.category} · {event.start_time_human}
                  </p>
                </div>
              </label>
            ))}
          </div>
        )}

        <div className="mt-6 flex justify-end gap-3 border-t-[3px] border-[#1C1C1B] pt-5">
          <button
            type="button"
            onClick={() => onClose(false)}
            className="border-[3px] border-[#1C1C1B] bg-white px-4 py-2 text-sm font-black uppercase tracking-wider text-[#1C1C1B] shadow-[3px_3px_0px_#1C1C1B] hover:bg-[#B7AC9B]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              if (!selectedEventId) {
                adminError({ title: 'Select an Event', text: 'Choose a source event first.' });
                return;
              }
              importMutation.mutate(selectedEventId);
            }}
            disabled={!selectedEventId || importMutation.isPending}
            className="border-[3px] border-[#1C1C1B] bg-[#6A5D52] px-4 py-2 text-sm font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_#1C1C1B] hover:bg-[#1C1C1B] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {importMutation.isPending ? 'Importing...' : 'Import Questions'}
          </button>
        </div>
      </div>
    </div>
  );
}
