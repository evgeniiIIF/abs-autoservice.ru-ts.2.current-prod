<script lang="ts" setup>
import { useMediaSizes } from '@/composables/useMediaSizes';

const route = useRoute();
const { isDesktop } = useMediaSizes();

const { scrollTo } = useScrollTo();

watch(
  () => route.fullPath,
  () => scrollTo(),
);
</script>

<template>
  <div ref="nodeRef" class="wrapper">
    <AppHeader />
    <main class="main">
      <slot />
      <SectionBrandIconsRow v-if="isDesktop" />
    </main>
    <AppFooter />
    <FooterMobileMenu v-if="!isDesktop" />
  </div>
</template>

<style lang="scss">
.wrapper {}
</style>
