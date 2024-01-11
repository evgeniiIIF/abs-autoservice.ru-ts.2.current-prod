import { ref } from 'vue';
import { defineStore } from 'pinia';

import { vacanciesHttp } from '~/api/http';
import type { VacanciesState } from './vacancies.types';

const DEFAULT_STATE: Partial<VacanciesState> = {};

export const vacanciesStore = defineStore('vacanciesStore', () => {
  const state = ref(DEFAULT_STATE);

  const setVacancies = (data: VacanciesState) => {
    state.value = data;
  };

  const fetchVacancies = async () => {
    const response = await vacanciesHttp.fetchVacancies();

    const data = response.data.value?.data;
    const seo = response.data.value?.seo;

    if (data) {
      setVacancies({
        ...data.data,
        vacancies_items: data.vacancies_item,
        seo,
      });
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
