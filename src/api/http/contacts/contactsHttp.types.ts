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
export interface ContactsResponse {
  data: ContactsPage;
}
