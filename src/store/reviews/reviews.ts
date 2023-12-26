import { ref } from 'vue';
import { defineStore } from 'pinia';
import { reviewsHttp } from '~/api/http/reviewsHttp';
import type { ReviewsState } from './reviews.types';

const DEFAULT_STATE: ReviewsState = {
  reviews: [],
};

export const reviewsStore = defineStore('reviewsStore', () => {
  const state = ref(DEFAULT_STATE);

  const setReviewPageInfoList = (reviews?: ReviewsState['reviews']) => {
    state.value.reviews = reviews ?? [];
  };

  const fetchReviewPageInfo = async () => {
    const response = await reviewsHttp.getReviewsPageInfo();

    const data = response.data.value?.data;
    if (data) {
      setReviewPageInfoList(data);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchReviewPageInfo,
    },
  };
});
