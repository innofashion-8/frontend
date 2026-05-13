import { fetchBackend } from '@/lib/fetch-backend';
import { fetchClient } from '@/lib/fetch-client';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { Role, Permission, RoleFormData, PermissionFormData } from '@/types/admin';
import { ApiResponse } from '@/types/api';
import { getServerSession } from 'next-auth';

export const rolePermissionService = {
  // ========== ROLES ==========
  async getRoles(): Promise<ApiResponse<Role[]>> {
    const session = await getServerSession(authOptions);
    const token = session?.accessToken;

    if (!token) {
      throw new Error('Unauthorized: Tidak ada token session.');
    }

    const response = await fetchBackend('/admin/roles-permissions/roles', {
      method: 'GET',
      token: token as string,
    });

    if (!response.ok) {
      throw new Error('Failed to fetch roles');
    }

    const result: ApiResponse<Role[]> = await response.json();
    return result;
  },

  async createRole(data: RoleFormData): Promise<ApiResponse<Role>> {
    return await fetchClient<ApiResponse<Role>>('/api/admin/roles-permissions/roles', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async updateRole(id: number, data: RoleFormData): Promise<ApiResponse<Role>> {
    return await fetchClient<ApiResponse<Role>>(`/api/admin/roles-permissions/roles/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  async deleteRole(id: number): Promise<ApiResponse<null>> {
    return await fetchClient<ApiResponse<null>>(`/api/admin/roles-permissions/roles/${id}`, {
      method: 'DELETE',
    });
  },

  async assignPermissions(roleId: number, permissions: string[]): Promise<ApiResponse<Role>> {
    return await fetchClient<ApiResponse<Role>>(`/api/admin/roles-permissions/roles/${roleId}/permissions`, {
      method: 'POST',
      body: JSON.stringify({ permissions }),
    });
  },

  // ========== PERMISSIONS ==========
  async getPermissions(): Promise<ApiResponse<Permission[]>> {
    const session = await getServerSession(authOptions);
    const token = session?.accessToken;

    if (!token) {
      throw new Error('Unauthorized: Tidak ada token session.');
    }

    const response = await fetchBackend('/admin/roles-permissions/permissions', {
      method: 'GET',
      token: token as string,
    });

    if (!response.ok) {
      throw new Error('Failed to fetch permissions');
    }

    const result: ApiResponse<Permission[]> = await response.json();
    return result;
  },

  async createPermission(data: PermissionFormData): Promise<ApiResponse<Permission>> {
    return await fetchClient<ApiResponse<Permission>>('/api/admin/roles-permissions/permissions', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async updatePermission(id: number, data: PermissionFormData): Promise<ApiResponse<Permission>> {
    return await fetchClient<ApiResponse<Permission>>(`/api/admin/roles-permissions/permissions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  async deletePermission(id: number): Promise<ApiResponse<null>> {
    return await fetchClient<ApiResponse<null>>(`/api/admin/roles-permissions/permissions/${id}`, {
      method: 'DELETE',
    });
  },
};
