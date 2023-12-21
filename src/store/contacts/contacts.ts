import { ref } from 'vue';
import { defineStore } from 'pinia';

import { contactsPageHttp } from '~/api/http';

import type { ContactsPage } from '~/api/http/contacts/contactsHttp.types';

const DEFAULT_STATE: Partial<ContactsPage> = {};

export const contactsStore = defineStore('contactsStore', () => {
  const state = ref(DEFAULT_STATE);

  const setContacts = (data: ContactsPage) => (state.value = data);

  const fetchContacts = async () => {
    try {
      const response = await contactsPageHttp.fetchContactsPage();

      const data = response.data.value?.data;

      if (data) setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchContacts,
    },
  };
});
