<script setup lang="ts">
import { NuxtLink } from '#components';

interface UIButtonProps {
  tag?: 'a' | 'button' | 'NuxtLink';
  type?: 'button' | 'submit';
  hasFullWidth?: boolean;
  withoutFill?: boolean;
  isWrapper?: boolean;
  withArrow?: boolean;
}

withDefaults(defineProps<UIButtonProps>(), {
  type: 'button',
  tag: 'button',
  isWrapper: false,
  hasFullWidth: false,
  withoutFill: false,
  withArrow: false,
});
</script>

<template>
  <component
    :is="tag === 'NuxtLink' ? NuxtLink : tag"
    :class="{
      button: true,
      'button-wrapper': isWrapper,
      'button--full-width': hasFullWidth,
      'button--without-fill': withoutFill,
      'button--with-arrow': withArrow,
    }"
    :type="tag === 'a' ? '' : type"
  >
    <slot />
  </component>
</template>

<!-- <style lang="scss">
.button {
  display: flex;
  padding: 10px 18px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 10px;
  border: 2px solid transparent;
  outline: none;
  width: fit-content;

  background: var(--green-primary, #00a19c);
  color: var(--black-black-00, #fff);
  transition: all 0.3s ease;

  cursor: pointer;
  @include buttonText;

  &:hover {
    background: var(--green-green-90, #1aaba6);
  }

  &:focus {
    border: 2px solid var(--green-green-40, #99d9d7);
  }
  &:active {
    background: var(--green-green-110, #00918d);
  }
  &:disabled {
    background: var(--green-green-40, #99d9d7);
    cursor: not-allowed;
    &:active {
      background: var(--green-green-40, #99d9d7);
    }
  }

  &--full-width {
    width: 100%;
  }

  &--without-fill {
    background: transparent;
    border-color: var(--green-primary, #00a19c);

    &:hover {
      border: 2px solid var(--green-green-40, #99d9d7);
      background: var(--green-green-160, #00403e);
    }

    &:focus {
      border: 2px solid var(--green-green-40, #99d9d7);
      background: var(--green-green-160, #00403e);
    }
    &:active {
      border: 2px solid var(--green-green-40, #99d9d7);
      background: var(--green-green-140, #00615e);
    }
    &:disabled {
      background: var(--green-green-40, #99d9d7);
      cursor: not-allowed;
      &:active {
        background: var(--green-green-40, #99d9d7);
      }
    }
  }

  &--with-arrow {
    align-items: center;
    gap: 8px;
    background: var(--black-black-80, #414141);
  }
}

.button-wrapper {
  padding: 0;
  background: none !important;
  border: none !important;
} -->
<!-- </style> -->
