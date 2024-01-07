import type { VacanciesItem } from '~/api/http';
import type { UIModalEmits } from '../UIModal/UIModal.types';

export interface VacanciesListModalProps {
  isOpen: boolean;
  item: VacanciesItem;
}

export interface VacanciesListModalEmits extends UIModalEmits {}
