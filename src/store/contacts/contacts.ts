import { ref } from 'vue';
import { defineStore } from 'pinia';

import { contactsPageHttp } from '~/api/http';

import type { ContactsPageState } from '~/api/http/contacts/contactsHttp.types';

const DEFAULT_STATE: Partial<ContactsPageState> = {};

export const contactsStore = defineStore('contactsStore', () => {
  const state = ref(DEFAULT_STATE);

  const setContacts = (data: ContactsPageState['data']) => (state.value.data = data);
  const setContactsWithSeoAndTitle = (data: ContactsPageState['dataWithSeoAndTitle']) =>
    (state.value.dataWithSeoAndTitle = data);

  const fetchContacts = async () => {
    const response = await contactsPageHttp.fetchContactsPage();

    const data = response.data.value?.data;

    if (data) {
      setContacts(data);
    }
  };

  const fetchContactsWithSeoAndTitle = async () => {
    const response = await contactsPageHttp.fetchContactsPageWithSeoAndTitle();

    const data = response.data.value?.data;

    if (data) {
      setContactsWithSeoAndTitle(data);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchContacts,
      fetchContactsWithSeoAndTitle,
    },
  };
});
