import { ref } from 'vue';
import { defineStore } from 'pinia';
import { reviewsHttp } from '~/api/http/reviewsHttp';
import type { ReviewsState } from './reviews.types';

const DEFAULT_STATE: ReviewsState = {
  reviews: [],
  reviewsPageInfo: {},
};

export const reviewsStore = defineStore('reviewsStore', () => {
  const state = ref(DEFAULT_STATE);

  const setReviewPageInfo = (reviewsPageInfo?: ReviewsState['reviewsPageInfo']) => {
    state.value.reviewsPageInfo = reviewsPageInfo ?? {};
  };

  const setReviewList = (reviews?: ReviewsState['reviews']) => {
    state.value.reviews = reviews ?? [];
  };

  const fetchReviewPageInfo = async () => {
    const response = await reviewsHttp.getReviewsPageInfo();

    const data = response.data.value?.data;

    if (data) {
      setReviewPageInfo(data);
    }
  };

  const fetchReviewList = async () => {
    const response = await reviewsHttp.getReviewList();

    const data = response.data.value?.data;

    if (data) {
      setReviewList(data);
    }
  };

  return {
    state,
    actions: {},
    effects: {
      fetchReviewList,
      fetchReviewPageInfo,
    },
  };
});
