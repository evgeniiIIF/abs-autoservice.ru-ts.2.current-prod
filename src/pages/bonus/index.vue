<script setup lang="ts">
import { appRoutes } from '~/appRoutes';
import { useBonusStore } from '~/store/bonus';

const { bonusState, bonusEffects } = useBonusStore();

await bonusEffects.fetchBonusPageInfo();

useSeoMeta({
  title: bonusState.value.bonusPageInfo?.seo.title,
  description: bonusState.value.bonusPageInfo?.seo.description,
  ogTitle: bonusState.value.bonusPageInfo?.seo['og:title'],
  ogDescription: bonusState.value.bonusPageInfo?.seo['og:description'],
  ogType: bonusState.value.bonusPageInfo?.seo['og:type'] as any,
  ogImage: bonusState.value.bonusPageInfo?.seo.image,
  twitterTitle: bonusState.value.bonusPageInfo?.seo['twitter:title'],
  twitterDescription: bonusState.value.bonusPageInfo?.seo['twitter:description'],
  twitterCard: bonusState.value.bonusPageInfo?.seo['twitter:card'] as any,
  robots: bonusState.value.bonusPageInfo?.seo.robots,
  author: bonusState.value.bonusPageInfo?.seo.author,
  keywords: bonusState.value.bonusPageInfo?.seo.key_words,
});

const breadcrumbItems = computed(() => [
  {
    name: bonusState.value.bonusPageInfo?.title ?? 'Бонусная программа',
    link: appRoutes.bonus().path,
  },
]);
</script>

<template>
  <div class="bonus">
    <div class="bonus__ellipse-top"></div>
    <div class="bonus__ellipse-bonus"></div>
    <UIBreadcrumb :items="breadcrumbItems" />
    <SectionBonusProgram class="bonus__program" />
    <SectionBenefitsCalculating class="bonus__calculating" />
    <NuxtPicture
      class="bonus__picture"
      :src="bonusState.bonusPageInfo?.bonus_img"
      loading="lazy"
      :alt="bonusState.bonusPageInfo?.slug"
    />
    <SectionCallback class="bonus__call-back" />
  </div>
</template>

<style lang="scss">
.bonus {
  @include container;
  overflow: hidden;
  position: relative;
  margin-bottom: 108px;
  @include desktop {
    overflow: initial;
  }

  &__ellipse-top {
    position: absolute;
    width: 255px;
    height: 255px;
    right: -88px;
    top: -104px;
    background: #00a19c;
    opacity: 0.34;
    filter: blur(70px);
  }

  &__ellipse-bonus {
    position: absolute;
    width: 255px;
    height: 255px;
    right: 35%;
    top: 300px;
    background: #00a19c;
    opacity: 0.15;
    filter: blur(70px);
    z-index: -1;
  }

  &__calculating {
    margin-top: 40px;
  }

  &__picture {
    display: block;
    margin-top: 40px;

    img {
      width: 100%;
      aspect-ratio: 3 / 1;
      border-radius: 20px;
      object-fit: cover;

      @include tablet {
        border-radius: 40px;
      }
    }
  }

  &__call-back {
    margin-top: 40px;
  }
}
</style>
