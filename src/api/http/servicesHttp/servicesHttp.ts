import { useAppFetch } from '#imports';
import type { GetAllServicesResponse, GetServiceResponse } from './servicesHttp.types';

const BASE_PATH = '/services';

const getAllServices = async () => {
  const response = await useAppLazyFetch<GetAllServicesResponse>(`${BASE_PATH}`);

  return response;
};

const getServiceInfo = async (id: number) => {
  const response = await useAppFetch<GetServiceResponse>(`${BASE_PATH}/${id}`);

  return response;
};

const getSubServices = async (id: number) => {
  const response = await useAppFetch<GetAllServicesResponse>(`${BASE_PATH}/${id}/children`);

  return response;
};

export const servicesHttp = {
  getAllServices,
  getServiceInfo,
  getSubServices,
};
