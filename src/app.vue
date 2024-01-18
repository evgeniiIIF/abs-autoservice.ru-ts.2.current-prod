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
      rel: 'apple-touch-icon',
      sizes: '57x57',
      href: contactsState.value.data?.favicon?.path,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '60x60',
      href: contactsState.value.data?.favicon?.path,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '72x72',
      href: contactsState.value.data?.favicon?.path,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '76x76',
      href: contactsState.value.data?.favicon?.path,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '114x114',
      href: contactsState.value.data?.favicon?.path,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      href: contactsState.value.data?.favicon?.path,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      href: contactsState.value.data?.favicon?.path,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      href: contactsState.value.data?.favicon?.path,
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: contactsState.value.data?.favicon?.path,
    },
    {
      rel: 'icon',
      sizes: '192x192',
      href: contactsState.value.data?.favicon?.path,
    },
    {
      rel: 'icon',
      sizes: '32x32',
      href: contactsState.value.data?.favicon?.path,
    },
    {
      rel: 'icon',
      sizes: '96x96',
      href: contactsState.value.data?.favicon?.path,
    },
    {
      rel: 'icon',
      sizes: '16x16',
      href: contactsState.value.data?.favicon?.path,
    },
  ],
});
</script>

<template>
  <Html lang="ru">
    <NuxtLayout>
      <NuxtLoadingIndicator color="#00a19c" :height="3" />
      <NuxtPage />
    </NuxtLayout>
  </Html>
</template>

<style lang="scss">
.main {
}
</style>
