<script setup lang="ts">
// import type { CallBackForm } from '~/api/http/callBackForm/callBackFormHttp.types';

import { useCallBackFormStore } from '~/store/callBackForm';

import { useMediaSizes } from '@/composables/useMediaSizes';
import { validateNameInput } from '@/utils/validateNameInput/validateNameInput';
import { validatePhoneInput } from '@/utils/validatePhoneInput/validatePhoneInput';

interface CallBackFormEmits {
  (event: 'onClose'): void;
}
interface CallBackFormProps {
  titleModal?: string;
}

defineProps<CallBackFormProps>();

const emits = defineEmits<CallBackFormEmits>();

const { callBackFormState, callBackFormEffects } = useCallBackFormStore();
callBackFormEffects.fetchCallBackForm();

const { isMobile } = useMediaSizes();

const name = ref('');
const phone = ref('');
const hasError = ref(false);
const errorNameInput = ref('');
const errorPhoneInput = ref('');

const onSubmit = () => {
  errorNameInput.value = validateNameInput(name.value);
  errorPhoneInput.value = validatePhoneInput(phone.value);

  if (errorNameInput.value || errorPhoneInput.value) {
    hasError.value = true;
    return;
  }

  hasError.value = false;
  name.value = '';
  phone.value = '';
};

watch(
  () => [name.value, hasError.value],
  () => {
    if (hasError.value) {
      errorNameInput.value = validateNameInput(name.value);
    }
  },
);

watch(
  () => [phone.value, hasError.value],
  () => {
    if (hasError.value) {
      errorPhoneInput.value = validatePhoneInput(phone.value);
    }
  },
);
</script>

<template>
  <div class="callback-form">
    <div class="callback-form__body">
      <div class="callback-form__close">
        <UIButton @click="emits('onClose')"><IcClose :font-controlled="false" :filled="true" /></UIButton>
      </div>
      <div class="callback-form__content">
        <h2 v-if="!titleModal" class="callback-form__title">
          {{ callBackFormState.title }}
        </h2>
        <h2 v-else class="callback-form__title callback-form__title--modal">
          {{ titleModal }}
        </h2>
        <p v-if="!titleModal" class="callback-form__description">{{ callBackFormState.text }}</p>
        <form class="callback-form__form" @submit.prevent="onSubmit">
          <div class="callback-form__inputs">
            <div class="callback-form__input">
              <UIInput
                :value="name"
                type="text"
                label="Имя"
                placeholder="Введите имя"
                :error-message="errorNameInput"
                @on-input="name = $event"
              />
            </div>
            <div class="callback-form__input">
              <UIInput
                :value="phone"
                type="tel"
                label="Телефон"
                :error-message="errorPhoneInput"
                @on-input="phone = $event"
              />
            </div>
          </div>
          <div class="callback-form__button">
            <UIButton tag="button" type="submit" has-full-width>Оставить заявку</UIButton>
          </div>
        </form>
        <p class="callback-form__policy">Нажимая кнопку, вы соглашаетесь с нашей Политикой конфиденциальности</p>
        <ul class="callback-form__socials">
          <li class="callback-form__social">
            <UIButton><IcTelegram :font-controlled="false" :filled="true" /></UIButton>
          </li>
          <li class="callback-form__social">
            <UIButton><IcWhatsapp :font-controlled="false" :filled="true" /></UIButton>
          </li>
        </ul>
      </div>
      <div v-if="!isMobile" class="callback-form__image">
        <NuxtPicture src="/images/callback-form.png" format="webp,png,jpg" loading="lazy" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ui-modal {
  .callback-form {
    &__body {
      padding-top: 81px;
      @include tablet {
        padding-top: 30px;
      }
      @include desktop {
        min-width: 1000px;
      }
    }
    &__close {
      display: block;
      position: absolute;
      right: 0;
      top: -1px;
      z-index: 1;
      .button {
        background: darken($color: #2a2a2a, $amount: 5%);
        border: none;
        border-radius: 0 20px;
        padding: 18px;
        svg {
          @include svg-color(#fff);
        }
      }
    }
    &__image {
      flex: 0 0 399px;
    }
    &__input {
      @include desktop {
        width: 100%;
        min-width: 185px;
      }
    }
  }
}

.callback-form {
  max-width: 1200px;

  &__body {
    position: relative;
    padding: 30px 20px;
    border-radius: 20px;
    border-top: 1px solid var(--black-black-80, #414141);
    background: var(--black-black-90, #2a2a2a);
    @include tablet {
      display: flex;
    }

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

    @include tablet {
      margin-bottom: 8px;
      @include TitleSBold;
    }
  }

  &__title {
    margin-bottom: 40px;
  }

  &__description {
    max-width: 632px;
    margin-bottom: 20px;
    @include BodyMRegular;
    color: var(--black-black-50, #898989);

    @include tablet {
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
  }

  &__social {
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
