export interface TopMenu {
  url: string;
  title: string;
  is_active: boolean;
}

export interface HeaderMenu {
  url: string;
  title: string;
  is_active: boolean;
}

export interface OfficialLink {
  is_active: boolean;
  title: string;
  link: string;
}

export interface AutoserviceMenu {
  is_active: boolean;
  title: string;
  link: string;
}

export interface Icon {
  name: string;
  file_name: string;
  uuid: string;
  preview_url: string;
  original_url: string;
  order: number;
  custom_properties: {
    alt: string;
    title: string;
  };
  extension: string;
  size: number;
}

export interface GetAppFooterResponse {
  footer_content: string;
  copyright: string;
  official_links: OfficialLink[];
  autoservice_menu: AutoserviceMenu[];
  icons: {
    [x: string]: Icon;
  };
  image_alt: string;
  image_title: string;
}
export interface GetAppMenuResponse {
  top_menu: TopMenu[];
  header_menu: HeaderMenu[];
}
