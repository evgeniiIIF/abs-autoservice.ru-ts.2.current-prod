<script setup lang="ts">
import { useBonusStore } from '~/store/bonus';

const { isMobile, isDesktop } = useMediaSizes();

const { bonusState } = useBonusStore();

const [isOpenModal, openModal, closeModal] = useBooleanState();
const [isAnimationActiveCards, goAnimation, stopAnimation] = useBooleanState();
</script>

<template>
  <section class="bonus-program">
    <h1 class="bonus-program__title">{{ bonusState.bonusPageInfo?.title }}</h1>
    <div v-if="isMobile" class="bonus-program__image ibg">
      <NuxtPicture src="images/bonus-program-card.png" format="webp" />
      <div class="bonus-program__image-ellipse"></div>
    </div>
    <div class="bonus-program__body">
      <div class="bonus-program__content">
        <div class="bonus-program__items">
          <div v-for="item in bonusState.bonusPageInfo?.bonus_program" :key="item.title" class="bonus-program__item">
            <p class="bonus-program__item-title">{{ item.title }}</p>
            <p class="bonus-program__item-text">{{ item.description }}</p>
          </div>
        </div>
        <!-- eslint-disable-next-line vuejs-accessibility/mouse-events-have-key-events -->
        <UINewButton
          class="bonus-program__button"
          :is-full-width="isMobile"
          @click="openModal()"
          @mouseover="goAnimation"
          @mouseleave="stopAnimation"
        >
          Получить карту
        </UINewButton>
        <CallbackFormModal :is-open="isOpenModal" title-modal="Получить карту" @on-close="closeModal" />
      </div>

      <!-- eslint-disable-next-line vuejs-accessibility/mouse-events-have-key-events -->
      <div v-if="isDesktop" class="bonus-program__cards" @mouseover="goAnimation" @mouseleave="stopAnimation">
        <BonusAnimationCards :isAnimationActive="isAnimationActiveCards" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.bonus-program {
  &__body {
    display: flex;
  }
  &__content {
    @include desktop {
      margin-right: 70px;
    }
  }

  &__cards {
    flex: 1 1 auto;
  }

  &__title {
    margin-bottom: 20px;
    color: var(--white, #fff);
    @include SubtitleLBold;

    @include desktop {
      @include TitleSBold;
    }
  }

  &__image {
    margin-bottom: 20px;
    padding-top: 62.9496403%;

    img {
      object-position: top;
      z-index: 1;
    }
  }

  &__image-ellipse {
    position: absolute;
    left: 35%;
    top: 35%;
    width: 65%;
    height: 65%;
    background: var(--Green-Primary, #00a19c);
    opacity: 0.34;
    transform: translate(-50%, -50%);
    filter: blur(70px);
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;

    @include desktop {
      max-width: 640px;
      margin: -10px;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0px;
      margin-bottom: 40px;
    }
  }

  &__item {
    display: flex;
    padding: 10px 19px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    border-radius: 20px;
    border: 1px solid #2a2a2a;
    background: var(--Linear, linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%));

    @include desktop {
      margin: 10px;
      flex: 0 0 calc(50% - 20px);
    }
  }

  &__item-title {
    color: var(--Black-Black-00, #fff);
    @include SubtitleMRegular;
  }

  &__item-text {
    color: var(--Black-Black-50, #898989);
    @include BodyMRegular;
  }
}
</style>
