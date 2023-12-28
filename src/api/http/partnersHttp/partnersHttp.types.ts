export interface PartnersItem {
  title: string;
  logo_image?: string;
  is_active: boolean;
  image_alt: any;
  image_title: any;
}

export interface PartnersResponse {
  data: PartnersItem[];
}
