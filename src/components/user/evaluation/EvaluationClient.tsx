"use client";

import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { eventService } from '@/services/event-service';
import Swal from 'sweetalert2';
import palette from '@/config/palette';

interface EvaluationQuestion {
  id: string;
  event_id?: string;
  type: 'text' | 'multiple_choice' | 'rating' | 'header';

  question_text?: string;
  options?: string[] | null;
  is_required?: boolean;

  // new fields
  sort_order?: number;
  page_number?: number;

  header_title?: string | null;
  header_description?: string | null;
}

export default function EvaluationClient({ eventId }: { eventId: string }) {
  const router = useRouter();

  const [questions, setQuestions] = useState<EvaluationQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, string | number | null>>({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const draftKey = `eval_draft_${eventId}`;

  const sortedQuestions = useMemo(() => {
    return [...questions].sort(
      (a, b) =>
        (a.page_number ?? 1) - (b.page_number ?? 1) ||
        (a.sort_order ?? 0) - (b.sort_order ?? 0)
    );
  }, [questions]);

  const totalPages = useMemo(() => {
    if (!sortedQuestions.length) return 1;
    const maxPage = Math.max(...sortedQuestions.map((q) => q.page_number ?? 1));
    return maxPage > 0 ? maxPage : 1;
  }, [sortedQuestions]);

  const [currentPage, setCurrentPage] = useState(1);

  const currentPageQuestions = useMemo(() => {
    return sortedQuestions.filter((q) => (q.page_number ?? 1) === currentPage);
  }, [sortedQuestions, currentPage]);

  const handleDraftSave = (nextAnswers: Record<string, string | number | null>) => {
    // Headers have no user answers, so we simply ignore them by not saving in UI handlers.
    localStorage.setItem(draftKey, JSON.stringify(nextAnswers));
  };

  const handleAnswerChange = (questionId: string, value: string | number | null) => {
    setAnswers((prev) => {
      const next = { ...prev, [questionId]: value };
      return next;
    });
  };

  const handleTextBlur = (questionId: string, value: string) => {
    const nextValue = value;
    setAnswers((prev) => {
      const next = { ...prev, [questionId]: nextValue };
      handleDraftSave(next);
      return next;
    });
  };

  const handleRadioOrRatingChange = (questionId: string, value: string | number | null) => {
    setAnswers((prev) => {
      const next = { ...prev, [questionId]: value };
      handleDraftSave(next);
      return next;
    });
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await eventService.getEvaluationQuestions(eventId);
        setQuestions(data);

        // draft prefill (must happen after questions load to align keys)
        const raw = localStorage.getItem(draftKey);
        if (raw) {
          try {
            const parsed = JSON.parse(raw) as Record<string, string | number | null>;
            setAnswers(parsed ?? {});
          } catch {
            // ignore corrupted drafts
          }
        }
      } catch (err: any) {
        setError('Failed to fetch evaluation nodes. Connection severed.');
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventId]);

  const validatePageRequired = () => {
    const required = currentPageQuestions.filter((q) => q.type !== 'header' && q.is_required);
    const missing = required.filter((q) => {
      const v = answers[q.id];
      return v === undefined || v === null || v === '' || (typeof v === 'number' && Number.isNaN(v));
    });
    return missing;
  };

  const handleSubmit = async (mode: 'page' | 'final') => {
    const missingRequired = validatePageRequired();
    if (missingRequired.length > 0) {
      await Swal.fire({
        icon: 'warning',
        title: 'INCOMPLETE DATA',
        text: 'You must fill all required fields before continuing.',
        background: palette.onyx,
        color: palette.stucco,
        confirmButtonColor: palette.walnut,
        customClass: {
          popup: 'border-4 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]',
          title: 'font-black tracking-[0.2em] uppercase text-xl',
          confirmButton:
            'font-bold tracking-widest uppercase rounded-none px-6 py-2 hover:scale-[1.02] transition-all border-2',
        },
      });
      return;
    }

    setSubmitting(true);
    try {
      if (mode === 'page') {
        setCurrentPage((p) => Math.min(totalPages, p + 1));
        return;
      }

      // final submit payload
      const payload = Object.entries(answers)
        .filter(([questionId]) => {
          const q = sortedQuestions.find((qq) => qq.id === questionId);
          return q ? q.type !== 'header' : true;
        })
        .map(([question_id, value]) => ({
          question_id,
          value,
        }));

      const res = await eventService.submitEvaluation(eventId, payload);

      // clear draft
      localStorage.removeItem(draftKey);

      await Swal.fire({
        icon: 'success',
        title: 'SESSION TERMINATED',
        text: res.message || 'CHECK-OUT SUCCESS',
        background: palette.onyx,
        color: palette.stucco,
        confirmButtonColor: palette.walnut,
        confirmButtonText: 'RETURN TO GRID',
        customClass: {
          popup: 'border-4 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]',
          title: 'font-black tracking-[0.2em] uppercase text-xl',
          confirmButton:
            'font-bold tracking-widest uppercase rounded-none px-6 py-2 hover:scale-[1.02] transition-all border-2',
        },
      });

      router.push('/dashboard');
    } catch (err: any) {
      await Swal.fire({
        icon: 'error',
        title: mode === 'final' ? 'TERMINATION FAILED' : 'PROCEED FAILED',
        text: err.message || 'Unknown error occurred during checkout sequence.',
        background: palette.onyx,
        color: palette.stucco,
        confirmButtonColor: '#ef4444',
        confirmButtonText: 'RETRY',
        customClass: {
          popup: 'border-4 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]',
          title:
            mode === 'final'
              ? 'font-black tracking-[0.2em] uppercase text-xl text-red-500'
              : 'font-black tracking-[0.2em] uppercase text-xl text-red-500',
          confirmButton:
            'font-bold tracking-widest uppercase rounded-none px-6 py-2 hover:bg-red-900 transition-all border-2',
        },
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center font-creato-body">
        <p
          className="text-xl font-black uppercase tracking-[0.3em] animate-pulse"
          style={{ color: palette.stucco }}
        >
          ESTABLISHING LINK...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center font-creato-body">
        <div className="border-4 p-8 max-w-lg bg-black/50" style={{ borderColor: '#ef4444' }}>
          <h2 className="text-3xl font-black uppercase tracking-widest text-red-500 mb-4">
            CRITICAL ERROR
          </h2>
          <p className="font-bold tracking-widest uppercase text-white">{error}</p>
        </div>
      </div>
    );
  }

  const isFinalPage = currentPage >= totalPages;

  return (
    <div className="w-full min-h-[calc(100vh-80px)] p-4 sm:p-6 lg:p-10 flex justify-center font-creato-body relative z-10">
      <div
        className="w-full max-w-3xl border bg-black/60 backdrop-blur-md p-6 sm:p-8 md:p-10 relative overflow-hidden"
        style={{ borderColor: palette.graphite, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}
      >
        <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: palette.walnut }}></div>

        <div className="border-b-2 pb-4 mb-8" style={{ borderColor: palette.graphite }}>
          <p className="text-[10px] tracking-[0.3em] mb-1 uppercase" style={{ color: palette.ash }}>
            [ NODE CHECK-OUT SEQUENCE ]
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-widest" style={{ color: palette.stucco }}>
            EVALUATION PROTOCOL
          </h1>
          <p className="text-sm font-bold tracking-wider mt-3 uppercase" style={{ color: palette.greige }}>
            Page {currentPage} of {totalPages}. Provide feedback to terminate your session and unlock your node access.
          </p>
        </div>

        <div className="space-y-6">
          {currentPageQuestions.length === 0 ? (
            <div className="border-2 border-dashed p-6 text-center" style={{ borderColor: palette.obsidian }}>
              <p className="text-sm font-black uppercase tracking-wider" style={{ color: palette.ash }}>
                No questions on this page.
              </p>
            </div>
          ) : (
            currentPageQuestions.map((q, index) => {
              const displayNumber = index + 1;
              const isHeader = q.type === 'header';

              if (isHeader) {
                return (
                  <div
                    key={q.id}
                    className="p-5 sm:p-6 border relative transition-all"
                    style={{
                      borderColor: palette.obsidian,
                      backgroundColor: 'rgba(28, 28, 27, 0.35)',
                    }}
                  >
                    <div className="mb-3">
                      <p className="text-[10px] font-black tracking-widest uppercase mb-1" style={{ color: palette.ash }}>
                        SECTION {displayNumber}
                      </p>
                      <h2 className="text-xl sm:text-2xl font-black uppercase tracking-widest" style={{ color: palette.stucco }}>
                        {q.header_title || 'UNTITLED NODE HEADER'}
                      </h2>
                      {q.header_description ? (
                        <p className="mt-2 text-sm font-bold tracking-wider uppercase" style={{ color: palette.greige }}>
                          {q.header_description}
                        </p>
                      ) : null}
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={q.id}
                  className="p-4 sm:p-6 border relative group transition-all"
                  style={{
                    borderColor: palette.obsidian,
                    backgroundColor: 'rgba(28, 28, 27, 0.4)',
                  }}
                >
                  <div className="absolute -left-[1px] top-4 w-[3px] h-8 bg-transparent group-hover:bg-[#E2E2DE] transition-colors"></div>

                  <label className="block mb-4">
                    <span className="text-[10px] font-black tracking-widest uppercase mb-1 block" style={{ color: palette.ash }}>
                      QUERY {displayNumber} {q.is_required ? <span className="text-red-500">*</span> : null}
                    </span>
                    <span className="text-lg sm:text-xl font-bold uppercase tracking-wider" style={{ color: palette.stucco }}>
                      {q.question_text}
                    </span>
                  </label>

                  {q.type === 'text' && (
                    <textarea
                      className="w-full bg-black/40 border-2 p-3 font-mono text-sm focus:outline-none focus:ring-0 transition-colors"
                      style={{ borderColor: palette.graphite, color: palette.greige }}
                      rows={4}
                      placeholder="INPUT YOUR DATA HERE..."
                      defaultValue={answers[q.id] ? String(answers[q.id]) : ''}
                      onBlur={(e) => handleTextBlur(q.id, e.target.value)}
                      required={!!q.is_required}
                    />
                  )}

                  {q.type === 'multiple_choice' && q.options && (
                    <div className="flex flex-col gap-3">
                      {q.options.map((opt, i) => {
                        const checked = answers[q.id] === opt;
                        return (
                          <label
                            key={i}
                            className={`flex items-center gap-3 p-3 border-2 cursor-pointer transition-all ${
                              checked ? 'bg-black/80' : 'bg-black/30 hover:bg-black/50'
                            }`}
                            style={{ borderColor: checked ? palette.stucco : palette.obsidian }}
                          >
                            <input
                              type="radio"
                              name={q.id}
                              value={opt}
                              className="hidden"
                              checked={checked}
                              onChange={(e) => handleRadioOrRatingChange(q.id, e.target.value)}
                              required={!!q.is_required}
                            />
                            <div
                              className="w-4 h-4 border-2 flex items-center justify-center transition-all"
                              style={{ borderColor: checked ? palette.stucco : palette.graphite }}
                            >
                              {checked ? <div className="w-2 h-2" style={{ backgroundColor: palette.stucco }}></div> : null}
                            </div>
                            <span
                              className="font-bold tracking-widest text-sm uppercase"
                              style={{ color: checked ? palette.stucco : palette.greige }}
                            >
                              {opt}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  )}

                  {q.type === 'rating' && (
                    <div className="mt-2">
                      {/* Use circular radio buttons instead of slider */}
                      <DystopianRatingRadio
                        value={
                          answers[q.id] == null
                            ? undefined
                            : typeof answers[q.id] === 'number'
                              ? answers[q.id] as number
                              : Number(answers[q.id] as any)
                        }
                        onChange={(value) => handleRadioOrRatingChange(q.id, value)}
                      />

                      {q.is_required && (!answers[q.id] || Number(answers[q.id]) === 0) ? (
                        <input
                          type="number"
                          required
                          className="opacity-0 absolute w-0 h-0"
                          value={answers[q.id] ? Number(answers[q.id]) : ''}
                          onChange={() => {}}
                        />
                      ) : null}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        <div className={`pt-6 border-t-2 flex gap-3 ${currentPage > 1 ? 'justify-between' : 'justify-end'}`} style={{ borderColor: palette.graphite }}>
          {currentPage > 1 && (
            <button
              type="button"
              disabled={submitting}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="px-8 py-4 font-black uppercase tracking-[0.2em] transition-all relative overflow-hidden border-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              style={{
                backgroundColor: '#00000000',
                color: palette.stucco,
                borderColor: palette.obsidian,
              }}
            >
              &lt; RETURN
            </button>
          )}

          <button
            type="button"
            disabled={submitting || sortedQuestions.length === 0}
            onClick={() => handleSubmit(isFinalPage ? 'final' : 'page')}
            className="px-8 py-4 font-black uppercase tracking-[0.2em] transition-all relative overflow-hidden group border-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            style={{
              backgroundColor: palette.stucco,
              color: palette.onyx,
              borderColor: palette.stucco,
            }}
          >
            <div className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-300 ease-out z-0"></div>
            <span className="relative z-10 flex items-center gap-2">
              {submitting ? 'TERMINATING...' : isFinalPage ? 'SUBMIT' : 'PROCEED >'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ---- replaced slider with dystopian radio circles ----
function DystopianRatingRadio({
  value,
  onChange,
}: {
  value?: number;
  onChange: (value: number) => void;
}) {
  const currentValue = Number(value || 0);

  return (
    <div className="flex items-center justify-between w-full mt-4">
      {[1, 2, 3, 4, 5].map((mark) => {
        const checked = currentValue === mark;
        return (
          <label
            key={mark}
            className="flex flex-col items-center justify-center gap-2 cursor-pointer group flex-1"
          >
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-[3px] flex items-center justify-center transition-all ${
                checked ? 'bg-black/80 shadow-[0_0_15px_rgba(226,226,222,0.3)]' : 'bg-black/30 group-hover:bg-black/50'
              }`}
              style={{ borderColor: checked ? palette.stucco : palette.obsidian }}
            >
              {checked && (
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full" style={{ backgroundColor: palette.stucco }}></div>
              )}
            </div>
            <span
              className="text-xs sm:text-sm font-black tracking-widest uppercase transition-colors"
              style={{ color: checked ? palette.stucco : palette.ash }}
            >
              {mark}
            </span>
            <input
              type="radio"
              className="hidden"
              name={`rating-${mark}`}
              value={mark}
              checked={checked}
              onChange={() => onChange(mark)}
            />
          </label>
        );
      })}
    </div>
  );
}
