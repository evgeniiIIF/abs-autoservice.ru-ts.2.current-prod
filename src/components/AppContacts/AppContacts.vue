<script lang="ts" setup>
import type { AppContacts } from '@/components/AppContacts/AppContacts.types';
import { useMediaSizes } from '@/composables/useMediaSizes';
import { useContactsStore } from '~/store/contacts';

defineProps<AppContacts>();
const { contactsState } = useContactsStore();

const [isOpenModal, openModal, closeModal] = useBooleanState();

const { isMobile } = useMediaSizes();
</script>

<template>
  <div class="contacts" :class="{ 'contacts--in-mobile-menu': inMobileMenu }">
    <a class="contacts__phone" :href="`tel:${contactsState.data?.phone?.match(/\d+/g)?.join('')}`">{{
      contactsState.data?.phone
    }}</a>
    <div class="contacts__callback">
      <UINewButton :is-full-width="isMobile" @click="openModal">Заказать звонок</UINewButton>
      <CallbackFormModal :is-open="isOpenModal" @on-close="closeModal" />
    </div>
    <a class="contacts__email" :href="`mailto:${contactsState.data?.mail}`">{{ contactsState.data?.mail }}</a>
    <ul class="contacts__socials">
      <AppSocial />
    </ul>
  </div>
</template>

<style lang="scss">
.contacts {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  border-top: 1px solid var(--black-black-70, #4d4d4d);
  background: var(--black-black-80, #414141);

  &--in-mobile-menu {
    padding: 20px;
    border-radius: 20px;
    border-top: 1px solid var(--black-black-70, #4d4d4d);
    background-color: var(--black-black-80, #414141);
  }

  &__phone {
    margin-bottom: 10px;
    @include TitleXSRegular;
    color: var(--white, #fff);
  }

  &__callback {
    min-width: 220px;
    margin-bottom: 30px;
    width: 100%;

    @include tablet {
      display: flex;
      justify-content: center;
    }
    @include desktop {
      display: flex;
      justify-content: center;
    }
  }

  &__email {
    margin-bottom: 20px;
    @include BodyXLRegular;
    color: var(--green-primary, #00a19c);
    text-decoration: underline;
  }

  &__socials {
    display: flex;
    gap: 10px;
    list-style-type: none;
  }

  &__social {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
  }
}
</style>
