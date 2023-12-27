import { storeToRefs } from 'pinia';
import { vacanciesStore } from './vacancies';

export const useVacanciesStore = () => {
  const { actions, effects } = vacanciesStore();
  const { state } = storeToRefs(vacanciesStore());

  return {
    vacanciesState: state,
    vacanciesActions: actions,
    vacanciesEffects: effects,
  };
};
