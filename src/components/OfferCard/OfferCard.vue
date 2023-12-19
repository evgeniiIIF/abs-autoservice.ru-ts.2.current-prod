<script setup lang="ts">
import { useMediaSizes } from '@/composables/useMediaSizes';
import type { OfferCard } from '@/components/OfferCard/OfferCard.types';

defineProps<OfferCard>();

const { isMobile } = useMediaSizes();
</script>

<template>
  <div class="offer-card">
    <div class="offer-card__image ibg">
      <NuxtPicture :src="image ?? 'undefined'" loading="lazy" format="webp" />
    </div>
    <div class="offer-card__info">
      <h3 class="offer-card__title">{{ title }}</h3>
      <p v-if="!isMobile" class="offer-card__description">{{ descriptions }}</p>
    </div>
    <NuxtLink class="offer-card__link">
      <UIButton :has-full-width="isMobile" :without-fill="!isMobile">Записаться</UIButton>
    </NuxtLink>
  </div>
</template>

<style lang="scss">
.offer-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 12px;
  border-radius: 20px;
  border: 1px solid #2a2a2a;
  background: var(--Linear, linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%));
  transition: $transition-1;

  @include mb(10px);
  @include tablet {
    padding: 16px;
    &:hover {
      background: rgba(42, 42, 42, 0.5);
      transition: $transition-1;

      .offer-card__image {
        img {
          transform: scale(90%);
          transition: $transition-1;
        }
      }
    }
  }

  &__image {
    padding-top: 88.3977901%;
    @include tablet {
      padding-top: 45.0704225%;
    }
    img {
      object-fit: contain;
      @include tablet {
        object-fit: cover;
        transition: $transition-1;
      }
    }
  }

  &__info {
    flex: 1 1 auto;
  }

  &__title {
    min-width: 181px;
    text-overflow: ellipsis;
    color: var(--Black-Black-00, #fff);
    @include SubtitleSBold;
  }

  &__description {
    color: var(--Black-Black-50, #898989);
    @include BodyMRegular;
  }

  &__link {
  }
}
.ibg {
}
</style>
