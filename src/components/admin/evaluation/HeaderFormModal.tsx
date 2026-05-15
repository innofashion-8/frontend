"use client";

import React, { useEffect, useState, useMemo } from 'react';
import { useMutation } from '@tanstack/react-query';
import {
  evaluationQuestionService,
  EvaluationQuestion,
  EvaluationQuestionPayload,
} from '@/services/evaluation-question-service';
import { adminSuccess, adminError } from '@/lib/admin-swal';

interface HeaderFormModalProps {
  eventId: string;
  question: EvaluationQuestion | null;
  existingQuestions: EvaluationQuestion[];
  onClose: (shouldRefresh: boolean) => void;
}

export default function HeaderFormModal({
  eventId,
  question,
  existingQuestions,
  onClose,
}: HeaderFormModalProps) {
  const initialPayload = useMemo<EvaluationQuestionPayload>(
    () => ({
      question_text: '',
      type: 'header',
      options: null,
      is_required: false,
      sort_order: 0,
      page_number: 1,
      header_title: '',
      header_description: '',
    }),
    []
  );

  const [formData, setFormData] = useState<EvaluationQuestionPayload>(initialPayload);
  const [errors, setErrors] = useState<Record<string, string | string[]>>({});

  useEffect(() => {
    if (!question) {
      setFormData(initialPayload);
      setErrors({});
      return;
    }

    setFormData({
      question_text: '',
      type: 'header',
      options: null,
      is_required: false,
      sort_order: question.sort_order ?? 0,
      page_number: question.page_number ?? 1,
      header_title: question.header_title ?? '',
      header_description: question.header_description ?? '',
    });
  }, [question, initialPayload]);

  const createMutation = useMutation({
    mutationFn: (payload: EvaluationQuestionPayload) =>
      evaluationQuestionService.createQuestion(eventId, payload),
    onSuccess: (result) => {
      adminSuccess({ title: 'Header Created', text: result.message });
      onClose(true);
    },
    onError: (error: any) => {
      if (error.isValidationError) {
        setErrors(error.errors);
      } else {
        adminError({ title: 'Create Failed', text: error.message });
      }
    },
  });

  const updateMutation = useMutation({
    mutationFn: (payload: EvaluationQuestionPayload) =>
      evaluationQuestionService.updateQuestion(eventId, question!.id, payload),
    onSuccess: (result) => {
      adminSuccess({ title: 'Header Updated', text: result.message });
      onClose(true);
    },
    onError: (error: any) => {
      if (error.isValidationError) {
        setErrors(error.errors);
      } else {
        adminError({ title: 'Update Failed', text: error.message });
      }
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setErrors({});

    const isDuplicate = existingQuestions.some(
      (q) => 
        q.page_number === formData.page_number && 
        q.sort_order === formData.sort_order && 
        q.id !== question?.id
    );

    if (isDuplicate) {
      setErrors({ 
        sort_order: `Sort order ${formData.sort_order} is already taken on Page ${formData.page_number}.` 
      });
      return;
    }

    const headerTitle = (formData.header_title ?? '').toString().trim();
    if (!headerTitle) {
      setErrors({ header_title: 'Header title is required.' });
      return;
    }

    const payload: EvaluationQuestionPayload = {
      ...formData,
      header_title: headerTitle,
      header_description: (formData.header_description ?? '').toString().trim() || null,
    };

    if (question) updateMutation.mutate(payload);
    else createMutation.mutate(payload);
  };

  const errorText = (key: string) => {
    const error = errors[key];
    if (!error) return null;
    return Array.isArray(error) ? error[0] : error;
  };

  const isSubmitting = createMutation.isPending || updateMutation.isPending;

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
              {question ? 'Edit Section Header' : 'Add Section Header'}
            </h2>
            <p className="mt-1 text-sm font-bold text-[#6A5D52]">
              Configure the section header for the evaluation form.
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

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-black uppercase tracking-wider text-[#1C1C1B]">
                Page Number
              </label>
              <input
                type="number"
                min={1}
                step={1}
                value={formData.page_number ?? 1}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    page_number: Number(event.target.value || 1),
                  })
                }
                className="w-full border-2 border-[#1C1C1B] bg-white px-3 py-2 text-sm font-bold outline-none focus:ring-2 focus:ring-[#6A5D52]"
                required
              />
              {errorText('page_number') && (
                <p className="mt-1 text-sm text-red-600">{errorText('page_number')}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-black uppercase tracking-wider text-[#1C1C1B]">
                Sort Order
              </label>
              <input
                type="number"
                min={0}
                step={1}
                value={formData.sort_order ?? 0}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    sort_order: Number(event.target.value || 0),
                  })
                }
                className="w-full border-2 border-[#1C1C1B] bg-white px-3 py-2 text-sm font-bold outline-none focus:ring-2 focus:ring-[#6A5D52]"
              />
              {errorText('sort_order') && (
                <p className="mt-1 text-sm text-red-600">{errorText('sort_order')}</p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-black uppercase tracking-wider text-[#1C1C1B]">
                Header Title
              </label>
              <input
                type="text"
                value={formData.header_title ?? ''}
                onChange={(event) =>
                  setFormData({ ...formData, header_title: event.target.value })
                }
                className="w-full border-2 border-[#1C1C1B] bg-white px-3 py-2 text-sm font-bold outline-none focus:ring-2 focus:ring-[#6A5D52]"
                placeholder="e.g. Event Experience"
                required
              />
              {errorText('header_title') && (
                <p className="mt-1 text-sm text-red-600">{errorText('header_title')}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-black uppercase tracking-wider text-[#1C1C1B]">
                Header Description
              </label>
              <textarea
                value={formData.header_description ?? ''}
                onChange={(event) =>
                  setFormData({ ...formData, header_description: event.target.value })
                }
                className="w-full border-2 border-[#1C1C1B] bg-white p-3 text-sm font-bold text-[#1C1C1B] outline-none focus:ring-2 focus:ring-[#6A5D52]"
                rows={3}
                placeholder="Optional description"
              />
              {errorText('header_description') && (
                <p className="mt-1 text-sm text-red-600">
                  {errorText('header_description')}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-3 border-t-[3px] border-[#1C1C1B] pt-5">
            <button
              type="button"
              onClick={() => onClose(false)}
              className="border-[3px] border-[#1C1C1B] bg-white px-4 py-2 text-sm font-black uppercase tracking-wider text-[#1C1C1B] shadow-[3px_3px_0px_#1C1C1B] hover:bg-[#B7AC9B]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="border-[3px] border-[#1C1C1B] bg-[#6A5D52] px-4 py-2 text-sm font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_#1C1C1B] hover:bg-[#1C1C1B] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Saving...' : question ? 'Update Header' : 'Create Header'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
