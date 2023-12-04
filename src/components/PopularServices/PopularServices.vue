<script setup lang="ts">
const services = [
  { title: 'Техническое обслуживание', link: '#', img: '/images/popular-service.png' },
  { title: 'Диагностика автомобиля', link: '#', img: '/images/popular-service.png' },
  { title: '3D развал-схождение', link: '#', img: '/images/popular-service.png' },
  { title: 'Ремонт двигателей', link: '#', img: '/images/popular-service.png' },
  { title: 'Ремонт Акпп', link: '#', img: '/images/popular-service.png' },
  { title: 'Ремонт электрики', link: '#', img: '/images/popular-service.png' },
  { title: 'Ремонт подвески', link: '#', img: '/images/popular-service.png' },
  { title: 'Ремонт тормозной системы', link: '#', img: '/images/popular-service.png' },
  { title: 'Шиномонтаж', link: '#', img: '/images/popular-service.png' },
];
</script>

<template>
  <div class="popular-services">
    <div class="container">
      <div class="popular-services__top-background"></div>
      <h2 class="popular-services__title">Популярные услуги в&nbsp;ABS-AUTO</h2>
      <ul class="popular-services__services">
        <li v-for="service in services" :key="service.title" class="popular-services__service">
          <PopularServiceCard :service="service" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.popular-services {
  position: relative;
  padding: 40px 0 20px 0;

  @include tablet {
    padding: 76px 0 40px 0;
  }

  &__top-background {
    position: absolute;
    top: 0;
    left: 10px;
    z-index: -1;
    max-width: calc(100% - 20px);
    width: 100%;
    height: 200px;
    border-radius: 20px 20px 0 0;
    background: linear-gradient(180deg, #2a2a2a 0%, rgba(17, 18, 18, 0) 100%);

    @include tablet {
      display: none;
    }
  }

  &__title {
    margin-bottom: 20px;
    margin-left: 10px;
    @include SubtitleLBold;
    color: var(--white, #fff);

    @include from(480px) {
      text-align: center;
    }

    @include tablet {
      margin-left: 0;
      @include TitleXSBold;
    }

    @include desktop {
      text-align: inherit;
    }
  }

  &__services {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    @include from(480px) {
      justify-content: center;
    }

    @include from(1210px) {
      column-gap: 0;
      row-gap: 20px;
      justify-content: space-between;
    }
  }
}
</style>
