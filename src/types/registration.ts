import { Competition, CompetitionCategory, RegionType, CompetitionMember } from './competition';
import { Event } from './event';
import { User, UserTypes } from './user';

export type RegistrationStatus = 'DRAFT' | 'PENDING' | 'VERIFIED' | 'REJECTED' | 'UNREGISTERED';

export interface UserProfile {
  name?: string;
  email?: string;
  type?: UserTypes
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
  is_eligible?: boolean;
  ineligibility_reason?: string;
  region?: RegionType;
  group_name?: string | null; // only for competition
  category?: CompetitionCategory | null;
  members?: CompetitionMember[];
  draft_data: Record<string, any> | null;
  user_profile: UserProfile;
  rejection_reason?: string;
}

export interface CompetitionRegistration {
  id: string;
  user_id: string;
  competition_id: string;
  verified_by: string | null;
  draft_data: any | null;
  group_name: string | null;
  region: RegionType | null;
  category: CompetitionCategory | null;
  status: RegistrationStatus;
  rejection_reason: string | null;
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

export interface CompetitionSubmission {
  id: string;
  file_type: string;
  file_path: string;
  submitted_at: string;
}

export interface EventRegistrationWithEvent extends EventRegistration {
  event: Event;
}

export interface CompetitionRegistrationWithCompetition extends CompetitionRegistration {
  competition: Competition;
  members?: CompetitionMember[];
}

export interface EventRegistrationWithUser extends EventRegistration {
  user: User;
}

export interface CompetitionRegistrationWithUser extends CompetitionRegistration {
  user: User;
  members?: CompetitionMember[];
}

export interface EventRegistrationWithUserAndEvent extends EventRegistration {
  user: User;
  event: Event;
}

export interface CompetitionRegistrationWithUserAndCompetition extends CompetitionRegistration {
  user: User;
  competition: Competition;
  members?: CompetitionMember[];
  submissions?: CompetitionSubmission[];
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