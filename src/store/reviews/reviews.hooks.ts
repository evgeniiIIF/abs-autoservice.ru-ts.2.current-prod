import { storeToRefs } from 'pinia';
import { reviewsStore } from './reviews';

export const useReviewStore = () => {
  const { actions, effects } = reviewsStore();
  const { state } = storeToRefs(reviewsStore());

  return {
    reviewsState: state,
    reviewsActions: actions,
    reviewsEffects: effects,
  };
};
