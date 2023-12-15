import { useAppFetch } from '#imports';
import type { HomeResponse } from '@/api/http/homeHttp/homeHttp.types';

const BASE_PATH = '/index';

const fetchHome = async () => {
  const response = await useAppFetch<HomeResponse>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

export const homeHttp = {
  fetchHome,
};
