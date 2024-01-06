<script setup lang="ts">
import { appRoutes } from '~/appRoutes';
import { useContactsStore } from '~/store/contacts';
import { useMenuStore } from '~/store/menu';

const { contactsState } = useContactsStore();
const { menuState } = useMenuStore();

const workTimeItems = computed(() => contactsState.value.data?.time_work?.split(',').map((item) => item.split(' ')));
</script>

<template>
  <footer class="footer-mobile">
    <div class="container">
      <div class="footer-mobile__body">
        <div class="footer-mobile__c1">
          <div class="footer-mobile__circles">
            <span v-for="circle in 6" :key="circle" class="footer-mobile__circle"></span>
            <span class="footer-mobile__circle footer-mobile__circle--sunday"></span>
          </div>
          <div class="footer-mobile__working-hours">
            <div class="footer-mobile__working-hours-col">
              <span class="footer-mobile__working-hours-days">{{ workTimeItems?.[0][0] }}</span>
              <span class="footer-mobile__working-hours-time">{{ workTimeItems?.[0][1] }}</span>
            </div>
            <div class="footer-mobile__working-hours-col">
              <span class="footer-mobile__working-hours-days">{{ workTimeItems?.[1][1] }}</span>
              <span class="footer-mobile__working-hours-time">{{ workTimeItems?.[1][2] }}</span>
            </div>
          </div>
        </div>
        <div class="footer-mobile__c2">
          <AppContacts />
        </div>
        <div class="footer-mobile__c3">
          <div class="footer-mobile__top">
            <a
              class="footer-mobile__privacy-policy"
              :href="appRoutes.privacyPolicy().path"
              target="_blank"
              rel="noopener"
            >
              Политика конфиденциальности
            </a>
            <p class="footer-mobile__copyright">{{ menuState.footer.copyright }}</p>
            <AppCards />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer-mobile {
  padding: 30px 0 100px 0;

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
