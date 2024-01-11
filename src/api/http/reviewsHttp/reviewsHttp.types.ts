import type { Seo } from '../shared';

export interface GetReviewsPageData {
  seo: Seo;
  title: string;
  slug: string;
  is_active: number;
}

export interface ReviewService {
  id: number;
  name: string;
  rating: string;
  link: string;
  icon: string;
}
export interface GetReviewListItem {
  id: number;
  name: string;
  rating: string;
  content: string;
  link: string;
  created_at: string;
  updated_at: string;
  avatar: string;
  review_service: ReviewService[];
}
