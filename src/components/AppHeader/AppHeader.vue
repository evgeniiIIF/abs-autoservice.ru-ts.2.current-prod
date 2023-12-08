<script setup lang="ts">
import { getScrollWidth } from './AppHeader.utils';

const { isDesktop } = useMediaSizes();
const headerNode = ref();
onBeforeMount(() => {
  headerNode.value = document.querySelector('.js-header');
  headerNode.value.style.width = `calc(100% - ${getScrollWidth()}px)`;
});
</script>
<template>
  <AppHeaderMobile v-if="!isDesktop" />
  <AppHeaderDesktop v-else />
</template>
<style lang="scss"></style>
