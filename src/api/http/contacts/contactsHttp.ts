import { useAppFetch } from '#imports';
import type { ContactsPage, ContactsPageWithSeoAndTitle } from './contactsHttp.types';

const BASE_PATH = '/contacts';

const fetchContactsPage = async () => {
  const response = await useAppFetch<{ data: ContactsPage }>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

const fetchContactsPageWithSeoAndTitle = async () => {
  const response = await useAppFetch<{ data: ContactsPageWithSeoAndTitle }>(`${BASE_PATH}-page`, {
    method: 'GET',
  });

  return response;
};

export const contactsPageHttp = {
  fetchContactsPage,
  fetchContactsPageWithSeoAndTitle,
};
