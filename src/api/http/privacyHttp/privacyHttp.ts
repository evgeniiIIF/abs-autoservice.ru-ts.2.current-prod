import { useAppFetch } from '#imports';
import type { PrivacyInfo } from './pricacy.types';

const BASE_PATH = '/privacy';

const getPrivacyInfo = async () => {
  const response = await useAppFetch<{ data: PrivacyInfo }>(`${BASE_PATH}`);

  return response;
};

export const privacyHttp = {
  getPrivacyInfo,
};
