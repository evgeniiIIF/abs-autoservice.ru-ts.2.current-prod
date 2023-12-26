import { ref } from 'vue';
import { defineStore } from 'pinia';

import { bonusCardHttp, bonusHttp } from '~/api/http';

import type { BonusState } from './bonus.types';

const DEFAULT_STATE: BonusState = {
  bonusCard: null,
  bonusPageInfo: null,
};

export const bonusStore = defineStore('bonusStore', () => {
  const state = ref<BonusState>(DEFAULT_STATE);

  const setBonusCard = (data: BonusState['bonusCard']) => {
    state.value.bonusCard = data;
  };

  const setContactsPageInfo = (data: BonusState['bonusPageInfo']) => {
    state.value.bonusPageInfo = data;
  };

  const fetchBonusCard = async () => {
    const response = await bonusCardHttp.fetchBonusCard();

    const data = response.data.value?.data;
    if (data) {
      setBonusCard(data);
    }
  };

  const fetchBonusPageInfo = async () => {
    const response = await bonusHttp.fetchBonusCard();

    const data = response.data.value?.data;
    if (data) {
      setContactsPageInfo(data);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchBonusCard,
      fetchBonusPageInfo,
    },
  };
});
