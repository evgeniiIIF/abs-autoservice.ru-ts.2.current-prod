<script setup lang="ts">
import { privacyHttp } from '~/api/http';

const response = await privacyHttp.getPrivacyInfo();

definePageMeta({
  layout: 'privacy',
});

useSeoMeta({
  title: response.data.value?.data.title,
  description: response.data.value?.data.title,
});
</script>

<template>
  <div v-html="response.data.value?.data.privacy_content"></div>
</template>
