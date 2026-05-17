"use client";

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import {
  evaluationQuestionService,
  EvaluationQuestion,
} from '@/services/evaluation-question-service';
import { adminConfirm, adminSuccess, adminError } from '@/lib/admin-swal';
import QuestionFormModal from './QuestionFormModal';
import HeaderFormModal from './HeaderFormModal';
import ImportQuestionsModal from './ImportQuestionsModal';
import LivePreview from './LivePreview';

interface EvaluationFormBuilderProps {
  eventId: string;
  eventTitle: string;
}

export default function EvaluationFormBuilder({ eventId, eventTitle }: EvaluationFormBuilderProps) {
  const queryClient = useQueryClient();
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isHeaderModalOpen, setIsHeaderModalOpen] = useState(false);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<EvaluationQuestion | null>(null);
  const [editingHeader, setEditingHeader] = useState<EvaluationQuestion | null>(null);
  const [orderedQuestions, setOrderedQuestions] = useState<EvaluationQuestion[]>([]);

  const { data: questions, isLoading } = useQuery({
    queryKey: ['evaluation-questions', eventId],
    queryFn: () => evaluationQuestionService.getQuestions(eventId),
  });

  const sortedQuestions = useMemo(() => {
    if (!questions) return []; // Mengembalikan array kosong dengan aman
    
    return [...questions].sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));
  }, [questions]);

  useEffect(() => {
    setOrderedQuestions(sortedQuestions);
  }, [sortedQuestions]);

  const deleteMutation = useMutation({
    mutationFn: (questionId: string) =>
      evaluationQuestionService.deleteQuestion(eventId, questionId),
    onSuccess: (message) => {
      queryClient.invalidateQueries({ queryKey: ['evaluation-questions', eventId] });
      adminSuccess({ title: 'Question Deleted', text: message });
    },
    onError: (error: any) => {
      adminError({ title: 'Delete Failed', text: error.message });
    },
  });

  const reorderMutation = useMutation({
    mutationFn: (questionIds: string[]) =>
      evaluationQuestionService.reorderQuestions(eventId, questionIds),
    onSuccess: (result) => {
      queryClient.setQueryData(['evaluation-questions', eventId], result.data);
    },
    onError: (error: any) => {
      setOrderedQuestions(sortedQuestions); // Revert jika gagal
      adminError({ title: 'Reorder Failed', text: error.message });
    },
  });

  const openCreate = () => {
    setEditingQuestion(null);
    setIsFormModalOpen(true);
  };

  const openCreateHeader = () => {
    setEditingHeader(null);
    setIsHeaderModalOpen(true);
  };

  const handleDelete = async (question: EvaluationQuestion) => {
    const result = await adminConfirm({
      title: 'Delete Question?',
      text: `This will remove "${question.question_text}" from the evaluation form.`,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    });

    if (result.isConfirmed) {
      deleteMutation.mutate(question.id);
    }
  };

  const closeFormModal = (shouldRefresh: boolean) => {
    setIsFormModalOpen(false);
    setEditingQuestion(null);
    if (shouldRefresh) {
      queryClient.invalidateQueries({ queryKey: ['evaluation-questions', eventId] });
    }
  };

  const closeHeaderModal = (shouldRefresh: boolean) => {
    setIsHeaderModalOpen(false);
    setEditingHeader(null);
    if (shouldRefresh) {
      queryClient.invalidateQueries({ queryKey: ['evaluation-questions', eventId] });
    }
  };

  const closeImportModal = (shouldRefresh: boolean) => {
    setIsImportModalOpen(false);
    if (shouldRefresh) {
      queryClient.invalidateQueries({ queryKey: ['evaluation-questions', eventId] });
    }
  };

  // --- FUNGSI BARU UNTUK HANDLE DRAG DROP ---
  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return; // Drop di luar area

    if (source.droppableId === destination.droppableId && source.index === destination.index) return; // Nggak pindah posisi

    const sourcePage = parseInt(source.droppableId.replace('page-', ''));
    const destPage = parseInt(destination.droppableId.replace('page-', ''));

    // Build the groups based on current orderedQuestions
    const groups = new Map<number, EvaluationQuestion[]>();
    orderedQuestions.forEach(q => {
      const p = q.page_number || 1;
      if (!groups.has(p)) groups.set(p, []);
      groups.get(p)!.push(q);
    });

    const sourceItems = groups.get(sourcePage) || [];
    const destItems = sourcePage === destPage ? sourceItems : (groups.get(destPage) || []);

    const [movedQuestion] = sourceItems.splice(source.index, 1);
    
    // Update the local page_number of the moved item
    const updatedQuestion = { ...movedQuestion, page_number: destPage };
    destItems.splice(destination.index, 0, updatedQuestion);

    if (sourcePage !== destPage) {
      groups.set(sourcePage, sourceItems);
      groups.set(destPage, destItems);
    }

    // Flatten back to array and update sort_order
    const sortedPages = Array.from(groups.keys()).sort((a, b) => a - b);
    const newFlatList: EvaluationQuestion[] = [];
    
    sortedPages.forEach(page => {
      newFlatList.push(...(groups.get(page) || []));
    });

    const nextWithSortOrder = newFlatList.map((q, index) => ({
      ...q,
      sort_order: index,
    }));

    setOrderedQuestions(nextWithSortOrder);
    reorderMutation.mutate(nextWithSortOrder.map((q) => q.id));

    // If it changed pages, we MUST update the page_number on the backend separately
    if (sourcePage !== destPage) {
      evaluationQuestionService.updateQuestion(eventId, updatedQuestion.id, updatedQuestion)
        .then(() => {
          queryClient.invalidateQueries({ queryKey: ['evaluation-questions', eventId] });
        });
    }
  };

  const groupedAndSorted = useMemo(() => {
    const groups = new Map<number, EvaluationQuestion[]>();
    orderedQuestions.forEach((q) => {
      const p = q.page_number || 1;
      if (!groups.has(p)) groups.set(p, []);
      groups.get(p)!.push(q);
    });
    return Array.from(groups.entries()).sort((a, b) => a[0] - b[0]);
  }, [orderedQuestions]);

  const displayLabels = useMemo(() => {
    const labels = new Map<string, string>();
    const pageCounters = new Map<number, number>();

    orderedQuestions.forEach((q) => {
      if (q.type === 'header') {
        labels.set(q.id, 'HEADER');
      } else {
        const page = q.page_number || 1;
        const currentCount = pageCounters.get(page) || 0;
        pageCounters.set(page, currentCount + 1);
        labels.set(q.id, `Q${currentCount + 1}`);
      }
    });
    return labels;
  }, [orderedQuestions]);

  return (
    <div className="w-full space-y-6 text-[#1C1C1B]">
      {/* HEADER TETAP SAMA */}
      <div className="border-[3px] border-[#1C1C1B] bg-[#E2E2DE] p-6 shadow-[6px_6px_0px_#1C1C1B]">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#6A5D52]">Evaluation Form</p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-creato-title text-3xl font-black uppercase tracking-tight text-[#1C1C1B]">
              {eventTitle}
            </h1>
            <p className="mt-1 text-sm font-bold text-[#6A5D52]">
              Build the checkout evaluation questions for this event.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row flex-wrap">
            <Link
              href={`/admin/event/${eventId}/evaluation/responses`}
              className="border-[3px] border-[#1C1C1B] bg-white px-4 py-2 text-center text-sm font-black uppercase tracking-wider text-[#1C1C1B] shadow-[3px_3px_0px_#1C1C1B] transition hover:bg-[#1C1C1B] hover:text-white"
            >
              Responses
            </Link>
            <button
              onClick={() => setIsImportModalOpen(true)}
              className="border-[3px] border-[#1C1C1B] bg-white px-4 py-2 text-sm font-black uppercase tracking-wider text-[#1C1C1B] shadow-[3px_3px_0px_#1C1C1B] transition hover:bg-[#B7AC9B] cursor-pointer"
            >
              Import
            </button>
            <button
              onClick={openCreateHeader}
              className="border-[3px] border-[#1C1C1B] bg-[#B7AC9B] px-4 py-2 text-sm font-black uppercase tracking-wider text-[#1C1C1B] shadow-[3px_3px_0px_#1C1C1B] transition hover:bg-[#1C1C1B] hover:text-white cursor-pointer"
            >
              + Header
            </button>
            <button
              onClick={openCreate}
              className="border-[3px] border-[#1C1C1B] bg-[#6A5D52] px-4 py-2 text-sm font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_#1C1C1B] transition hover:bg-[#1C1C1B] cursor-pointer"
            >
              + Question
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_460px]">
        <section className="border-[3px] border-[#1C1C1B] bg-[#E2E2DE] p-5 shadow-[6px_6px_0px_#1C1C1B]">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="font-creato-title text-xl font-black uppercase tracking-wider text-[#1C1C1B]">
              Questions
            </h2>
            <span className="border-2 border-[#1C1C1B] bg-white px-3 py-1 text-xs font-black uppercase text-[#1C1C1B]">
              {questions?.length || 0} total
            </span>
          </div>

          {isLoading ? (
            <div className="border-2 border-dashed border-[#979086] bg-white/70 p-8 text-center text-sm font-bold uppercase tracking-wider text-[#6A5D52]">
              Loading questions...
            </div>
          ) : (questions?.length || 0) === 0 ? (
            <div className="border-2 border-dashed border-[#979086] bg-white/70 p-8 text-center">
              <p className="text-sm font-black uppercase tracking-wider text-[#1C1C1B]">No questions yet</p>
              <p className="mt-1 text-sm font-bold text-[#6A5D52]">
                Add a text, multiple choice, or rating question to begin.
              </p>
              <button
                onClick={openCreate}
                className="mt-4 border-[3px] border-[#1C1C1B] bg-[#6A5D52] px-4 py-2 text-sm font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_#1C1C1B] hover:bg-[#1C1C1B] cursor-pointer"
              >
                Create First Question
              </button>
            </div>
          ) : (
            // --- IMPLEMENTASI DRAG & DROP YANG BARU (PER PAGE) ---
            <DragDropContext onDragEnd={handleDragEnd}>
              {groupedAndSorted.map(([page_number, items]) => (
                <div key={`page-group-${page_number}`} className="mb-8 border-[3px] border-[#1C1C1B] bg-white shadow-[6px_6px_0px_#1C1C1B]">
                  <div className="border-b-[3px] border-[#1C1C1B] bg-[#1C1C1B] px-4 py-2">
                    <h3 className="font-creato-title text-xl font-black uppercase tracking-widest text-white">
                      PAGE {page_number}
                    </h3>
                  </div>
                  
                  <Droppable droppableId={`page-${page_number}`}>
                    {(provided, snapshot) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={`min-h-[100px] space-y-3 p-4 transition-colors ${snapshot.isDraggingOver ? 'bg-[#E2E2DE]' : 'bg-white'}`}
                      >
                        {items.length === 0 && !snapshot.isDraggingOver && (
                          <div className="text-center py-4 text-xs font-bold text-[#6A5D52] uppercase border-2 border-dashed border-[#B7AC9B]">
                            Drag questions here
                          </div>
                        )}
                        {items.map((question, index) => (
                          <Draggable key={question.id} draggableId={question.id} index={index}>
                            {(provided, snapshot) => (
                              <article
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                className={`border-[3px] bg-[#F5F3EF] p-4 transition-colors ${
                                  snapshot.isDragging
                                    ? 'border-[#6A5D52] shadow-[8px_8px_0px_#1C1C1B] opacity-95 z-50 rotate-1'
                                    : 'border-[#1C1C1B] shadow-[4px_4px_0px_#1C1C1B] hover:-translate-x-0.5 hover:-translate-y-0.5'
                                }`}
                              >
                                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                  <div className="flex min-w-0 flex-1 gap-3">
                                    {/* DRAG HANDLE (Kotak =) */}
                                    <div
                                      {...provided.dragHandleProps}
                                      className="mt-1 grid h-8 w-8 shrink-0 cursor-grab place-items-center border-2 border-[#1C1C1B] bg-white text-[#6A5D52] hover:bg-[#1C1C1B] hover:text-white transition-colors"
                                      aria-label="Drag question"
                                    >
                                      <span className="text-lg leading-none">=</span>
                                    </div>
                                    
                                    <div className="min-w-0 flex-1">
                                      <div className="mb-2 flex flex-wrap items-center gap-2">
                                        <span className="text-xs font-black uppercase tracking-wider text-[#6A5D52]">
                                          {displayLabels.get(question.id)}
                                        </span>
                                        <span className="border border-[#1C1C1B] bg-white px-2.5 py-1 text-xs font-black uppercase text-[#1C1C1B]">
                                          {question.type.replace('_', ' ')}
                                        </span>
                                        {question.is_required && (
                                          <span className="border border-red-700 bg-red-50 px-2.5 py-1 text-xs font-black uppercase text-red-700">
                                            Required
                                          </span>
                                        )}
                                      </div>
                                      {question.type === 'header' ? (
                                        <>
                                          <p className="font-creato-title text-lg font-black uppercase text-[#1C1C1B]">
                                            {question.header_title || 'UNTITLED HEADER'}
                                          </p>
                                          {question.header_description && (
                                            <p className="mt-1 text-sm font-bold text-[#6A5D52]">
                                              {question.header_description}
                                            </p>
                                          )}
                                        </>
                                      ) : (
                                        <>
                                          <p className="font-bold text-[#1C1C1B]">{question.question_text}</p>
                                          {question.type === 'multiple_choice' && question.options && (
                                            <p className="mt-2 text-sm font-bold text-[#6A5D52]">
                                              {question.options.join(', ')}
                                            </p>
                                          )}
                                        </>
                                      )}
                                    </div>
                                  </div>
                                  <div className="flex shrink-0 gap-2">
                                    <button
                                      onClick={() => {
                                        if (question.type === 'header') {
                                          setEditingHeader(question);
                                          setIsHeaderModalOpen(true);
                                        } else {
                                          setEditingQuestion(question);
                                          setIsFormModalOpen(true);
                                        }
                                      }}
                                      className="px-3 py-1.5 border-[3px] border-[#1C1C1B] bg-white text-[#1C1C1B] text-xs font-black hover:bg-[#1C1C1B] hover:text-[#E2E2DE] transition-all shadow-[3px_3px_0px_#1c1c1b] cursor-pointer tracking-wider uppercase"
                                    >
                                      EDIT
                                    </button>
                                    <button
                                      onClick={() => handleDelete(question)}
                                      className="px-3 py-1.5 border-[3px] border-[#ef4444] bg-white text-[#ef4444] text-xs font-black hover:bg-[#ef4444] hover:text-white transition-all shadow-[3px_3px_0px_#1c1c1b] cursor-pointer tracking-wider uppercase"
                                    >
                                      DEL
                                    </button>
                                  </div>
                                </div>
                              </article>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              ))}
            </DragDropContext>
          )}
        </section>

        <aside className="xl:sticky xl:top-6 xl:self-start">
          <LivePreview questions={orderedQuestions} />
        </aside>
      </div>

      {isFormModalOpen && (
        <QuestionFormModal
          eventId={eventId}
          question={editingQuestion}
          existingQuestions={orderedQuestions}
          onClose={closeFormModal}
        />
      )}

      {isHeaderModalOpen && (
        <HeaderFormModal
          eventId={eventId}
          question={editingHeader}
          existingQuestions={orderedQuestions}
          onClose={closeHeaderModal}
        />
      )}

      {isImportModalOpen && (
        <ImportQuestionsModal targetEventId={eventId} onClose={closeImportModal} />
      )}
    </div>
  );
}
