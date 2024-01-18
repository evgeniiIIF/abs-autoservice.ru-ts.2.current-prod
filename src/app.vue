<script setup lang="ts">
import { useContactsStore } from './store/contacts';

const { contactsState } = useContactsStore();

useHead({
  meta: [
    {
      name: 'yandex-verification',
      content: '340fa8faf29e96ac',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      href: contactsState.value.data?.favicon?.path ?? '',
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
