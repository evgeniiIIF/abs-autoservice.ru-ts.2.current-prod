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
    <div v-for="input in inputProps" :key="input.name" class="question__input">
      <UIInput
        :type="input.type"
        :label="input.label"
        :placeholder="input.placeholder"
        :value="formData[input.name]"
        :name="input.name"
        :error-message="formDataErrors[input.name]"
        @onInput="onInput($event, input.name)"
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
