import { RegistrationStatus } from "./registration";

// Payload untuk PATCH status dari Admin
export interface UpdateRegistrationStatusPayload {
  status: RegistrationStatus;
  rejection_reason?: string; // Wajib diisi kalau statusnya 'REJECTED'
}