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
    <UIBreadcrumb :items="breadcrumbItems" />
    <SectionBonusProgram />
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
  margin-bottom: 108px;

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
