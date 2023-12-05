<script setup lang="ts">
import { useMediaSizes } from '@/composables/useMediaSizes';

const { isMobile } = useMediaSizes();
</script>

<template>
  <div class="review-card">
    <div class="review-card__aside">
      <div class="review-card__review-avatar">
        <NuxtPicture src="/images/avatar.png" loading="lazy" alt="Аватар клиента" />
      </div>
      <div v-if="isMobile" class="review-card__review-app">
        <div class="review-card__review-rating">
          <AppRating :rating="5" />
        </div>
        <div class="review-card__review-app-image">
          <NuxtPicture src="/images/2gis-black.png" loading="lazy" alt="Приложение" />
        </div>
      </div>
    </div>
    <div class="review-card__content">
      <div class="review-card__content-top">
        <h3 class="review-card__review-name">Андрей Константинопольский</h3>
        <div v-if="!isMobile" class="review-card__review-rating">
          <IcStarRating v-for="star in 5" :key="star" :font-controlled="false" :filled="true" />
        </div>
      </div>
      <p class="review-card__review-text">
        Это восторг!😍 19.10.2022 г. мы провели свою свадьбу в ресторане Paradise в Park Hotel на Доваторцев. Увидела
        рекламу ресторана в интернете, решили приехать, посмотреть локацию. Сначала сомневалась, стоит ли устраивать
        свадьбу в отеле, да еще и на 4 этаже, боялась, что не сможем как следует повеселиться, пошуметь, короче отметить
        с размахом. НО! Как только мы приехали на место, все сомнения вообще отпали! Администратор Мария, очень милая
        девушка все объяснила, рассказала и показала. Шумоизоляция тут отличная, есть вообще все удобства на этаже, даже
        выходить никуда не надо! И очень крутой вид! Особенно вечером…
      </p>
      <div class="review-card__content-bottom">
        <div class="review-card__review-button">
          <UIButton with-arrow :has-full-width="isMobile">
            <span>Читать весь отзыв</span>
            <IcArrowRight v-if="isMobile" :font-controlled="false" :filled="true" />
            <IcArrowUpRight v-else :font-controlled="false" :filled="true" />
          </UIButton>
        </div>
        <div v-if="!isMobile" class="review-card__review-app-image">
          <NuxtPicture src="/images/2gis-black.png" loading="lazy" alt="Приложение" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.review-card {
  width: 240px;
  padding: 16px;
  border: 1px solid var(--black-black-90);
  background: var(--linear, linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%));
  border-radius: 20px;

  @include tablet {
    width: 100%;
    display: flex;
    gap: 20px;
  }

  &__aside {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  &__review {
    &-avatar {
      picture {
        display: flex;
      }

      img {
        border-radius: 20px;
        width: 72px;
        height: 72px;
      }
    }

    &-app {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;

      &-image {
        max-width: 80px;
        padding: 8px 16px;
        background-color: var(--black-black-04, #f6f6f6);
        border-radius: 10px;

        picture {
          display: flex;
        }

        img {
          width: 100%;
        }
      }
    }

    &-rating {
      margin-top: 7px;

      @include tablet {
        margin-top: 0;
      }
    }

    &-name {
      margin-bottom: 8px;
      @include SubtitleXSMedium;
      color: var(--white, #fff);

      @include tablet {
        margin-bottom: 0;

        @include SubtitleMMedium;
      }
    }

    &-text {
      max-height: 100px;
      margin-bottom: 10px;
      overflow: hidden;
      text-overflow: ellipsis;

      @include BodySRegular;
      color: var(--black-black-50, #898989);

      @include tablet {
        max-height: 136px;
        margin-bottom: 20px;
        @include BodyMRegular;
      }
    }

    &-button {
      width: 100%;
    }
  }

  &__content {
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    &-bottom {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
