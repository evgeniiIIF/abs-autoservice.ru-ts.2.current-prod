<script setup lang="ts">
import { appRoutes } from '~/appRoutes';
import { useContactsStore } from '~/store/contacts';
import { IcPathMap } from '#components';

const { isDesktop } = useMediaSizes();
const { contactsState } = useContactsStore();

useSeoMeta({
  title: 'Контакты',
  description: contactsState.value.address,
});

const breadcrumbItems = [{ name: 'Контакты', link: appRoutes.contacts().path }];

const workTimeItems = computed(() => contactsState.value.time_work?.split(',').map((item) => item.split(' ')));
</script>

<template>
  <div class="contacts-page">
    <div class="contacts-page__breadcrumb">
      <UIBreadcrumb :items="breadcrumbItems" />
    </div>
    <section class="contacts-page__contacts-info info-contacts-page">
      <div class="container">
        <div class="info-contacts-page__body">
          <h1 class="info-contacts-page__title">Контакты</h1>
          <div class="info-contacts-page__row">
            <div class="info-contacts-page__content">
              <div class="info-contacts-page__content-top top-info-contacts-page">
                <ul class="top-info-contacts-page__list">
                  <li class="top-info-contacts-page__item item-top-info-contacts-page">
                    <p class="item-top-info-contacts-page__title">Звоните</p>
                    <a
                      :href="`tel:${contactsState.phone?.match(/\d+/g)?.join('')}`"
                      class="item-top-info-contacts-page__text item-top-info-contacts-page__text--phone"
                      >{{ contactsState.phone }}</a
                    >
                  </li>
                  <li class="top-info-contacts-page__item item-top-info-contacts-page">
                    <p class="item-top-info-contacts-page__title">Пишите</p>
                    <a
                      :href="`mailto:${contactsState.mail}`"
                      class="item-top-info-contacts-page__text item-top-info-contacts-page__text--email"
                      >{{ contactsState.mail }}</a
                    >
                  </li>
                  <li class="top-info-contacts-page__item item-top-info-contacts-page">
                    <p class="item-top-info-contacts-page__title">Приезжайте</p>
                    <address class="item-top-info-contacts-page__text">{{ contactsState.address }}</address>
                  </li>
                </ul>
                <div class="top-info-contacts-page__button">
                  <UINewButton
                    tag="a"
                    :icon="{ component: IcPathMap, slot: 'right' }"
                    :href="contactsState.link_map"
                    target="_blank"
                    rel="noopener"
                  >
                    Построить маршрут
                  </UINewButton>
                </div>
              </div>
              <div class="info-contacts-page__content-bottom bottom-info-contacts-page">
                <ul class="bottom-info-contacts-page__work-time work-time-contacts-page">
                  <li class="work-time-contacts-page__item">
                    <div class="work-time-contacts-page__top">{{ workTimeItems?.[0][0] }}</div>
                    <div class="work-time-contacts-page__bottom">{{ workTimeItems?.[0][1] }}</div>
                  </li>
                  <li class="work-time-contacts-page__item">
                    <div class="work-time-contacts-page__top">{{ workTimeItems?.[1][1] }}</div>
                    <div class="work-time-contacts-page__bottom">{{ workTimeItems?.[1][2] }}</div>
                  </li>
                </ul>
                <div class="bottom-info-contacts-page__social">
                  <AppSocial />
                </div>
              </div>
            </div>
            <div class="info-contacts-page__map map">
              <div class="map__wrapper ibg">
                <!--  eslint-disable-next-line vuejs-accessibility/iframe-has-title -->
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3Abf07745ef68e3a312fd40eec7814dc636979444f524d6b267d3c90c4c6cd9b01&source=constructor"
                  width="1039"
                  height="492"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div v-if="isDesktop" class="contacts-page__call-back">
      <SectionCallback />
    </div>
  </div>
</template>

<style lang="scss">
.info-contacts-page {
  &__title {
    margin-bottom: 20px;
    color: var(--1, #fff);
    @include TitleSBold;
  }

  &__row {
    @include desktop {
      display: flex;
      margin-bottom: 80px;
    }
  }

  &__content {
    @include desktop {
      flex: 0 0 488px;
      margin-right: 20px;
    }
  }

  &__content-top {
    margin-bottom: 10px;
    @include desktop {
      margin-bottom: 20px;
    }
  }

  &__content-bottom {
    margin-bottom: 10px;
    @include desktop {
      margin: 0;
    }
  }

  &__map {
    margin: 0 -10px;
    margin-bottom: 40px;
    @include desktop {
      margin: 0;
      flex: 1 1 auto;
    }
  }
}

.top-info-contacts-page {
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #2a2a2a;
  background: var(--Black-Black-90, #2a2a2a);
  @include desktop {
    padding: 30px 40px 40px;
    border-radius: 40px;
  }

  &__list {
    & > *:not(:last-child) {
      padding-bottom: 12px;
      border-bottom: 1px solid var(--Black-Black-60, #717171);
    }
    & > *:not(:first-child) {
      padding: 12px 0;
    }
    @include desktop {
      margin-bottom: 8px;
    }
  }

  &__item {
  }

  &__button {
    @include desktop {
      display: flex;
      padding-left: 140px;
    }
    .button {
      width: 100%;
      @include desktop {
        width: auto;
      }
      &__text {
      }

      &__icon {
        margin-left: 8px;
      }
    }
  }
}
.item-top-info-contacts-page {
  @include desktop {
    display: flex;
    align-items: center;
  }

  &__title {
    margin-bottom: 2px;
    color: var(--Black-Black-60, #717171);
    @include BodySRegular;
    @include desktop {
      flex: 0 0 100px;
      margin-right: 40px;
    }
  }

  &__text {
    color: var(--Black-Black-00, #fff);
    @include BodyLRegular;
  }
  &__text--phone {
    @include SubtitleLRegular;
  }
  &__text--email {
    text-decoration: underline;
  }
}

.bottom-info-contacts-page {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #2a2a2a;
  border-bottom: none;
  background: var(--Linear, linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%));

  @include desktop {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 34px 40px;
    border-radius: 40px;
  }
}
.work-time-contacts-page {
  display: flex;
  align-items: flex-start;
  gap: 24px;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }

  &__top {
    color: var(--Black-Black-60, #717171);
    @include BodyMRegular;
  }

  &__bottom {
    color: var(--Black-Black-00, #fff);
    @include BodyLRegular;
  }
}
.map {
  border-radius: 20px;
  overflow: hidden;
  @include desktop {
    border-radius: 40px;
  }
  &__wrapper {
    padding-top: 54.0983607%;
    @include desktop {
      padding: 0;
      height: 100%;
    }
  }
}
</style>
