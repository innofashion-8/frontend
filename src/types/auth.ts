import { UserTypes } from "./user";

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  type: UserTypes;
  institution?: string;
  phone: string;
  line?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface BackendAuthResponse {
  id?: string;
  token: string;
  name: string;
  email: string;
  division: string | null;
  is_profile_complete: boolean | null;
  role: string | null;       // Admin punya string (misal: "super_admin"), User = null
  permissions: string[];     // Admin punya array, User = []
  userType: UserTypes | 'ADMIN'; // Gabungan dari 'EXTERNAL' | 'INTERNAL' | 'ADMIN'
}

export interface ImpersonateResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    type: UserTypes;
    is_profile_complete: boolean;
  };
}