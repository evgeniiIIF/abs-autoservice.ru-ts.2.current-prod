<script setup lang="ts">
// import { Vue3Marquee } from 'vue3-marquee';

const brandIconsRowItems = [
  { image: 'IcMersLogo' },
  { image: 'IcBmwLogo' },
  { image: 'IcLandrowerLogo' },
  { image: 'IcAudiLogo' },
  { image: 'IcHyndaiLogo' },
  { image: 'IcKiaLogo' },
  { image: 'IcVolkswagenLogo' },
  { image: 'IcShLogo' },
  { image: 'IcUnionLogo' },
  { image: 'IcExeelLogo' },
  { image: 'IcAcuraLogo' },
  { image: 'IcMiniLogo' },
  { image: 'IcHavalLogo' },
  { image: 'IcNisanLogo' },
  { image: 'IcRenoLogo' },
  { image: 'IcToyotaLogo' },
];
</script>
<template>
  <div class="brand-icons-row">
    <div class="container">
      <div class="brand-icons-row__body">
        <!-- <ClientOnly>
          <Vue3Marquee :duration="24"> -->
        <div v-for="item in brandIconsRowItems" :key="item.image" class="brand-icons-row__item">
          <!-- eslint-disable-next-line vue/require-component-is -->
          <component :is="item.image" :font-controlled="false" :filled="true" />
        </div>
        <!-- </Vue3Marquee>
        </ClientOnly> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.brand-icons-row {
  .container {
    max-width: 100%;
  }
  &__body {
    display: flex;
    // justify-content: space-between;
  }
  &__item {
    // margin: 0 35px;
  }
}
</style>
