import { fetchBackend } from '@/lib/fetch-backend';
import { fetchClient } from '@/lib/fetch-client';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { Admin, AdminFormData } from '@/types/admin';
import { ApiResponse } from '@/types/api';
import { PaginatedResponse } from '@/types';
import { getServerSession } from 'next-auth';

export const adminService = {
  async getAdmins(page: number = 1): Promise<PaginatedResponse<Admin>> {
    const session = await getServerSession(authOptions);
    const token = session?.accessToken;

    if (!token) {
      throw new Error('Unauthorized: Tidak ada token session.');
    }

    const response = await fetchBackend(`/admin/admins?page=${page}`, {
      method: 'GET',
      token: token as string,
    });

    if (!response.ok) {
      throw new Error('Failed to fetch admins');
    }

    const result: ApiResponse<PaginatedResponse<Admin>> = await response.json();
    
    if (!result.data) {
      throw new Error('No data returned from server');
    }
    
    return result.data;
  },

  async createAdmin(data: AdminFormData): Promise<ApiResponse<Admin>> {
    return await fetchClient<ApiResponse<Admin>>('/api/admin/admins', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async updateAdmin(id: string, data: AdminFormData): Promise<ApiResponse<Admin>> {
    return await fetchClient<ApiResponse<Admin>>(`/api/admin/admins/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  async deleteAdmin(id: string): Promise<ApiResponse<null>> {
    return await fetchClient<ApiResponse<null>>(`/api/admin/admins/${id}`, {
      method: 'DELETE',
    });
  },
};
