import { ref } from 'vue';
import { defineStore } from 'pinia';

import { errorHttp } from '~/api/http';

import type { ErrorData } from '~/api/http/errorHttp/errorHttp.types';

const DEFAULT_STATE: Partial<ErrorData> = {};

export const errorStore = defineStore('errorStore', () => {
  const state = ref(DEFAULT_STATE);

  const setError = (data: ErrorData) => (state.value = data);

  const fetchError = async () => {
    const response = await errorHttp.fetchError();

    const data = response.data.value?.data;

    if (data) setError(data);
  };

  return {
    state,
    actions: {},
    effects: {
      fetchError,
    },
  };
});
