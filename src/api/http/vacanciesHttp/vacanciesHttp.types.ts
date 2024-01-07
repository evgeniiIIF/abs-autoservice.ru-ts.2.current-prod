export interface VacanciesItem {
  title: string;
  salary: string;
  responsibilities: string;
  requirements: string;
  conditions: string;
}

export interface VacanciesResponse {
  data: {
    main_title: string;
    main_subtitle: string;
    email: string;
    second_title: string;
  };
  vacancies_item: VacanciesItem[];
}
