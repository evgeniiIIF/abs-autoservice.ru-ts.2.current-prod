import { useAppFetch } from '#imports';
import type { GetOffersListResponse, GetOffersPageInfo } from './offersHttp.types';

const BASE_PATH = '/offers';

const getOffersPageInfo = async () => {
  const response = await useAppFetch<{ data: GetOffersPageInfo }>(`${BASE_PATH}-page`);

  return response;
};

const getOffersList = async () => {
  const response = await useAppFetch<GetOffersListResponse>(`${BASE_PATH}`);

  return response;
};

export const offersHttp = {
  getOffersList,
  getOffersPageInfo,
};
