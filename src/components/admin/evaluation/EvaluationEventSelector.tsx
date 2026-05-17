"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { eventService } from "@/services/event-service";

interface EvaluationEventSelectorProps {
  mode: "builder" | "responses";
}

export default function EvaluationEventSelector({ mode }: EvaluationEventSelectorProps) {
  const [search, setSearch] = useState("");

  const { data: events = [], isLoading, error } = useQuery({
    queryKey: ["evaluation-event-selector-events"],
    queryFn: () => eventService.getEvents(),
  });

  const filteredEvents = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    if (!keyword) return events;

    return events.filter((event) =>
      [event.title, event.category, event.start_time_human]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(keyword))
    );
  }, [events, search]);

  const title = mode === "builder" ? "Evaluation Form Builder" : "Evaluation Responses";
  const description =
    mode === "builder"
      ? "Choose an event to build, edit, reorder, or import evaluation questions."
      : "Choose an event to inspect submitted survey answers and response summaries.";

  const getHref = (eventId: string) =>
    mode === "builder"
      ? `/admin/event/${eventId}/evaluation`
      : `/admin/event/${eventId}/evaluation/responses`;

  return (
    <div className="space-y-6 text-[#1C1C1B]">
      <div className="border-[3px] border-[#1C1C1B] bg-[#E2E2DE] p-6 shadow-[6px_6px_0px_#1C1C1B]">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#6A5D52]">
          Evaluation Center
        </p>
        <div className="mt-2 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="font-creato-title text-3xl font-black uppercase tracking-tight">
              {title}
            </h1>
            <p className="mt-1 max-w-2xl text-sm font-bold text-[#6A5D52]">
              {description}
            </p>
          </div>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search event..."
            className="w-full border-[3px] border-[#1C1C1B] bg-white px-4 py-3 text-sm font-bold outline-none shadow-[3px_3px_0px_#1C1C1B] placeholder:text-[#979086] focus:ring-2 focus:ring-[#6A5D52] lg:max-w-sm"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="border-[3px] border-[#1C1C1B] bg-[#E2E2DE] p-10 text-center shadow-[6px_6px_0px_#1C1C1B]">
          <p className="font-black uppercase tracking-[0.2em] text-[#6A5D52]">
            Loading events...
          </p>
        </div>
      ) : error ? (
        <div className="border-[3px] border-red-700 bg-[#E2E2DE] p-8 shadow-[6px_6px_0px_#1C1C1B]">
          <h2 className="font-creato-title text-2xl font-black uppercase tracking-wider text-red-700">
            Failed to Load Events
          </h2>
          <p className="mt-2 font-bold">{error instanceof Error ? error.message : "Unknown error"}</p>
        </div>
      ) : filteredEvents.length === 0 ? (
        <div className="border-[3px] border-[#1C1C1B] bg-[#E2E2DE] p-10 text-center shadow-[6px_6px_0px_#1C1C1B]">
          <p className="font-black uppercase tracking-[0.2em] text-[#6A5D52]">
            No events found.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredEvents.map((event) => (
            <Link
              key={event.id}
              href={getHref(event.id)}
              className="group flex min-h-56 flex-col justify-between border-[3px] border-[#1C1C1B] bg-[#E2E2DE] p-6 shadow-[6px_6px_0px_#1C1C1B] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_#1C1C1B]"
            >
              <div>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="border-2 border-[#1C1C1B] bg-[#1C1C1B] px-3 py-1 text-xs font-black uppercase tracking-wider text-white">
                    {event.category}
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-[#6A5D52]">
                    {event.is_active ? "Active" : "Inactive"}
                  </span>
                </div>
                <h2 className="font-creato-title text-2xl font-black uppercase leading-tight">
                  {event.title}
                </h2>
                <p className="mt-3 text-sm font-bold text-[#6A5D52]">
                  {event.start_time_human}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t-[3px] border-[#1C1C1B] pt-4">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#1C1C1B]">
                  {mode === "builder" ? "Open Builder" : "View Responses"}
                </span>
                <span className="border-2 border-[#1C1C1B] bg-white px-3 py-1 font-black transition group-hover:bg-[#1C1C1B] group-hover:text-white">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
