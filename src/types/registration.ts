import { Competition } from './competition';
import { Event } from './event';

export type RegistrationStatus = 'DRAFT' | 'PENDING' | 'APPROVED' | 'REJECTED' | 'UNREGISTERED';

export interface UserProfile {
  nrp?: string;
  major?: string;
  batch?: string;
  phone?: string;
  ktm_path?: string;
  id_card_path?: string;
  institution?: string;
}

export interface StatusResponse {
  registration_id?: string;
  status: RegistrationStatus;
  is_locked: boolean;
  draft_data: Record<string, any> | null;
  user_profile: UserProfile;
}

export interface CompetitionRegistration {
  id: string;
  user_id: string;
  competition_id: string;
  status: RegistrationStatus;
  draft_data?: Record<string, any>;
  team_name?: string;
  leader_name?: string;
  payment_proof?: string;
  competition?: Competition;
  created_at: string;
  updated_at: string;
}

export interface EventRegistration {
  id: string;
  user_id: string;
  event_id: string;
  status: RegistrationStatus;
  draft_data?: Record<string, any>;
  participant_name?: string;
  payment_proof?: string;
  event?: Event;
  created_at: string;
  updated_at: string;
}

export interface UserRegistrations {
  competitions: CompetitionRegistration[];
  events: EventRegistration[];
}
