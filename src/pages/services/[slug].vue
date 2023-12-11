<script lang="ts" setup>
import { useMediaSizes } from '@/composables/useMediaSizes';

const { isDesktop } = useMediaSizes();
</script>

<template>
  <div>
    <SectionService />
    <CompanyPicture v-if="isDesktop" src="/images/company-2.png" alt="Зал автосервиса" />
    <ServicePopularServices />
    <CallbackForm />
  </div>
</template>
