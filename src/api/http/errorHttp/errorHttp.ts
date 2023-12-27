import { useAppFetch } from '#imports';
import type { ErrorResponse } from './errorHttp.types';

const BASE_PATH = '/not-found';

const fetchError = async () => {
  const response = await useAppFetch<ErrorResponse>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

export const errorHttp = {
  fetchError,
};
