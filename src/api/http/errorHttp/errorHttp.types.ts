export interface Seo {
  title: string;
  description: string;
  key_words: any;
  author: string;
  robots: string;
  canonical_url: any;
  image: string;
  'og:type': string;
  'og:title': string;
  'og:description': string;
  'twitter:card': string;
  'twitter:title': string;
  'twitter:description': string;
}

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
