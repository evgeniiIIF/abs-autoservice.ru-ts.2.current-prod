<script setup lang="ts">
defineProps<{ title: string; inputProps: any }>();
const carBrand = ref('');
const onInput = (value: string) => console.log(value);
</script>
<template>
  <div class="question">
    <h6 class="question__title">{{ title }}</h6>
    <div class="question__inputs">
      <div class="question__input-name">
        <UIInput
          :type="inputProps.inputName.type"
          :label="inputProps.inputName.label"
          :placeholder="inputProps.inputName.placeholder"
          :value="carBrand"
          :name="inputProps.inputName.name"
          @onInput="onInput"
        />
      </div>
      <div class="question__input-tel">
        <UIInput
          :type="inputProps.inputTel.type"
          :label="inputProps.inputTel.label"
          :value="carBrand"
          :name="inputProps.inputTel.name"
          @onInput="onInput"
        />
      </div>
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
