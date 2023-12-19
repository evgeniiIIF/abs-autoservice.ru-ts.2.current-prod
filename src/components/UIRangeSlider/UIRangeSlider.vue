<!-- https://github.com/vueform/slider -->
<script setup lang="ts">
import Slider from '@vueform/slider';

const bonusSliderPercent = ref(0);
const howMachSpendCount = computed(() => bonusSliderPercent.value * 1000);
const bonusAmountCount = computed(() => Math.floor(howMachSpendCount.value * 0.1155));
</script>

<template>
  <ClientOnly>
    <Slider v-model="bonusSliderPercent" :lazy="false" :tooltips="false" orientation="horizontal" />
  </ClientOnly>
</template>
<style src="@vueform/slider/themes/default.css"></style>

<style lang="scss">
:root {
  --slider-connect-bg: var(--2, #00a19c);
  --slider-height: 10px;
  --slider-handle-width: 31px;
  --slider-handle-height: 31px;
}
</style>
