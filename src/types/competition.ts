export type CompetitionCategory = 'INTERMEDIATE' | 'ADVANCED';

export interface Competition {
  id: string;
  name: string;
  slug: string;
  category: CompetitionCategory;
  description: string;
  registration_fee: number;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface CompetitionPayload {
  name: string;
  category: CompetitionCategory;
  description?: string;
  registration_fee: number;
  is_active?: boolean;
}
