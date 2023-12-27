import { useAppFetch } from '#imports';
import type { GetAllServicesResponse, GetServiceResponse, GetServicesPageInfo } from './servicesHttp.types';

const BASE_PATH = '/services';

const getServicesPageInfo = async () => {
  const response = await useAppLazyFetch<{ data: GetServicesPageInfo }>(`${BASE_PATH}-page`);

  return response;
};

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
  getServicesPageInfo,
};
