import { storeToRefs } from 'pinia';
import { partnersStore } from './partners';

export const usePartnersStore = () => {
  const { actions, effects } = partnersStore();
  const { state } = storeToRefs(partnersStore());

  return {
    partnersState: state,
    partnersActions: actions,
    partnersEffects: effects,
  };
};
