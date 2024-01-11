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

<style lang="scss">
.vacancies-list-modal {
  padding: 100px 0;
  @include tablet {
    padding: 0;
  }
  @include desktop {
    padding: 0;
  }
}
</style>
