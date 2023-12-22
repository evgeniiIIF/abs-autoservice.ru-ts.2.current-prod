import { useAppFetch } from '#imports';
import type { GetOffersListResponse } from './offersHttp.types';

const BASE_PATH = '/offers';

const getOffersList = async () => {
  const response = await useAppFetch<GetOffersListResponse>(`${BASE_PATH}`);

  return response;
};

export const offersHttp = {
  getOffersList,
};
