import { Division } from './division';
import { CompetitionRegistrationWithCompetition, EventRegistrationWithEvent } from './registration';

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
  is_profile_complete?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface UserWithRegistrations extends User {
  event_registrations?: EventRegistrationWithEvent[];
  competition_registrations?: CompetitionRegistrationWithCompetition[];
}

// Payload untuk POST /profile/submit
export interface ProfileData {
  type: UserTypes;
  institution: string;
  phone: string;
  line?: string;
  major: string;
  nrp?: string;
  batch?: string;
  ktm_path?: File;       // Tipe File untuk form upload
  id_card_path?: File;   // Tipe File untuk form upload
  whatsapp?: string;
  line_id?: string;
  asal_sekolah?: string;
}

export interface ProfileStatusResponse {
  is_completed: boolean;
  draft_data: ProfileData; // Akan berisi object kosong {} jika belum ada draft
  profile_data: ProfileData | null; // Null kalau belum komplit
}

// Payload untuk POST /profile/draft
export interface DraftRegisterPayload {
  draft_data: {
    institution?: string;
    phone?: string;
    line?: string;
    major?: string;
    nrp?: string;
    batch?: string;
    ktm_path?: File;     
    id_card_path?: File; 
  }
}

export interface AdminProfile {
  name: string;
  email: string;
  division: Division;
  roles: string;
  permissions: string[];
}

export type AuthProfile = AdminProfile | UserWithRegistrations;