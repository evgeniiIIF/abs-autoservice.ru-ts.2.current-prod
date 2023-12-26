import { storeToRefs } from 'pinia';
import { bonusStore } from './bonus';

export const useBonusStore = () => {
  const { actions, effects } = bonusStore();
  const { state } = storeToRefs(bonusStore());

  return {
    bonusState: state,
    bonusActions: actions,
    bonusEffects: effects,
  };
};
