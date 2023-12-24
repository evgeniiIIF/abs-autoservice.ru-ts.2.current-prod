<script setup lang="ts">
import { useHomeStore } from '~/store/home';

const { isMobile } = useMediaSizes();
const { homeState } = useHomeStore();
</script>

<template>
  <div class="reviews-page">
    <UIBreadcrumb :items="[{ name: 'Отзывы', link: '' }]" />
    <div class="container">
      <h1 class="reviews-page__title">Отзывы</h1>
      <div class="reviews-page__list">
        <ReviewCard
          v-for="review in homeState.review_items"
          :key="review.id"
          class="reviews-page__list-item"
          :item="review"
          :size="isMobile ? 'small' : 'standard'"
        />
      </div>
      <CallbackForm class="reviews-page__form" />
    </div>
  </div>
</template>

<style lang="scss">
.reviews-page {
  &__title {
    @include TitleSBold;
    color: var(--white);
  }

  &__list {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;

    @include desktop {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__list-item {
    width: 100%;
  }

  &__form {
    margin-top: 40px;
    margin-bottom: 80px;
  }
}
</style>
