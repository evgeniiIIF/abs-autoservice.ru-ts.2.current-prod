export interface ContactsPageSocial {
  url: string;
  title: string;
  icon_social: string;
  btn_is_active: boolean;
  btn_is_active_form: boolean;
}

export interface ContactsPage {
  mail: string;
  phone: string;
  name?: string;
  address: string;
  link_map: string;
  copyright: string;
  time_work: string;
  social_network: ContactsPageSocial[];
  logo?: {
    logo_path?: string;
    logo_mob_path?: string;
    alt?: string;
    title?: string;
  };
  favicon?: {
    path: string;
  };
}

// with seo and title
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
export interface ContactsPageWithSeoAndTitle {
  seo: Seo;
  title: string;
  slug: string;
  is_active: number;
}

export interface ContactsPageState {
  data: ContactsPage;
  dataWithSeoAndTitle: ContactsPageWithSeoAndTitle;
}
