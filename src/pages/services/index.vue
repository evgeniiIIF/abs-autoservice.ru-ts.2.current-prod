<script setup lang="ts">
import { appRoutes } from '~/appRoutes';
import { useServicesStore } from '~/store/services';

const { isMobile } = useMediaSizes();
const { servicesState, servicesEffects } = useServicesStore();

await servicesEffects.fetchServicesPageInfo();

useSeoMeta({
  title: servicesState.value.servicePageInfo?.seo?.title ?? 'Услуги',
  description: servicesState.value.servicePageInfo?.seo?.description,
  ogImage: servicesState.value.servicePageInfo?.seo?.image,
  ogTitle: servicesState.value.servicePageInfo?.seo?.['og:title'],
  ogDescription: servicesState.value.servicePageInfo?.seo?.['og:description'],
  ogType: servicesState.value.servicePageInfo?.seo?.['og:type'] as any,
  twitterTitle: servicesState.value.servicePageInfo?.seo?.['twitter:title'],
  twitterDescription: servicesState.value.servicePageInfo?.seo?.['twitter:description'],
  twitterCard: servicesState.value.servicePageInfo?.seo?.['twitter:card'] as any,
  robots: servicesState.value.servicePageInfo?.seo?.robots,
  author: servicesState.value.servicePageInfo?.seo?.author,
  keywords: servicesState.value.servicePageInfo?.seo?.key_words,
});

const converterItems = computed(() =>
  servicesState.value.servicesTree.map((service) => ({
    image: service.image.image_path,
    image_title: service.image.image_title,
    image_alt: service.image.image_alt,
    title: service.title,
    text: service.children?.length ? `${service.children?.length} услуг` : '',
    link: appRoutes.services(service.slug).path,
    subcategories: service.children?.map((subService) => ({
      title: subService.title,
      link: appRoutes.services(subService.slug).path,
    })),
  })),
);
</script>

<template>
  <div class="services-page">
    <UIBreadcrumb :items="[{ name: 'Услуги', link: appRoutes.services().path }]" />
    <div class="services-page__information">
      <div class="services-page__information-content">
        <h1 class="services-page__title">{{ servicesState.servicePageInfo?.title ?? 'Услуги' }}</h1>
        <div v-if="!isMobile" class="services-page__services-list">
          <SectionServicesItem
            v-for="service in converterItems"
            :key="service.link"
            class="services-page__services-item"
            :item="service"
          />
        </div>
        <div v-if="isMobile" class="services-page__services-list">
          <SectionServicesItemMobile
            v-for="service in converterItems"
            :key="service.link"
            class="services-page__services-item"
            :item="service"
          />
        </div>
      </div>
      <div class="services-page__sticky-banners">
        <CallUsBanner class="services-page__sticky-banner" variant="small" />
        <HasQuestionsBanner class="services-page__sticky-banner" />
      </div>
    </div>
    <CompanyPicture class="services-page__company-picture" image="/images/company-2.png" alt="Зал автосервиса" />
    <ServicePopularServices />
    <CallbackForm class="services-page__callback-form container" />
  </div>
</template>

<style lang="scss">
.services-page {
  &__title {
    @include TitleMBold;
    color: var(--white);
  }

  &__information {
    @include container;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;

    @include desktop {
      flex-wrap: nowrap;
    }

    @include mobile {
      display: block;
    }
  }

  &__information-content {
    @include desktop {
      max-width: 895px;
    }
  }

  &__sticky-banners {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    min-width: 300px;
  }

  &__services-list {
    margin-bottom: 20px;

    @include mobile {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
  }

  &__services-item {
    margin-top: 20px;
    width: 100%;
    max-width: 100%;
  }

  &__sticky-banners {
    max-width: 390px;
    width: 100%;
    height: 100%;
    position: sticky;
    top: 109px;

    @include mobile {
      max-width: 100%;
    }
  }

  &__company-picture {
    margin-top: 80px;
  }

  &__callback-form {
    margin-bottom: 80px;
  }
}
</style>
