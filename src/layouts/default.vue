<script lang="ts" setup>
import { useMediaSizes } from '@/composables/useMediaSizes';

const { isDesktop } = useMediaSizes();
</script>

<template>
  <div class="wrapper">
    <AppHeader />
    <main class="main">
      <slot />
    </main>
    <AppFooter />
    <FooterMobileMenu v-if="!isDesktop" />
  </div>
</template>

<style lang="scss">
.main {
  margin-top: 67.75px;

  @include desktop {
    margin-top: 89px;
  }
}
</style>
