import type { GetAppFooterResponse, GetAppMenuResponse } from '~/api/http/menuHttp/menuHttp.types';

export type MenuState = {
  header: GetAppMenuResponse;
  footer: Partial<GetAppFooterResponse>;
};
