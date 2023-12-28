<script setup lang="ts">
import { useContactsStore } from './store/contacts';

const { contactsState } = useContactsStore();

console.log(contactsState.value.favicon?.path ?? '');

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      href: contactsState.value.favicon?.path ?? '',
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#00a19c" :height="3" />
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
.main {
}
</style>
