import { useAppFetch } from '#imports';
import type { GetAboutPageResponse } from './aboutHttp.types';

const BASE_PATH = '/about';

const fetchAboutPage = async () => {
  const response = await useAppFetch<GetAboutPageResponse>(`${BASE_PATH}`, {
    method: 'GET',
  });

  console.log(response.data.value?.data);

  return response;
};

export const aboutHttp = {
  fetchAboutPage,
};
