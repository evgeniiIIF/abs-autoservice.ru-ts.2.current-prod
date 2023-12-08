<script lang="ts" setup>
const { isMobile } = useMediaSizes();
</script>

<template>
  <section class="get-card">
    <div class="container">
      <div class="get-card__body">
        <div class="get-card__content">
          <h3 class="get-card__title">Оплачивайте бонусами 30% от общей суммы чека или заказ-наряда</h3>
          <p v-if="!isMobile" class="get-card__text--green">Выгода с ABS-AUTO – это просто!</p>
          <p v-if="!isMobile" class="get-card__text">
            При обслуживании от 3000 рублей Вы получаете персональную клубную карту совершенно бесплатно. Далее, покупая
            автозапчасти или проходя обслуживание в нашем автотехцентре, мы возвращаем 10% от каждого чека на Вашу
            бонусную карту в виде баллов (1 балл = 1 рубль). Бонусные баллы начисляются через 14 дней после покупки и
            сохраняются в течение 6 месяцев.
          </p>
          <div v-if="isMobile" class="get-card__image get-card__image--mobile">
            <NuxtPicture src="images/get-card.png" format="webp" loading="lazy" />
          </div>
          <div class="get-card__button">
            <UIButton>{{ isMobile ? 'Получить карту бесплатно' : 'Получить карту' }}</UIButton>
          </div>
        </div>
        <div v-if="!isMobile" class="get-card__image">
          <NuxtPicture src="images/get-card.png" format="webp" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.get-card {
  margin-bottom: 10px;

  @include tablet {
    margin-bottom: 40px;
  }
  @include desktop {
    margin-bottom: 80px;
  }
  &__body {
    display: flex;
    padding: 30px 20px;
    border-radius: 20px;
    background: linear-gradient(180deg, #2a2a2a 0%, rgba(17, 18, 18, 0) 23%);
    overflow: hidden;
    @include desktop {
      padding: 60px 27px 0 60px;
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
    color: var(--1, #fff);

    @include desktop {
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

  &__button {
    .button {
      width: 100%;

      @include tablet {
        width: auto;
      }
    }
  }

  &__button-text {
  }

  &__button-text--mobile {
  }
}
</style>
