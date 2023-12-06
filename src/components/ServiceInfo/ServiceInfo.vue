<script lang="ts" setup>
import vk from '@/assets/icons/vk.svg';
import { useMediaSizes } from '@/composables/useMediaSizes';
import { data } from './ServiceInfo.constant';

const { isDesktop } = useMediaSizes();

const {
  title,
  firstParagraph,
  lastParagraph,
  list,
  price,
  priceFootnote,
  priceButtonText,
  questionTitle,
  questionFootnote,
} = data;
</script>

<template>
  <section class="service-info">
    <div class="container">
      <h1 v-if="!isDesktop" class="service-info__title">{{ title }}</h1>
      <div class="service-info__wrapper">
        <div class="service-info__info">
          <h1 v-if="isDesktop" class="service-info__title">{{ title }}</h1>
          <div class="service-info__description">
            <p class="service-info__description-text">{{ firstParagraph }}</p>
            <ul class="service-info__description-list">
              <li v-for="(item, i) in list" :key="item" class="service-info__description-list-item">
                <span class="service-info__description-list-item-index">{{ i + 1 }}.</span>
                <span class="service-info__description-list-item-text">{{ item }}</span>
              </li>
            </ul>
            <p class="service-info__description-text">{{ lastParagraph }}</p>
          </div>
        </div>
        <div class="service-info__aside">
          <div class="service-info__price">
            <div class="service-info__price-info">
              <h2 class="service-info__price-count">{{ price }} ₽</h2>
              <p class="service-info__price-footnote">
                {{ priceFootnote }}
              </p>
            </div>
            <UIButton :has-full-width="!isDesktop">{{ priceButtonText }}</UIButton>
          </div>
          <div class="service-info__questions">
            <h2 class="service-info__questions-title">{{ questionTitle }}</h2>
            <p class="service-info__questions-footnote">{{ questionFootnote }}</p>
            <ul class="service-info__questions-socials">
              <li v-for="social in 2" :key="social" class="service-info__questions-social">
                <AppSocial :img="vk" link="#" with-border />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.service-info {
  position: relative;
  padding: 20px 0;

  &__title {
    margin-bottom: 20px;
    @include TitleXSBold;
    color: var(--white, #fff);

    @include desktop {
      @include TitleMBold;
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;

    @include desktop {
      flex-direction: inherit;
      gap: 20px;
    }
  }

  &__info {
    @include desktop {
      width: 100%;
      max-width: 796px;
      padding: 40px 40px 60px 40px;
      border: 1px solid var(--black-black-90, #2a2a2a);
      background: var(--linear, linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%));
      backdrop-filter: blur(80px);
      border-radius: 20px;
    }
  }

  &__description {
    @include BodyMRegular;
    color: var(--black-black-50, #898989);

    @include desktop {
      @include BodyXLRegular;
    }

    &-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 20px 0;

      &-item {
        display: flex;
        gap: 20px;

        &-index {
          @include BodyXLBold;
          color: var(--green-primary, #00a19c);
        }
      }
    }
  }

  &__aside {
    order: -1;

    @include desktop {
      position: sticky;
      top: 109px;
      height: 100%;
      order: 0;
    }
  }

  &__price {
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid var(--black-black-90, #2a2a2a);
    background: var(--linear, linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%));
    backdrop-filter: blur(80px);
    border-radius: 20px;

    &-info {
      margin-bottom: 20px;

      @include desktop {
        margin-bottom: 56px;
      }
    }

    &-count {
      @include TitleXSRegular;
      color: var(--white, #fff);

      @include desktop {
        @include TitleMRegular;
      }
    }

    &-footnote {
      @include BodyMRegular;
      color: var(--black-black-50, #898989);
    }
  }

  &__questions {
    padding: 20px;
    background: var(--black-black-90, #2a2a2a);
    border-radius: 20px;

    &-title {
      margin-bottom: 8px;

      @include SubtitleLBold;
      color: var(--white, #fff);
    }

    &-footnote {
      margin-bottom: 20px;

      @include SubtitleXSRegular;
      color: var(--black-black-50, #898989);
    }

    &-socials {
      display: flex;
      gap: 20px;
    }
  }
}
</style>
