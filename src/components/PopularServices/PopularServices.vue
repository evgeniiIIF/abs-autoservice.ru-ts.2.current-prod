<script setup lang="ts">
import { useHomeStore } from '~/store/home';

const { isMobile } = useMediaSizes();
const { homeState } = useHomeStore();

const popularServicesTitle = computed(() => homeState.value.popular_services.title);
const popularServicesItems = computed(() => homeState.value.popular_services_items);
</script>

<template>
  <section class="popular-services">
    <div class="container">
      <div class="popular-services__top-background"></div>
      <h2 class="popular-services__title">{{ popularServicesTitle }}</h2>
      <ul class="popular-services__services">
        <li v-for="service in popularServicesItems" :key="service.title" class="popular-services__service">
          <PopularServiceCard :service="service" :size="isMobile ? 'small' : 'standard'" />
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;

    @include desktop {
      grid-template-columns: repeat(3, 1fr);
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
