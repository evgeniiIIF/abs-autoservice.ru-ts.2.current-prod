<script setup lang="ts">
import type { AppSearchServiceModalEmits, AppSearchServiceModalProps } from './AppSearchServiceModal.types';

defineProps<AppSearchServiceModalProps>();
defineEmits<AppSearchServiceModalEmits>();
</script>

<template>
  <UIModal :is-open="isOpen" position="center" container-class="app-search-modal-props" @on-close="$emit('onClose')">
    <AppSearchService size="content" @on-close="$emit('onClose')" />
  </UIModal>
</template>

<style lang="scss">
.app-search-modal-props {
  width: 100%;
  position: absolute;
  top: 40px;
}
</style>
