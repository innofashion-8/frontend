import { CompetitionRegistration, EventRegistration } from './registration';

export interface User {
  id: string;
  name: string;
  email: string;
  institution?: string;
  nrp?: string;
  batch?: string;
  major?: string;
  ktm_path?: string;
  id_card_path?: string;
  phone?: string;
  line?: string;
  created_at?: string;
}

export interface UserWithRegistrations extends User {
  event_registrations?: EventRegistration[];
  competition_registrations?: CompetitionRegistration[];
}
