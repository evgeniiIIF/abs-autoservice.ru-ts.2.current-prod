<script setup lang="ts">
import { NuxtLink } from '#components';

interface UIButtonProps {
  tag?: 'a' | 'button' | 'NuxtLink';
  type?: 'button' | 'submit';
  fill?: 'solid' | 'outlined';
  size?: 'small' | 'medium' | 'big';
  icon?: { component: Component; slot: 'left' | 'right' };
  isFullWidth?: boolean;
}

withDefaults(defineProps<UIButtonProps>(), {
  type: 'button',
  tag: 'button',
  fill: 'solid',
  size: 'medium',
});
</script>

<template>
  <component
    :is="tag === 'NuxtLink' ? NuxtLink : tag"
    :class="{
      button: true,
      'button--full-container-width': isFullWidth,
      'button--fill-solid': fill === 'solid',
      'button--fill-outlined': fill === 'outlined',
      'button--size-small': size === 'small',
      'button--size-medium': size === 'medium',
      'button--size-big': size === 'big',
    }"
    :type="tag === 'a' ? '' : type"
  >
    <component :is="icon?.component" v-if="icon?.slot === 'left'" />
    <slot />
    <component :is="icon?.component" v-if="icon?.slot === 'right'" />
  </component>
</template>

// to-do убрать scoped
<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 10px;
  border: 2px solid transparent;
  outline: none;
  color: var(--black-black-00, #fff);
  transition: all 0.3s ease;
  cursor: pointer;
  @include buttonText;

  @include hover {
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

  &--full-container-width {
    width: 100%;
  }

  &--fill-small {
    padding: 12px 20px;
  }

  &--fill-medium {
    padding: 13px 24px;
  }

  &--fill-big {
    padding: 16px 24px;
  }

  &--size-solid {
    background: var(--green-primary, #00a19c);
  }

  &--size-outlined {
    background: transparent;
    border-color: var(--green-primary, #00a19c);

    @include hover {
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
}
</style>
