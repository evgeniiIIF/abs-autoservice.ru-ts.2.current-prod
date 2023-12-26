import { storeToRefs } from 'pinia';
import { menuStore } from './menu';

export const useMenuStore = () => {
  const { actions, effects } = menuStore();
  const { state } = storeToRefs(menuStore());

  return {
    menuState: state,
    menuActions: actions,
    menuEffects: effects,
  };
};
