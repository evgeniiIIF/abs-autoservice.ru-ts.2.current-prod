<script setup lang="ts">
import { appRoutes } from '~/appRoutes';
import { useOfferStore } from '~/store/offer';

const { offerState, offerEffects } = useOfferStore();
const { isMobile } = useMediaSizes();

await useAsyncData('offers-page', async () => {
  await Promise.all([offerEffects.fetchOffersList(), offerEffects.fetchOffersPageInfo()]);
});

useSeoMeta({
  title: offerState.value.offerPageInfo?.seo.title,
  description: offerState.value.offerPageInfo?.seo.description,
  ogTitle: offerState.value.offerPageInfo?.seo['og:title'],
  ogDescription: offerState.value.offerPageInfo?.seo['og:description'],
  ogType: offerState.value.offerPageInfo?.seo['og:type'] as any,
  ogImage: offerState.value.offerPageInfo?.seo.image,
  twitterTitle: offerState.value.offerPageInfo?.seo['twitter:title'],
  twitterDescription: offerState.value.offerPageInfo?.seo['twitter:description'],
  twitterCard: offerState.value.offerPageInfo?.seo['twitter:card'] as any,
  robots: offerState.value.offerPageInfo?.seo.robots,
  author: offerState.value.offerPageInfo?.seo.author,
  keywords: offerState.value.offerPageInfo?.seo.key_words,
});

</script>

<template>
  <div class="offers">
    <UIBreadcrumb :items="[{ name: offerState.offerPageInfo?.title ?? 'Акции и спецпредложения', link: '' }]" />
    <h1 class="offers__title container">{{ offerState.offerPageInfo?.title ?? 'Акции и спецпредложения' }}</h1>
    <div class="container">
      <div class="offers__list">
        <OfferCard
          v-for="offer in offerState.offers"
          :key="offer.id"
          class="offers__list-item"
          :image="offer.image"
          :descriptions="offer.description"
          :title="offer.title"
          :link="appRoutes.offers(offer.id.toString()).path"
          :button="{
            text: offer.btn.btn_title,
            size: isMobile ? 'big' : 'small',
            fill: isMobile ? 'solid' : 'outline',
          }"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.offers {
  &__title {
    color: var(--white);
    @include TitleSBold;
  }

  &__list {
    margin-top: 20px;
    margin-bottom: 80px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mobile {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
