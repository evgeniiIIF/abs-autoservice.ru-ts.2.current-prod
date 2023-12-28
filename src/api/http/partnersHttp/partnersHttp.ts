import { useAppFetch } from '#imports';
import type { PartnersResponse } from '@/api/http/partnersHttp/partnersHttp.types';

const BASE_PATH = '/partners';

const fetchPartners = async () => {
  const response = await useAppFetch<PartnersResponse>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

export const partnersHttp = {
  fetchPartners,
};
