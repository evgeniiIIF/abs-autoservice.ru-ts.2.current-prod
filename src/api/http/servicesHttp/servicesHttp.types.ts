export interface ServicePageSeo {
  title: string;
  description: string;
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
  image_icon: any;
  image: string;
  parent_id: number;
  price: number;
}

export interface ServiceItemInfo {
  id: number;
  title: string;
  slug: string;
  is_active: number;
  preview_text: string;
  image_icon: any;
  image: string;
  parent_id: null | number;
}

export interface GetAllServicesResponse {
  data: ServiceItemInfo[];
}

export interface GetServiceResponse {
  data: Service;
}