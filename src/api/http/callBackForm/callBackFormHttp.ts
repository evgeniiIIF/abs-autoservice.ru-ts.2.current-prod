import { useAppFetch } from '#imports';
import type { CallBackFormData, CallBackFormResponse } from './callBackFormHttp.types';

const BASE_PATH = '/call-back';

const fetchCallBackForm = async () => {
  const response = await useAppFetch<CallBackFormResponse>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

const postCallBackFormData = async (data: CallBackFormData) => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const response = await useAppFetch<boolean>('/leads', {
    method: 'POST',
    body: formData,
  });

  return response;
};

export const callBackFormHttp = {
  fetchCallBackForm,
  postCallBackFormData,
};
