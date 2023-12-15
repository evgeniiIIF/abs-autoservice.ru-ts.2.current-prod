<script lang="ts" setup>
import { useHomeStore } from '~/store/home';

const { homeState } = useHomeStore();
const aboutImg = computed(() => homeState.value.about_img);
</script>

<template>
  <div class="company-picture">
    <div class="container">
      <NuxtPicture :src="aboutImg" loading="lazy" alt="автосервис ставрополь" />
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
