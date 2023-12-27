<script setup lang="ts">
import { useAboutStore } from '~/store/about';

const { aboutState, aboutEffects } = useAboutStore();

await aboutEffects.fetchAboutPageInfo();

useSeoMeta({
  title: aboutState.value?.seo?.title,
  description: aboutState.value?.seo?.description,
  ogTitle: aboutState.value?.seo?.['og:title'],
  ogDescription: aboutState.value?.seo?.['og:description'],
  ogImage: aboutState.value.seo?.image,
  ogType: aboutState.value?.seo?.['og:type'] as any,
  twitterTitle: aboutState.value?.seo?.['twitter:title'],
  twitterDescription: aboutState.value?.seo?.['twitter:description'],
  twitterCard: aboutState.value?.seo?.['twitter:card'] as any,
  robots: aboutState.value.seo?.robots,
  author: aboutState.value.seo?.author,
});

const { isMobile } = useMediaSizes();
const breadcrumbItems = [{ name: 'Об автосервисе', link: '/about' }];

const [isModalOpen, openModal, closeModal] = useBooleanState();

const bannerBackgroundStyle = computed(() => ({
  background: `url(${aboutState.value.guarantee_img}) center center`,
}));
</script>

<template>
  <div class="about">
    <div class="about__breadcrumb">
      <UIBreadcrumb :items="breadcrumbItems" />
    </div>
    <div class="about__container">
      <div class="about__info-content">
        <div class="about__info-ellipse" />
        <div class="about__info-row">
          <h1 class="about__title">{{ aboutState.text?.title }}</h1>
          <p class="about__subtitle">{{ aboutState.text?.subtitle }}</p>
          <div class="about__info-link-buttons">
            <UINewButton
              v-for="(linkButton, index) in aboutState.text?.link_btn"
              :key="linkButton.title"
              tag="NuxtLink"
              :fill="index % 2 === 0 ? 'solid' : 'outline'"
              :to="linkButton.url"
            >
              {{ linkButton.title }}
            </UINewButton>
          </div>
        </div>
        <div class="about__info-row">
          <div class="about__description" v-html="aboutState.text?.content" />
          <NuxtPicture
            class="about__description-image"
            :src="aboutState.text_img"
            :alt="aboutState.text_img_alt"
            :title="aboutState.text_img_title"
          />
        </div>
      </div>
      <div class="about__banner" :style="!isMobile ? bannerBackgroundStyle : undefined">
        <div class="about__banner-ellipse" />
        <div v-if="isMobile" class="about__banner-image-block">
          <NuxtPicture class="about__banner-image" :src="aboutState.guarantee_img" />
        </div>
        <div class="about__banner-content">
          <h2 class="about__banner-title">
            {{ aboutState.guarantee?.title }}
          </h2>
          <div class="about__banner-subtitle" v-html="aboutState.guarantee?.content" />
          <UINewButton class="about__banner-button" :is-full-width="isMobile" @click.stop="openModal">
            {{ aboutState.guarantee?.title_btn }}
          </UINewButton>
        </div>
      </div>
    </div>
    <CallbackFormModal :is-open="isModalOpen" @on-close="closeModal" />
  </div>
</template>

<style lang="scss">
.about {
  margin-bottom: 80px;

  &__container {
    @include container;
  }

  &__info-content {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;

    @include desktop {
      flex-wrap: nowrap;
    }
  }

  &__info-ellipse {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50px, -50%);
    width: 95px;
    height: 95px;
    flex-shrink: 0;
    background: var(--Green-Primary, #00a19c);
    opacity: 0.3;
    filter: blur(70px);
  }

  &__info-row {
    &:first-child {
      @include desktop {
        max-width: 400px;
      }
    }

    &:last-child {
      @include desktop {
        max-width: 700px;
      }
    }
  }

  &__title {
    color: var(--white);

    @include TitleXSBold;

    @include desktop {
      @include TitleSBold;
    }
  }

  &__subtitle {
    color: var(--black-black-50);
    margin-top: 10px;
    @include SubtitleXSRegular;

    @include desktop {
      margin-top: 20px;
    }
  }

  &__info-link-buttons {
    display: flex;
    gap: 20px;
    margin-top: 20px;

    @include desktop {
      margin-top: 40px;
    }
  }

  &__description {
    color: var(--white);

    @include BodyMRegular;

    p {
      margin-bottom: 20px;
      @include BodyLRegular;
    }
  }

  &__description-image {
    margin-top: 60px;
    display: block;
    width: 100%;
    height: 400px;

    @include mobile {
      height: 200px;
      margin-top: 20px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 40px;

      @include mobile {
        border-radius: 20px;
      }
    }
  }

  &__banner {
    position: relative;
    margin-top: 172px;
    width: 100%;
    padding: 40px 80px;
    border-radius: 40px;

    @include mobile {
      padding: 0;
      margin-top: 40px;
    }
  }

  &__banner-image {
    display: block;
    width: 100%;
    border-radius: 40px;

    @include mobile {
      height: 120px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  }

  &__banner-content {
    max-width: 500px;

    @include mobile {
      margin-top: 20px;
    }
  }

  &__banner-title {
    color: var(--white);

    @include TitleSBold;
  }

  &__banner-subtitle {
    margin-top: 8px;
    color: var(--black-black-50, #898989);

    @include SubtitleSRegular;
  }

  &__banner-button {
    margin-top: 40px;
  }

  &__banner-ellipse {
    position: absolute;
    left: -100px;
    bottom: 50px;
    width: 212px;
    height: 212px;
    flex-shrink: 0;
    background: var(--Green-Primary, #00a19c);
    opacity: 0.34;
    filter: blur(70px);

    @include desktop {
      left: auto;
      bottom: auto;
      top: -50px;
      right: 110px;
    }
  }
}
</style>
