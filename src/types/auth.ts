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
  role: string | null;       // Admin punya string (misal: "super_admin"), User = null
  permissions: string[];     // Admin punya array, User = []
  userType: UserTypes | 'ADMIN'; // Gabungan dari 'EXTERNAL' | 'INTERNAL' | 'ADMIN'
}