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
}
</style>
