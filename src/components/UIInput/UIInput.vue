<script lang="ts" setup>
import { vMaska } from 'maska';
import type { UIInputEmits, UIInput } from '@/components/UIInput/UIInput.types';

defineProps<UIInput>();
defineEmits<UIInputEmits>();

const onInputHandler = (event: Event): string => {
  return (event.target as HTMLInputElement).value.replace(/\s+/g, ' ').trim();
};
</script>

<template>
  <div class="input" :class="{ 'input--error': errorMessage }">
    <label class="input__label">
      <span class="input__title">{{ title }}</span>
      <input
        v-if="type === 'phone'"
        v-maska
        class="input__input"
        :data-maska="'+7 (###) ###-##-##'"
        type="tel"
        placeholder="+7 (___) __-__-__"
        :value="modelValue"
        v-bind="$attrs"
        @input="$emit('update:modelValue', onInputHandler($event))"
      />
      <input
        v-else
        class="input__input"
        :type="type"
        :value="modelValue"
        v-bind="$attrs"
        @input="$emit('update:modelValue', onInputHandler($event))"
      />
      <span v-if="errorMessage" class="input__error">{{ errorMessage }}</span>
    </label>
  </div>
</template>

<style lang="scss">
.input {
  position: relative;

  &__title {
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
    bottom: -16px;
    left: 0;

    @include BodyXSRegular;
    color: red;
  }

  &--error {
    .input {
      &__title {
        color: red;
      }

      &__input {
        background-color: indianred;
      }
    }
  }
}
</style>
