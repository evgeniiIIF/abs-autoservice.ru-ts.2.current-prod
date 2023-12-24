<script setup lang="ts">
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/pagination';

import { useHomeStore } from '~/store/home';

const { isDesktop } = useMediaSizes();

const { homeState } = useHomeStore();

const reviewsTitle = computed(() => homeState.value.reviews.title);
const reviewItems = computed(() => homeState.value.review_items);
</script>

<template>
  <section class="clients-reviews">
    <div class="container">
      <div class="clients-reviews__content-top">
        <h2 class="clients-reviews__title">{{ reviewsTitle }}</h2>
        <div class="clients-reviews__slider-navigation">
          <UIArrowButton arrow-direction="left" :class-for-swiper="'clients-reviews__slider-button-prev'" />
          <UIArrowButton arrow-direction="right" :class-for-swiper="'clients-reviews__slider-button-next'" />
        </div>
      </div>
      <Swiper
        class="clients-reviews__slider"
        :modules="[Pagination, Navigation, Autoplay]"
        :pagination="{
          el: '.clients-reviews__slider-pagination',
          clickable: true,
        }"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :speed="750"
        :space-between="20"
        :slides-per-view="'auto'"
        :navigation="{
          prevEl: '.clients-reviews__slider-button-prev',
          nextEl: '.clients-reviews__slider-button-next',
        }"
      >
        <SwiperSlide v-for="item in reviewItems" :key="item.name" class="clients-reviews__slide">
          <ReviewCard :item="item" :size="isDesktop ? 'standard' : 'small'" />
        </SwiperSlide>
      </Swiper>
      <div class="clients-reviews__slider-pagination"></div>
    </div>
  </section>
</template>

<style lang="scss">
.clients-reviews {
  position: relative;
  padding: 30px 0;

  @include desktop {
    padding: 60px 0 85px 0;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 20px;
    width: calc(100% - 40px);
    height: 1px;
    background-color: var(--black-black-80, #414141);
    content: '';
  }

  &__content-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  &__title {
    @include TitleSBold;
    color: var(--white, #fff);
  }

  &__slider {
    &-navigation {
      display: none;

      @include desktop {
        display: flex;
      }
    }

    &-pagination {
      display: none;
      justify-content: center;
      margin-top: 20px;

      @include desktop {
        display: flex;
      }

      .swiper-pagination-bullet {
        position: relative;
        width: 40px;
        height: 4px;
        border-radius: 10px;
        background: var(--black-black-90, #2a2a2a);
        opacity: inherit;

        &::after {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 4px;
          border-radius: 10px;
          background: var(--green-primary, #00a19c);
          content: '';
          z-index: 1;
        }

        &-active {
          &::after {
            width: 40px;
            transition: width 5s linear;
          }
        }
      }
    }
  }

  &__slide {
    width: 100%;
    max-width: 240px;
    & > div {
      width: 100%;
    }

    @include desktop {
      max-width: 590px;
    }
  }
}
</style>
