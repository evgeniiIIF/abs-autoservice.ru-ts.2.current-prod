<script lang="ts" setup>
import { useMediaSizes } from '@/composables/useMediaSizes';
import { appRoutes } from '~/appRoutes';
import { useServicesStore } from '~/store/services';

import { findServiceById, findServiceBySlug } from '~/utils/services';

const route = useRoute();
const { isDesktop } = useMediaSizes();

const { servicesEffects, servicesState } = useServicesStore();

await servicesEffects.fetchService(route.params.slug as unknown as number);

useSeoMeta({
  title: servicesState.value.service?.seo.title,
  description: servicesState.value.service?.seo.description,
  ogImage: servicesState.value.service?.seo.image,
  ogTitle: servicesState.value.service?.seo['og:title'],
  ogDescription: servicesState.value.service?.seo['og:description'],
  ogType: servicesState.value.service?.seo['og:type'] as any,
  twitterTitle: servicesState.value.service?.seo['twitter:title'],
  twitterDescription: servicesState.value.service?.seo['twitter:description'],
  twitterCard: servicesState.value.service?.seo['twitter:card'] as any,
  robots: servicesState.value.service?.seo.robots,
  author: servicesState.value.service?.seo.author,
  keywords: servicesState.value.service?.seo?.key_words,
});

const serviceTreeCurrentItem = computed(() =>
  findServiceBySlug(route.params.slug as string, servicesState.value.servicesTree),
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
        link: appRoutes.services(serviceTreeParentItem.value.slug).path,
      },
      {
        name: serviceTreeCurrentItem.value?.title,
        link: appRoutes.services(serviceTreeCurrentItem.value?.slug).path,
      },
    ].filter(Boolean) as any,
);
</script>

<template>
  <div class="service-page">
    <UIBreadcrumb :items="breadcrumbItems" />
    <SectionService />
    <CompanyPicture
      v-if="isDesktop"
      class="service-page__company-picture"
      :image="servicesState.servicePageInfo?.image ?? 'undefined'"
      :alt="servicesState.servicePageInfo?.image_alt ?? ''"
      :title="servicesState.servicePageInfo?.image_title ?? ''"
    />
    <ServicePopularServices />
    <CallbackForm class="service-page__fallback-form container" />
  </div>
</template>

<style lang="scss">
.service-page {
  &__fallback-form {
    margin-bottom: 80px;
  }

  &__company-picture {
    margin-top: 80px;
  }
}
</style>
