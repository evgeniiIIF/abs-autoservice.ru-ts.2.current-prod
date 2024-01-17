<script setup lang="ts">
import Slider from '@vueform/slider';
import { useBonusStore } from '~/store/bonus';

const { isDesktop } = useMediaSizes();
const { bonusState } = useBonusStore();

const convertPercentInValue = (min: number, max: number, percent: number): number => {
  return ((max - min) / 100) * percent + min;
};

const bonusSliderPercent = ref(62);

const howMachSpendCount = computed(() =>
  convertPercentInValue(
    0,
    Number(bonusState.value.bonusPageInfo?.calculator.size_up) ?? 100000,
    bonusSliderPercent.value,
  ).toFixed(0),
);
const bonusAmountCount = computed(
  () => (Number(howMachSpendCount.value) / 100) * (Number(bonusState.value.bonusPageInfo?.calculator.discount) || 0),
);
</script>

<template>
  <section class="benefits-calculating">
    <div class="benefits-calculating__body">
      <div class="benefits-calculating__top">
        <h4 class="benefits-calculating__title">{{ bonusState.bonusPageInfo?.calculator.title }}</h4>
        <p class="benefits-calculating__subtitle">{{ bonusState.bonusPageInfo?.calculator.subtitle }}</p>
      </div>
      <div class="benefits-calculating__middle middle-benefits-calculating">
        <div class="middle-benefits-calculating__top">
          <p v-if="isDesktop" class="middle-benefits-calculating__top-text">
            {{ bonusState.bonusPageInfo?.calculator['subtitle-2'] }}
          </p>
          <p class="middle-benefits-calculating__top-sum">
            {{ `${howMachSpendCount}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') }} ₽
          </p>
        </div>
        <div class="middle-benefits-calculating__slider">
          <ClientOnly>
            <Slider v-model="bonusSliderPercent" :lazy="false" :tooltips="false" orientation="horizontal" />
          </ClientOnly>
        </div>
        <div class="middle-benefits-calculating__bottom">
          <p class="middle-benefits-calculating__bottom-text">Ваша выгода</p>
          <p class="middle-benefits-calculating__bottom-sum">
            {{ `${bonusAmountCount}`.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') }} ₽
          </p>
        </div>
      </div>
      <p class="benefits-calculating__text">
        {{ bonusState.bonusPageInfo?.calculator.subtext }}
      </p>
    </div>
  </section>
</template>
<style src="@vueform/slider/themes/default.css"></style>

<style lang="scss">
:root {
  --slider-connect-bg: var(--2, #00a19c);
  --slider-height: 10px;
  --slider-handle-width: 31px;
  --slider-handle-height: 31px;
}

.benefits-calculating {
  &__body {
    padding: 30px 20px;
    border-radius: 20px;
    border-top: 1px solid var(--Black-Black-80, #414141);
    background: var(--Black-Black-90, #2a2a2a);

    @include desktop {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 40px 40px 30px;
    }
  }

  &__top {
    margin-bottom: 10px;

    @include desktop {
      flex: 0 1 40%;
      margin-right: 50px;
    }
  }

  &__title {
    margin-bottom: 10px;
    color: var(--1, #fff);
    @include SubtitleLBold;

    @include tablet {
      color: var(--Black-Black-00, #fff);
      @include TitleSBold;
    }
  }

  &__subtitle {
    color: var(--Black-Black-50, #898989);
    @include BodyMRegular;

    @include tablet {
      color: var(--Black-Black-50, #898989);
      @include BodyLRegular;
    }
  }

  &__middle {
    flex: 0 1 47.5%;
  }

  &__text {
    margin: 0 -10px;
    color: #b3baba;
    @include BodyXSRegular;
    @include desktop {
      flex: 0 100%;
      @include BodySRegular;
    }
  }
}

.middle-benefits-calculating {
  &__top {
    @include desktop {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
  }

  &__top-text {
    flex: 0 0 193px;
    color: var(--Black-Black-50, #898989);
    @include BodyMRegular;
  }

  &__top-sum {
    color: var(--Black-Black-00, #fff);
    @include TitleXSRegular;
    margin-bottom: 10px;
    @include desktop {
      margin-bottom: 0;
      display: flex;
      align-items: center;
    }
  }

  &__slider {
    margin-bottom: 30px;
  }

  &__bottom {
    margin: 0 -10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 20px;
    background: var(--Black-Black-80, #414141);
    @include desktop {
      margin: 0;
      margin-bottom: 40px;
    }
  }

  &__bottom-text {
    color: var(--Black-Black-40, #999);
    @include SubtitleMRegular;
    @include desktop {
      @include TitleXSRegular;
    }
  }

  &__bottom-sum {
    color: var(--Black-Black-00, #fff);
    @include TitleXSRegular;
    @include desktop {
      @include TitleSRegular;
    }
  }
}
</style>
