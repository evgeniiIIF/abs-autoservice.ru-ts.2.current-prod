import type { GetReviewsPageInfo } from '~/api/http';

export interface ReviewsState {
  reviews: GetReviewsPageInfo[];
}
