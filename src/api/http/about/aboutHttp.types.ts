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

export interface Advantage {
  is_active: boolean;
  title: string;
  descriptions: string;
  icon: {
    icon_path: string;
    icon_alt: string;
    icon_title: string;
  };
}

export interface GetAboutPageResponseData {
  seo: Seo;
  title: string;
  slug: string;
  text: Text;
  text_img: {
    img_path: string[];
    img_alt: string;
    img_title: string;
  };
  advantages: Advantage[];
  guarantee: Guarantee;
  guarantee_img: {
    img_path: string;
    img_alt: string;
    img_title: string;
  };
  requisites: {
    [x: string]: string;
  };
  requisites_file: string;
}

export interface GetAboutPageResponse {
  data: GetAboutPageResponseData;
}
