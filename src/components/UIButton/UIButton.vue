<script setup lang="ts">
interface UIButtonProps {
  tag?: 'a' | 'button';
  type?: 'button' | 'submit';
  hasFullWidth?: boolean;
  withoutFill?: boolean;
  isWrapper?: boolean;
}

withDefaults(defineProps<UIButtonProps>(), {
  type: 'button',
  tag: 'button',
  isWrapper: false,
  hasFullWidth: false,
  withoutFill: false,
});
</script>

<template>
  <component
    :is="tag"
    :class="{
      button: true,
      'button-wrapper': isWrapper,
      'button--full-width': hasFullWidth,
      'button--without-fill': withoutFill,
    }"
    :type="tag === 'a' ? '' : type"
  >
    <slot />
  </component>
</template>

<style lang="scss">
.button {
  display: flex;
  padding: 10px 18px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 10px;
  border: 2px solid transparent;
  outline: none;

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
}

.button-wrapper {
  padding: 0;
  background: none;
  border: none;
}
</style>
