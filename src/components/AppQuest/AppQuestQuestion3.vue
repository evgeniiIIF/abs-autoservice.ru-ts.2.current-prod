<script setup lang="ts">
import type { QuestionProps } from '@/components/SectionCostCalculation/SectionCostCalculation.types';

defineProps<QuestionProps>();
const emits = defineEmits<{ (event: 'onChange', data: { [x: string]: string }): void }>();

const onInput = (value: string, name: string) => {
  emits('onChange', { [name]: value });
};
</script>

<template>
  <div class="question">
    <h6 class="question__title">{{ title }}</h6>
    <div class="question__inputs">
      <div v-for="input in inputProps" :key="input.name" class="question__input question__input">
        <UIInput
          :type="input.type"
          :label="input.label"
          :placeholder="input.placeholder"
          :value="formData[input.name]"
          :name="input.name"
          :errorMessage="formDataErrors[input.name]"
          @onInput="onInput($event, input.name)"
        />
      </div>
    </div>
    <div class="question__privacy-policy">
      Нажимая кнопку “Завершить” вы соглашаетесь с нашей
      <span class="question__privacy-policy-link">Политикой конфиденциальности </span>
    </div>
  </div>
</template>

<style lang="scss">
.question {
  &__inputs {
    // max-width: 300px;
    @include mb(20px);
    margin-bottom: 8px;
    @include media($xl) {
      display: flex;
      @include mr(20px);
    }
  }

  &__input {
    textarea {
      resize: none;
      height: 80px;
      overflow-y: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;
      overflow: -moz-scrollbars-none;
    }
  }

  &__privacy-policy {
    max-width: 300px;
    text-align: left;
    @include BodySRegular;
    color: var(--black-black-40, #999);
  }

  &__privacy-policy-link {
    white-space: nowrap;
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
