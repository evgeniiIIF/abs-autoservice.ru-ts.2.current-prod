<script lang="ts" setup>
import type { ServicePopularServiceCard } from '@/components/ServicePopularServiceCard/ServicePopularServiceCard.types';

defineProps<ServicePopularServiceCard>();
</script>

<template>
  <NuxtLink class="service-popular-service-card" :to="link">
    <p class="service-popular-service-card__title">{{ title }}</p>
    <p class="service-popular-service-card__price">от {{ price }} ₽</p>
  </NuxtLink>
</template>

<style lang="scss">
.service-popular-service-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 150px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid var(--black-black-90, #2a2a2a);
  background: var(--linear, linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%));
  backdrop-filter: blur(80px);
  transition: all 0.3s ease;

  @include desktop {
    &:hover {
      background: var(--black-black-90, #2a2a2a);
    }
  }

  &__title {
    @include SubtitleSRegular;
    color: var(--white, #fff);

    @include desktop {
      @include SubtitleLRegular;
    }
  }

  &__price {
    @include SubtitleMRegular;
    color: var(--black-black-50, #898989);

    @include desktop {
      @include TitleXSRegular;
    }
  }
}
</style>
