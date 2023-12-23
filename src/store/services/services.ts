import { ref } from 'vue';
import { defineStore } from 'pinia';
import { servicesHttp } from '~/api/http/servicesHttp';
import type { ServicesState } from './services.types';

const DEFAULT_STATE: ServicesState = {
  mainServices: [],
  servicesTree: [],
  allServices: [],
};

export const servicesStore = defineStore('servicesState', () => {
  const state = ref(DEFAULT_STATE);

  const setAllServices = (services: ServicesState['allServices']) => {
    state.value.allServices = services;
  };

  const setParentServices = (services: ServicesState['mainServices']) => {
    state.value.mainServices = services;
  };

  const setServicesTree = (servicesTree: ServicesState['servicesTree']) => {
    state.value.servicesTree = servicesTree;
  };

  const setService = (service: ServicesState['service']) => {
    state.value.service = service;
  };

  const fetchAllServices = async () => {
    const { data } = await servicesHttp.getAllServices();

    const parentServices = data.value?.data.filter((item) => !item.parent_id);

    if (parentServices?.length) {
      setAllServices(data.value?.data ?? []);
      setParentServices(parentServices ?? []);
    }
  };

  const fetchService = async (id: number) => {
    const { data } = await servicesHttp.getServiceInfo(id);

    const service = data.value?.data;
    if (service) {
      setService(service);
    }
  };

  const fetchServicesTree = async () => {
    const response = await Promise.all(state.value.mainServices.map((item) => servicesHttp.getSubServices(item.id)));

    setServicesTree(
      state.value.mainServices.map((service, index) => ({
        ...service,
        children: response?.[index]?.data?.value?.data ?? [],
      })),
    );
  };

  return {
    state,
    actions: {
      setAllServices,
      setParentServices,
    },
    effects: {
      fetchAllServices,
      fetchServicesTree,
      fetchService,
    },
  };
});
