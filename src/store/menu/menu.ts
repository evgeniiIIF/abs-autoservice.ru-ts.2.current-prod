import { ref } from 'vue';
import { defineStore } from 'pinia';
import { menuHttp } from '~/api/http';
import type { MenuState } from './menu.types';

const DEFAULT_STATE: MenuState = {
  top_menu: [],
  header_menu: [],
};

export const menuStore = defineStore('menuStore', () => {
  const state = ref(DEFAULT_STATE);

  const setHeaderMenu = (menu: Pick<MenuState, 'top_menu' | 'header_menu'>) => {
    state.value.top_menu = menu.top_menu;
    state.value.header_menu = menu.header_menu;
  };

  const fetchAppHeaderMenu = async () => {
    const response = await menuHttp.getAppMenu();

    const data = response.data.value?.data;
    if (data) {
      setHeaderMenu(data);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchAppHeaderMenu,
    },
  };
});
