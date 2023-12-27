<script setup lang="ts">
import { IcArrowRight, IcArrowUpRight } from '#components';
import type { ReviewCardProps } from './ReviewCard.types';

withDefaults(defineProps<ReviewCardProps>(), {
  size: 'standard',
});
</script>

<template>
  <div :class="['review-card', { 'review-card--size-standard': size === 'standard' }]">
    <div class="review-card__aside">
      <div class="review-card__review-avatar">
        <NuxtPicture :src="item?.avatar ?? 'undefined'" loading="lazy" alt="Аватар клиента" />
      </div>
      <div v-if="size === 'small'" class="review-card__review-app">
        <div class="review-card__review-rating">
          <AppRating :rating="Number(item?.rating)" />
        </div>
        <div class="review-card__review-app-image">
          <NuxtPicture
            :src="item.review_service[0]?.icon ?? 'undefined'"
            loading="lazy"
            :alt="item.review_service[0].name"
            :title="item.review_service[0].name"
          />
        </div>
      </div>
    </div>
    <div class="review-card__content">
      <div class="review-card__content-top">
        <h3 class="review-card__review-name">{{ item?.name }}</h3>
        <div v-if="size === 'standard'" class="review-card__review-rating">
          <IcStarRating v-for="star in Number(item?.rating)" :key="star" :font-controlled="false" :filled="true" />
        </div>
      </div>
      <div class="review-card__review-text" v-html="item?.content"></div>
      <div class="review-card__content-bottom">
        <div class="review-card__review-button">
          <UINewButton
            tag="a"
            target="_blank"
            :link="item.link"
            :icon="{ component: size === 'small' ? IcArrowRight : IcArrowUpRight, slot: 'right' }"
            :has-full-width="size === 'small'"
            color="dark"
          >
            <span>Читать весь отзыв</span>
          </UINewButton>
        </div>
        <div v-if="size === 'standard'" class="review-card__review-app-image">
          <NuxtPicture
            :src="item.review_service[0]?.icon ?? 'undefined'"
            :alt="item.review_service[0].name"
            :title="item.review_service[0].name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.review-card {
  width: 240px;
  padding: 16px;
  border: 1px solid var(--black-black-90);
  background: var(--linear, linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%));
  border-radius: 20px;

  &--size-standard {
    width: 100%;
    display: flex;
    gap: 20px;
  }

  &__aside {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  &__review {
    &-avatar {
      picture {
        display: flex;
      }

      img {
        border-radius: 20px;
        width: 72px;
        height: 72px;
      }
    }

    &-app {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;

      &-image {
        max-width: 80px;
        padding: 8px 16px;
        background-color: var(--black-black-04, #f6f6f6);
        border-radius: 10px;

        picture {
          display: flex;
        }

        img {
          width: 50px;
          height: 16px;
        }
      }
    }

    &-rating {
      margin-top: 7px;
    }

    &-name {
      margin-bottom: 8px;
      @include SubtitleXSMedium;
      color: var(--white, #fff);
    }

    &-text {
      height: 100px;
      margin-bottom: 10px;
      overflow: hidden;
      text-overflow: ellipsis;

      @include BodySRegular;
      color: var(--black-black-50, #898989);
    }
  }

  &__content {
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    &-bottom {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
