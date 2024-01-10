<script lang="ts" setup>
interface CompanyPictureProps {
  image: string;
  alt: string;
}

defineProps<CompanyPictureProps>();

const { isDesktop } = useMediaSizes();
</script>

<template>
  <div class="company-picture">
    <div class="company-picture__container">
      <div v-if="isDesktop" class="company-picture__ellipse"></div>
      <NuxtPicture :src="image" loading="lazy" :alt="alt" />
    </div>
  </div>
</template>

<style lang="scss">
.company-picture {
  &__container {
    @include container;
    position: relative;
  }

  &__ellipse {
    position: absolute;
    width: 255px;
    height: 255px;
    right: -58px;
    top: 124px;
    background: #00a19c;
    opacity: 0.34;
    filter: blur(70px);
    z-index: 0;
  }

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
