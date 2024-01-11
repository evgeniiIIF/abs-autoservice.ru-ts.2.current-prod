import type { Seo } from '../shared';

export interface LinkBtn {
  is_active: boolean;
  title: string;
  url: string;
}

export interface Text {
  block_is_active: boolean;
  link_btn: LinkBtn[];
  title: string;
  subtitle: string;
  content: string;
}

export interface Guarantee {
  block_is_active: boolean;
  is_active_btn: boolean;
  title: string;
  content: string;
  title_btn: string;
}

export interface GetAboutPageResponseData {
  seo: Seo;
  title: string;
  slug: string;
  text: Text;
  text_img: string;
  text_img_alt: string;
  text_img_title: string;
  guarantee: Guarantee;
  guarantee_img: string;
}

export interface GetAboutPageResponse {
  data: GetAboutPageResponseData;
}
