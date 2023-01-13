export interface BaseResponse<T> {
  alert: Alert;
  data: T;
  executionTime: string;
}

export interface Alert {
  code: number;
  message: string;
  inner_message?: string;
}

export interface User {
  id: string;
  token: string;
  name: string;
  roles: Role[];
  photo: string;
  expirationSeconds: number;
  menus: Menu[];
}

export interface Role {
  userRoleId: string;
  position: string;
  roleName: string;
  roleID: string;
  isDefault: boolean;
  programs: Program[];
}

export interface Menu {
  title: string;
  icon: string;
  url: string;
  subMenu: Menu[];
  modul: Modul[];
}

export interface Program {
  id: string;
  name: string;
}

export interface Modul {
  id: string;
  code: string;
  isActive: boolean;
  title: string;
  icon: string;
  url: string;
  order: number;
}
