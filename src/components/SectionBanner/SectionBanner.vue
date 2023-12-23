<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee';
import { useHomeStore } from '~/store/home';

const { isMobile } = useMediaSizes();

const { homeState } = useHomeStore();
const { scrollTo } = useScrollTo();

const [isOpenModal, openModal, closeModal] = useBooleanState();
const [isHovered, hoverElement, leaveElement] = useBooleanState();

const welcomeState = computed(() => homeState.value.welcome?.[0]);

const scrollToAnchor = () => {
  scrollTo('#section-cost-calculation');
};
</script>

<template>
  <div class="banner">
    <div class="container">
      <div class="banner__body">
        <div class="banner__image ibg" :style="{ filter: isHovered ? 'grayscale(0%)' : 'grayscale(80%)' }">
          <NuxtPicture format="webp" :src="homeState.welcome_img ?? 'undefined'" />
        </div>
        <div class="banner__content">
          <h1 class="banner__title">{{ welcomeState.title }}</h1>
          <div class="banner__tickers tickers">
            <ClientOnly v-if="isMobile">
              <Vue3Marquee :duration="8">
                <div v-for="tickerItem in welcomeState.advantage_tags" :key="tickerItem" class="tickers__column">
                  <div class="tickers__item">
                    {{ tickerItem }}
                  </div>
                </div>
              </Vue3Marquee>
            </ClientOnly>
            <template v-else>
              <div v-for="tickerItem in welcomeState.advantage_tags" :key="tickerItem" class="tickers__column">
                <div class="tickers__item">
                  {{ tickerItem }}
                </div>
              </div>
            </template>
          </div>

          <div class="banner__buttons">
            <!-- eslint-disable-next-line vuejs-accessibility/mouse-events-have-key-events -->
            <div
              class="banner__button banner__button--bg"
              @mouseover="hoverElement"
              @mouseleave="leaveElement"
              
            >
              <UIButton @click="scrollToAnchor">{{ welcomeState.btn[0].title }}</UIButton>
            </div>
            <div class="banner__button banner__button--bd">
              <UIButton :withoutFill="true" @click="openModal">{{ welcomeState.btn[1].title }}</UIButton>
              <CallbackFormModal :is-open="isOpenModal" @on-close="closeModal" />
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

  @include desktop {
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

    @include desktop {
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

    @include desktop {
      padding: 80px 0px 144px 80px;
    }
  }

  &__title {
    max-width: 290px;
    margin-bottom: 10px;
    color: var(--1, #fff);

    @include TitleXSBold;

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
    // margin-left: -20px;
    // margin-right: -20px;
    @include desktop {
      margin-bottom: 48px;
    }
  }

  &__buttons {
    color: var(--black-black-00, #fff);
    @include buttonText;

    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  /* &__button {
    .button {
      width: 100%;
    }
  } */

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
