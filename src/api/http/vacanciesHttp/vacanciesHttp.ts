import { useAppFetch } from '#imports';
import type { VacanciesResponse } from './vacanciesHttp.types';

const fetchVacancies = async () => {
  const response = await useAppFetch<{ data: VacanciesResponse }>('/', {
    method: 'GET',
    baseURL: '/vacanciesApiData.json',
  });

  return response;
};

export const vacanciesHttp = {
  fetchVacancies,
};
