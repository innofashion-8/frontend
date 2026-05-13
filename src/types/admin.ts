import { Division } from './division';

export type { Division };

export interface Admin {
  id: string;
  name: string;
  nrp: string;
  email: string;
  division_id: string;
  division?: Division;
  roles?: Role[];
  permissions?: string[];
  created_at?: string;
  updated_at?: string;
}

export interface Role {
  id: number;
  name: string;
  guard_name?: string;
  permissions?: Permission[];
  created_at?: string;
  updated_at?: string;
}

export interface Permission {
  id: number;
  name: string;
  guard_name?: string;
  created_at?: string;
  updated_at?: string;
}

export interface AdminFormData {
  name: string;
  nrp: string;
  email: string;
  division_id: string;
  role?: string;
}

export interface RoleFormData {
  name: string;
  display_name?: string;
}

export interface PermissionFormData {
  name: string;
  display_name?: string;
}
