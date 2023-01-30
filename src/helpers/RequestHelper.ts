import type { REQUEST_TYPE } from '../constants/enums';

import { getProfileData } from './AuthFunction';

export function getRequestInit(requestType: REQUEST_TYPE, body: any | null) {
  const requestInit: RequestInit = {
    method: requestType,
    headers: getHeaders(),
    cache: 'default',
    body: body ? JSON.stringify(body) : body,
  };

  return requestInit;
}

export const getHeaders = () => {
  const { token } = getProfileData();
  const header = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };

  return header;
};

export const fetcher = (url: string) =>
  fetch(url, { cache: 'default', headers: getHeaders() }).then((res) =>
    res.json()
  );
