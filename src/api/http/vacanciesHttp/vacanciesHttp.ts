import { useAppFetch } from '#imports';
import type { VacanciesResponse } from './vacanciesHttp.types';

const BASE_PATH = '/vacancies';

const fetchVacancies = async () => {
  const response = await useAppFetch<{ data: VacanciesResponse }>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

export const vacanciesHttp = {
  fetchVacancies,
};
