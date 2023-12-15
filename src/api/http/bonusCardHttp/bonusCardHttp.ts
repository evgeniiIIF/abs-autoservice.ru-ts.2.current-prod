import { useAppFetch } from '#imports';
import type { BonusCardResponse } from './bonusCardHttp.types';

const BASE_PATH = '/bonus-card';

const fetchBonusCard = async () => {
  const response = await useAppFetch<BonusCardResponse>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

export const bonusCardHttp = {
  fetchBonusCard,
};
