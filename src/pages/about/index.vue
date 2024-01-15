<script setup lang="ts">
import { useAboutStore } from '~/store/about';
import { SwiperNavigation, SwiperPagination } from '#imports';
import 'swiper/css/pagination';

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
  keywords: aboutState.value.seo?.key_words,
});

const { isMobile } = useMediaSizes();
const breadcrumbItems = [{ name: 'Об автосервисе', link: '/about' }];

const [isRequisitesModalOpen, handleOpenModal, closeModal] = useBooleanState();
const [isCallbackModalOpen, openCallbackModal, closeCallbackModal] = useBooleanState();

const bannerBackgroundStyle = computed(() => ({
  background: `url(${aboutState.value.guarantee_img?.img_path}) center center`,
}));

const openRequisitesModal = (isModal: boolean) => {
  if (isModal) handleOpenModal();
};
</script>

<template>
  <div class="about">
    <div class="about__breadcrumb">
      <UIBreadcrumb :items="breadcrumbItems" />
    </div>
    <div class="about__container">
      <h1 class="about__title">{{ aboutState.text?.title }}</h1>
      <div class="about__info-content">
        <div class="about__info-ellipse" />
        <Swiper
          class="about__slider"
          :modules="[SwiperPagination, SwiperNavigation]"
          :pagination="{
            el: '.about__slider-pagination',
            clickable: true,
          }"
        >
          <SwiperSlide v-for="slide in aboutState.text_img?.img_path" :key="slide">
            <NuxtPicture
              class="about__description-image"
              :src="slide"
              :alt="aboutState.text_img?.img_alt"
              :title="aboutState.text_img?.img_title"
            />
          </SwiperSlide>
          <div class="about__slider-pagination" />
        </Swiper>
        <div class="about__description">
          <div class="about__description-content" v-html="aboutState.text?.content"></div>
          <div class="about__info-link-buttons">
            <UINewButton
              v-for="(linkButton, index) in aboutState.text?.link_btn"
              :key="linkButton.title"
              :tag="linkButton.title === 'Реквизиты' ? 'button' : 'NuxtLink'"
              :fill="index % 2 === 0 ? 'solid' : 'outline'"
              :to="linkButton.url"
              @click.stop="openRequisitesModal(linkButton.title === 'Реквизиты')"
            >
              {{ linkButton.title }}
            </UINewButton>
          </div>
        </div>
      </div>
      <div v-if="aboutState.advantages?.length" class="about__advantages">
        <GuaranteeCard
          v-for="item in aboutState.advantages.filter((item) => item.is_active)"
          :key="item.title"
          class="about__advantages__item"
          :title="item.title"
          :description="item.descriptions"
          :image="{
            img_alt: item.icon.icon_alt,
            img_title: item.icon.icon_title,
            img_path: item.icon.icon_path,
          }"
        />
      </div>
      <div class="about__banner" :style="!isMobile ? bannerBackgroundStyle : undefined">
        <div class="about__banner-ellipse" />
        <div v-if="isMobile" class="about__banner-image-block">
          <NuxtPicture class="about__banner-image" :src="aboutState?.guarantee_img?.img_path" />
        </div>
        <div class="about__banner-content">
          <h2 class="about__banner-title">
            {{ aboutState.guarantee?.title }}
          </h2>
          <div class="about__banner-subtitle" v-html="aboutState.guarantee?.content" />
          <UINewButton class="about__banner-button" :is-full-width="isMobile" @click.stop="openCallbackModal">
            {{ aboutState.guarantee?.title_btn }}
          </UINewButton>
        </div>
      </div>
    </div>
    <RequisitesModal :is-open="isRequisitesModalOpen" position="center" @on-close="closeModal" />
    <CallbackFormModal
      :is-open="isCallbackModalOpen"
      position="center"
      @on-close="closeCallbackModal"
    ></CallbackFormModal>
  </div>
</template>

<style lang="scss">
.about {
  margin-bottom: 80px;

  &__container {
    @include container;
  }

  &__info-content {
    margin-top: 20px;
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

  &__slider-pagination {
    display: flex;
    justify-content: center;
    gap: 4px;
    position: relative;
    bottom: 30px;

    .swiper-pagination-bullet {
      background: var(--Black-Black-80, #414141);
      opacity: 1;
      width: 6px;
      height: 6px;

      &-active {
        background: var(--Green-Primary, #00a19c);
      }
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

  &__swiper {
    order: 3;
  }

  &__description {
    color: var(--white);

    @include desktop {
      max-width: 40%;
      order: 1;
    }

    @include BodyMRegular;

    p {
      @include BodyLRegular;
    }
  }

  &__description-image {
    display: block;
    width: 100%;
    height: 400px;

    @include mobile {
      height: 200px;
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

  &__advantages {
    margin-top: 80px;
    display: grid;
    gap: 20px;

    @include desktop {
      grid-template-columns: repeat(5, 1fr);
    }

    @include tablet {
      grid-template-columns: repeat(3, 1fr);
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

  .swiper {
    padding-bottom: 10px;
    order: 2;

    @include desktop {
      order: 1;
    }
  }

  .swiper-wrapper {
    padding-bottom: 4px;
  }
}
</style>
