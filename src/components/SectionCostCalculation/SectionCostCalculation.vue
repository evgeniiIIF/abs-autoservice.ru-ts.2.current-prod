<script setup lang="ts">
import { useCalculatorBlockStore } from '~/store/calculatorBlock';

const { isMobile } = useMediaSizes();

const { calculatorBlockState } = useCalculatorBlockStore();
</script>

<template>
  <div class="cost-calculation">
    <div class="cost-calculation__container">
      <div class="cost-calculation__ellipse"></div>
      <div class="cost-calculation__body">
        <div class="cost-calculation__top">
          <h2 class="cost-calculation__title">{{ calculatorBlockState.title_form }}</h2>
          <p v-if="!isMobile" class="cost-calculation__text">
            {{ calculatorBlockState.subtitle_form }}
          </p>
        </div>
        <div class="cost-calculation__quest">
          <AppQuest />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.cost-calculation {
  &__container {
    @include container;
    position: relative;
  }

  &__ellipse {
    position: absolute;
    width: 255px;
    height: 255px;
    left: -10px;
    top: 180px;
    background: #00a19c;
    opacity: 0.34;
    filter: blur(70px);
  }

  &__body {
    position: relative;
    overflow: hidden;
  }

  &__top {
    max-width: 688px;
  }

  &__title {
    color: var(--1, #fff);

    @include SubtitleLBold;

    @include desktop {
      @include TitleSBold;
    }
  }

  &__text {
    margin-top: 8px;
    color: var(--black-black-50, #898989);

    @include SubtitleSRegular;
  }
}

.quest {
  margin-top: 40px;
  background: var(--black-black-90, #2a2a2a);
  border-radius: 16px;
  overflow: hidden;

  @include media(650px) {
    position: relative;
  }

  @include media(880px) {
    display: flex;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    @include media(880px) {
      max-width: 232px;
      margin-bottom: 36px;
    }
  }

  &__text {
    color: var(--black-black-00, #fff);
    @include BodySRegular;
  }

  &__content {
    padding: 20px 20px 0;
    margin-bottom: 40px;

    @include media(650px) {
      padding-bottom: 20px;
      margin-bottom: 0;
    }

    @include media(880px) {
      flex: 1 1 auto;
      padding: 30px 0px 30px 40px;
      .question__title {
        margin-bottom: 24px;
      }
    }
  }

  &__current {
    margin-bottom: 50px;
  }

  &__image {
    padding-top: 60.6779661%;

    @include media(650px) {
      position: absolute;
      right: 0;
      bottom: 0;
      padding-top: 26.8333333%;
      width: 47%;
    }

    @include media(880px) {
      position: relative;
      padding-top: 0;
      flex: 0 0 49.1666667%;
      display: flex;
      min-height: 358px;

      img {
        top: auto;
        bottom: 0;
        height: auto;
      }
    }
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
    max-width: 265px;

    .button {
      height: 100%;
    }
    svg {
      width: 24px;
      height: 24px;
    }
  }

  &__button--back {
    .button {
      &__arrow {
        margin-right: 8px;
      }
    }
  }

  &__button--next {
    .button {
      &__arrow {
        margin-left: 8px;
      }
    }
  }
}

.steps-quest {
  display: flex;
  align-items: center;

  &__item {
    display: flex;
    align-items: center;
  }

  &__item--active {
    .steps-quest__step {
      border-top: 1px solid var(--green-green-80, #33b4b0);
      background: var(--green-primary, #00a19c);
      box-shadow: 0px 2px 10px 0px rgba(0, 161, 156, 0.7);
    }
    .steps-quest__line {
      border-top: 1px solid var(--green-green-80, #33b4b0);
      background: var(--green-primary, #00a19c);
      box-shadow: 0px 2px 10px 0px rgba(0, 161, 156, 0.7);
    }
  }
  &__line {
    display: block;
    height: 4px;
    width: 20px;
    border-top: 1px solid var(--black-black-70, #4d4d4d);
    background: var(--black-black-80, #414141);
  }
  &__step {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    border-radius: 7px;
    border-top: 1px solid var(--black-black-70, #4d4d4d);
    background: var(--black-black-80, #414141);
    @include BodyXSRegular;
    color: var(--black-black-00, #fff);
  }
}

.fade-in-enter-from {
  transform: translate(20px);
  opacity: 0;
}

.fade-in-enter-to {
  transition: all 0.5s ease 0s;
}

.quest__blur {
  position: absolute;
  width: 227px;
  height: 227px;
  top: -65px;
  right: -235px;
  z-index: -1;
  background: #00a19c;
  filter: blur(150px);

  @include media(650px) {
    right: 0;
    z-index: 0;
  }
}
</style>
