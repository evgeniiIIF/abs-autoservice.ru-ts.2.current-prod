<script lang="ts" setup>
interface CompanyPictureProps {
  image: string;
  alt: string;
}

defineProps<CompanyPictureProps>();
</script>

<template>
  <div class="company-picture">
    <div class="container">
      <NuxtPicture :src="image" loading="lazy" :alt="alt" />
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
