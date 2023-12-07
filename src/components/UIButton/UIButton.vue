<script setup lang="ts">
interface UIButtonProps {
  tag?: 'a' | 'button';
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
    :is="tag"
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

  &--full-width {
    width: 100%;
  }

  &--without-fill {
    background: transparent;
    border-color: var(--green-primary, #00a19c);

    &:hover {
      background: var(--green-primary, #00a19c);
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
  background: none;
  border: none;
}
</style>
