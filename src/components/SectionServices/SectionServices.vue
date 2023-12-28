<script setup lang="ts">
import { useServicesStore } from '~/store/services';
import { appRoutes } from '~/appRoutes';

const { isMobile } = useMediaSizes();

const { servicesState } = useServicesStore();

const converterItems = computed(() =>
  servicesState.value.servicesTree.map((service) => ({
    image: service.image,
    title: service.title,
    text: service.children?.length ? `${service.children?.length} услуг` : '',
    link: appRoutes.services(service.id).path,
    subcategories: service.children?.map((subService) => ({
      title: subService.title,
      link: appRoutes.services(subService.id).path,
    })),
  })),
);
</script>

<template>
  <section class="section-services">
    <div class="container">
      <div class="section-services__body">
        <div class="section-services__title-wrapper">
          <h3 class="section-services__title">Услуги</h3>
        </div>
        <div class="section-services__list">
          <div v-for="item in converterItems" :key="item.title" class="section-services__item">
            <SectionServicesItemMobile v-if="isMobile" :item="item" />
            <SectionServicesItem v-else :item="item" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.section-services {
  &__body {
    padding: 30px 0;
    position: relative;

    @include desktop {
      display: flex;
      padding: 80px 0;
      margin-bottom: 370px;
    }
  }
  &__title-wrapper {
    margin-bottom: 20px;

    @include desktop {
      margin-bottom: 0px;
      margin-right: 104px;
    }

    @include media(1200px) {
      margin-right: 204px;
    }
  }

  &__title {
    @include SubtitleLBold;
    color: var(--1, #fff);

    @include desktop {
      position: sticky;
      top: 160px;

      @include TitleSBold;
    }
  }

  &__list {
    counter-reset: card;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin: -5px;

    @include tablet {
      margin: 0;
      display: block;

      @include mb(20px);
    }

    @include desktop {
      position: relative;
      margin-top: -70px;
      display: block;

      @include mb(0px);
    }
  }

  &__item {
    flex: 0 0 50%;
    padding: 5px;
    height: inherit;

    @include tablet {
      position: sticky;
      padding: 0;
    }

    @include desktop {
      display: block;
      position: sticky;
      top: 70px;
      margin-bottom: -26px;

      @for $i from 0 through 4 {
        &:nth-of-type(#{$i}) {
          transform: translateY(calc((#{$i} * 70px)));
        }
      }

      &:last-child {
        transform: translateY(325px);
      }
    }
  }
}
</style>
