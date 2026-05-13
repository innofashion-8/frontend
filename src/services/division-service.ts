import { fetchBackend } from '@/lib/fetch-backend';
import { fetchClient } from '@/lib/fetch-client';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { Division } from '@/types/division';
import { ApiResponse } from '@/types/api';
import { PaginatedResponse } from '@/types';
import { getServerSession } from 'next-auth';

export const divisionService = {
  async getDivisions(page: number = 1): Promise<PaginatedResponse<Division>> {
    const session = await getServerSession(authOptions);
    const token = session?.accessToken;

    if (!token) {
      throw new Error('Unauthorized: Tidak ada token session.');
    }

    const response = await fetchBackend(`/admin/divisions?page=${page}`, {
      method: 'GET',
      token: token as string,
    });

    if (!response.ok) {
      throw new Error('Failed to fetch divisions');
    }

    const result: ApiResponse<PaginatedResponse<Division>> = await response.json();
    
    if (!result.data) {
      throw new Error('No data returned from server');
    }
    
    return result.data;
  },

  async getAllDivisions(): Promise<ApiResponse<Division[]>> {
    const session = await getServerSession(authOptions);
    const token = session?.accessToken;

    if (!token) {
      throw new Error('Unauthorized: Tidak ada token session.');
    }

    const response = await fetchBackend('/admin/divisions?all=true', {
      method: 'GET',
      token: token as string,
    });

    if (!response.ok) {
      throw new Error('Failed to fetch divisions');
    }

    const result: ApiResponse<Division[]> = await response.json();
    return result;
  },

  async createDivision(data: { name: string; slug: string }): Promise<ApiResponse<Division>> {
    return await fetchClient<ApiResponse<Division>>('/api/admin/divisions', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async updateDivision(id: string, data: { name: string; slug: string }): Promise<ApiResponse<Division>> {
    return await fetchClient<ApiResponse<Division>>(`/api/admin/divisions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  async deleteDivision(id: string): Promise<ApiResponse<null>> {
    return await fetchClient<ApiResponse<null>>(`/api/admin/divisions/${id}`, {
      method: 'DELETE',
    });
  },
};
