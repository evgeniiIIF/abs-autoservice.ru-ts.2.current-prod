<script setup lang="ts">
import type { CallbackFormModalProps, CallbackFormModalEmits } from './CallbackFormModal.types';

defineProps<CallbackFormModalProps>();
defineEmits<CallbackFormModalEmits>();
</script>

<template>
  <UIModal :is-open="isOpen" position="center" container-class="callback-form-modal" @on-close="$emit('onClose')">
    <CallbackForm :title-modal="titleModal" />
  </UIModal>
</template>

<style lang="scss">
.callback-form-modal {
  max-width: 1200px;
  width: 100%;
}
</style>
