import { useAppFetch } from '#imports';
import type { Seo } from '../shared';
import type { VacanciesResponse } from './vacanciesHttp.types';

const BASE_PATH = '/vacancies';

const fetchVacancies = async () => {
  const response = await useAppFetch<{ data: VacanciesResponse; seo: Seo }>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

export const vacanciesHttp = {
  fetchVacancies,
};
