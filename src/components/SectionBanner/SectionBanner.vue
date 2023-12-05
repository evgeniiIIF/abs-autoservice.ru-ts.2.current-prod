<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee';

const { isMobile } = useMediaSizes();
const [isHovered, hoverElement, leaveElement] = useBooleanState();

const TICKER_ITEMS = ['Любая сложность', 'Честные цены', 'Гарантия на все виды работ'];
</script>

<template>
  <div class="banner">
    <div class="container">
      <div class="banner__body">
        <div class="banner__image ibg" :style="{ filter: isHovered ? 'grayscale(0%)' : 'grayscale(80%)' }">
          <NuxtPicture format="webp" src="images/banner.jpg" />
        </div>
        <div class="banner__content">
          <h1 class="banner__title">Обслуживание и ремонт вашего автомобиля в ABS-AUTO.</h1>
          <div class="banner__tickers tickers">
            <ClientOnly v-if="isMobile">
              <Vue3Marquee :duration="8">
                <div v-for="tickerItem in TICKER_ITEMS" :key="tickerItem" class="tickers__column">
                  <div class="tickers__item">
                    {{ tickerItem }}
                  </div>
                </div>
              </Vue3Marquee>
            </ClientOnly>
            <template v-else>
              <div v-for="tickerItem in TICKER_ITEMS" :key="tickerItem" class="tickers__column">
                <div class="tickers__item">
                  {{ tickerItem }}
                </div>
              </div>
            </template>
          </div>

          <div class="banner__buttons">
            <!-- eslint-disable-next-line vuejs-accessibility/mouse-events-have-key-events -->
            <div class="banner__button banner__button--bg" @mouseover="hoverElement" @mouseleave="leaveElement">
              <UIButton>Расситать стоимость</UIButton>
            </div>
            <div class="banner__button banner__button--bd">
              <UIButton>Записаться на сервис</UIButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  background: var(--black-primary-black, #111212);
  padding: 15px 0 60px;
  @include tablet {
    padding: 24px 0 40px;
  }
  &__body {
    position: relative;
  }

  &__image {
    position: relative;
    margin-bottom: 10px;
    padding-top: 40.1993355%;
    border-radius: 20px;
    overflow: hidden;

    @include tablet {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      margin-bottom: 0;
      padding-top: 0;
      border-radius: 40px;
    }
  }

  &__content {
    position: relative;
    z-index: 2;
    @include tablet {
      padding: 80px 0px 144px 80px;
    }
  }

  &__title {
    max-width: 290px;
    margin-bottom: 10px;
    @include TitleXSBold;
    color: var(--1, #fff);

    @include media(385px) {
      max-width: 500px;
    }

    @include tablet {
      @include TitleMBold;
      max-width: 689px;
    }
  }
  &__tickers {
    margin-bottom: 20px;
    margin-left: -20px;
    margin-right: -20px;
    @include tablet {
      margin-bottom: 48px;
    }
  }
  &__buttons {
    color: var(--black-black-00, #fff);
    @include mb(20px);
    @include buttonText;
    @include tablet {
      @include mb(0px);
      @include mr(20px);
      display: flex;
    }
  }
  &__button {
    .button {
      width: 100%;
    }
  }
  &__button--bg {
    @include hover {
      .banner__image {
        filter: grayscale(0%);
      }
    }
  }
  &__button--bd {
    .button {
      background: transparent;
      border-color: var(--green-green-80, #33b4b0);
    }
  }

  .vue3-marquee > .marquee {
    min-width: auto !important;
  }
}
.tickers {
  overflow: hidden;
  position: relative;
  display: flex;

  &__column {
    padding: 0 5px;
  }

  &__item {
    flex: 0 0 auto;
    white-space: nowrap;
    padding: 8px 16px;
    border-radius: 10px;
    border: 0px solid var(--black-black-80, #414141);
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(10px);
    @include SubtitleSRegular;
    color: var(--black-black-10, #e5e5e5);
  }
}

@keyframes tickers {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
