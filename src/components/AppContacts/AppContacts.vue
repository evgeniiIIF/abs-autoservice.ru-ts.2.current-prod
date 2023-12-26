<script lang="ts" setup>
import type { AppContacts } from '@/components/AppContacts/AppContacts.types';
import { useMediaSizes } from '@/composables/useMediaSizes';

import { useCallBackFormStore } from '~/store/callBackForm';

const { callBackFormState, callBackFormActions } = useCallBackFormStore();

const openModal = (title: string) => {
  callBackFormActions.setTitleModal(title);
  useOpenModal();
};

const [isOpenModal, useOpenModal, closeModal] = useBooleanState();

defineProps<AppContacts>();

const { isMobile } = useMediaSizes();
</script>

<template>
  <div class="contacts" :class="{ 'contacts--in-mobile-menu': inMobileMenu }">
    <a class="contacts__phone" href="tel:88652500520">8 (8652) 500-520</a>
    <div class="contacts__callback">
      <UINewButton :is-full-width="isMobile" @click="openModal('Заказать звонок')">Заказать звонок</UINewButton>
      <CallbackFormModal
        position="center"
        :is-open="isOpenModal"
        :title-modal="callBackFormState.titleModal"
        @onClose="closeModal"
      />
      <!-- <UIModal position="center" :is-open="isOpenModal" @onClose="closeModal" >
        <CallbackForm :title-modal="callBackFormState.titleModal" @onClose="closeModal" />
      </UIModal> -->
    </div>
    <a class="contacts__email" href="mailto:info@abs-autoservice.ru">info@abs-autoservice.ru</a>
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
