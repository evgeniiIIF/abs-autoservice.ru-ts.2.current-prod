<script setup lang="ts">
import { appRoutes } from '~/appRoutes';
import { useErrorStore } from '@/store/error';

const { errorState, errorEffects } = useErrorStore();
const router = useRouter();
const { isMobile } = useMediaSizes();

await errorEffects.fetchError();

useSeoMeta({
  title: errorState.value.seo?.title,
  description: errorState.value.seo?.description,
  ogTitle: errorState.value.seo?.['og:title'],
  ogDescription: errorState.value.seo?.['og:description'],
  twitterTitle: errorState.value.seo?.['twitter:title'],
  twitterDescription: errorState.value.seo?.['twitter:description'],
  robots: errorState.value.seo?.robots,
  author: errorState.value.seo?.author,
});

const getIsHasHistory = () => window.history.length > 2;
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#00a19c" :height="3" />
    <div class="error-page">
      <div class="error-page__container">
        <div class="error-page__ellipse" />
        <div class="error-page__content">
          <NuxtPicture class="error-page__picture" :src="errorState.image" :alt="errorState.image_alt" />
          <div class="error-page__info">
            <div class="error-page__top">
              <h1 class="error-page__title">{{ errorState.status }}</h1>
              <p class="error-page__slogan">{{ errorState.subtitle_page }}</p>
            </div>
            <p class="error-page__subtitle">{{ errorState.title_page }}</p>
            <div class="error-page__buttons">
              <UINewButton tag="NuxtLink" :to="appRoutes.main()" :size="isMobile ? 'small' : 'big'"
                >На главную</UINewButton
              >
              <UINewButton
                :size="isMobile ? 'small' : 'big'"
                fill="outline"
                @click.stop="getIsHasHistory() ? router.back() : router.push(appRoutes.main())"
                >Назад</UINewButton
              >
            </div>
          </div>
        </div>
        <CallbackForm class="error-page__form" />
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss">
.error-page {
  padding-top: 40px;
  margin-bottom: 80px;

  &__container {
    @include container;
    position: relative;
  }

  &__ellipse {
    position: absolute;
    right: 0;
    top: 0;
    width: 195px;
    height: 195px;
    flex-shrink: 0;
    background: var(--Green-Primary, #00a19c);
    opacity: 0.5;
    filter: blur(70px);
  }

  &__content {
    display: flex;
    justify-content: space-between;
    gap: 24px;

    @include mobile {
      flex-wrap: wrap;
      gap: 40px;
    }
  }

  &__picture {
    display: block;
    max-width: 488px;
    max-height: 400px;
    width: 100%;

    @include mobile {
      order: 2;
      max-width: 100%;
    }

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  &__info {
    max-width: 590px;
    width: 100%;

    @include mobile {
      order: 1;
    }
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--black-black-20, #cbcccc);
  }

  &__title {
    color: var(--white);
    font-family: Roboto;
    font-size: 120px;
    font-weight: 100;
    line-height: 120px;
    letter-spacing: -0.02em;

    @include mobile {
      font-size: 80px;
    }
  }

  &__slogan {
    color: var(--white);
    max-width: 162px;
    text-align: right;

    @include BodySRegular;
  }

  &__subtitle {
    margin-top: 10px;
    color: var(--white);

    @include TitleXSRegular;
  }

  &__buttons {
    margin-top: 40px;
    display: flex;
    gap: 20px;
  }

  &__form {
    margin-top: 80px;
  }
}
</style>
