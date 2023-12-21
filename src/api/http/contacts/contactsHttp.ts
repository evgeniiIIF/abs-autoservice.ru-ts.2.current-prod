import { useAppFetch } from '#imports';
import type { ContactsResponse } from './contactsHttp.types';

const BASE_PATH = '/contacts';

const fetchContactsPage = async () => {
  const response = await useAppFetch<ContactsResponse>(`${BASE_PATH}`, {
    method: 'GET',
  });

  return response;
};

export const contactsPageHttp = {
  fetchContactsPage,
};
