<script setup lang="ts">
import type { QuestionProps } from '@/components/SectionCostCalculation/SectionCostCalculation.types';

defineProps<QuestionProps>();
const carBrand = ref('');
const onInput = (value: string) => console.log(value);
</script>
<template>
  <div class="question">
    <h6 class="question__title">{{ title }}</h6>
    <div class="question__inputs">
      <div class="question__input question__input-name">
        <UIInput
          :type="inputProps.inputName.type"
          :label="inputProps.inputName.label"
          :placeholder="inputProps.inputName.placeholder"
          :value="carBrand"
          :name="inputProps.inputName.name"
          @onInput="onInput"
        />
      </div>
      <div class="question__input question__input-tel">
        <UIInput
          :type="inputProps.inputTel.type"
          :label="inputProps.inputTel.label"
          :value="carBrand"
          :name="inputProps.inputTel.name"
          @onInput="onInput"
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
