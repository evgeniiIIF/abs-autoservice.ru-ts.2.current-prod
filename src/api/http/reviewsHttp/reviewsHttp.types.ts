export interface Seo {
  title: string;
  description: string;
  key_words: any;
  author: string;
  robots: string;
  canonical_url: any;
  image: string;
  'og:type': string;
  'og:title': string;
  'og:description': string;
  'twitter:card': string;
  'twitter:title': string;
  'twitter:description': string;
}
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
