export type EventCategory = 'TALKSHOW' | 'WORKSHOP';

// untuk /events
export interface Event {
  id: string;
  title: string;
  slug: string;
  category: EventCategory;
  description: string;
  price: number;
  quota: number;
  start_time: string;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

// Untuk API /events/{key}
export interface EventResource {
  id: string;
  title: string;
  slug: string;
  category: EventCategory;
  description: string;
  price: number;
  quota: number;
  start_time_human: string;
  start_time_input: string;
  start_time_iso: string;
  is_active: boolean;
}

export interface EventPayload {
  title: string;
  category: EventCategory;
  description?: string;
  price: number;
  quota: number;
  start_time: string;
  is_active?: boolean;
}