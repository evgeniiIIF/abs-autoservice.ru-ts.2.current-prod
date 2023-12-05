<script setup lang="ts">
import { useMediaSizes } from '@/composables/useMediaSizes';
import type { OfferCard } from '@/components/OfferCard/OfferCard.types';

defineProps<OfferCard>();

const { isMobile } = useMediaSizes();
</script>

<template>
  <div class="offer-card">
    <div class="offer-card__image">
      <NuxtPicture :src="img" loading="lazy" />
    </div>
    <div class="offer-card__info">
      <h3 class="offer-card__title">{{ title }}</h3>
      <p v-if="!isMobile" class="offer-card__description">{{ description }}</p>
    </div>
    <NuxtLink class="offer-card__link" :to="link">
      <UIButton :has-full-width="isMobile" :without-fill="!isMobile">Записаться</UIButton>
    </NuxtLink>
  </div>
</template>

<style lang="scss">
.offer-card {
  display: grid;
  grid-template-rows: 160px auto 40px;
  grid-row-gap: 10px;
  width: 205px;
  height: 100%;
  padding: 12px;
  border-radius: 20px;
  background: rgba(42, 42, 42, 0.5);

  @include tablet {
    width: 387px;
    min-height: 374px;
    padding: 16px;
    grid-row-gap: 12px;
    border: 1px solid var(--black-black-90);
    background: var(--linear, linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%));
  }

  @include desktop {
    &:hover {
      background: rgba(42, 42, 42, 0.5);

      .offer-card__image {
        img {
          transform: scale(0.97);
        }
      }
    }
  }

  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 181px;
    height: 160px;

    @include tablet {
      width: 100%;
      max-width: 355px;
      margin-bottom: 12px;
    }

    picture {
      display: flex;
      width: 100%;
    }

    img {
      width: 100%;
      transition: all 0.3s ease;

      @include tablet {
        border-radius: 20px;
        width: 355px;
        height: 160px;
      }
    }
  }

  &__content {
    @include tablet {
      margin-bottom: 16px;
    }
  }

  &__title {
    @include SubtitleSBold;
    color: var(--white, #fff);

    @include tablet {
      margin-bottom: 8px;
      @include SubtitleMBold;
    }
  }

  &__description {
    @include BodyMRegular;
    color: var(--black-black-50, #898989);
    min-height: 80px;
  }
}
</style>
