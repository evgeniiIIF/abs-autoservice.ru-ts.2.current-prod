<script lang="ts" setup>
import arrowRight from '@/assets/icons/arrow-right-button.svg';
import arrowLeft from '@/assets/icons/arrow-left-button.svg';
import type { UIArrowButton } from '@/components/UIArrowButton/UIArrowButton.types';

defineProps<UIArrowButton>();
</script>

<template>
  <button class="arrow-button" type="button" :class="[`arrow-button--arrow-${arrowDirection}`, classForSwiper]">
    <component :is="arrowDirection === 'left' ? arrowLeft : arrowRight" :font-controlled="false" :filled="true" />
  </button>
</template>

<style lang="scss">
.arrow-button {
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--black-black-90, #2a2a2a);
  background: var(--black-black-90, #2a2a2a);
  cursor: pointer;
  transition: 0.3s all;

  &--arrow-left {
    border-radius: 10px 0 0 10px;
  }

  &--arrow-right {
    border-radius: 0 10px 10px 0;
  }

  @include hover {
    background: var(--black-black-80, #2a2a2a);
  }
}
</style>
