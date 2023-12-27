export interface VacanciesListItem {
  title?: string;
  id?: number;
  slug?: string;
}
export interface VacanciesListProps {
  items: VacanciesListItem[];
  hasButtons?: boolean;
}
