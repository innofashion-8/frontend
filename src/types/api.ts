export interface ApiResponse<T = any> {
  code: number;
  success: boolean;
  message: string | null;
  data: T | null;
}

export type ApiValidationErrors = Record<string, string[]>;