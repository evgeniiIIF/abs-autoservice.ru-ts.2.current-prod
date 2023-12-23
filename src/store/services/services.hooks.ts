import { storeToRefs } from 'pinia';
import { servicesStore } from './services';

export const useServicesStore = () => {
  const { actions, effects } = servicesStore();
  const { state } = storeToRefs(servicesStore());

  return {
    servicesState: state,
    servicesActions: actions,
    servicesEffects: effects,
  };
};
