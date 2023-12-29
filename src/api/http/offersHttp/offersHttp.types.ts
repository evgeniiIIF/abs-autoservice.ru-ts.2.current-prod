export interface OfferBtn {
  btn_link?: string;
  btn_title: string;
}

export interface OffersListItem {
  id: number;
  title: string;
  slug: string;
  is_active: number;
  description: string;
  btn: OfferBtn;
  image?: {
    image_path?: string;
    image_al?: string;
    image_title?: string;
  };
}

export interface OffersSeoPage {
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

export interface GetOffersPageInfo {
  seo: OffersSeoPage;
  title: string;
  slug: string;
  is_active: number;
}

export interface GetOffersListResponse {
  data: OffersListItem[];
}
