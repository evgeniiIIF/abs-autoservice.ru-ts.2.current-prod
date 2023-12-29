<script lang="ts" setup>
import { Navigation } from 'swiper/modules';

import 'swiper/scss';
import { appRoutes } from '~/appRoutes';
import { useHomeStore } from '~/store/home';

const { homeState } = useHomeStore();

const popularServices = computed(() =>
  homeState.value.popular_services_items.map((service) => ({
    id: service.id,
    title: service.title,
    link: appRoutes.services(service.slug).path,
    price: service?.price,
  })),
);
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
        <SwiperSlide v-for="service in popularServices" :key="service.id" class="service-popular-services__slide">
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
