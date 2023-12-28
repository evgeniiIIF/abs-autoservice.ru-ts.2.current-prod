<script setup lang="ts">
import { useHomeStore } from '~/store/home';

const { homeState } = useHomeStore();

const aboutContent = computed(() => homeState.value.about);
const descriptionIsOpen = ref(false);
const descriptionRef = ref<HTMLDivElement | null>(null);
const descriptionHasFixedHeight = ref(false);
</script>

<template>
  <section class="about-company">
    <div class="about-company__container">
      <div class="about-company__ellipse"></div>
      <div class="about-company__content">
        <h1 class="about-company__title">{{ aboutContent.title }}</h1>
        <p class="about-company__subtitle">{{ aboutContent.subtitle }}</p>
        <ul class="about-company__review-services">
          <li class="about-company__review-service">
            <a href="https://yandex.ru/profile/1080339034" target="_blank" rel="noopener noreferrer">
              <div class="about-company__review-service-icon">
                <NuxtImg src="/images/about-services/icon-yandex.svg" loading="lazy" alt="Яндекс" />
              </div>
              <div class="about-company__review-service-rating">
                <IcStarRating v-for="star in 5" :key="star" :font-controlled="false" :filled="true" />
              </div>
            </a>
          </li>
          <li class="about-company__review-service">
            <a
              href="https://2gis.ru/stavropol/firm/8022565117231510/tab/reviews"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="about-company__review-service-icon">
                <NuxtImg src="/images/about-services/icon-2gis.svg" loading="lazy" alt="Яндекс" />
              </div>
              <div class="about-company__review-service-rating">
                <IcStarRating v-for="star in 5" :key="star" :font-controlled="false" :filled="true" />
              </div>
            </a>
          </li>
        </ul>

        <div
          ref="descriptionRef"
          class="about-company__description"
          :class="{
            'about-company__description--fixed-height': descriptionHasFixedHeight,
            'about-company__description--opened': descriptionIsOpen,
          }"
          v-html="aboutContent.content"
        ></div>
        <button
          v-if="descriptionHasFixedHeight"
          class="about-company__button"
          :class="{ 'about-company__button--close': descriptionIsOpen }"
          type="button"
          @click="descriptionIsOpen = !descriptionIsOpen"
        >
          <span>{{ descriptionIsOpen ? 'Свернуть' : 'Читать далее' }}</span>
          <IcArrowDown :font-controlled="false" :filled="true" />
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about-company {
  padding-bottom: 30px;

  @include desktop {
    padding-bottom: 80px;
  }

  &__container {
    @include container;
    position: relative;
  }

  &__ellipse {
    display: none;
    @include desktop {
      display: initial;
      position: absolute;
      width: 255px;
      height: 255px;
      left: -88px;
      top: 124px;
      background: #00a19c;
      opacity: 0.3;
      filter: blur(70px);
    }
  }

  &__content {
    display: grid;
    grid-template-columns: auto;
    grid-template-areas:
      'title'
      'subtitle'
      'description'
      'desc-button'
      'reviews';

    @include desktop {
      justify-content: space-between;
      column-gap: 20px;
      grid-template-areas:
        'title description'
        'subtitle description'
        'desc-button description'
        'reviews description';
    }
  }

  &__title {
    grid-area: title;
    margin-bottom: 10px;
    @include SubtitleXLBold;
    color: var(--white, #fff);

    @include desktop {
      margin-bottom: 8px;
      @include TitleSBold;
    }
  }

  &__subtitle {
    grid-area: subtitle;
    margin-bottom: 20px;
    @include SubtitleSBold;
    color: var(--green-primary, #00a19c);

    @include desktop {
      @include TitleXSBold;
    }
  }

  &__review {
    &-services {
      grid-area: reviews;
      display: flex;
      gap: 20px;
    }

    &-service {
      a {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;
        gap: 16px;
        background: var(--linear, linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%));
        border: 1px solid var(--black-black-90, #2a2a2a);
        border-radius: 20px;
        @include desktop {
          flex-direction: inherit;
          justify-content: space-between;
        }
      }

      &-rating {
        display: flex;
        svg {
          width: 12px;
          height: 12px;
          @include desktop {
            width: 24px;
            height: 24px;
          }
        }
      }
    }

    &-service-icon {
      width: 89px;
      img {
        width: 100%;
      }
    }
  }

  &__description {
    grid-area: description;
    margin-bottom: 28px;
    @include BodyMRegular;
    color: var(--black-black-50, #898989);

    @include desktop {
      max-height: inherit;
      max-width: 590px;
      margin-bottom: 0;
      @include BodyLRegular;
    }

    &--fixed-height {
      max-height: 88px;
      overflow: hidden;
    }

    &--opened {
      max-height: inherit;
    }
  }

  &__button {
    grid-area: desc-button;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 28px;
    color: var(--white, #fff);
    border: none;
    background-color: transparent;

    @include desktop {
      display: none;
    }

    svg {
      transition: all 0.3s ease;
    }

    &--close {
      svg {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
