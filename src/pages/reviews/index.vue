<script setup lang="ts">
import { useReviewStore } from '~/store/reviews';

const { isMobile } = useMediaSizes();
const { reviewsState, reviewsEffects } = useReviewStore();

await useAsyncData('review-page', async () => {
  await Promise.all([reviewsEffects.fetchReviewPageInfo(), reviewsEffects.fetchReviewList()]);
});

const isNeedShowAll = ref(false);

const reviewList = computed(() => {
  if (reviewsState.value.reviews.length <= 6 || (reviewsState.value.reviews.length > 6 && !isNeedShowAll.value)) {
    return reviewsState.value.reviews.slice(0, 6);
  }

  return reviewsState.value.reviews;
});

const reviewsSeo = computed(() => {
  return reviewsState.value.reviewsPageInfo.seo;
});

useSeoMeta({
  title: reviewsSeo.value?.title,
  description: reviewsSeo.value?.description,
  ogTitle: reviewsSeo.value?.['og:title'],
  ogDescription: reviewsSeo.value?.['og:description'],
  ogType: reviewsSeo.value?.['og:type'] as any,
  twitterCard: reviewsSeo.value?.['twitter:card'] as any,
  twitterTitle: reviewsSeo.value?.['twitter:title'],
  twitterDescription: reviewsSeo.value?.['twitter:description'],
  robots: reviewsSeo.value?.robots,
  author: reviewsSeo.value?.author,
  keywords: reviewsSeo.value?.key_words,
});
</script>

<template>
  <div class="reviews-page">
    <UIBreadcrumb :items="[{ name: 'Отзывы', link: '' }]" />
    <div class="container">
      <h1 class="reviews-page__title">Отзывы</h1>
      <div class="reviews-page__list">
        <ReviewCard
          v-for="review in reviewList"
          :key="review.id"
          class="reviews-page__list-item"
          :item="review"
          :size="isMobile ? 'small' : 'standard'"
        />
      </div>
      <UINewButton
        v-if="reviewsState.reviews.length > 6 && !isNeedShowAll"
        class="reviews-page__more-button"
        @click.stop="isNeedShowAll = true"
      >
        Показать Еще
      </UINewButton>
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

  &__more-button {
    margin: auto;
    margin-top: 40px;
  }

  &__form {
    margin-top: 80px;
    margin-bottom: 80px;
  }
}
</style>
