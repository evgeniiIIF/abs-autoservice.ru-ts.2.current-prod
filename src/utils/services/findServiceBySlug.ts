import type { ServiceItem } from '~/store/services/services.types';

export const findServiceBySlug = (
  slug: string,
  categoryList: ServiceItem[],
  start: ServiceItem | undefined = undefined,
): ServiceItem | undefined => {
  return categoryList?.reduce((prev, next) => {
    if (next.slug === slug) {
      return next;
    }

    if (next?.slug !== slug) {
      return findServiceBySlug(slug, next?.children ?? [], prev);
    }

    return prev;
  }, start);
};
