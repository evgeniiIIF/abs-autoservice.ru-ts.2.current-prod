<script setup lang="ts">
import type { VacanciesListModalProps, VacanciesListModalEmits } from './VacanciesListModal.types';

defineProps<VacanciesListModalProps>();
defineEmits<VacanciesListModalEmits>();
</script>

<template>
  <UIModal :is-open="isOpen" position="right" container-class="vacancies-list-modal" @on-close="$emit('onClose')">
    <VacanciesListItemModal :item="item" @on-close="$emit('onClose')" />
  </UIModal>
</template>

<style lang="scss"></style>
