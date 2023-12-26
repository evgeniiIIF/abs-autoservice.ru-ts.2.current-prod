import type { Service, ServiceItemInfo } from '~/api/http/servicesHttp';

export interface ServiceItem extends ServiceItemInfo {
  children?: ServiceItem[];
}

export interface ServicesState {
  allServices: ServiceItemInfo[];
  mainServices: ServiceItemInfo[];
  servicesTree: ServiceItem[];
  service?: Service;
}
