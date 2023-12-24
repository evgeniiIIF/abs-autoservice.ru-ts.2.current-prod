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
        :maxlength="input?.maxLength"
        :pattern="input?.pattern"
        @onInput="onInput($event, input.name)"
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
