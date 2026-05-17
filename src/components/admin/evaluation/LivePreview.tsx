"use client";

import React, { useMemo } from 'react';
import { EvaluationQuestion } from '@/services/evaluation-question-service';

interface LivePreviewProps {
  questions: EvaluationQuestion[];
}

export default function LivePreview({ questions }: LivePreviewProps) {
  const grouped = useMemo(() => {
    const sorted = [...questions].sort(
      (a, b) => (a.page_number ?? 1) - (b.page_number ?? 1) || (a.sort_order ?? 0) - (b.sort_order ?? 0)
    );

    const map = new Map<number, EvaluationQuestion[]>();
    for (const q of sorted) {
      const page = q.page_number ?? 1;
      const list = map.get(page) ?? [];
      list.push(q);
      map.set(page, list);
    }
    return Array.from(map.entries())
      .sort((a, b) => a[0] - b[0])
      .map(([page_number, items]) => ({ page_number, items }));
  }, [questions]);

  const [currentPageIndex, setCurrentPageIndex] = React.useState(0);

  // If questions change and current page is out of bounds, reset it
  React.useEffect(() => {
    if (currentPageIndex >= grouped.length && grouped.length > 0) {
      setCurrentPageIndex(grouped.length - 1);
    }
  }, [grouped.length, currentPageIndex]);

  const currentGroup = grouped[currentPageIndex];

  return (
    <div className="border-[3px] border-[#1C1C1B] bg-[#E2E2DE] p-5 shadow-[6px_6px_0px_#1C1C1B]">
      <div className="mb-5 border-b-[3px] border-[#1C1C1B] pb-4">
        <h2 className="font-creato-title text-xl font-black uppercase tracking-wider text-[#1C1C1B]">
          Live Preview
        </h2>
        <p className="mt-1 text-sm font-bold text-[#6A5D52]">
          Read-only preview of the evaluation flow.
        </p>
      </div>

      {questions.length === 0 ? (
        <div className="border-2 border-dashed border-[#979086] bg-white/70 p-8 text-center">
          <p className="text-sm font-black uppercase tracking-wider text-[#6A5D52]">
            No questions to preview
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {currentGroup && (
            <section
              className="rounded-none border-[3px] border-[#1C1C1B] bg-[#F5F3EF] p-4"
            >
              <div className="mb-3 flex items-center justify-between gap-3 border-b-[3px] border-[#1C1C1B] pb-3">
                <div className="min-w-0">
                  <p className="text-xs font-black uppercase tracking-wider text-[#6A5D52]">
                    Page {currentGroup.page_number} of {grouped[grouped.length - 1]?.page_number || 1}
                  </p>
                  <p className="mt-1 text-sm font-black text-[#1C1C1B] truncate">
                    {(() => {
                      const firstHeader = currentGroup.items.find((q) => q.type === 'header');
                      const title = firstHeader?.header_title?.trim();
                      return title ? title : `Evaluation Page ${currentGroup.page_number}`;
                    })()}
                  </p>
                </div>

                <span className="border border-[#1C1C1B] bg-white px-2.5 py-1 text-xs font-black uppercase text-[#1C1C1B]">
                  Preview
                </span>
              </div>

              <div className="space-y-4">
                {currentGroup.items.map((question) => {
                  if (question.type === 'header') {
                    return (
                      <div
                        key={question.id}
                        className="border-[3px] border-[#1C1C1B] bg-[#E2E2DE] p-4 shadow-[4px_4px_0px_#1C1C1B]"
                      >
                        <p className="text-xs font-black uppercase tracking-wider text-[#6A5D52]">
                          Section
                        </p>
                        <h3 className="mt-1 font-creato-title text-lg font-black uppercase tracking-wide text-[#1C1C1B]">
                          {question.header_title || 'Header'}
                        </h3>
                        {question.header_description && (
                          <p className="mt-2 text-sm font-bold text-[#6A5D52]">
                            {question.header_description}
                          </p>
                        )}
                      </div>
                    );
                  }

                  return (
                    <div
                      key={question.id}
                      className="border-[3px] border-[#1C1C1B] bg-white p-4"
                    >
                      <label className="mb-3 block">
                        <span className="mb-1 block text-xs font-black uppercase tracking-wider text-[#6A5D52]">
                          {question.is_required ? <span className="text-red-700">*</span> : null}{' '}
                          {question.type === 'multiple_choice' ? 'Multiple Choice' : question.type === 'rating' ? 'Rating' : 'Text'} Question
                        </span>
                        <span className="font-bold text-[#1C1C1B]">{question.question_text}</span>
                      </label>

                      {question.type === 'text' && (
                        <textarea
                          className="w-full border-2 border-[#1C1C1B] bg-[#F5F3EF] p-3 text-sm font-bold text-[#6A5D52]"
                          rows={4}
                          placeholder="Long answer text"
                          disabled
                        />
                      )}

                      {question.type === 'multiple_choice' && question.options && (
                        <div className="space-y-2">
                          {question.options.map((option) => (
                            <label
                              key={option}
                              className="flex items-center gap-3 border-2 border-[#1C1C1B] bg-[#F5F3EF] p-3 text-sm font-bold text-[#1C1C1B]"
                            >
                              <span className="h-4 w-4 border-2 border-[#1C1C1B] bg-white" />
                              {option}
                            </label>
                          ))}
                        </div>
                      )}

                      {question.type === 'rating' && (
                        <div className="grid grid-cols-5 gap-2">
                          {[1, 2, 3, 4, 5].map((value) => (
                            <button
                              key={value}
                              type="button"
                              disabled
                              className="h-10 border-2 border-[#1C1C1B] bg-[#F5F3EF] text-sm font-black text-[#6A5D52]"
                            >
                              {value}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          <div className={`flex ${currentPageIndex > 0 ? 'justify-between' : 'justify-end'} border-t-[3px] border-[#1C1C1B] pt-4`}>
            {currentPageIndex > 0 && (
              <button
                type="button"
                onClick={() => setCurrentPageIndex(prev => prev - 1)}
                className="border-[3px] border-[#1C1C1B] bg-white px-5 py-2.5 text-sm font-black uppercase tracking-wider text-[#1C1C1B] hover:bg-[#E2E2DE]"
              >
                &lt; Prev
              </button>
            )}
            {currentPageIndex < grouped.length - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentPageIndex(prev => prev + 1)}
                className="border-[3px] border-[#1C1C1B] bg-[#1C1C1B] px-5 py-2.5 text-sm font-black uppercase tracking-wider text-white hover:opacity-90"
              >
                Next &gt;
              </button>
            ) : (
              <button
                type="button"
                disabled
                className="border-[3px] border-[#1C1C1B] bg-[#1C1C1B] px-5 py-2.5 text-sm font-black uppercase tracking-wider text-white opacity-60"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
