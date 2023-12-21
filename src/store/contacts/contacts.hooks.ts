import { storeToRefs } from 'pinia';
import { contactsStore } from './contacts';

export const useContactsStore = () => {
  const { actions, effects } = contactsStore();
  const { state } = storeToRefs(contactsStore());

  return {
    contactsState: state,
    contactsActions: actions,
    contactsEffects: effects,
  };
};
