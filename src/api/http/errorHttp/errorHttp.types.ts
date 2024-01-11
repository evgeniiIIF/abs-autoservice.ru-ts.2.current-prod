import type { Seo } from '../shared';

export interface ErrorData {
  seo: Seo;
  title: string;
  slug: string;
  is_active: number;
  status: string;
  title_page: string;
  subtitle_page: string;
  image: string;
  image_alt: string;
  image_title: string;
}

export interface ErrorResponse {
  data: ErrorData;
}
