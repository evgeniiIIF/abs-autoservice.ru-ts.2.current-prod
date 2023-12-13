<script setup lang="ts">
const { isMobile, isTablet, isDesktop } = useMediaSizes();
</script>
<template>
  <AppHeaderMobile v-if="isTablet || isMobile || isDesktop" />
  <AppHeaderDesktop v-else />
</template>

<style>
/* <h1 class="h">
  {{ isMobile + '  ' + isTablet + ' ' + isDesktop + ' ' + isXl + ' ' + isXxl }}
</h1>
.h {
  margin-top: 300px;
  font-size: 145px;
} */
</style>
