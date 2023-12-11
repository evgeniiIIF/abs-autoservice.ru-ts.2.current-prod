<script setup lang="ts">
defineProps<{
  link: string;
  img: string | Object;
  background?: 'gray' | 'green';
  withBorder?: boolean;
}>();
</script>

<template>
  <a
    class="social"
    :href="link || '#'"
    target="_blank"
    rel="noopener"
    :class="{
      'social--background-gray': background === 'gray',
      'social--background-green': background === 'green',
      'social--with-border': withBorder,
    }"
  >
    <component :is="img" class="social__icon" :font-controlled="false" :filled="true" />
  </a>
</template>

<style lang="scss">
.social {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 10px;

  &--background-gray {
    background-color: var(--black-black-80, #414141);
  }

  &--background-green {
    background-color: var(--green-primary, #00a19c);
  }

  &--with-border {
    border-radius: 10px;
    border: 2px solid var(--green-primary, #00a19c);
  }
}
</style>
