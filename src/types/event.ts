export type EventCategory = 'TALKSHOW' | 'WORKSHOP' | 'GRADUATION' | 'SEMINAR';

// untuk /events
export interface Event {
  id: string;
  title: string;
  slug: string;
  category: EventCategory;
  description: string;
  price: number;
  quota: number;
  wa_link: string;
  start_time: string;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface PaymentDetails {
  bank_name: string | null;
  bank_account_name: string | null;
  bank_account_number: string | null;
  transfer_note_format: string | null;
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
  quota_left: number;
  wa_link: string;
  payment_details: PaymentDetails | null;
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
  wa_link?: string;
  start_time: string;
  is_active?: boolean;
  bank_name?: string | null;
  bank_account_name?: string | null;
  bank_account_number?: string | null;
  transfer_note_format?: string | null;
}