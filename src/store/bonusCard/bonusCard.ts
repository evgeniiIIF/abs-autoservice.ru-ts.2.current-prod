import { ref } from 'vue';
import { defineStore } from 'pinia';

import { bonusCardHttp } from '~/api/http';

import type { BonusCard } from '~/api/http/bonusCardHttp/bonusCardHttp.types';

const DEFAULT_STATE: BonusCard = {} as BonusCard;

export const bonusCardStore = defineStore('bonusCard', () => {
  const state = ref(DEFAULT_STATE);

  const setBonusCard = (data: BonusCard) => (state.value = data);

  const fetchBonusCard = async () => {
    try {
      const response = await bonusCardHttp.fetchBonusCard();

      const data = response.data.value?.data;
      if (data) setBonusCard(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchBonusCard,
    },
  };
});
