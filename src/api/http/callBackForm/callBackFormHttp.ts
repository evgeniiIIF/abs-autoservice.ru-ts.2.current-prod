import { useAppFetch } from '#imports';
import type { CallBackFormResponse } from './callBackFormHttp.types';

const BASE_PATH = '/call-back';

const fetchCallBackForm = async () => {
  const response = await useAppFetch<CallBackFormResponse>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

export const callBackFormHttp = {
  fetchCallBackForm,
};
