<script setup lang="ts">
import { useCallBackFormStore } from '~/store/callBackForm';

const { callBackFormState, callBackFormActions } = useCallBackFormStore();

const openModal = (title: string) => {
  callBackFormActions.setTitleModal(title);
  useOpenModal();
};

const [isOpenModal, useOpenModal, closeModal] = useBooleanState();

const { isMobile } = useMediaSizes();

const bonusProgramItems = [
  { title: 'от 3000 рублей', text: 'сумма любой покупки, после которой выдается клубная карта' },
  { title: '1 балл = 1 рубль', text: 'оплачивайте баллами автозапчасти и услуги автотехцентра*' },
  {
    title: '10% кэшбека',
    text: 'с любой покупки возвращается на карту баллами',
  },
  { title: 'до 30% выгоды', text: 'оплатите до 30% от суммы чека следующей покупки бонусными баллами' },
];
</script>

<template>
  <section class="bonus-program">
    <div class="container">
      <div class="bonus-program__body">
        <h1 class="bonus-program__title">Бонусная программа</h1>
        <div v-if="isMobile" class="bonus-program__image ibg">
          <NuxtPicture src="images/bonus-program-card.png" format="webp" />
          <div class="bonus-program__image-ellipse"></div>
        </div>
        <div class="bonus-program__items">
          <div v-for="item in bonusProgramItems" :key="item.title" class="bonus-program__item item-bonus-program">
            <p class="item-bonus-program__title">{{ item.title }}</p>
            <p class="item-bonus-program__text">{{ item.text }}</p>
          </div>
        </div>
        <div class="bonus-program__button">
          <UIButton @click="openModal('Получить карту')">Получить карту</UIButton>

          <UIModal position="center" :is-open="isOpenModal" @onClose="closeModal">
            <CallbackForm :title-modal="callBackFormState.titleModal" @onClose="closeModal" />
          </UIModal>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.bonus-program {
  &__body {
  }

  &__title {
    margin-bottom: 20px;
    color: var(--1, #fff);
    @include SubtitleLBold;

    @include tablet {
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

    @include tablet {
      max-width: 640px;
      margin: -10px;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0px;
      margin-bottom: 40px;
    }
  }

  &__item {
    @include tablet {
      margin: 10px;
      flex: 0 0 calc(50% - 20px);
    }
  }

  &__button {
    .button {
      width: 100%;
      @include tablet {
        width: auto;
      }
    }
  }
}
.container {
}
.item-bonus-program {
  display: flex;
  padding: 10px 19px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  border-radius: 20px;
  border: 1px solid #2a2a2a;
  border-bottom: none;
  background: var(--Linear, linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%));
  &__title {
    color: var(--Black-Black-00, #fff);
    @include SubtitleMRegular;
  }

  &__text {
    color: var(--Black-Black-50, #898989);
    @include BodyMRegular;
  }
}
</style>
