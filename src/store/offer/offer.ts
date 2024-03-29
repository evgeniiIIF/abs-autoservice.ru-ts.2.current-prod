import { ref } from 'vue';
import { defineStore } from 'pinia';
import { offersHttp } from '~/api/http/offersHttp';
import type { OffersState } from './offer.types';

const DEFAULT_STATE: OffersState = {
  offers: [],
};

export const offerStore = defineStore('offerStore', () => {
  const state = ref(DEFAULT_STATE);

  const setOffersList = (offers?: OffersState['offers']) => {
    state.value.offers = offers ?? [];
  };

  const setOffersPageInfo = (info?: OffersState['offerPageInfo']) => {
    state.value.offerPageInfo = info;
  };

  const fetchOffersPageInfo = async () => {
    const response = await offersHttp.getOffersPageInfo();

    const data = response.data.value?.data;
    if (data) {
      setOffersPageInfo(data);
    }
  };

  const fetchOffersList = async () => {
    const { data, error } = await offersHttp.getOffersList();

    if (!error.value) {
      setOffersList(data.value?.data);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchOffersList,
      fetchOffersPageInfo,
    },
  };
});
