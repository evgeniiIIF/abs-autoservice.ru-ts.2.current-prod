<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee';

const BRAND_ICONS = [
  { image: 'IcMersLogo', alt: 'Mercedes-Benz', title: 'Mercedes-Benz' },
  { image: 'IcBmwLogo', alt: 'BMV', title: 'BMV' },
  { image: 'IcLandrowerLogo', alt: 'Land Rover', title: 'Land Rover' },
  { image: 'IcAudiLogo', alt: 'Audi', title: 'Audi' },
  { image: 'IcHyndaiLogo', alt: 'Hyundai', title: 'Hyundai' },
  { image: 'IcKiaLogo', alt: 'Kia', title: 'Kia' },
  { image: 'IcVolkswagenLogo', alt: 'Volkswagen', title: 'Volkswagen' },
  { image: 'IcShLogo', alt: 'Škoda', title: 'Škoda' },
  { image: 'IcUnionLogo', alt: 'Union', title: 'Union' },
  { image: 'IcExeelLogo', alt: 'Exeeo', title: 'Exeeo' },
  { image: 'IcAcuraLogo', alt: 'Acura', title: 'Acura' },
  { image: 'IcMiniLogo', alt: 'MINI', title: 'MINI' },
  { image: 'IcHavalLogo', alt: 'Haval', title: 'Haval' },
  { image: 'IcNisanLogo', alt: 'Nissan', title: 'Nissan' },
  { image: 'IcRenoLogo', alt: 'Reno', title: 'Reno' },
  { image: 'IcToyotaLogo', alt: 'Toyota', title: 'Toyota' },
  { image: 'IcCitroenLogo', alt: 'Citroen', title: 'Citroen' },
  { image: 'IcFordLogo', alt: 'Ford', title: 'Ford' },
  { image: 'IcOpelLogo', alt: 'Opel', title: 'Opel' },
  { image: 'IcVolvoLogo', alt: 'Volvo', title: 'Volvo' },
];
</script>
<template>
  <div class="brand-icons-row">
    <div class="container">
      <div class="brand-icons-row__body">
        <ClientOnly>
          <Vue3Marquee :duration="24">
            <div v-for="item in BRAND_ICONS" :key="item.image" class="brand-icons-row__item">
              <!-- eslint-disable-next-line vue/require-component-is -->
              <component :is="item.image" :font-controlled="false" :filled="true" :title="item.title" :alt="item.alt" />
            </div>
          </Vue3Marquee>
        </ClientOnly>
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
    padding: 12px 0;
    display: flex;
    margin-bottom: 20px;
  }
  &__item {
    padding: 0 35px;
  }
}
</style>
