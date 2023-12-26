export interface ReviewService {
  id: number;
  name: string;
  rating: string;
  link: string;
  icon: string;
}

export interface GetReviewsPageInfo {
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
