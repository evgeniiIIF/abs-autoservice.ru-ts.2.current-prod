<script setup lang="ts">
import { useMediaSizes } from '@/composables/useMediaSizes';

const { isDesktop } = useMediaSizes();

const navItems = [
  { name: 'Акции', link: '' },
  { name: 'Услуги', link: '' },
  { name: 'Бонусная программа', link: '' },
  { name: 'О автосервисе', link: '' },
  { name: 'Контакты', link: '' },
];
</script>

<template>
  <AppFooterMobile v-if="!isDesktop" />
  <AppFooterDesktop v-else />
</template>

<style lang="scss">
.footer {
  padding: 30px 0 100px 0;
  @include media($xl) {
    padding: 20px 0 30px 0;
  }
  @include tablet {
  }

  @include desktop {
  }

  @include from(1440px) {
  }

  .container {
    padding: 0 10px;
    max-width: 100%;
  }

  &__body {
    padding: 30px 10px;
    background: var(--black-black-90, #2a2a2a);
    border-radius: 40px;
  }

  &__c1 {
    padding-bottom: 20px;
  }
  &__c2 {
    padding: 20px 0;
    border-bottom: 1px solid #414141;
    border-top: 1px solid #414141;
    .contacts {
      background: transparent;
      border: none;
      padding: 0 8px;
      &__callback {
        min-width: 100%;
      }
    }
  }
  &__c3 {
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  &__circles {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-bottom: 10px;
  }

  &__circle {
    width: 12px;
    height: 12px;
    background-color: var(--green-primary, #00a19c);
    border-radius: 50%;

    &--sunday {
      border: 1px solid var(--green-primary);
      background: linear-gradient(to top, var(--green-primary) 50%, #2a2a2a 50%);
    }
  }

  &__working {
    &-hours {
      display: flex;
      justify-content: center;
      gap: 20px;

      &-col {
        display: flex;
        flex-direction: column;
      }

      &-days {
        @include BodyMRegular;
        color: var(--black-black-60, #717171);
      }

      &-time {
        @include BodyLRegular;
        color: var(--white, #fff);
      }
    }
  }

  &__privacy-policy {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 10px;
    @include BodyMRegular;
    color: var(--black-black-60, #717171);
    text-decoration: underline;
  }

  &__copyright {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    @include BodyMRegular;
    color: var(--black-black-60, #717171);
  }

  &__payments {
    display: flex;
    max-width: 450px;
    padding: 8px 35px;
    gap: 40px;
    list-style-type: none;
    background-color: var(--black-black-80, #414141);
    border-radius: 10px;
  }
}
</style>
