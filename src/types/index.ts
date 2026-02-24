// Tipe Generic untuk membungkus response pagination Laravel
export interface PaginatedResponse<T> {
  current_page: number;
  data: T[]; 
  first_page_url: string;
  last_page: number;
  last_page_url: string;
  next_page_url: string | null;
  prev_page_url: string | null;
  per_page: number;
  total: number;
}