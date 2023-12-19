<script setup lang="ts">
import Slider from '@vueform/slider';

const { isMoreThanTablet } = useMediaSizes();

const bonusSliderPercent = ref(62);
const howMachSpendCount = computed(() => bonusSliderPercent.value * 1000);
const bonusAmountCount = computed(() => Math.floor(howMachSpendCount.value * 0.1155));
</script>

<template>
  <section class="benefits-calculating">
    <div class="container">
      <div class="benefits-calculating__body">
        <div class="benefits-calculating__top">
          <h4 class="benefits-calculating__title">Рассчитайте свою выгоду</h4>
          <p class="benefits-calculating__subtitle">Сумма, которую бы Вы сэкономили благодаря бонусной программе</p>
        </div>
        <div class="benefits-calculating__middle middle-benefits-calculating">
          <div class="middle-benefits-calculating__top">
            <p v-if="isMoreThanTablet" class="middle-benefits-calculating__top-text">
              Сумма, которую вы тратите на обслуживание в год
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
          *бонусные баллы становятся доступны доступны через 14 дней после покупки и сохраняются втечение 6 месяцев.
          Бонусная программа не распространяется на приобретение шин и аккумуляторов, услуги тонирования, бронирования
          автомобиля и на малярно-кузовные работы. Условия бонусной программы могут меняться. Активация карты начинается
          с первой покупки.
        </p>
      </div>
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
  margin: 0 -10px;

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
