import { getProfileData, getToken } from './AuthFunction';

export function getHeadersData() {
  const { token } = getProfileData();
  const header = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  return header;
}
