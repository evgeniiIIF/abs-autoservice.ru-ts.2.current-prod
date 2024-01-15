<script setup lang="ts">
import type { GuaranteeCardProps } from './GuaranteeCard.types';

defineProps<GuaranteeCardProps>();
</script>

<template>
  <div class="guarantee-card">
    <NuxtPicture
      class="guarantee-card__picture"
      :src="image?.img_path"
      :title="image?.img_title"
      :alt="image?.img_alt"
    />
    <div class="guarantee-card__title">{{ title }}</div>
    <div class="guarantee-card__description">{{ description }}</div>
  </div>
</template>

<style lang="scss">
.guarantee-card {
  padding: 20px;
  background: linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%),
    linear-gradient(180deg, #2a2a2a 0%, rgba(42, 42, 42, 0) 100%);
  border-radius: 20px;
  border: 1px solid;
  border-image-source: linear-gradient(180deg, #2A2A2A 0%, rgba(42, 42, 42, 0) 100%);

  &__picture {
    display: block;
    width: 50px;
    height: 50px;
    object-fit: cover;
  }

  &__title {
    margin-top: 40px;
    color: var(--white);

    @include SubtitleSBold;
  }

  &__description {
    margin-top: 8px;
    color: var(--black-black-50);

    @include BodyMRegular;
  }
}
</style>
