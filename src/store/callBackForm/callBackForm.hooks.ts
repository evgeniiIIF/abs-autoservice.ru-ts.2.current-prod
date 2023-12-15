import { storeToRefs } from 'pinia';
import { callBackFormStore } from './callBackForm';

export const useCallBackFormStore = () => {
  const { actions, effects } = callBackFormStore();
  const { state } = storeToRefs(callBackFormStore());

  return {
    callBackFormState: state,
    callBackFormActions: actions,
    callBackFormEffects: effects,
  };
};
