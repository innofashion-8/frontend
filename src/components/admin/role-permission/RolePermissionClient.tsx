"use client";

import { useState, useEffect } from "react";
import { Role, Permission } from "@/types/admin";
import { rolePermissionService } from "@/services/role-permission-service";
import { adminConfirm, adminSuccess, adminError, adminLoading } from "@/lib/admin-swal";
import { RoleModal } from "./RoleModal";
import { PermissionModal } from "./PermissionModal";
import Swal from "sweetalert2";

interface Props {
  initialRoles: Role[];
  initialPermissions: Permission[];
}

export default function RolePermissionClient({ initialRoles, initialPermissions }: Props) {
  const [roles, setRoles] = useState<Role[]>(initialRoles);
  const [permissions, setPermissions] = useState<Permission[]>(initialPermissions);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [loading, setLoading] = useState(false);

  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [editingRole, setEditingRole] = useState<Role | null>(null);

  const [isPermissionModalOpen, setIsPermissionModalOpen] = useState(false);
  const [editingPermission, setEditingPermission] = useState<Permission | null>(null);

  // Auto-select first role on mount
  useEffect(() => {
    if (roles.length > 0 && !selectedRole) {
      setSelectedRole(roles[0]);
    }
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [rolesResponse, permissionsResponse] = await Promise.all([
        rolePermissionService.getRoles(),
        rolePermissionService.getPermissions(),
      ]);
      
      if (rolesResponse.success && permissionsResponse.success) {
        setRoles(rolesResponse.data || []);
        setPermissions(permissionsResponse.data || []);
        
        // Auto-select first role if available
        if (rolesResponse.data && rolesResponse.data.length > 0 && !selectedRole) {
          setSelectedRole(rolesResponse.data[0]);
        }
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateRole = () => {
    setEditingRole(null);
    setIsRoleModalOpen(true);
  };

  const handleEditRole = (role: Role) => {
    setEditingRole(role);
    setIsRoleModalOpen(true);
  };

  const handleDeleteRole = async (role: Role) => {
    const result = await adminConfirm({
      title: "DELETE ROLE?",
      html: `Are you sure you want to delete role <strong>${role.name}</strong>?<br/>This action cannot be undone.`,
      confirmButtonText: "DELETE",
      cancelButtonText: "CANCEL",
    });

    if (result.isConfirmed) {
      try {
        adminLoading("DELETING ROLE...");
        const response = await rolePermissionService.deleteRole(role.id);
        
        if (response.success) {
          await adminSuccess({
            title: "DELETED!",
            text: "Role has been deleted successfully.",
          });

          if (selectedRole?.id === role.id) {
            setSelectedRole(null);
          }
          fetchData();
        } else {
          throw new Error(response.message || "Failed to delete role");
        }
      } catch (error: any) {
        await adminError({
          title: "DELETE FAILED",
          text: error.message || "Failed to delete role",
        });
      } finally {
        Swal.close();
      }
    }
  };

  const handleCreatePermission = () => {
    setEditingPermission(null);
    setIsPermissionModalOpen(true);
  };

  const handleEditPermission = (permission: Permission) => {
    setEditingPermission(permission);
    setIsPermissionModalOpen(true);
  };

  const handleDeletePermission = async (permission: Permission) => {
    const result = await adminConfirm({
      title: "DELETE PERMISSION?",
      html: `Are you sure you want to delete permission <strong>${permission.name}</strong>?<br/>This will remove it from all roles.`,
      confirmButtonText: "DELETE",
      cancelButtonText: "CANCEL",
    });

    if (result.isConfirmed) {
      try {
        adminLoading("DELETING PERMISSION...");
        const response = await rolePermissionService.deletePermission(permission.id);
        
        if (response.success) {
          await adminSuccess({
            title: "DELETED!",
            text: "Permission has been deleted successfully.",
          });
          fetchData();
        } else {
          throw new Error(response.message || "Failed to delete permission");
        }
      } catch (error: any) {
        await adminError({
          title: "DELETE FAILED",
          text: error.message || "Failed to delete permission",
        });
      } finally {
        Swal.close();
      }
    }
  };

  const handlePermissionToggle = async (permissionName: string) => {
    if (!selectedRole) return;

    const currentPermissions = selectedRole.permissions?.map(p => p.name) || [];
    const newPermissions = currentPermissions.includes(permissionName)
      ? currentPermissions.filter(p => p !== permissionName)
      : [...currentPermissions, permissionName];

    try {
      adminLoading("UPDATING PERMISSIONS...");
      const response = await rolePermissionService.assignPermissions(
        selectedRole.id,
        newPermissions
      );
      
      if (response.success && response.data) {
        setSelectedRole(response.data);
        setRoles(roles.map(r => r.id === response.data!.id ? response.data! : r));
      } else {
        throw new Error(response.message || "Failed to update permissions");
      }
      
      Swal.close();
    } catch (error: any) {
      await adminError({
        title: "UPDATE FAILED",
        text: error.message || "Failed to update permissions",
      });
    }
  };

  const handleRoleModalClose = (shouldRefresh: boolean) => {
    setIsRoleModalOpen(false);
    setEditingRole(null);
    if (shouldRefresh) {
      fetchData();
    }
  };

  const handlePermissionModalClose = (shouldRefresh: boolean) => {
    setIsPermissionModalOpen(false);
    setEditingPermission(null);
    if (shouldRefresh) {
      fetchData();
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="font-black text-2xl uppercase tracking-widest text-[#1C1C1B]">LOADING...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="w-full mx-auto mb-8">
        <h1 className="text-3xl font-black font-creato-title uppercase tracking-tight border-b-4 border-[#1c1c1b] pb-2 text-[#1C1C1B]">Manage Roles & Permissions</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT: ROLES */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-black text-xl uppercase tracking-[0.15em] text-[#1C1C1B]">
              ROLES
            </h2>
            <button
              onClick={handleCreateRole}
              className="px-6 py-3 border-[3px] border-[#1c1c1b] bg-[#6A5D52] text-white font-black uppercase cursor-pointer hover:bg-[#1c1c1b] transition-all shadow-[4px_4px_0px_#1c1c1b] tracking-wider text-sm"
            >
              + ADD ROLE
            </button>
          </div>

          <div className="rounded-none border-4 border-[#1C1C1B] bg-[#E2E2DE] shadow-[8px_8px_0px_#1a1a1a] max-h-[600px] overflow-y-auto">
            {roles.length === 0 ? (
              <div className="p-8 text-center">
                <p className="font-bold text-[#6A5D52] uppercase tracking-wider">NO ROLES FOUND</p>
              </div>
            ) : (
              <div className="divide-y-4 divide-[#1C1C1B]">
                {roles.map((role) => (
                  <div
                    key={role.id}
                    className={`p-4 cursor-pointer transition-colors ${
                      selectedRole?.id === role.id
                        ? "bg-[#6A5D52] text-[#E2E2DE]"
                        : "hover:bg-[#B7AC9B]/30"
                    }`}
                    onClick={() => setSelectedRole(role)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-black text-lg uppercase tracking-wider">
                          {role.name}
                        </h3>
                        <p className={`text-sm font-bold mt-1 ${selectedRole?.id === role.id ? "text-[#E2E2DE]/80" : "text-[#6A5D52]"}`}>
                          {role.permissions?.length || 0} permissions
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditRole(role);
                          }}
                          className={`px-4 py-1.5 border-[3px] text-xs font-black transition-all shadow-[3px_3px_0px_#1c1c1b] cursor-pointer tracking-wider ${
                            selectedRole?.id === role.id
                              ? "border-[#E2E2DE] text-[#E2E2DE] bg-transparent hover:bg-[#E2E2DE] hover:text-[#6A5D52]"
                              : "border-[#1C1C1B] text-[#1C1C1B] bg-white hover:bg-[#1C1C1B] hover:text-[#E2E2DE]"
                          }`}
                        >
                          EDIT
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteRole(role);
                          }}
                          className="px-4 py-1.5 border-[3px] border-[#ef4444] text-[#ef4444] bg-white text-xs font-black hover:bg-[#ef4444] hover:text-white transition-all shadow-[3px_3px_0px_#1c1c1b] cursor-pointer tracking-wider"
                        >
                          DEL
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: PERMISSIONS */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-black text-xl uppercase tracking-[0.15em] text-[#1C1C1B]">
              PERMISSIONS
            </h2>
            <button
              onClick={handleCreatePermission}
              className="px-6 py-3 border-[3px] border-[#1c1c1b] bg-[#6A5D52] text-white font-black uppercase cursor-pointer hover:bg-[#1c1c1b] transition-all shadow-[4px_4px_0px_#1c1c1b] tracking-wider text-sm"
            >
              + ADD PERMISSION
            </button>
          </div>

          {selectedRole ? (
            <div className="rounded-none border-4 border-[#1C1C1B] bg-[#E2E2DE] shadow-[8px_8px_0px_#1a1a1a]">
              <div className="border-b-4 border-[#1C1C1B] bg-[#6A5D52] px-4 py-3">
                <h3 className="font-black text-lg uppercase tracking-wider text-[#E2E2DE]">
                  ASSIGN TO: {selectedRole.name}
                </h3>
              </div>
              <div className="p-4 space-y-2 max-h-[520px] overflow-y-auto">
                {permissions.map((permission) => {
                  const isAssigned = selectedRole.permissions?.some(p => p.name === permission.name);
                  return (
                    <label
                      key={permission.id}
                      className="flex items-center gap-3 p-3 rounded-none border-2 border-[#1C1C1B] bg-white cursor-pointer hover:bg-[#B7AC9B]/20 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={isAssigned}
                        onChange={() => handlePermissionToggle(permission.name)}
                        className="w-5 h-5 rounded-none border-2 border-[#1C1C1B] text-[#6A5D52] focus:ring-4 focus:ring-[#6A5D52]"
                      />
                      <div className="flex-1 flex items-center justify-between">
                        <span className="font-bold text-[#1C1C1B] uppercase tracking-wide">
                          {permission.name}
                        </span>
                        <div className="flex gap-2">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleEditPermission(permission);
                            }}
                            className="px-3 py-1.5 border-[3px] border-[#1C1C1B] bg-white text-[#1C1C1B] text-xs font-black hover:bg-[#1C1C1B] hover:text-[#E2E2DE] transition-all shadow-[3px_3px_0px_#1c1c1b] cursor-pointer tracking-wider"
                          >
                            EDIT
                          </button>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleDeletePermission(permission);
                            }}
                            className="px-3 py-1.5 border-[3px] border-[#ef4444] bg-white text-[#ef4444] text-xs font-black hover:bg-[#ef4444] hover:text-white transition-all shadow-[3px_3px_0px_#1c1c1b] cursor-pointer tracking-wider"
                          >
                            DEL
                          </button>
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="rounded-none border-4 border-[#1C1C1B] bg-[#E2E2DE] shadow-[8px_8px_0px_#1a1a1a] p-8 text-center">
              <p className="font-bold text-[#6A5D52] uppercase tracking-wider">
                SELECT A ROLE TO MANAGE PERMISSIONS
              </p>
            </div>
          )}
        </div>
      </div>

      {/* MODALS */}
      {isRoleModalOpen && (
        <RoleModal role={editingRole} onClose={handleRoleModalClose} />
      )}
      {isPermissionModalOpen && (
        <PermissionModal permission={editingPermission} onClose={handlePermissionModalClose} />
      )}
    </div>
  );
}
