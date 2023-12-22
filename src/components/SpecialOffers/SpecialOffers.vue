<script setup lang="ts">
import { useHomeStore } from '~/store/home';

const { homeState } = useHomeStore();
const { isDesktop } = useMediaSizes();
</script>

<template>
  <section class="special-offers">
    <div class="container">
      <h2 class="special-offers__title">Акции и спецпредложения</h2>
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
  position: relative;
  padding-bottom: 30px;

  @include tablet {
    padding: 60px 0 80px 0;
  }

  &::before {
    position: absolute;
    bottom: 0;
    left: 20px;
    width: calc(100% - 40px);
    height: 1px;
    content: '';
    background-color: var(--black-black-80, #414141);
  }

  &__title {
    margin-bottom: 20px;
    @include SubtitleLBold;
    color: var(--white, #fff);

    @include tablet {
      @include TitleSBold;
    }
  }

  &__offers {
    display: flex;
    gap: 20px;
    overflow-x: scroll;

    @include d-desktop {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__offer-card {
    height: 100%;
  }
}
</style>
