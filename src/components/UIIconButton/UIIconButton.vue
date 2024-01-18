<script setup lang="ts">
import { NuxtLink } from '#components';

interface UIButtonProps {
  tag?: 'a' | 'button' | 'NuxtLink';
  fill?: 'clear' | 'solid' | 'outline';
  color?: 'green' | 'dark';
}

withDefaults(defineProps<UIButtonProps>(), {
  tag: 'button',
  fill: 'solid',
  color: 'green',
});
</script>

<template>
  <component
    :is="tag === 'NuxtLink' ? NuxtLink : tag"
    :class="{
      'icon-button': true,
      'icon-button--fill-clear': fill === 'clear',
      'icon-button--fill-solid': fill === 'solid',
      'icon-button--fill-outline': fill === 'outline',
      'icon-button--color-green': color === 'green',
      'icon-button--color-dark': color === 'dark',
    }"
    :type="tag === 'a' ? '' : 'button'"
  >
    <slot />
  </component>
</template>

<style lang="scss">
.icon-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 10px;
  border: 2px solid transparent;
  outline: none;
  transition: all 0.3s ease;
  cursor: pointer;

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

  &--fill-solid {
    &.icon-button--color-green {
      background: var(--green-primary, #00a19c);

      @include hover {
        background: var(--green-green-90, #1aaba6);
      }
    }

    &.icon-button--color-dark {
      background: var(--black-black-90, #2a2a2a);
    }
  }

  &--fill-outline {
    background: transparent;
    &.icon-button--color-green {
      border: 1px solid var(--Green-Green-80, #33b4b0);
    }
    &.icon-button--color-dark {
      border: 1px solid var(--Black-Black-90, #2a2a2a);
    }

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
