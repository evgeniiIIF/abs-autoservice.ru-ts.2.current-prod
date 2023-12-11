<script lang="ts" setup>
import { Navigation } from 'swiper/modules';

import 'swiper/scss';

const services = [
  { id: 1, title: 'Замена блока управления АБC', price: 1800, link: '#' },
  { id: 2, title: 'Ремонт головки блоки цилиндров (ГБЦ)', price: 12000, link: '#' },
  { id: 3, title: 'Замена блока управления АБC', price: 1800, link: '#' },
  { id: 4, title: 'Ремонт головки блоки цилиндров (ГБЦ)', price: 12000, link: '#' },
  { id: 5, title: 'Ремонт головки блоки цилиндров (ГБЦ)', price: 12000, link: '#' },
  { id: 6, title: 'Ремонт головки блоки цилиндров (ГБЦ)', price: 12000, link: '#' },
];
</script>

<template>
  <section class="service-popular-services">
    <div class="container">
      <div class="service-popular-services__content-top">
        <h2 class="service-popular-services__title">Популярные услуги</h2>
        <div class="service-popular-services__slider-navigation">
          <UIArrowButton arrow-direction="left" :class-for-swiper="'service-popular-services__slider-button-prev'" />
          <UIArrowButton arrow-direction="right" :class-for-swiper="'service-popular-services__slider-button-next'" />
        </div>
      </div>
      <Swiper
        class="service-popular-services__slider"
        :modules="[Navigation]"
        :speed="750"
        :space-between="20"
        :slides-per-view="'auto'"
        :navigation="{
          prevEl: '.service-popular-services__slider-button-prev',
          nextEl: '.service-popular-services__slider-button-next',
        }"
        :breakpoints="{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
        }"
      >
        <SwiperSlide v-for="service in services" :key="service.id" class="service-popular-services__slide">
          <ServicePopularServiceCard :title="service.title" :price="service.price" :link="service.link" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style lang="scss">
.service-popular-services {
  padding: 30px 0;

  &__content-top {
    margin-bottom: 20px;

    @include desktop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 39px;
    }
  }

  &__title {
    @include TitleXSBold;
    color: var(--white, #fff);
  }

  &__slider {
    &-navigation {
      display: none;

      @include desktop {
        display: flex;
      }
    }
  }

  &__slide {
    max-width: 240px;

    @include tablet {
      max-width: inherit;
    }
  }
}
</style>
