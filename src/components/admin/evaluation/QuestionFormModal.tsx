"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import {
  evaluationQuestionService,
  EvaluationQuestion,
  EvaluationQuestionPayload,
} from '@/services/evaluation-question-service';
import { adminSuccess, adminError } from '@/lib/admin-swal';

interface QuestionFormModalProps {
  eventId: string;
  question: EvaluationQuestion | null;
  existingQuestions: EvaluationQuestion[];
  onClose: (shouldRefresh: boolean) => void;
}

export default function QuestionFormModal({
  eventId,
  question,
  existingQuestions,
  onClose,
}: QuestionFormModalProps) {
  const initialPayload = useMemo<EvaluationQuestionPayload>(
    () => ({
      question_text: '',
      type: 'text',
      options: null,
      is_required: true,
      page_number: 1,
      header_title: null,
      header_description: null,
    }),
    []
  );

  const [formData, setFormData] = useState<EvaluationQuestionPayload>(initialPayload);
  const [optionInputs, setOptionInputs] = useState<string[]>(['', '']);
  const [errors, setErrors] = useState<Record<string, string | string[]>>({});

  useEffect(() => {
    if (!question) {
      setFormData(initialPayload);
      setOptionInputs(['', '']);
      setErrors({});
      return;
    }

    setFormData({
      question_text: question.question_text ?? '',
      type: question.type,
      options: question.options,
      is_required: question.is_required,
      page_number: (question as any).page_number ?? 1,
      header_title: null,
      header_description: null,
    });

    if (question.type === 'multiple_choice') {
      setOptionInputs(question.options?.length ? question.options : ['', '']);
    } else {
      setOptionInputs(['', '']);
    }
  }, [question, initialPayload]);

  const createMutation = useMutation({
    mutationFn: (payload: EvaluationQuestionPayload) =>
      evaluationQuestionService.createQuestion(eventId, payload),
    onSuccess: (result) => {
      adminSuccess({ title: 'Question Created', text: result.message });
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
      adminSuccess({ title: 'Question Updated', text: result.message });
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

  const handleTypeChange = (type: EvaluationQuestionPayload['type']) => {
    setFormData((current) => ({
      ...current,
      type,
      options: type === 'multiple_choice' ? current.options ?? [] : null,
      header_title: null,
      header_description: null,
    }));

    if (type === 'multiple_choice') {
      setOptionInputs((prev) => (prev.length >= 2 ? prev : ['', '']));
    } else {
      setOptionInputs(['', '']);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setErrors({});

    const options =
      formData.type === 'multiple_choice'
        ? optionInputs.map((option) => option.trim()).filter(Boolean)
        : null;

    if (formData.type === 'multiple_choice' && (!options || options.length < 2)) {
      setErrors({ options: 'Add at least two options.' });
      return;
    }

    // non-header types
    const payload: EvaluationQuestionPayload = {
      ...formData,
      options,
    };

    const questionText = (payload.question_text ?? '').toString().trim();
    if (!questionText && formData.type !== 'rating') {
      // rating/text/multiple_choice expect question_text
      setErrors({ question_text: 'Question text is required.' });
      return;
    }

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
              {question ? 'Edit Question' : 'Add Question'}
            </h2>
            <p className="mt-1 text-sm font-bold text-[#6A5D52]">
              Configure how this question appears on the evaluation form.
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
              Question Text
            </label>
            <textarea
              value={formData.question_text}
              onChange={(event) =>
                setFormData({ ...formData, question_text: event.target.value })
              }
              className="w-full border-2 border-[#1C1C1B] bg-white p-3 text-sm font-bold text-[#1C1C1B] outline-none focus:ring-2 focus:ring-[#6A5D52]"
              rows={3}
              required
            />
            {errorText('question_text') && (
              <p className="mt-1 text-sm text-red-600">{errorText('question_text')}</p>
            )}
          </div>



          <div>
            <label className="mb-2 block text-sm font-black uppercase tracking-wider text-[#1C1C1B]">
              Question Type
            </label>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {(['text', 'multiple_choice', 'rating'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleTypeChange(type)}
                  className={`border-2 px-4 py-2.5 text-sm font-black uppercase tracking-wider transition ${
                    formData.type === type
                      ? 'border-[#1C1C1B] bg-[#1C1C1B] text-white'
                      : 'border-[#1C1C1B] bg-white text-[#1C1C1B] hover:bg-[#B7AC9B]'
                  }`}
                >
                  {type.replace('_', ' ')}
                </button>
              ))}
            </div>
          </div>

          {formData.type === 'multiple_choice' && (
            <div>
              <label className="mb-2 block text-sm font-black uppercase tracking-wider text-[#1C1C1B]">
                Options
              </label>
              <div className="space-y-2">
                {optionInputs.map((option, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={option}
                      onChange={(event) => {
                        const nextOptions = [...optionInputs];
                        nextOptions[index] = event.target.value;
                        setOptionInputs(nextOptions);
                      }}
                      placeholder={`Option ${index + 1}`}
                      className="flex-1 border-2 border-[#1C1C1B] bg-white px-3 py-2 text-sm font-bold outline-none focus:ring-2 focus:ring-[#6A5D52]"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setOptionInputs((current) => current.filter((_, i) => i !== index))
                      }
                      disabled={optionInputs.length <= 2}
                      className="border-2 border-[#1C1C1B] bg-white px-3 py-2 text-sm font-black uppercase text-[#1C1C1B] hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              {errorText('options') && (
                <p className="mt-1 text-sm text-red-600">{errorText('options')}</p>
              )}
              <button
                type="button"
                onClick={() => setOptionInputs((current) => [...current, ''])}
                className="mt-3 border-2 border-[#1C1C1B] bg-white px-3 py-2 text-sm font-black uppercase text-[#1C1C1B] hover:bg-[#B7AC9B]"
              >
                Add Option
              </button>
            </div>
          )}

          <label className="flex items-center gap-3 text-sm font-black uppercase tracking-wider text-[#1C1C1B]">
            <input
              type="checkbox"
              checked={formData.is_required}
              onChange={(event) =>
                setFormData({ ...formData, is_required: event.target.checked })
              }
              className="h-4 w-4 rounded border-slate-300"
            />
            Required question
          </label>

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
              {isSubmitting ? 'Saving...' : question ? 'Update Question' : 'Create Question'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
