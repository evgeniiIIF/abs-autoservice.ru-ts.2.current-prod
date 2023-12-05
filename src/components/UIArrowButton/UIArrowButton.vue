<script lang="ts" setup>
import arrowRight from '@/assets/icons/arrow-right.svg';
// import arrowLeft from '@/assets/icons/arrow-left.svg';
</script>

<template>
  <button class="arrow-button" type="button">
    <component :is="arrowRight" :font-controlled="false" :filled="true" />
  </button>
</template>
