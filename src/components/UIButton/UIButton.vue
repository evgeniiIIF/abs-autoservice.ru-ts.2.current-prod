<script setup lang="ts">
interface UIButtonProps {
  tag?: 'a' | 'button';
  type?: 'button' | 'submit';
  hasFullWidth?: boolean;
  isWrapper: boolean;
}

withDefaults(defineProps<UIButtonProps>(), {
  type: 'button',
  tag: 'button',
  isWrapper: false,
  hasFullWidth: false,
});
</script>

<template>
  <component
    :is="tag"
    :class="{ button: true, 'button-wrapper': isWrapper, 'button--full-width': hasFullWidth }"
    :type="tag === 'a' ? '' : type"
  >
    <slot />
  </component>
</template>

<style lang="scss">
.button {
  display: flex;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 10px;
  border: 2px solid transparent;

  background: var(--green-primary, #00a19c);
  color: var(--black-black-00, #fff);

  cursor: pointer;
  @include buttonText;

  &--full-width {
    width: 100%;
  }
}

.button-wrapper {
  padding: 0;
  background: none;
  border: none;
}
</style>
