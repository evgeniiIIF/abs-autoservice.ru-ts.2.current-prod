import { ref } from 'vue';
import { defineStore } from 'pinia';
import { homeHttp, type Seo } from '@/api/http';

import type {
  HomeData,
  HomeWelcome,
  HomeOffers,
  HomePopularServices,
  HomePopularServicesItem,
  HomeAbout,
  HomeReviews,
  HomeReviewItem,
} from '@/api/http/homeHttp/homeHttp.types';
import type { OffersListItem } from '~/api/http/offersHttp';

const DEFAULT_STATE: HomeData = {
  seo: {} as Seo,
  welcome: [],
  welcome_img: '',
  offers: {} as HomeOffers,
  offers_items: [],
  popular_services: {} as HomePopularServices,
  popular_services_items: [],
  about: {} as HomeAbout,
  about_img: '',
  reviews: {} as HomeReviews,
  review_items: [],
};

export const homeStore = defineStore('homeStore', () => {
  const state = ref(DEFAULT_STATE);

  const setSeo = (data: Seo) => (state.value.seo = data);
  const setWelcome = (data: HomeWelcome[]) => (state.value.welcome = data);
  const setWelcomeImg = (data: string) => (state.value.welcome_img = data);
  const setOffers = (data: HomeOffers) => (state.value.offers = data);
  const setOffersItems = (data: OffersListItem[]) => (state.value.offers_items = data);
  const setPopularServices = (data: HomePopularServices) => (state.value.popular_services = data);
  const setPopularServicesItems = (data: HomePopularServicesItem[]) => (state.value.popular_services_items = data);
  const setAbout = (data: HomeAbout) => (state.value.about = data);
  const setAboutImg = (data: string) => (state.value.about_img = data);
  const setReviews = (data: HomeReviews) => (state.value.reviews = data);
  const setReviewsItems = (data: HomeReviewItem[]) => (state.value.review_items = data);
  const setCompanyImage = (data: HomeData['company_image']) => (state.value.company_image = data);

  const fetchHome = async () => {
    try {
      const response = await homeHttp.fetchHome();
      const data = response.data.value?.data;

      if (data?.seo) setSeo(data.seo);
      if (data?.welcome) setWelcome(data.welcome);
      if (data?.welcome_img) setWelcomeImg(data.welcome_img);
      if (data?.offers) setOffers(data.offers);
      if (data?.offers_items) setOffersItems(data.offers_items);
      if (data?.popular_services) setPopularServices(data.popular_services);
      if (data?.popular_services_items) setPopularServicesItems(data.popular_services_items);
      if (data?.about) setAbout(data.about);
      if (data?.about_img) setAboutImg(data.about_img);
      if (data?.reviews) setReviews(data.reviews);
      if (data?.review_items) setReviewsItems(data.review_items);
      if (data?.company_image) setCompanyImage(data.company_image);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchHome,
    },
  };
});
