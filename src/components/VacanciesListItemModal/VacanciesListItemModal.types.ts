import type { VacanciesItem } from '~/api/http';

export interface VacanciesListItemModalProps {
  item: VacanciesItem;
}

export interface VacanciesListItemModalEmits {
  (event: 'onClose'): void;
}
