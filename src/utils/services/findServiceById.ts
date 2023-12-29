import type { ServiceItem } from '~/store/services/services.types';

export const findServiceById = (
  id: number,
  categoryList: ServiceItem[],
  start: ServiceItem | undefined = undefined,
): ServiceItem | undefined => {
  return categoryList?.reduce((prev, next) => {
    if (next.id === id) {
      return next;
    }

    if (next?.id !== id) {
      return findServiceById(id, next?.children ?? [], prev);
    }

    return prev;
  }, start);
};
