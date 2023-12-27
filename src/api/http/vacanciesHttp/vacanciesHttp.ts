import { useAppFetch } from '#imports';
import mock from '~/public/vacanciesApiData.json';
import type { VacanciesResponse } from './vacanciesHttp.types';

const fetchVacancies = async () => {
  const response = await useAppFetch<{ data: VacanciesResponse }>('/', {
    method: 'GET',
    baseURL: '/vacanciesApiData.json',
  });

  if (response.data.value?.data) {
    return response;
  }

  response.data.value = { data: mock.data };
  return response;
};

export const vacanciesHttp = {
  fetchVacancies,
};
