import { adminService } from '@/services/admin-service';
import { divisionService } from '@/services/division-service';
import { rolePermissionService } from '@/services/role-permission-service';
import AdminManagementClient from '@/components/admin/admin-management/AdminManagementClient';

export default async function AdminManagementPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const page = parseInt(params.page || "1");
  
  const [admins, divisionsResponse, rolesResponse] = await Promise.all([
    adminService.getAdmins(page),
    divisionService.getAllDivisions(),
    rolePermissionService.getRoles(),
  ]);

  return (
    <AdminManagementClient 
      data={admins} 
      divisions={divisionsResponse.data || []}
      roles={rolesResponse.data || []}
    />
  );
}
