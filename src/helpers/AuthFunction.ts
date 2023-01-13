import { APP_TOKEN } from '../constants/enums';
import type { BaseResponse, Menu, Role, User } from '../types/responses';

export function getToken(): boolean {
  return !!localStorage.getItem(`${APP_TOKEN.prefix}token`);
}

export async function setSession(
  response: BaseResponse<User>,
  type: number,
  menuChanged: Menu[],
  roleId?: string,
  defaultRole?: Role
) {
  const prefix = APP_TOKEN.prefix;
  switch (type) {
    case 0: {
      const expirationSeconds =
        response.data.expirationSeconds * 1000 + new Date().getTime();
      const expiresAt = JSON.stringify(expirationSeconds);
      localStorage.setItem(prefix + 'id', response.data.id);
      localStorage.setItem(prefix + 'token', response.data.token);
      localStorage.setItem(prefix + 'name', response.data.name);
      localStorage.setItem(
        prefix + 'defaultRole',
        JSON.stringify(response.data.roles.find((x) => x.isDefault === true))
      );
      localStorage.setItem(
        prefix + 'role',
        JSON.stringify(response.data.roles)
      );
      localStorage.setItem(
        prefix + 'role_id',
        response.data.roles.find((x) => x.isDefault === true)!.roleID
      );
      localStorage.setItem(
        prefix + 'menu',
        JSON.stringify(response.data.menus)
      );
      localStorage.setItem(prefix + 'expires_at', expiresAt);
      localStorage.setItem(prefix + 'photo', response.data.photo);
      break;
    }
    case 1: {
      localStorage.setItem(prefix + 'defaultRole', JSON.stringify(defaultRole));
      localStorage.setItem(prefix + 'role_id', roleId || '');
      localStorage.setItem(prefix + 'menu', JSON.stringify(menuChanged));
    }
  }
}
