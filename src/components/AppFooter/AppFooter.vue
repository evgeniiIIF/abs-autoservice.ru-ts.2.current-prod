<script setup lang="ts">
import { useMediaSizes } from '@/composables/useMediaSizes';

const { isMobile } = useMediaSizes();

const navItems = [
  { name: 'Акции', link: '' },
  { name: 'Услуги', link: '' },
  { name: 'Бонусная программа', link: '' },
  { name: 'О автосервисе', link: '' },
  { name: 'Контакты', link: '' },
];
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__wrapper">
        <div class="footer__row">
          <div class="footer__row-top">
            <div class="footer__circles">
              <span v-for="circle in 6" :key="circle" class="footer__circle"></span>
              <span class="footer__circle footer__circle--sunday"></span>
            </div>
            <div class="footer__working-hours">
              <div v-for="time in 2" :key="time" class="footer__working-hours-col">
                <span class="footer__working-hours-days">пн-сб</span>
                <span class="footer__working-hours-time">9:00-19:00</span>
              </div>
            </div>
          </div>
          <div v-if="!isMobile" class="footer__row-bottom">
            <span class="footer__copyright">© Автосервис ABS-AUTO, 2023</span>
          </div>
        </div>
        <div v-if="!isMobile" class="footer__row">
          <div class="footer__row-top">
            <AppNavigation :items="navItems" />
          </div>
          <div class="footer__row-bottom">
            <a class="footer__privacy-policy" href="#" target="_blank" rel="noopener"> Политика конфиденциальности </a>
          </div>
        </div>
        <div class="footer__row">
          <div class="footer__row-top">
            <AppContacts />
          </div>
          <div v-if="!isMobile" class="footer__row-bottom">
            <ul class="footer__payments">
              <li v-for="card in 3" :key="card" class="footer__payments-card">
                <IcVisa :font-controlled="false" :filled="true" />
              </li>
            </ul>
          </div>
        </div>
        <div v-if="isMobile" class="footer__row">
          <div class="footer__row-top">
            <a class="footer__privacy-policy" href="#" target="_blank" rel="noopener"> Политика конфиденциальности </a>
            <span class="footer__copyright">© Автосервис ABS-AUTO, 2023</span>
            <ul class="footer__payments">
              <li v-for="card in 3" :key="card" class="footer__payments-card">
                <IcVisa :font-controlled="false" :filled="true" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background: var(--black-black-90, #2a2a2a);
  border-radius: 40px;
  padding: 30px 0;
  margin: 0 10px;

  @include tablet {
    padding: 60px 0 40px 0;
  }

  @include desktop {
    margin: 0 40px;
  }

  &__container {
    max-width: 1220px;
    padding: 0 10px;
    margin: 0 auto;

    @include tablet {
      padding: 0 20px;
    }
  }

  &__wrapper {
    @include tablet {
      display: flex;
      justify-content: space-between;
    }
  }

  &__row {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 64px;

    &:not(:last-child) {
      border-bottom: 1px solid var(--black-black-80);
    }

    @include tablet {
      border-bottom: none;
      align-items: flex-start;

      &:not(:last-child) {
        border-bottom: none;
      }
    }

    &-top {
      display: flex;
      flex-direction: column;
      align-items: center;

      @include tablet {
        align-items: flex-start;
      }
    }
  }

  &__circles {
    display: flex;
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
      gap: 20px;
      margin-bottom: 20px;

      @include tablet {
        gap: 24px;
      }

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
    margin-top: 20px;
    margin-bottom: 10px;
    @include BodyMRegular;
    color: var(--black-black-60, #717171);
    text-decoration: underline;

    @include tablet {
      margin: 0;
    }
  }

  &__copyright {
    margin-bottom: 20px;
    @include BodyMRegular;
    color: var(--black-black-60, #717171);

    @include tablet {
      margin-bottom: 0;
    }
  }

  &__payments {
    display: flex;
    padding: 8px 35px;
    gap: 40px;
    list-style-type: none;
    background-color: var(--black-black-80, #414141);
    border-radius: 10px;

    @include tablet {
      padding: 8px 12px;
      gap: 9px;
    }
  }
}
</style>
