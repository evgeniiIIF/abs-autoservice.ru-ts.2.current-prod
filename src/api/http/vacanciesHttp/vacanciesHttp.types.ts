export interface VacanciesItem {
  title: string;
  id: number;
  slug: string;
}
export interface VacanciesResponse {
  main_title: string;
  main_subtitle: string;
  email: string;
  second_title: string;
  vacancies_items: VacanciesItem[];
}
