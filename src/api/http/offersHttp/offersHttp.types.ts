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
  image: string;
}

export interface GetOffersListResponse {
  data: OffersListItem[];
}
