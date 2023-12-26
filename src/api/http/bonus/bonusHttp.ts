import { useAppFetch } from '#imports';
import type { GetBonusPageInfoData } from './bonusHttp.types';

const BASE_PATH = '/bonus';

const fetchBonusCard = async () => {
  const response = await useAppFetch<{ data: GetBonusPageInfoData }>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

export const bonusHttp = {
  fetchBonusCard,
};
