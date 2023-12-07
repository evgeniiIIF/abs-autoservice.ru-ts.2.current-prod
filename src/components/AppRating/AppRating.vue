<script lang="ts" setup>
import type { AppRating } from '@/components/AppRating/AppRating.types';

defineProps<AppRating>();
</script>

<template>
  <IcStarRating v-for="star in rating" :key="star" :font-controlled="false" :filled="true" />
  <IcStarRating v-for="emptyStar in 5 - rating" :key="emptyStar" :font-controlled="false" :filled="true" />
</template>
