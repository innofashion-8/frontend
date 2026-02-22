import { CompetitionRegistration, EventRegistration } from './registration';

export type UserTypes = 'EXTERNAL' | 'INTERNAL';

export interface User {
  id: string;
  name: string;
  email: string;
  email_verified_at?: string;
  type: UserTypes;
  institution?: string;
  nrp?: string;
  batch?: string;
  major?: string;
  ktm_path?: string;
  id_card_path?: string;
  phone?: string;
  line?: string;
  draft_data?: Record<string, any>;
  created_at?: string;
  updated_at?: string;
}

export interface UserWithRegistrations extends User {
  event_registrations?: EventRegistration[];
  competition_registrations?: CompetitionRegistration[];
}

// Payload untuk POST /profile/submit
export interface SubmitProfilePayload {
  major: string;
  nrp?: string;
  batch?: string;
  ktm_path?: File;       // Tipe File untuk form upload
  id_card_path?: File;   // Tipe File untuk form upload
}

// Payload untuk POST /profile/draft
export interface DraftProfilePayload {
  draft_data: {
    major?: string;
    nrp?: string;
    batch?: string;
    ktm_path?: File;     
    id_card_path?: File; 
  }
}