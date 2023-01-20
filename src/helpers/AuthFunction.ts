import { useNavigate } from 'react-router-dom';

import { APP_AUTH_TOKEN, APP_TOKEN } from '../constants/enums';
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
  switch (type) {
    case 0: {
      const expirationSeconds =
        response.data.expirationSeconds * 1000 + new Date().getTime();
      const expiresAt = JSON.stringify(expirationSeconds);
      localStorage.setItem(APP_AUTH_TOKEN.prefixId, response.data.id);
      localStorage.setItem(APP_AUTH_TOKEN.prefixToken, response.data.token);
      localStorage.setItem(APP_AUTH_TOKEN.prefixName, response.data.name);
      localStorage.setItem(
        APP_AUTH_TOKEN.prefixDefaultRole,
        JSON.stringify(response.data.roles.find((x) => x.isDefault === true))
      );
      localStorage.setItem(
        APP_AUTH_TOKEN.prefixRole,
        JSON.stringify(response.data.roles)
      );
      localStorage.setItem(
        APP_AUTH_TOKEN.prefixRoleId,
        response.data.roles.find((roleData) => roleData.isDefault === true)!
          .roleID
      );
      localStorage.setItem(
        APP_AUTH_TOKEN.prefixMenu,
        JSON.stringify(response.data.menus)
      );
      localStorage.setItem(APP_AUTH_TOKEN.prefixExpiresAt, expiresAt);
      localStorage.setItem(APP_AUTH_TOKEN.prefixPhoto, response.data.photo);
      break;
    }
    case 1: {
      localStorage.setItem(
        APP_AUTH_TOKEN.prefixDefaultRole,
        JSON.stringify(defaultRole)
      );
      localStorage.setItem(APP_AUTH_TOKEN.prefixRoleId, roleId || '');
      localStorage.setItem(
        APP_AUTH_TOKEN.prefixMenu,
        JSON.stringify(menuChanged)
      );
    }
  }
}

export function getProfileData() {
  const roleId = localStorage.getItem(APP_AUTH_TOKEN.prefixRoleId) || '';
  const token = localStorage.getItem(APP_AUTH_TOKEN.prefixToken) || '';
  const id = localStorage.getItem(APP_AUTH_TOKEN.prefixId) || '';
  const expiresAt = localStorage.getItem(APP_AUTH_TOKEN.prefixExpiresAt) || '';
  const userName = localStorage.getItem(APP_AUTH_TOKEN.prefixName) || '';
  const photo = localStorage.getItem(APP_AUTH_TOKEN.prefixPhoto) || '';
  const defaultRole =
    localStorage.getItem(APP_AUTH_TOKEN.prefixDefaultRole) || '';
  const menu = localStorage.getItem(APP_AUTH_TOKEN.prefixMenu) || '';
  const role = localStorage.getItem(APP_AUTH_TOKEN.prefixRole) || '';

  return {
    defaultRole,
    roleId,
    token,
    id,
    expiresAt,
    menu,
    userName,
    role,
    photo,
  };
}

export function clearSession() {
  alert('Bye');
  localStorage.clear();
  window.location.reload();
}
