import { storeToRefs } from 'pinia';
import { bonusCardStore } from './bonusCard';

export const useBonusCardStore = () => {
  const { actions, effects } = bonusCardStore();
  const { state } = storeToRefs(bonusCardStore());

  return {
    bonusCardState: state,
    bonusCardActions: actions,
    bonusCardEffects: effects,
  };
};
