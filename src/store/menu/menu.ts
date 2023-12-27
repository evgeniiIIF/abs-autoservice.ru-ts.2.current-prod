import { ref } from 'vue';
import { defineStore } from 'pinia';
import { menuHttp } from '~/api/http';
import type { MenuState } from './menu.types';

const DEFAULT_STATE: MenuState = {
  header: {
    top_menu: [],
    header_menu: [],
  },
  footer: {},
};

export const menuStore = defineStore('menuStore', () => {
  const state = ref(DEFAULT_STATE);

  const setHeaderMenu = (menu: Pick<MenuState['header'], 'top_menu' | 'header_menu'>) => {
    state.value.header.top_menu = menu.top_menu;
    state.value.header.header_menu = menu.header_menu;
  };

  const setFooterMenu = (menu: MenuState['footer']) => {
    state.value.footer = menu;
  };

  const fetchAppHeaderMenu = async () => {
    const response = await menuHttp.getHeaderMenu();

    const data = response.data.value?.data;
    if (data) {
      setHeaderMenu(data);
    }
  };

  const fetchAppFooterMenu = async () => {
    const response = await menuHttp.getFooterMenu();

    const data = response.data.value?.data;
    if (data) {
      setFooterMenu(data);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchAppHeaderMenu,
      fetchAppFooterMenu,
    },
  };
});
