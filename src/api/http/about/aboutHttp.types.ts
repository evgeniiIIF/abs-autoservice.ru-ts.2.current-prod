export interface AboutSeo {
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
  seo: AboutSeo;
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
