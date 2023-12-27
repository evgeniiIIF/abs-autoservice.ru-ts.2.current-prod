import { storeToRefs } from 'pinia';
import { errorStore } from './error';

export const useErrorStore = () => {
  const { actions, effects } = errorStore();
  const { state } = storeToRefs(errorStore());

  return {
    errorState: state,
    errorActions: actions,
    errorEffects: effects,
  };
};
