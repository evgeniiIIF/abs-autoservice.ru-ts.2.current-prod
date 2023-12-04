<script lang="ts" setup>
import type { CompanyPicture } from '~/components/CompanyPicture/CompanyPicture.types';

defineProps<CompanyPicture>();
</script>

<template>
  <div class="company-picture">
    <div class="container">
      <NuxtPicture :src="src" loading="lazy" :alt="alt" />
    </div>
  </div>
</template>

<style lang="scss">
.company-picture {
  img {
    width: 100%;
    aspect-ratio: 3 / 1;
    border-radius: 20px;
    object-fit: cover;

    @include tablet {
      border-radius: 40px;
    }
  }
}
</style>
