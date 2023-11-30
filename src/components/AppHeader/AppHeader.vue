<script setup lang="ts">
const { isMobile } = useMediaSizes();
</script>
<template>
  <AppHeaderMobile v-if="isMobile" />
  <AppHeaderDesktop v-else />
</template>
