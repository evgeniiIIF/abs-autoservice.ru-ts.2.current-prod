import { ref } from 'vue';
import { defineStore } from 'pinia';

import { partnersHttp } from '~/api/http';

import type { PartnersResponse, PartnersItem } from '~/api/http/partnersHttp/partnersHttp.types';

const DEFAULT_STATE: Partial<PartnersResponse> = {};

export const partnersStore = defineStore('partnersStore', () => {
  const state = ref(DEFAULT_STATE);

  const setPartners = (data: PartnersItem[]) => (state.value.data = data);

  const fetchPartners = async () => {
    const response = await partnersHttp.fetchPartners();

    const data = response.data.value?.data;

    if (data) setPartners(data);
  };

  return {
    state,
    actions: {},
    effects: {
      fetchPartners,
    },
  };
});
