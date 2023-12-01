<script setup lang="ts">
const { isDesktop } = useMediaSizes();
</script>
<template>
  <AppHeaderMobile v-if="!isDesktop" />
  <AppHeaderDesktop v-else />
</template>
<style lang="scss"></style>
