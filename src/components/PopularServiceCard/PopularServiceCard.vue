<script setup lang="ts">
import { useMediaSizes } from '@/composables/useMediaSizes';
import type { PopularServiceCard } from '@/components/PopularServiceCard/PopularServiceCard.types';

defineProps<PopularServiceCard>();

const { isMobile } = useMediaSizes();
</script>

<template>
  <NuxtLink class="popular-service-card" :to="isMobile && service.link">
    <div class="popular-service-card__image">
      <NuxtPicture :src="service.img" format="webp,png,jpg" loading="lazy" />
    </div>
    <div class="popular-service-card__content">
      <h3 class="popular-service-card__title">{{ service.title }}</h3>
      <NuxtLink v-if="!isMobile" :to="service.link" class="popular-service-card__link">
        <UIButton>Записаться</UIButton>
      </NuxtLink>
    </div>
  </NuxtLink>
</template>

<style lang="scss">
.popular-service-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 135px;
  height: 130px;
  padding: 10px 8px;
  gap: 10px;
  border-radius: 20px;
  background-color: rgba(42, 42, 42, 0.5);

  @include tablet {
    width: 387px;
    height: 144px;
    padding: 12px;
    gap: 16px;
    flex-direction: inherit;
    align-items: inherit;
    border: 1px solid var(--black-black-90, #2a2a2a);
    background: var(--linear, linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%));
    transition: all 0.3s ease;

    &:hover {
      background: var(--black-black-90, #2a2a2a);
    }
  }

  &__image {
    img {
      width: 100%;
      max-width: 115px;
      height: 60px;
      object-fit: cover;

      @include tablet {
        width: 120px;
        height: 120px;
        max-width: inherit;
      }
    }
  }

  &__content {
    @include tablet {
      padding: 12px 0;
    }
  }

  &__title {
    text-align: center;
    @include BodySBold;
    color: var(--white, #fff);

    @include tablet {
      margin-bottom: 30px;
      text-align: inherit;
    }
  }
}
</style>
