<script setup lang="ts">
import { useHomeStore } from '~/store/home';

const { homeState } = useHomeStore();

useSeoMeta({
  title: homeState.value?.seo.title,
  description: homeState.value?.seo.description,
  ogTitle: homeState.value?.seo.title,
  ogDescription: homeState.value?.seo.description,
  twitterTitle: homeState.value?.seo.title,
  twitterDescription: homeState.value?.seo.description,
  robots: homeState.value.seo.robots,
  author: homeState.value.seo.robots,
});
</script>

<template>
  <div class="main-page">
    <SectionBanner class="main-page__banner" />
    <SpecialOffers class="main-page__offers" />
    <SectionCostCalculation id="section-cost-calculation" class="main-page__calculator" />
    <CompanyPicture class="main-page__picture" image="/images/company-1.png" alt="АБС автосервис ставрополь" />
    <PopularServices class="main-page__popular-services" />
    <SectionCallback class="main-page__callback" />
    <SectionGetCard class="main-page__card" />
    <CompanyPicture :image="homeState.about_img" alt="АБС автосервис ставрополь" />
    <AboutCompany class="main-page__about" />
    <ClientsReviews />
    <SectionServices />
  </div>
</template>

<style lang="scss">
.main-page {
  overflow: hidden;
  @include desktop {
    overflow: initial;
  }

  &__banner {
    padding-top: 15px;

    @include media(1280px) {
      padding-top: 44px;
    }
  }

  &__offers {
    margin-top: 100px;

    @include mobile {
      margin-top: 60px;
    }
  }

  &__calculator {
    margin-top: 30px;

    @include desktop {
      margin-top: 60px;
    }
  }

  &__picture {
    margin-top: 40px;

    @include desktop {
      margin-top: 80px;
    }
  }

  &__popular-services {
    margin-top: 40px;

    @include desktop {
      margin-top: 60px;
    }
  }

  &__callback {
    margin-top: 40px;

    @include desktop {
      margin-top: 80px;
    }
  }

  &__card {
    margin-top: 20px;

    @include desktop {
      margin-top: 80px;
    }
  }

  &__about {
    margin-top: 40px;

    @include desktop {
      margin-top: 60px;
    }
  }
}
</style>
