<script setup lang="ts">
import { appRoutes } from '~/appRoutes';

useSeoMeta({
  title: 'Автосервис ABS-AUTO',
  description: `
  Автосервис ABS-AUTO – сервисный центр в Ставрополе, который успешно работает вот уже более 15 лет и входит
  в состав торгово-инвестиционной группы компаний ABS GROUP. Холдинг является одним из крупнейших
  поставщиков автомобильных запчастей и смазочных материалов в СНГ, занимается производством собственных
  запчастей под брендом ABSEL, а также создает современные технологичные решения для автобизнеса.
  В ABS-AUTO Service мы собрали команду настоящих профессионалов, которых объединяет искренняя любовь к
  автомобилям. Мы предлагаем комплексные услуги по ремонту и полноценному обслуживанию вашего авто с
  применением только высококачественных средств и оборудования.
  `,
});

const { isMobile, isDesktop } = useMediaSizes();
const breadcrumbItems = [{ name: 'Об автосервисе', link: '/about' }];

const [isModalOpen, openModal, closeModal] = useBooleanState();
</script>

<template>
  <div class="about">
    <div class="about__breadcrumb">
      <UIBreadcrumb :items="breadcrumbItems" />
    </div>
    <section class="about__info info-about">
      <div class="container">
        <div class="info-about__body">
          <div class="info-about__ellipse"></div>
          <div class="info-about__top">
            <h1 class="info-about__title">Автосервис ABS-AUTO</h1>
            <p class="info-about__subtitle">
              – техническое обслуживание, ремонт и продажа запасных частей для автомобилей иностранного производства
            </p>
            <div class="info-about__buttons">
              <div class="info-about__button info-about__button--bg">
                <UIButton tag="NuxtLink" :to="appRoutes.contacts()">Контакты</UIButton>
              </div>
              <div class="info-about__button info-about__button--bd">
                <UIButton>Реквизиты</UIButton>
              </div>
            </div>
          </div>
          <div class="info-about__bottom">
            <p class="info-about__text">
              Автосервис ABS-AUTO – сервисный центр в Ставрополе, который успешно работает вот уже более 15 лет и входит
              в состав торгово-инвестиционной группы компаний ABS GROUP. Холдинг является одним из крупнейших
              поставщиков автомобильных запчастей и смазочных материалов в СНГ, занимается производством собственных
              запчастей под брендом ABSEL, а также создает современные технологичные решения для автобизнеса.
            </p>
            <p v-if="!isMobile" class="info-about__text info-about__text--desktop">
              В ABS-AUTO Service мы собрали команду настоящих профессионалов, которых объединяет искренняя любовь к
              автомобилям. Мы предлагаем комплексные услуги по ремонту и полноценному обслуживанию вашего авто с
              применением только высококачественных средств и оборудования.
            </p>
            <div class="info-about__image ibg">
              <NuxtPicture src="images/about.jpg" format="webp" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="about__guarantees guarantees-about">
      <div class="guarantees-about__ellipse"></div>
      <div class="container">
        <div class="guarantees-about__body">
          <div v-if="!isDesktop" class="guarantees-about__image guarantees-about__image--mobile ibg">
            <NuxtPicture src="images/guarantees-mobile.jpg" format="webp" loading="lazy" />
          </div>
          <div v-else class="guarantees-about__image guarantees-about__image--desktop ibg">
            <NuxtPicture src="images/guarantees-desktop.jpg" format="webp" loading="lazy" />
          </div>
          <div class="guarantees-about__content">
            <h3 class="guarantees-about__title">Гарантия качества</h3>
            <p class="guarantees-about__subtitle">
              Каждый автотехцентр под брендом ABS-autoservice предоставляет 1 год гарантии на все устанавливаемые
              автозапчасти и работы.
            </p>
            <div class="guarantees-about__button">
              <UIButton @click.stop="openModal">Записаться на сервис</UIButton>
            </div>
          </div>
        </div>
      </div>
      <CallbackFormModal :is-open="isModalOpen" @on-close="closeModal" />
    </section>
  </div>
</template>

<style lang="scss">
.about {
  &__breadcrumb {
  }

  &__info {
    margin-bottom: 60px;
    @include desktop {
      margin-bottom: 172px;
    }
  }
  &__guarantees {
    margin-bottom: 60px;
    @include desktop {
      margin-bottom: 80px;
    }
  }
}

.info-about {
  &__body {
    @include desktop {
      position: relative;
      display: flex;
    }
  }
  &__ellipse {
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
  &__top {
    max-width: 387px;
    margin-bottom: 40px;
    @include desktop {
      max-width: 100%;
      margin-right: 10.1666667%;
      flex: 0 0 387px;
    }
  }

  &__title {
    margin-bottom: 10px;
    color: var(--1, #fff);
    @include TitleXSBold;
    @include tablet {
      margin-bottom: 8px;
      @include TitleSBold;
    }
  }

  &__subtitle {
    margin-bottom: 20px;
    color: var(--Black-Black-50, #898989);
    @include SubtitleXSRegular;
    @include tablet {
      margin-bottom: 40px;
    }
  }

  &__buttons {
    display: flex;
    @include mr(20px);
  }

  &__button {
  }

  &__button--bg {
  }

  &__button--bd {
    .button {
      color: var(--Green-Primary, #00a19c);
      background: transparent;
      border: 2px solid var(--Green-Primary, #00a19c);
    }
  }

  &__bottom {
  }

  &__text {
    margin-bottom: 20px;
    color: var(--Black-Black-00, #fff);
    @include BodyMRegular;

    @include tablet {
      @include BodyLRegular;
    }
  }

  &__text--desktop {
    @include desktop {
      margin-bottom: 60px;
    }
  }

  &__image {
    margin: 0 -10px;
    border-radius: 20px;
    overflow: hidden;
    padding-top: 57.3333333%;
    @include tablet {
      margin: 0;
      border-radius: 40px;
    }
  }
}

.guarantees-about {
  position: relative;
  &__ellipse {
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

  &__body {
    position: relative;
    @include desktop {
      border-radius: 40px;
      overflow: hidden;
      padding: 40px 0 112px 80px;
    }
  }

  &__image {
  }

  &__image--mobile {
    margin-bottom: 20px;
    border-radius: 20px;
    overflow: hidden;
    padding-top: 42.8571429%;
  }

  &__image--desktop {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &__content {
    position: relative;
    z-index: 1;
    max-width: 504px;
  }

  &__title {
    margin-bottom: 8px;
    color: var(--1, #fff);
    @include SubtitleLBold;
    @include tablet {
      @include TitleSBold;
    }
  }

  &__subtitle {
    margin-bottom: 40px;
    color: var(--Black-Black-50, #898989);
    @include BodyMRegular;
    @include tablet {
      @include SubtitleSRegular;
    }
  }

  &__button {
    .button {
      width: 100%;
      @include tablet {
        width: auto;
      }
    }
  }
}
</style>
