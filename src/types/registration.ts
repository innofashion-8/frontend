import { Competition } from './competition';
import { Event } from './event';
import { User } from './user';

export type RegistrationStatus = 'DRAFT' | 'PENDING' | 'VERIFIED' | 'REJECTED' | 'UNREGISTERED';

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
  rejection_reason?: string;
}

export interface CompetitionRegistration {
  id: string;
  user_id: string;
  competition_id: string;
  verified_by: string;
  status: RegistrationStatus;
  draft_data?: Record<string, any>;
  payment_proof?: string;
  rejection_reason?: string;
  created_at: string;
  updated_at: string;
}

export interface EventRegistration {
  id: string;
  user_id: string;
  verified_by: string;
  event_id: string;
  status: RegistrationStatus;
  draft_data?: Record<string, any>;
  payment_proof?: string;
  rejection_reason?: string;
  created_at: string;
  updated_at: string;
}

export interface EventRegistrationWithEvent extends EventRegistration {
  event: Event;
}

export interface CompetitionRegistrationWithCompetition extends CompetitionRegistration {
  competition: Competition;
}

export interface EventRegistrationWithUser extends EventRegistration {
  user: User;
}

export interface CompetitionRegistrationWithUser extends CompetitionRegistration {
  user: User;
}

export interface EventRegistrationWithUserAndEvent extends EventRegistration {
  user: User;
  event: Event;
}

export interface CompetitionRegistrationWithUserAndCompetition extends CompetitionRegistration {
  user: User;
  competition: Competition;
}

// untuk get registrations
export interface UserRegistrations {
  competitions: CompetitionRegistrationWithCompetition[];
  events: EventRegistrationWithEvent[];
}

export interface SubmitCompetitionPayload {
  payment_proof: File;
}

export interface SubmitEventPayload {
  payment_proof?: File;
}