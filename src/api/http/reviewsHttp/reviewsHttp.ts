import { useAppFetch } from '#imports';
import type { GetReviewsPageData, GetReviewListItem } from './reviewsHttp.types';

const BASE_PATH = '/reviews';

const getReviewsPageInfo = async () => {
  const response = await useAppFetch<{ data: GetReviewsPageData }>(`${BASE_PATH}-page`);

  return response;
};

const getReviewList = async () => {
  const response = await useAppFetch<{ data: GetReviewListItem[] }>(`${BASE_PATH}`);

  return response;
};

export const reviewsHttp = {
  getReviewsPageInfo,
  getReviewList,
};
