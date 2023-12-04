<script setup lang="ts">
interface UIButtonProps {
  tag?: 'a' | 'button';
  type?: 'button' | 'submit';
  isWrapper: boolean;
}

withDefaults(defineProps<UIButtonProps>(), {
  type: 'button',
  tag: 'button',
  isWrapper: false,
});
</script>

<template>
  <component :is="tag" :class="{ button: true, 'button-wrapper': isWrapper }" :type="tag === 'a' ? '' : type">
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
}

.button-wrapper {
  padding: 0;
  background: none;
  border: none;
}
</style>
