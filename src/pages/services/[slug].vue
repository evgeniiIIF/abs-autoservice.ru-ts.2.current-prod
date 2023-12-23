<script lang="ts" setup>
import { useMediaSizes } from '@/composables/useMediaSizes';
import { appRoutes } from '~/appRoutes';
import { useServicesStore } from '~/store/services';
import type { ServiceItem } from '~/store/services/services.types';

const route = useRoute();
const { isDesktop } = useMediaSizes();

const { servicesEffects, servicesState } = useServicesStore();

await servicesEffects.fetchService(route.params.slug as unknown as number);

const findServiceById = (
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

const serviceTreeCurrentItem = computed(() =>
  findServiceById(Number(route.params.slug), servicesState.value.servicesTree),
);

const serviceTreeParentItem = computed(() => {
  if (serviceTreeCurrentItem.value?.parent_id) {
    return findServiceById(Number(serviceTreeCurrentItem.value?.parent_id), servicesState.value.servicesTree);
  }

  return undefined;
});

// TOD) ts-reset поставить убрать эни
const breadcrumbItems = computed(
  () =>
    [
      {
        name: 'Услуги',
        link: appRoutes.services().path,
      },
      serviceTreeParentItem.value?.id && {
        name: serviceTreeParentItem.value.title,
        link: appRoutes.services(serviceTreeParentItem.value.id).path,
      },
      {
        name: serviceTreeCurrentItem.value?.title,
        link: appRoutes.services(serviceTreeCurrentItem.value?.id).path,
      },
    ].filter(Boolean) as any,
);

onMounted(() => {
  console.log();
});
</script>

<template>
  <div class="service-page">
    <UIBreadcrumb :items="breadcrumbItems" />
    <SectionService />
    <CompanyPicture v-if="isDesktop" image="/images/company-2.png" alt="Зал автосервиса" />
    <ServicePopularServices />
    <CallbackForm class="service-page__fallback-form container" />
  </div>
</template>

<style lang="scss">
.service-page {
  &__fallback-form {
    margin-bottom: 80px;
  }
}
</style>
