<script lang="ts" setup>
import { useBonusStore } from '~/store/bonus';

const { isMobile } = useMediaSizes();

const { bonusState } = useBonusStore();

const [isModalOpen, openModal, closeModal] = useBooleanState();
</script>

<template>
  <section class="get-card">
    <div class="container">
      <div class="get-card__body">
        <div class="get-card__content">
          <p class="get-card__title">{{ bonusState.bonusCard?.title }}</p>
          <p v-if="!isMobile" class="get-card__text--green">{{ bonusState.bonusCard?.subtitle }}</p>
          <p v-if="!isMobile" class="get-card__text">{{ bonusState.bonusCard?.text }}</p>
          <div v-if="isMobile" class="get-card__image get-card__image--mobile">
            <NuxtPicture src="images/get-card.png" format="webp" loading="lazy" :alt="bonusState.bonusCard?.title" />
          </div>
          <div class="get-card__button">
            <UINewButton :is-full-width="isMobile" @click.stop="openModal">{{
              isMobile ? 'Получить карту бесплатно' : bonusState.bonusCard?.btn_title
            }}</UINewButton>
          </div>
        </div>
        <div v-if="!isMobile" class="get-card__image">
          <NuxtPicture
            :src="bonusState.bonusCard?.image?.image_path ?? 'undefined'"
            format="webp"
            loading="lazy"
            :alt="bonusState.bonusCard?.image?.image_alt"
            :title="bonusState.bonusCard?.image?.image_title"
          />
        </div>
      </div>
    </div>
    <CallbackFormModal :is-open="isModalOpen" :title-modal="bonusState.bonusCard?.btn_title" @on-close="closeModal" />
  </section>
</template>

<style lang="scss">
.get-card {
  &__body {
    display: flex;
    padding: 30px 20px;
    border-radius: 20px;
    background: linear-gradient(180deg, #2a2a2a 0%, rgba(17, 18, 18, 0) 23%);
    overflow: hidden;
    @include desktop {
      padding: 40px 27px 0 40px;
    }
  }

  &__content {
    flex: 1 1 auto;
    @include tablet {
      margin-right: 20px;
    }
    @include desktop {
      padding-bottom: 24px;
      margin-right: 36px;
    }
  }

  &__image {
    position: relative;
    align-self: center;
    flex: 0 0 40.6666667%;

    img {
      position: relative;
      z-index: 1;
      width: 100%;
    }

    &::after {
      content: '';
      position: absolute;
      left: 23%;
      top: 15%;
      display: block;
      width: 279px;
      height: 279px;
      background: #00a19c;
      opacity: 0.4;
      filter: blur(70px);
    }

    &--mobile {
      margin: 0 -20px 20px -20px;
      @include media(550px) {
        margin: 0 0 20px 0;
      }
      &:after {
        height: 159.83px;
        width: 160.08px;
      }
    }
  }

  &__title {
    max-width: 460px;
    margin-bottom: 20px;
    @include SubtitleLBold;
    color: var(--white, #fff);

    @include desktop {
      max-width: none;
      @include TitleSBold;
      color: var(--black-black-00, #fff);
    }
  }

  &__text--green {
    margin-bottom: 8px;
    @include SubtitleMBold;
    color: var(--green-primary, #00a19c);
  }

  &__text {
    margin-bottom: 38px;
    @include SubtitleSRegular;
    color: var(--black-black-50, #898989);
  }
}
</style>
