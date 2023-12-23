<script setup lang="ts">
import { useCallBackFormStore } from '~/store/callBackForm';

import { useMediaSizes } from '@/composables/useMediaSizes';
import { validateNameInput } from '@/utils/validateNameInput/validateNameInput';
import { validatePhoneInput } from '@/utils/validatePhoneInput/validatePhoneInput';
import { useContactsStore } from '~/store/contacts';
import type { CallBackFormProps } from './CallbackForm.types';

const props = defineProps<CallBackFormProps>();

const { isMobile } = useMediaSizes();

const { callBackFormState } = useCallBackFormStore();
const { contactsState } = useContactsStore();

const formData = ref({
  name: '',
  phone: '',
  title: props.titleModal,
});

const hasError = ref(false);
const errorNameInput = ref('');
const errorPhoneInput = ref('');

const onSubmit = () => {
  errorNameInput.value = validateNameInput(formData.value.name);
  errorPhoneInput.value = validatePhoneInput(formData.value.phone);

  if (errorNameInput.value || errorPhoneInput.value) {
    hasError.value = true;
    return;
  }

  hasError.value = false;
  formData.value.name = '';
  formData.value.phone = '';
};

watch(
  () => [formData.value, hasError.value],
  () => {
    if (hasError.value) {
      errorNameInput.value = validateNameInput(formData.value.name);
      errorPhoneInput.value = validatePhoneInput(formData.value.phone);
    }
  },
  { deep: true },
);
</script>

<template>
  <div class="callback-form">
    <div class="callback-form__body">
      <div class="callback-form__content">
        <p class="callback-form__title">
          {{ titleModal ?? callBackFormState.title }}
        </p>
        <p v-if="!titleModal" class="callback-form__description">{{ callBackFormState.text }}</p>
        <form class="callback-form__form" @submit.prevent="onSubmit">
          <div class="callback-form__inputs">
            <div class="callback-form__input">
              <UIInput
                :value="formData.name"
                type="text"
                label="Имя"
                placeholder="Введите имя"
                :error-message="errorNameInput"
                @on-input="formData.name = $event"
              />
            </div>
            <div class="callback-form__input">
              <UIInput
                :value="formData.phone"
                type="tel"
                label="Телефон"
                :error-message="errorPhoneInput"
                @on-input="formData.phone = $event"
              />
            </div>
          </div>
          <div class="callback-form__button">
            <UIButton tag="button" type="submit" has-full-width>Оставить заявку</UIButton>
          </div>
        </form>
        <p class="callback-form__policy">Нажимая кнопку, вы соглашаетесь с нашей Политикой конфиденциальности</p>
        <div class="callback-form__socials">
          <UIButton tag="a" :href="contactsState.social_network?.[0].url">
            <IcTelegram :font-controlled="false" :filled="true" />
          </UIButton>
          <UIButton tag="a" :href="contactsState.social_network?.[1].url">
            <IcWhatsapp :font-controlled="false" :filled="true" />
          </UIButton>
        </div>
      </div>
      <div v-if="!isMobile" class="callback-form__image">
        <NuxtPicture src="/images/callback-form.png" format="webp,png,jpg" loading="lazy" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.callback-form {
  max-width: 1200px;
  width: 100%;

  &__body {
    display: flex;
    padding: 30px 20px;
    border-radius: 20px;
    border-top: 1px solid var(--black-black-80, #414141);
    background: var(--black-black-90, #2a2a2a);

    @include desktop {
      padding: 40px;
    }
  }

  &__close {
    display: none;
  }

  &__content {
    max-width: 638px;
    margin-right: auto;
  }

  &__title {
    margin-bottom: 10px;
    @include SubtitleLBold;
    color: var(--white, #fff);

    @include desktop {
      margin-bottom: 40px;
      @include TitleSBold;
    }
  }

  &__description {
    max-width: 632px;
    margin-bottom: 20px;
    @include BodyMRegular;
    color: var(--black-black-50, #898989);

    @include desktop {
      margin-bottom: 24px;
      @include SubtitleSRegular;
    }
  }

  &__form {
    margin-bottom: 8px;
    @include desktop {
      display: flex;
      gap: 20px;
      margin-bottom: 20px;
    }
  }

  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;

    @include desktop {
      flex: 1 1 auto;
      flex-direction: inherit;
      margin-bottom: 0;
    }
  }

  &__input {
    @include desktop {
      width: 100%;
      max-width: 220px;
    }
  }

  &__button {
    button {
      line-height: 130%;
    }

    @include desktop {
      flex: 0 0 158px;
      display: flex;
      align-items: flex-end;
    }
  }

  &__policy {
    margin-bottom: 24px;
    @include BodySRegular;
    color: var(--black-black-50, #898989);

    @include desktop {
      margin-bottom: 20px;
    }
  }

  &__socials {
    display: flex;
    gap: 20px;

    .button {
      padding: 12px;
    }
  }

  &__image {
    position: relative;
    flex: 0 0 380px;
    margin-bottom: -30px;
    margin-right: -30px;

    @include desktop {
      margin-bottom: -40px;
      margin-right: -40px;
    }

    @include media($xl) {
      flex: 0 0 488px;
    }

    img {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
    }
  }
}
</style>
