<script setup lang="ts">
import { useHomeStore } from '~/store/home';

const { homeState } = useHomeStore();
const { isDesktop } = useMediaSizes();
</script>

<template>
  <section class="special-offers">
    <div class="special-offers__container">
      <h2 class="special-offers__title">{{ homeState.offers.title }}</h2>
      <ul class="special-offers__offers">
        <li v-for="offer in homeState.offers_items" :key="offer.id" class="special-offers__item">
          <OfferCard
            :id="offer.id"
            class="special-offers__offer-card"
            :title="offer.title"
            :descriptions="isDesktop ? offer.description : undefined"
            :image="offer.image"
            :link="offer.btn?.btn_link"
            :button="{
              text: offer.btn.btn_title,
              size: isDesktop ? 'small' : 'big',
              fill: isDesktop ? 'outline' : 'solid',
            }"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
.special-offers {
  &__container {
    @include container;

    position: relative;
    padding-bottom: 80px;
    border-bottom: 1px solid var(--black-black-80, #414141);
    @include mobile {
      padding-bottom: 30px;
    }
  }

  &__title {
    color: var(--white, #fff);

    @include SubtitleLBold;

    @include desktop {
      @include TitleSBold;
    }
  }

  &__offers {
    margin-top: 20px;
    display: flex;
    gap: 20px;
    overflow-x: scroll;
    @include no-scrollbar;

    @include desktop {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__offer-card {
    height: 100%;
  }
}
</style>
