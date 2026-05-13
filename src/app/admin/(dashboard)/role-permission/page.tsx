import RolePermissionClient from '@/components/admin/role-permission/RolePermissionClient';
import { rolePermissionService } from '@/services/role-permission-service';

export default async function RolePermissionPage() {
  const [rolesResponse, permissionsResponse] = await Promise.all([
    rolePermissionService.getRoles(),
    rolePermissionService.getPermissions(),
  ]);

  return (
    <RolePermissionClient 
      initialRoles={rolesResponse.data || []}
      initialPermissions={permissionsResponse.data || []}
    />
  );
}
