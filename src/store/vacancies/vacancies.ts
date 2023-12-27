import { ref } from 'vue';
import { defineStore } from 'pinia';

import { vacanciesHttp } from '~/api/http';

import type { VacanciesResponse } from '~/api/http/vacanciesHttp/vacanciesHttp.types';

const DEFAULT_STATE: Partial<VacanciesResponse> = {};

export const vacanciesStore = defineStore('vacanciesStore', () => {
  const state = ref(DEFAULT_STATE);

  const setVacancies = (data: VacanciesResponse) => {
    state.value = data;
  };

  const fetchVacancies = async () => {
    const response = await vacanciesHttp.fetchVacancies();

    console.log(response);

    const data = response.data.value?.data;

    if (data) {
      setVacancies(data);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchVacancies,
    },
  };
});
