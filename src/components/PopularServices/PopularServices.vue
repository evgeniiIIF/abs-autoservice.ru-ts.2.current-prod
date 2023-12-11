<script setup lang="ts">
const services = [
  { title: 'Техническое обслуживание', link: '#', img: '/images/popular-services-items/1.png' },
  { title: 'Диагностика автомобиля', link: '#', img: '/images/popular-services-items/2.png' },
  { title: '3D развал-схождение', link: '#', img: '/images/popular-services-items/3.png' },
  { title: 'Ремонт двигателей', link: '#', img: '/images/popular-services-items/4.png' },
  { title: 'Ремонт Акпп', link: '#', img: '/images/popular-services-items/5.png' },
  { title: 'Ремонт электрики', link: '#', img: '/images/popular-services-items/6.png' },
  { title: 'Ремонт подвески', link: '#', img: '/images/popular-services-items/7.png' },
  { title: 'Ремонт тормозной системы', link: '#', img: '/images/popular-services-items/8.png' },
  { title: 'Шиномонтаж', link: '#', img: '/images/popular-services-items/9.png' },
];
</script>

<template>
  <section class="popular-services">
    <div class="container">
      <div class="popular-services__top-background"></div>
      <h2 class="popular-services__title">Популярные услуги в&nbsp;ABS-AUTO</h2>
      <ul class="popular-services__services">
        <li v-for="service in services" :key="service.title" class="popular-services__service">
          <PopularServiceCard :service="service" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
.popular-services {
  position: relative;
  padding: 80px 0 20px 0;

  @include tablet {
    padding: 76px 0 40px 0;
  }

  &__top-background {
    position: absolute;
    top: 40px;
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
    justify-content: space-between;

    @include desktop {
      gap: 20px;
    }
  }

  &__service {
    flex-basis: calc(50% - 5px);

    @include desktop {
      flex-basis: calc(33% - 13.3px);
    }
  }
}
</style>
