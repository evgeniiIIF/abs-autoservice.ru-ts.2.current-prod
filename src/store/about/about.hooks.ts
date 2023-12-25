import { storeToRefs } from 'pinia';
import { aboutStore } from './about';

export const useAboutStore = () => {
  const { actions, effects } = aboutStore();
  const { state } = storeToRefs(aboutStore());

  return {
    aboutState: state,
    aboutActions: actions,
    aboutEffects: effects,
  };
};
