<script setup lang="ts">
import type { VacanciesListModalProps } from './VacanciesListModal.types';

defineProps<VacanciesListModalProps>();
</script>

<template>
  <UIModal :is-open="isOpen" position="right" container-class="vacancies-list-modal" @on-close="$emit('onClose')">
    <VacanciesListItemModal :item="item" @on-close="$emit('onClose')" />
  </UIModal>
</template>

<style lang="scss"></style>
