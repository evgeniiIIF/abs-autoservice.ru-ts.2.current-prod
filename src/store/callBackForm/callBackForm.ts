import { ref } from 'vue';
import { defineStore } from 'pinia';

import { callBackFormHttp } from '~/api/http';

import type { CallBackForm } from '~/api/http/callBackForm/callBackFormHttp.types';

const DEFAULT_STATE: CallBackForm = {} as CallBackForm;

export const callBackFormStore = defineStore('callBackFormStore', () => {
  const state = ref(DEFAULT_STATE);

  const setCallBackForm = (data: CallBackForm) => (state.value = data);

  const fetchCallBackForm = async () => {
    try {
      const response = await callBackFormHttp.fetchCallBackForm();

      const data = response.data.value?.data;
      console.log(data);

      if (data) setCallBackForm(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchCallBackForm,
    },
  };
});
