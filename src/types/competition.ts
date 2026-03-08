import { User } from "./user";

export type CompetitionCategory = 'INTERMEDIATE' | 'ADVANCED';
export type ParticipantType = 'INDIVIDUAL' | 'GROUP';
export type RegionType = 'NATIONAL' | 'INTERNATIONAL';

export interface Competition {
  id: string;
  name: string;
  slug: string;
  participant_type: ParticipantType;
  min_members: number;
  max_members: number;
  wa_link_international: string;
  wa_link_national: string;
  description: string | null;
  is_active: boolean;
  registration_open_at: string;
  registration_close_at: string;
  submission_open_at: string;
  submission_close_at: string;
  created_at?: string;
  updated_at?: string;
}

export interface CompetitionPayload {
  name: string;
  participant_type: ParticipantType;
  min_members?: number | null;
  max_members?: number | null;
  wa_link_international: string;
  wa_link_national: string;
  description?: string;
  is_active?: boolean;
  registration_open_at: string;
  registration_close_at: string;
  submission_open_at: string;
  submission_close_at: string;
}

export interface CompetitionMember {
  id: string;
  registration_id: string;
  user_id: string;
  member_order: number;
  created_at?: string;
  updated_at?: string;
  user?: User
}
