<script setup lang="ts">
import { Vue3Marquee } from 'vue3-marquee';
import { usePartnersStore } from '~/store/partners';

const { partnersState, partnersEffects } = usePartnersStore();

await partnersEffects.fetchPartners();

const BRAND_ICONS = computed(() => partnersState.value.data);
</script>
<template>
  <div class="brand-icons-row">
    <div class="container">
      <div class="brand-icons-row__body">
        <ClientOnly>
          <Vue3Marquee :duration="24">
            <div v-for="item in BRAND_ICONS" :key="item.image_alt" class="brand-icons-row__item">
              <NuxtImg :src="item.logo_image ?? 'undefined'" :title="item.title" :alt="item.image_alt" loading="lazy" />
            </div>
            <div v-for="item in BRAND_ICONS" :key="item.image_alt" class="brand-icons-row__item">
              <NuxtImg :src="item.logo_image ?? 'undefined'" :title="item.title" :alt="item.image_alt" loading="lazy" />
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
    filter: grayscale(100%);
  }
}
</style>
