<script lang="ts" setup>
import { useMediaSizes } from '@/composables/useMediaSizes';

const { isDesktop } = useMediaSizes();
</script>

<template>
  <div class="wrapper">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
    <FooterMobileMenu v-if="!isDesktop" />
  </div>
</template>

<style lang="scss"></style>
