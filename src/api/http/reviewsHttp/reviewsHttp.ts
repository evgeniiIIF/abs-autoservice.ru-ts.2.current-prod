import { useAppFetch } from '#imports';
import type { GetReviewsPageInfo } from './reviewsHttp.types';

const BASE_PATH = '/reviews';

const getReviewsPageInfo = async () => {
  const response = await useAppFetch<{ data: GetReviewsPageInfo[] }>(`${BASE_PATH}`);

  return response;
};

export const reviewsHttp = {
  getReviewsPageInfo,
};
