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

export interface GetAppMenuResponse {
  top_menu: TopMenu[];
  header_menu: HeaderMenu[];
}
