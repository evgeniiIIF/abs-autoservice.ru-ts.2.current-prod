<script setup lang="ts">
import { appRoutes } from '~/appRoutes';
import { useServicesStore } from '~/store/services';

const { servicesState } = useServicesStore();

const converterItems = computed(() =>
  servicesState.value.servicesTree.map((service) => ({
    image: service.image,
    title: service.title,
    text: service.children?.length ? `${service.children?.length} услуг` : '',
    link: appRoutes.services(service.id).path,
    subcategories: service.children?.map((subService) => ({
      title: subService.title,
      link: appRoutes.services(subService.id).path,
    })),
  })),
);
</script>

<template>
  <div class="services-page">
    <UIBreadcrumb :items="[{ name: 'Услуги', link: appRoutes.services().path }]" />
    <div class="services-page__information container">
      <div class="services-page__information-content">
        <h1 class="services-page__title">Услуги</h1>
        <div class="services-page__services-list">
          <SectionServicesItem
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
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    @include desktop {
      flex-wrap: nowrap;
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
  }

  &__services-item {
    margin-top: 20px;
  }

  &__sticky-banners {
    width: 100%;
    height: 100%;
    position: sticky;
    top: 109px;
  }

  &__company-picture {
    margin-top: 80px;
  }

  &__callback-form {
    margin-bottom: 80px;
  }
}
</style>
