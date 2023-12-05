<script setup lang="ts">
import { vMaska } from 'maska';

defineProps<{ type: string; label: string; placeholder: string }>();
</script>

<template>
  <label class="input">
    <span class="input__label">{{ label }}</span>
    <textarea
      v-if="type === 'textarea'"
      class="input__input"
      :type="type"
      :value="value"
      :name="name"
      :cols="cols"
      :rows="rows"
      :placeholder="placeholder"
      :maxlength="maxlength"
      @input="onInput"
      @change="onChange"
    >
    </textarea>
    <input
      v-if="type === 'text'"
      class="input__input"
      :pattern="pattern"
      :type="type"
      :name="name"
      :value="value"
      :index="index"
      :placeholder="placeholder"
      :maxlength="maxlength"
      autocomplete="off"
      @input="onInput"
      @change="onChange"
    />
    <input
      v-if="type === 'tel'"
      v-maska
      :data-maska="'+7 (###) ###-##-##'"
      class="input__input"
      :type="type"
      :name="name"
      :value="value"
      :index="index"
      :placeholder="placeholder"
      autocomplete="off"
      @input="onInputTel"
    />
  </label>
</template>

<style lang="scss"></style>
