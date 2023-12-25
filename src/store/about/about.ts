import { ref } from 'vue';
import { defineStore } from 'pinia';
import { aboutHttp } from '~/api/http/about';
import type { AboutState } from './about.types';

const DEFAULT_STATE: AboutState = {};

export const aboutStore = defineStore('aboutStore', () => {
  const state = ref<AboutState>(DEFAULT_STATE);

  const setContactsPageInfo = (data: AboutState) => {
    state.value = data;
  };

  const fetchAboutPageInfo = async () => {
    const response = await aboutHttp.fetchAboutPage();

    const data = response.data.value?.data;
    if (data) {
      setContactsPageInfo(data);
    }
  };

  return {
    state,
    actions: {
      setContactsPageInfo,
    },
    effects: {
      fetchAboutPageInfo,
    },
  };
});
