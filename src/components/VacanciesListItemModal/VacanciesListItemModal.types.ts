import type { VacanciesListItem } from '@/components/VacanciesList/VacanciesList.types';

export interface VacanciesListItemModalProps {
  item: VacanciesListItem;
}

export interface VacanciesListItemModalEmits {
  (event: 'onClose'): void;
}
