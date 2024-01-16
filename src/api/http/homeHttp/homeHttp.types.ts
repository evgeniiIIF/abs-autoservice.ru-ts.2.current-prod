import type { OffersListItem } from '~/api/http/offersHttp';
import type { Seo } from '../shared';

export interface HomeBtn {
  link: string;
  title: string;
  is_modal: boolean;
  is_active: boolean;
}

export interface HomeWelcome {
  btn: HomeBtn[];
  title: string;
  description: string;
  advantage_tags: string[];
  welcome_image_alt: string;
  welcome_image_title: string;
}

export interface HomeOffers {
  title: string;
}

export interface HomePopularServices {
  title: string;
}

export interface HomePopularServicesItem {
  id: number;
  title: string;
  image_icon: string;
  price: number;
  slug: string;
}

export interface HomeAbout {
  title: string;
  content: string;
  subtitle: string;
}

export interface HomeReviews {
  title: string;
}

export interface HomeReviewService {
  id: number;
  name: string;
  rating: string;
  link: string;
  icon: string;
}

export interface HomeReviewItem {
  id: number;
  name: string;
  rating: string;
  content: string;
  link: string;
  created_at: string;
  updated_at: string;
  avatar: string;
  review_service: HomeReviewService[];
}

export interface HomeData {
  seo: Seo;
  welcome: HomeWelcome[];
  welcome_image: string;
  offers: HomeOffers;
  offers_items: OffersListItem[];
  popular_services: HomePopularServices;
  popular_services_items: HomePopularServicesItem[];
  about: HomeAbout;
  about_img: string;
  about_image_alt: string;
  about_image_title: string;
  reviews: HomeReviews;
  company_image?: {
    image: string[];
    image_alt: string;
    image_title: string;
  };
  review_items: HomeReviewItem[];
}

export interface HomeResponse {
  data: HomeData;
}
