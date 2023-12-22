import { ref } from 'vue';
import { defineStore } from 'pinia';

import { callBackFormHttp } from '~/api/http';

import type { CallbackFormWithModal } from '~/api/http/callBackForm/callBackFormHttp.types';

const DEFAULT_STATE: Partial<CallbackFormWithModal> = {};

export const callBackFormStore = defineStore('callBackFormStore', () => {
  const state = ref(DEFAULT_STATE);

  const setCallBackForm = (data: CallbackFormWithModal) => {
    state.value.title = data.title;
    state.value.text = data.text;
  };
  const setTitleModal = (titleModal: string) => {
    state.value.titleModal = titleModal;
  };

  const fetchCallBackForm = async () => {
    try {
      const response = await callBackFormHttp.fetchCallBackForm();

      const data = response.data.value?.data;

      if (data) setCallBackForm(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    actions: {
      setTitleModal,
    },
    effects: {
      fetchCallBackForm,
    },
  };
});
