import type { Seo } from '../shared';

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

export interface GetOffersPageInfo {
  seo: Seo;
  title: string;
  slug: string;
  is_active: number;
}

export interface GetOffersListResponse {
  data: OffersListItem[];
}
