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
  welcome_image: '',
  offers: {} as HomeOffers,
  offers_items: [],
  popular_services: {} as HomePopularServices,
  popular_services_items: [],
  about: {} as HomeAbout,
  about_img: '',
  about_image_alt: '',
  about_image_title: '',
  reviews: {} as HomeReviews,
  review_items: [],
};

export const homeStore = defineStore('homeStore', () => {
  const state = ref(DEFAULT_STATE);

  const setSeo = (data: Seo) => (state.value.seo = data);
  const setWelcome = (data: HomeWelcome[]) => (state.value.welcome = data);
  const setWelcomeImg = (data: string) => (state.value.welcome_image = data);
  const setWelcomeImgAlt = (data: string) => (state.value.welcome[0].welcome_image_alt = data);
  const setWelcomeImgTitle = (data: string) => (state.value.welcome[0].welcome_image_title = data);
  const setOffers = (data: HomeOffers) => (state.value.offers = data);
  const setOffersItems = (data: OffersListItem[]) => (state.value.offers_items = data);
  const setPopularServices = (data: HomePopularServices) => (state.value.popular_services = data);
  const setPopularServicesItems = (data: HomePopularServicesItem[]) => (state.value.popular_services_items = data);
  const setAbout = (data: HomeAbout) => (state.value.about = data);
  const setAboutImg = (data: string) => (state.value.about_img = data);
  const setAboutImgAlt = (data: string) => (state.value.about_image_alt = data);
  const setAboutImgTitle = (data: string) => (state.value.about_image_title = data);
  const setReviews = (data: HomeReviews) => (state.value.reviews = data);
  const setReviewsItems = (data: HomeReviewItem[]) => (state.value.review_items = data);
  const setCompanyImage = (data: HomeData['company_image']) => (state.value.company_image = data);

  const fetchHome = async () => {
    try {
      const response = await homeHttp.fetchHome();
      const data = response.data.value?.data;

      if (data?.seo) setSeo(data.seo);
      if (data?.welcome) setWelcome(data.welcome);
      if (data?.welcome_image) setWelcomeImg(data.welcome_image);
      if (data?.welcome[0].welcome_image_alt) setWelcomeImgAlt(data.welcome[0].welcome_image_alt);
      if (data?.welcome[0].welcome_image_title) setWelcomeImgTitle(data.welcome[0].welcome_image_title);
      if (data?.offers) setOffers(data.offers);
      if (data?.offers_items) setOffersItems(data.offers_items);
      if (data?.popular_services) setPopularServices(data.popular_services);
      if (data?.popular_services_items) setPopularServicesItems(data.popular_services_items);
      if (data?.about) setAbout(data.about);
      if (data?.about_img) setAboutImg(data.about_img);
      if (data?.about_image_alt) setAboutImgAlt(data.about_image_alt);
      if (data?.about_image_title) setAboutImgTitle(data.about_image_title);
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
