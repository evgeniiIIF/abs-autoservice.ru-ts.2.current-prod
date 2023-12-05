<script setup lang="ts">
defineProps<{ title: string; type: string; label: string; placeholder: string }>();
</script>
<template>
  <div class="question">
    <h6 class="question__title">{{ title }}</h6>
    <div class="question__input">
      <UIInputEvg :type="type" :label="label" :placeholder="placeholder" />
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
    .input {
      &__label {
        @include BodySRegular;
        color: var(--black-black-40, #999);
      }
    }
  }
}
</style>
