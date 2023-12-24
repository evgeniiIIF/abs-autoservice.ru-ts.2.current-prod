import type { HomePopularServicesItem } from '~/api/http/homeHttp/homeHttp.types';

export type PopularServiceCard = {
  service: HomePopularServicesItem;
  size: 'small' | 'standard';
};
