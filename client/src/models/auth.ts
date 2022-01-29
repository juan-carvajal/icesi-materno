export interface Permission {
  label: string;
  value: string;
}

export interface PermissionGroup {
  name: string;
  permissions: Permission[];
  description: string;
}

export interface UserRole {
  id?: string;
  email: string;
  roleID: string;
}

export interface Role {
  id?: string;
  name: string;
  permissions: string[];
  allowedRoleIdsForCreation?: string[]
}

export interface User {
  uid?: string | null;
  email?: string | null;
  displayName?: string | null;
}
