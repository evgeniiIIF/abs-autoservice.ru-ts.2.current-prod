import type { OffersListItem, GetOffersPageInfo } from '~/api/http/offersHttp/offersHttp.types';

export interface OffersState {
  offers: OffersListItem[];
  offerPageInfo?: GetOffersPageInfo;
}
