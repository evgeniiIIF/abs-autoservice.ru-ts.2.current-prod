<script setup lang="ts">
import { appRoutes } from '~/appRoutes';
import { useOfferStore } from '~/store/offer';

const { offerState, offerEffects } = useOfferStore();
const { isMobile } = useMediaSizes();

await offerEffects.fetchOffersList();

useSeoMeta({
  title: 'Акции и спецпредложения',
  description: offerState.value.offers.map((item) => item.title).join(', '),
});
</script>

<template>
  <div class="offers">
    <UIBreadcrumb :items="[{ name: 'Акции и спецпредложения', link: '' }]" />
    <h1 class="offers__title container">Акции и спецпредложения</h1>
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
      display: initial;
    }
  }
}
</style>
