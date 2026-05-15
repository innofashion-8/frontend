"use client";

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import {
  evaluationQuestionService,
  EvaluationResponsesPayload,
} from '@/services/evaluation-question-service';

interface EvaluationResponsesClientProps {
  eventId: string;
}

export default function EvaluationResponsesClient({ eventId }: EvaluationResponsesClientProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['evaluation-responses', eventId],
    queryFn: () => evaluationQuestionService.getResponses(eventId),
  });

  if (isLoading) {
    return (
      <div className="border-[3px] border-[#1C1C1B] bg-[#E2E2DE] p-8 text-center shadow-[6px_6px_0px_#1C1C1B]">
        <p className="font-black uppercase tracking-[0.2em] text-[#6A5D52]">
          Loading evaluation responses...
        </p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="border-[3px] border-red-700 bg-[#E2E2DE] p-8 shadow-[6px_6px_0px_#1C1C1B]">
        <h1 className="font-creato-title text-2xl font-black uppercase tracking-wider text-red-700">
          Failed to Load Responses
        </h1>
        <p className="mt-2 font-bold text-[#1C1C1B]">
          {error instanceof Error ? error.message : 'Unknown error'}
        </p>
      </div>
    );
  }

  const ratingSummaries = data.summary.filter((item) => item.type === 'rating');
  const choiceSummaries = data.summary.filter((item) => item.type === 'multiple_choice');

  const formatDate = (value: string) =>
    value
      ? new Intl.DateTimeFormat('id-ID', {
          dateStyle: 'medium',
          timeStyle: 'short',
        }).format(new Date(value))
      : '-';

  return (
    <div className="space-y-8 text-[#1C1C1B]">
      <div className="border-[3px] border-[#1C1C1B] bg-[#E2E2DE] p-6 shadow-[6px_6px_0px_#1C1C1B]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#6A5D52]">
              Evaluation Responses
            </p>
            <h1 className="mt-2 font-creato-title text-3xl font-black uppercase tracking-tight">
              {data.event.title}
            </h1>
            <p className="mt-1 text-sm font-bold text-[#6A5D52]">
              {data.responses.length} submitted response{data.responses.length === 1 ? '' : 's'}
            </p>
          </div>
          <Link
            href={`/admin/event/${data.event.id}/evaluation`}
            className="border-[3px] border-[#1C1C1B] bg-white px-4 py-2 text-center text-sm font-black uppercase tracking-wider shadow-[3px_3px_0px_#1C1C1B] transition hover:bg-[#1C1C1B] hover:text-white"
          >
            Back to Builder
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="border-[3px] border-[#1C1C1B] bg-[#E2E2DE] p-5 shadow-[6px_6px_0px_#1C1C1B] xl:col-span-1">
          <h2 className="mb-4 font-creato-title text-xl font-black uppercase tracking-wider">
            Rating Summary
          </h2>
          {ratingSummaries.length === 0 ? (
            <p className="border-2 border-dashed border-[#979086] bg-white/70 p-4 text-sm font-bold text-[#6A5D52]">
              No rating questions.
            </p>
          ) : (
            <div className="space-y-4">
              {ratingSummaries.map((item) => (
                <div key={item.question_id} className="border-[3px] border-[#1C1C1B] bg-[#F5F3EF] p-4">
                  <p className="text-sm font-black text-[#1C1C1B]">{item.question_text}</p>
                  <div className="mt-3 flex items-end justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-[#6A5D52]">
                      Average
                    </span>
                    <span className="font-mono text-4xl font-black">
                      {item.stats.average ?? '-'}
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-5 gap-1">
                    {[1, 2, 3, 4, 5].map((score) => (
                      <div key={score} className="text-center">
                        <div className="border-2 border-[#1C1C1B] bg-white py-1 text-xs font-black">
                          {item.stats.distribution[String(score)] ?? 0}
                        </div>
                        <div className="mt-1 text-[10px] font-black text-[#6A5D52]">{score}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-[3px] border-[#1C1C1B] bg-[#E2E2DE] p-5 shadow-[6px_6px_0px_#1C1C1B] xl:col-span-2">
          <h2 className="mb-4 font-creato-title text-xl font-black uppercase tracking-wider">
            Choice Summary
          </h2>
          {choiceSummaries.length === 0 ? (
            <p className="border-2 border-dashed border-[#979086] bg-white/70 p-4 text-sm font-bold text-[#6A5D52]">
              No multiple choice questions.
            </p>
          ) : (
            <div className="space-y-4">
              {choiceSummaries.map((item) => (
                <div key={item.question_id} className="border-[3px] border-[#1C1C1B] bg-[#F5F3EF] p-4">
                  <p className="mb-3 text-sm font-black text-[#1C1C1B]">{item.question_text}</p>
                  <div className="space-y-2">
                    {Object.entries(item.stats.distribution).map(([option, count]) => {
                      const percent = item.stats.count > 0 ? (count / item.stats.count) * 100 : 0;
                      return (
                        <div key={option} className="grid grid-cols-[140px_minmax(0,1fr)_44px] items-center gap-3">
                          <span className="truncate text-xs font-black uppercase text-[#6A5D52]">{option}</span>
                          <div className="h-4 border-2 border-[#1C1C1B] bg-white">
                            <div className="h-full bg-[#6A5D52]" style={{ width: `${percent}%` }} />
                          </div>
                          <span className="text-right font-mono text-sm font-black">{count}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <section className="border-[3px] border-[#1C1C1B] bg-[#E2E2DE] p-5 shadow-[6px_6px_0px_#1C1C1B]">
        <h2 className="mb-4 font-creato-title text-xl font-black uppercase tracking-wider">
          Response Table
        </h2>
        <div className="overflow-x-auto border-[3px] border-[#1C1C1B] bg-white">
          <table className="min-w-full border-collapse text-sm">
            <thead className="bg-[#1C1C1B] text-white">
              <tr>
                <th className="min-w-44 p-3 text-left font-black uppercase tracking-wider">Participant</th>
                <th className="min-w-36 p-3 text-left font-black uppercase tracking-wider">Submitted</th>
                {data.questions.map((question) => (
                  <th key={question.id} className="min-w-64 p-3 text-left font-black uppercase tracking-wider">
                    {question.question_text}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.responses.length === 0 ? (
                <tr>
                  <td colSpan={data.questions.length + 2} className="p-8 text-center font-black uppercase tracking-wider text-[#6A5D52]">
                    No responses yet.
                  </td>
                </tr>
              ) : (
                data.responses.map((response, index) => (
                  <tr key={response.id} className={index % 2 === 0 ? 'bg-[#F5F3EF]' : 'bg-white'}>
                    <td className="border-t-2 border-[#1C1C1B] p-3 align-top">
                      <p className="font-black">{response.user.name || '-'}</p>
                      <p className="text-xs font-bold text-[#6A5D52]">{response.user.email || '-'}</p>
                      {response.user.nrp && <p className="text-xs font-bold text-[#6A5D52]">{response.user.nrp}</p>}
                    </td>
                    <td className="border-t-2 border-[#1C1C1B] p-3 align-top font-bold">
                      {formatDate(response.submitted_at)}
                    </td>
                    {data.questions.map((question) => (
                      <td key={question.id} className="border-t-2 border-[#1C1C1B] p-3 align-top font-bold">
                        {response.answers[question.id]?.value || '-'}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
