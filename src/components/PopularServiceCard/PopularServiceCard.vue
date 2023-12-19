<script setup lang="ts">
import { useMediaSizes } from '@/composables/useMediaSizes';
import type { PopularServiceCard } from '@/components/PopularServiceCard/PopularServiceCard.types';

defineProps<PopularServiceCard>();

const { isMobile } = useMediaSizes();
</script>

<template>
  <NuxtLink v-if="isMobile" class="popular-service-card">
    <div class="popular-service-card__image">
      <NuxtPicture :src="service.image_icon ?? 'undefined'" format="webp,png,jpg" loading="lazy" />
    </div>
    <div class="popular-service-card__content">
      <h3 class="popular-service-card__title">{{ service.title }}</h3>
    </div>
  </NuxtLink>
  <div v-else class="popular-service-card">
    <div class="popular-service-card__image">
      <NuxtPicture :src="service.image_icon ?? 'undefined'" format="webp,png,jpg" loading="lazy" />
    </div>
    <div class="popular-service-card__content">
      <h3 class="popular-service-card__title">{{ service.title }}</h3>
      <NuxtLink v-if="!isMobile" class="popular-service-card__link">
        <UIButton>Записаться</UIButton>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.popular-service-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 135px;
  min-height: 130px;
  height: 100%;
  padding: 10px 8px;
  gap: 10px;
  border-radius: 20px;
  background-color: rgba(42, 42, 42, 0.5);

  @include tablet {
    padding: 12px;
    gap: 16px;
    flex-direction: inherit;
    align-items: inherit;
    border: 1px solid var(--black-black-90, #2a2a2a);
    background: var(--linear, linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%));
    transition: all 0.3s ease;

    &:hover {
      background: var(--black-black-90, #2a2a2a);

      .popular-service-card {
        &__image {
          img {
            transform: scale(0.9);
          }
        }
      }
    }
  }

  &__image {
    img {
      width: 100%;
      max-width: 115px;
      height: 60px;
      object-fit: contain;
      transition: all 0.3s ease;

      @include tablet {
        width: 120px;
        height: 120px;
        max-width: inherit;
      }
    }
  }

  &__content {
    @include tablet {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 6px 0;
    }
  }

  &__title {
    text-align: center;
    @include BodySBold;
    color: var(--white, #fff);

    @include tablet {
      text-align: inherit;
      @include SubtitleMBold;
    }
  }
}
</style>
