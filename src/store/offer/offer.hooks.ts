import { storeToRefs } from 'pinia';
import { offerStore } from './offer';

export const useOfferStore = () => {
  const { actions, effects } = offerStore();
  const { state } = storeToRefs(offerStore());

  return {
    offerState: state,
    offerActions: actions,
    offerEffects: effects,
  };
};
