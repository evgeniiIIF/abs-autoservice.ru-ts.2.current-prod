<script setup lang="ts">
import type { OfferCard } from '@/components/OfferCard/OfferCard.types';

defineProps<OfferCard>();

const [isModalOpen, openModal, closeModal] = useBooleanState();
</script>

<template>
  <div class="offer-card">
    <div class="offer-card__picture-wrapper">
      <NuxtPicture
        class="offer-card__picture"
        :src="image?.image_path ?? 'undefined'"
        loading="lazy"
        format="webp"
        :alt="image?.image_alt"
        :title="image?.image_title"
      />
    </div>
    <div class="offer-card__info">
      <div class="offer-card__title">
        {{ title }}
      </div>
      <p v-if="descriptions" class="offer-card__description">{{ descriptions }}</p>
    </div>
    <UINewButton
      class="offer-card__button"
      :tag="'button'"
      :fill="button?.fill"
      :size="button?.size"
      @click.stop="openModal"
    >
      {{ button?.text }}
    </UINewButton>
    <CallbackFormModal :is-open="isModalOpen" :title-modal="title" @on-close="closeModal" />
  </div>
</template>

<style lang="scss">
.offer-card {
  padding: 16px;
  min-width: 205px;
  border-radius: 20px;
  border: 1px solid #2a2a2a;
  background: var(--Linear, linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%));
  display: flex;
  flex-direction: column;

  @include hover {
    background: rgba(42, 42, 42, 0.5);
    transition: $transition-1;

    .offer-card__picture {
      img {
        transform: scale(90%);
        transition: $transition-1;
      }
    }
  }

  &__picture {
    @include flex-center;
    height: 160px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__title {
    @include SubtitleSBold;
    @include cut-for-n-rows;
    color: var(--white);
    margin-top: 12px;
    margin-bottom: 8px;

    @include desktop {
      @include SubtitleMBold;
    }
  }

  &__description {
    @include BodyMRegular;
    margin-bottom: 16px;
    color: var(--black-black-50);
  }

  &__button {
    margin-top: auto;

    @include desktop {
      align-self: start;
    }
  }
}
</style>
