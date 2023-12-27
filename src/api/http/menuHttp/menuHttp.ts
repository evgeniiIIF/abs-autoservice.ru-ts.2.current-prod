import { useAppFetch } from '#imports';
import type { GetAppMenuResponse, GetAppFooterResponse } from './menuHttp.types';

const getHeaderMenu = async () => {
  const response = await useAppFetch<{ data: GetAppMenuResponse }>(`/menu`, {
    method: 'GET',
  });

  return response;
};

const getFooterMenu = async () => {
  const response = await useAppFetch<{ data: GetAppFooterResponse }>(`/footer`, {
    method: 'GET',
  });

  return response;
};

export const menuHttp = {
  getHeaderMenu,
  getFooterMenu,
};
