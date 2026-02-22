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