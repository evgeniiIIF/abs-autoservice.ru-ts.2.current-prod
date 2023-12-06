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
      <h2 class="service-popular-services__title">Популярные услуги</h2>
      <Swiper
        class="service-popular-services__slider"
        :modules="[Navigation]"
        :speed="750"
        :space-between="20"
        :slides-per-view="'auto'"
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
          <ServicePopularServiceCard :title="service.title" :price="service.price" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style lang="scss">
.service-popular-services {
  padding: 30px 0;

  &__title {
    margin-bottom: 20px;

    @include TitleXSBold;
    color: var(--white, #fff);
  }

  &__slide {
    max-width: 240px;

    @include tablet {
      max-width: inherit;
    }
  }
}
</style>
