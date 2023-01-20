export interface Sidenav {
  title?: string;
}

export interface RoleList {
  userRoleId: string;
  position: string;
  roleName: string;
  roleID: string;
  isDefault: boolean;
  programs: RoleProgram[];
}

export interface RoleProgram {
  id: string;
  name: string;
}
