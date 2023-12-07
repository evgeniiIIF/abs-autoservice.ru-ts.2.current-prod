<script setup lang="ts">
import type { QuestionProps } from '@/components/SectionCostCalculation/SectionCostCalculation.types';

defineProps<QuestionProps>();
</script>
<template>
  <div class="question-end">
    <div class="question-end__title-group">
      <div class="question-end__title question-end__title--top">{{ titleTop }}</div>
      <div class="question-end__title question-end__title--bottom">{{ titleBottom }}</div>
    </div>
    <div class="question-end__text">{{ text }}</div>
  </div>
</template>
<style lang="scss">
.question-end {
  &__title-group {
    margin-bottom: 16px;
  }
  &__title {
    @include SubtitleLBold;
    color: var(--1, #fff);

    @include desktop {
      @include TitleSBold;
    }
  }
  &__title--top {
  }
  &__title--bottom {
  }
  &__text {
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    line-height: 133%;
    font-size: 18px;
    color: #00a19c;
    max-width: 350px;
    // @include tablet {
    //   font-size: 24px;
    // }
    @include desktop {
      font-size: 29px;
      max-width: 500px;
    }
  }
}
</style>
