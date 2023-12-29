import type { GetReviewsPageData, GetReviewListItem } from '~/api/http';

export interface ReviewsState {
  reviews: GetReviewListItem[];
  reviewsPageInfo: Partial<GetReviewsPageData>;
}
