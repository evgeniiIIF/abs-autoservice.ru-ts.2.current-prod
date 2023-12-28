<script lang="ts" setup>
import { useMediaSizes } from '@/composables/useMediaSizes';
import { useServicesStore } from '~/store/services';
import { useContactsStore } from '~/store/contacts';

const { isDesktop } = useMediaSizes();

const { servicesState } = useServicesStore();
const { contactsState } = useContactsStore();

const [isOpenModal, openModal, closeModal] = useBooleanState();
</script>

<template>
  <section class="service-info">
    <div class="container">
      <h1 v-if="!isDesktop" class="service-info__title service-info__title--mobile">
        {{ servicesState.service?.title }}
      </h1>
      <div class="service-info__wrapper">
        <div class="service-info__content">
          <div class="service-info__info">
            <NuxtPicture class="service-info__picture" :src="servicesState.service?.image ?? 'undefined'" />
            <h1 v-if="isDesktop" class="service-info__title">{{ servicesState.service?.title }}</h1>
            <div class="service-info__description" v-html="servicesState.service?.full_text"></div>
          </div>
          <div class="service-info__callback">
            <h2 class="service-info__callback-title">Для записи в автосервис ABS-AUTO</h2>
            <p class="service-info__callback-subtitle">звоните нам по телефону</p>
            <div class="service-info__callback-separator"></div>
            <div class="service-info__callback-row">
              <h3 class="service-info__callback-phone">{{ contactsState.phone }}</h3>
              <UINewButton
                tag="a"
                :href="`tel:${contactsState.phone?.match(/\d+/g)?.join('')}`"
                target="__blank"
                :has-full-width="!isDesktop"
                >Позвонить</UINewButton
              >
            </div>
          </div>
        </div>
        <div class="service-info__aside">
          <div class="service-info__price">
            <div class="service-info__price-info">
              <h2 class="service-info__price-count">{{ servicesState.service?.price }} ₽</h2>
              <p class="service-info__price-footnote">
                Цена может быть изменена в зависимости от типа кузова вашего авто
              </p>
            </div>
            <UINewButton :has-full-width="!isDesktop" @click.stop="openModal">Записаться на СТО</UINewButton>
          </div>
          <div class="service-info__questions">
            <HasQuestionsBanner />
          </div>
        </div>
        <div class="service-info__callback service-info__callback--mobile">
          <h2 class="service-info__callback-title">Для записи в автосервис ABS-AUTO</h2>
          <p class="service-info__callback-subtitle">звоните нам по телефону</p>
          <div class="service-info__callback-separator"></div>
          <div class="service-info__callback-row">
            <h3 class="service-info__callback-phone">{{ contactsState.phone }}</h3>
            <UINewButton
              tag="a"
              :href="`tel:${contactsState.phone?.match(/\d+/g)?.join('')}`"
              target="__blank"
              :has-full-width="!isDesktop"
              >Позвонить</UINewButton
            >
          </div>
        </div>
      </div>
    </div>
    <CallbackFormModal :is-open="isOpenModal" :title-modal="servicesState.service?.title" @on-close="closeModal" />
  </section>
</template>

<style lang="scss">
.service-info {
  position: relative;

  &__title {
    margin-top: 20px;
    @include SubtitleLBold;
    color: var(--white, #fff);

    @include desktop {
      @include TitleMBold;
    }

    &--mobile {
      margin-bottom: 20px;
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;

    @include desktop {
      flex-direction: inherit;
      gap: 20px;
    }
  }

  &__picture {
    width: 100%;
    height: 240px;
    display: block;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  }

  &__info {
    margin-bottom: 40px;

    @include desktop {
      width: 100%;
      max-width: 796px;
      padding: 40px 40px 60px 40px;
      margin-bottom: 20px;
      border: 1px solid var(--black-black-90, #2a2a2a);
      background: var(--linear, linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%));
      backdrop-filter: blur(80px);
      border-radius: 20px;
    }
  }

  &__description {
    margin-top: 20px;
    @include BodyMRegular;
    color: var(--black-black-50, #898989);

    @include desktop {
      @include BodyXLRegular;
    }

    ul,
    ol {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 20px 0;

      li {
        @include BodyMRegular;
        margin-left: 20px;
        padding-left: 20px;
        color: var(--black-black-50, #898989);

        &::marker {
          color: var(--green-primary);
        }

        p {
          color: var(--black-black-50, #898989);
        }

        @include desktop {
          @include BodyXLRegular;
        }
      }
    }

    &-button {
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

  &__callback {
    padding: 20px;
    border-radius: 20px;
    border: 1px solid var(--black-black-90, #2a2a2a);
    background: var(--linear, linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%));
    display: none;

    @include desktop {
      padding: 40px;
      display: initial;
    }

    &--mobile {
      display: initial;
      @include desktop {
        display: none;
      }
    }

    &-title {
      margin-bottom: 8px;

      @include SubtitleLBold;
      color: var(--white, #fff);

      @include desktop {
        @include TitleXSBold;
      }
    }

    &-subtitle {
      margin-bottom: 20px;

      @include BodyLRegular;
      color: var(--green-primary, #00a19c);

      @include desktop {
        @include BodyXLRegular;
      }
    }

    &-separator {
      width: 100%;
      height: 1px;
      margin-bottom: 20px;
      background: var(--black-black-80, #414141);
    }

    &-row {
      display: flex;
      flex-direction: column;
      gap: 20px;

      @include desktop {
        flex-direction: inherit;
        justify-content: space-between;
        align-items: center;
      }
    }

    &-phone {
      @include TitleXSRegular;
      color: var(--white, #fff);

      @include desktop {
        @include TitleSRegular;
      }
    }
  }

  &__aside {
    @include desktop {
      position: sticky;
      top: 109px;
      height: 100%;
    }
  }

  &__price {
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid var(--black-black-90, #2a2a2a);
    background: var(--linear, linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%));
    backdrop-filter: blur(80px);
    border-radius: 20px;

    &-info {
      margin-bottom: 20px;

      @include desktop {
        margin-bottom: 56px;
      }
    }

    &-count {
      @include TitleXSRegular;
      color: var(--white, #fff);

      @include desktop {
        @include TitleMRegular;
      }
    }

    &-footnote {
      @include BodyMRegular;
      color: var(--black-black-50, #898989);
    }
  }

  &__questions {
    padding: 20px;
    background: var(--black-black-90, #2a2a2a);
    border-radius: 20px;

    &-title {
      margin-bottom: 8px;

      @include SubtitleLBold;
      color: var(--white, #fff);
    }

    &-footnote {
      margin-bottom: 20px;

      @include SubtitleXSRegular;
      color: var(--black-black-50, #898989);
    }

    &-socials {
      display: flex;
      gap: 20px;
    }
  }
}
</style>
