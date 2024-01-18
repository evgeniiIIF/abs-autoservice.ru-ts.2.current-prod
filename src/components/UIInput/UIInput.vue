<script lang="ts" setup>
import { vMaska } from 'maska';
import type { UIInputEmits, UIInputProps } from '@/components/UIInput/UIInput.types';

defineProps<UIInputProps>();
defineOptions({
  inheritAttrs: false,
});
const emits = defineEmits<UIInputEmits>();

const onInputHandler = (event: Event): void => {
  const value = (event.target as HTMLInputElement).value.replace(/\s+/g, ' ').trim();
  emits('onInput', value);
};
const onChangeHandler = (event: Event): void => {
  const value = (event.target as HTMLInputElement).value.replace(/\s+/g, ' ').trim();
  emits('onChange', value);
};
</script>

<template>
  <label class="input" :class="{ 'input--error': errorMessage }">
    <span class="input__label">{{ label }}</span>
    <textarea
      v-if="type === 'textarea'"
      class="input__input"
      :value="value"
      v-bind="$attrs"
      @input="onInputHandler"
      @change="onChangeHandler"
    >
    </textarea>
    <input
      v-if="type === 'tel'"
      v-maska
      class="input__input"
      :data-maska="'+7 (###) ###-##-##'"
      type="tel"
      placeholder="+7 (___) __-__-__"
      :value="value"
      v-bind="$attrs"
      @input="onInputHandler"
      @change="onChangeHandler"
    />
    <input
      v-if="type === 'text'"
      class="input__input"
      :type="type"
      :value="value"
      v-bind="$attrs"
      @input="onInputHandler"
      @change="onChangeHandler"
    />
    <span v-if="errorMessage" class="input__error" :style="{ top: type === 'textarea' ? '105px' : '70px' }">{{
      errorMessage
    }}</span>
  </label>
</template>

<style lang="scss">
.input {
  position: relative;

  &__label {
    @include BodySRegular;
    color: var(--black-black-40, #999);
  }

  &__input {
    width: 100%;
    padding: 12px 16px;
    @include BodyMRegular;
    color: var(--black-black-20, #cbcccc);
    background-color: var(--black-black-60, #717171);
    border-radius: 10px;
    outline: none;
    border: none;

    &::placeholder {
      color: var(--black-black-20, #cbcccc);
    }
  }

  &__error {
    position: absolute;
    left: 0;

    @include BodyXSRegular;
    line-height: 1;
    color: red;
  }

  &--error {
    .input {
      &__label {
        color: red;
      }

      &__input {
        background-color: indianred;
      }
    }
  }
}
</style>
