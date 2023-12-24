import type { HomeReviewItem } from '~/api/http/homeHttp/homeHttp.types';

export interface ReviewCardProps {
  item: HomeReviewItem;
  size?: 'small' | 'standard';
}
