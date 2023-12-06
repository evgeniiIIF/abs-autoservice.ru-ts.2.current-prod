<script setup lang="ts">
import type { QuestionProps } from '@/components/SectionCostCalculation/SectionCostCalculation.types';

defineProps<QuestionProps>();

const carBrand = ref('');
const onInput = (value: string) => console.log(value);
</script>
<template>
  <div class="question">
    <h6 class="question__title">{{ title }}</h6>
    <div class="question__input">
      <UIInput
        :type="inputProps.type"
        :label="inputProps.label"
        :placeholder="inputProps.placeholder"
        :value="carBrand"
        :name="inputProps.name"
        @onInput="onInput"
      />
    </div>
  </div>
</template>
<style lang="scss">
.question {
  &__title {
    @include SubtitleMBold;
    color: var(--black-black-00, #fff);
    margin-bottom: 16px;
  }
  &__input {
    max-width: 300px;

    .input {
      &__label {
        @include BodySRegular;
        color: var(--black-black-40, #999);
      }
    }
  }
}
</style>
