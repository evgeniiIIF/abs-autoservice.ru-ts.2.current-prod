import { useAppFetch } from '#imports';
import type { GetAppMenuResponse } from './menuHttp.types';

const BASE_PATH = '/menu';

const getAppMenu = async () => {
  const response = await useAppFetch<{ data: GetAppMenuResponse }>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

export const menuHttp = {
  getAppMenu,
};
