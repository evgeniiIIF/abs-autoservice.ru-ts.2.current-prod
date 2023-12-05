<script setup lang="ts">
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { useMediaSizes } from '@/composables/useMediaSizes';

import 'swiper/scss';

const { isMobile } = useMediaSizes();
</script>

<template>
  <section class="clients-reviews">
    <div class="container">
      <div v-if="!isMobile" class="clients-reviews__content-top">
        <h2 class="clients-reviews__title">Отзывы клиентов</h2>
        <div class="clients-reviews__slider-pagination"></div>
      </div>
      <Swiper
        class="clients-reviews__slider"
        :modules="[Pagination, Navigation, Autoplay]"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{ delay: 5000 }"
        :speed="750"
        :space-between="20"
        :slides-per-view="'auto'"
        loop
      >
        <SwiperSlide v-for="slide in 4" :key="slide" class="clients-reviews__slide">
          <ReviewCard />
        </SwiperSlide>
      </Swiper>
      <div v-if="!isMobile" class="clients-reviews__slider-navigation"></div>
    </div>
  </section>
</template>

<style lang="scss">
.clients-reviews {
  position: relative;
  padding: 30px 0;

  &::before {
    position: absolute;
    top: 0;
    left: 20px;
    width: calc(100% - 40px);
    height: 1px;
    background-color: var(--black-black-80, #414141);
    content: '';
  }

  &__slider {
  }

  &__slide {
    max-width: 240px;
  }
}
</style>
