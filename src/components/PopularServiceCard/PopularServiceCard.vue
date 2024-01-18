<script setup lang="ts">
import type { PopularServiceCard } from '@/components/PopularServiceCard/PopularServiceCard.types';
import { appRoutes } from '~/appRoutes';

defineProps<PopularServiceCard>();

// const { isMobile } = useMediaSizes();

const [isModalOpen, openModal, closeModal] = useBooleanState();
</script>

<template>
  <NuxtLink
    :class="[
      'popular-service-card',
      {
        'popular-service-card--size-standard': size === 'standard',
        'popular-service-card--size-small': size === 'small',
      },
    ]"
    :to="appRoutes.services(service.slug)"
  >
    <NuxtPicture
      class="popular-service-card__picture"
      :src="service.image_icon ?? 'undefined'"
      format="webp,png,jpg"
      loading="lazy"
      :alt="service.title"
    />
    <div class="popular-service-card__content">
      <p class="popular-service-card__title">{{ service.title }}</p>
      <UINewButton
        v-if="size === 'standard'"
        class="popular-service-card__button"
        size="small"
        @click.stop.prevent="openModal"
      >
        Записаться
      </UINewButton>
    </div>
  </NuxtLink>
  <CallbackFormModal :is-open="isModalOpen" :title-modal="service.title" @on-close="closeModal" />
</template>

<style lang="scss">
.popular-service-card {
  display: flex;
  align-items: center;
  gap: 16px;
  border: 1px solid var(--black-black-90, #2a2a2a);
  transition: all 0.3s ease;
  border-radius: 20px;

  &--size-standard {
    background: var(--linear, linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%));
    height: 100%;
    padding: 12px;

    .popular-service-card__content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: 100%;
      padding: 12px 0;
    }
    .popular-service-card__title {
      flex: 1 1 auto;
    }

    @include hover {
      background: var(--black-black-90, #2a2a2a);

      .popular-service-card__picture {
        img {
          transform: scale(0.9);
        }
      }
    }
  }

  &--size-small {
    display: block;
    padding: 12px;
    height: 100%;
    background: var(--black-black-90);

    .popular-service-card__picture {
      margin: 0 auto;
      max-width: 110px;
      height: 80px;
    }

    .popular-service-card__title {
      text-align: center;
      @include BodySBold;
    }
  }

  &__picture {
    display: block;
    width: 120px;
    height: 120px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: all 0.3s ease;
    }
  }

  &__title {
    color: var(--white);
    @include SubtitleMBold;
  }

  &__button {
    margin-top: 4px;
  }
}
</style>
