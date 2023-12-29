export interface ServicePageSeo {
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

export interface Service {
  seo: ServicePageSeo;
  id: number;
  title: string;
  slug: string;
  is_active: number;
  preview_text: string;
  full_text: string;
  image_icon: {
    image_path: string;
    image_alt: string;
    image_title: string;
  };

  image: {
    image_path: string;
    image_alt: string;
    image_title: string;
  };
  parent_id: number;
  price: number;
}

export interface ServiceItemInfo {
  id: number;
  title: string;
  slug: string;
  is_active: number;
  preview_text: string;
  parent_id: null | number;

  image_icon: {
    image_path: string;
    image_alt: string;
    image_title: string;
  };

  image: {
    image_path: string;
    image_alt: string;
    image_title: string;
  };
}

export interface ServicesSeoPage {
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

export interface GetServicesPageInfo {
  seo: ServicesSeoPage;
  is_active: number;
  title: string;
  slug: string;
  image: string;
  image_alt: string;
  image_title: string;
}

export interface GetAllServicesResponse {
  data: ServiceItemInfo[];
}

export interface GetServiceResponse {
  data: Service;
}
