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
  close_registration_at?: string | null;
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
  /** ISO string, null jika tidak diset */
  close_registration_at: string | null;
  /** Format untuk input datetime-local */
  close_registration_at_input: string | null;
  /** Format human-readable */
  close_registration_at_human: string | null;
  /** true jika pendaftaran masih terbuka */
  is_registration_open: boolean;
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
  /** Opsional. ISO/datetime-local string. Kosongkan untuk tidak ada batas tutup. */
  close_registration_at?: string | null;
  is_active?: boolean;
  bank_name?: string | null;
  bank_account_name?: string | null;
  bank_account_number?: string | null;
  transfer_note_format?: string | null;
}