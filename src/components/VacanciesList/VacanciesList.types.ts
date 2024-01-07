import type { VacanciesItem } from '~/api/http';

export interface VacanciesListProps {
  items: VacanciesItem[];
  hasButtons?: boolean;
}
