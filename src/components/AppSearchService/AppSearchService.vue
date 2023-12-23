<script setup lang="ts">
import { appRoutes } from '~/appRoutes';
import { useServicesStore } from '~/store/services';

const emits = defineEmits(['onClose']);
defineProps<{ size?: 'content' | 'standard' }>();

const { servicesState } = useServicesStore();

const searchValue = ref('');
const rootNode = ref<HTMLDivElement | null>(null);

const list = computed(() => {
  if (!searchValue.value) {
    return servicesState.value.allServices;
  }

  return servicesState.value.allServices.filter((item) =>
    item.title.toLowerCase().includes(searchValue.value.toLowerCase()),
  );
});

useClickOutside(rootNode, () => emits('onClose'));
</script>

<template>
  <div ref="rootNode" class="app-search-service">
    <div :class="['app-search-service__input', { 'app-search-service__input--size-content': size === 'content' }]">
      <IcSearch class="app-search-service__search-icon" :font-controlled="false" :filled="true" />
      <input
        class="app-search-service__input-field"
        type="text"
        :value="searchValue"
        placeholder="Найти услугу. Например кузовной ремонт"
        @input="searchValue = ($event?.target as HTMLInputElement)?.value"
      />
      <IcClose
        class="app-search-service__close-icon"
        :font-controlled="false"
        :filled="true"
        @click="$emit('onClose')"
      />
    </div>
    <div
      v-if="searchValue.length"
      :class="['app-search-service__dropdown', { 'app-search-service__dropdown--size-content': size === 'content' }]"
    >
      <div v-for="item in list" :key="item.id" class="app-search-service__dropdown-item" @click.stop="$emit('onClose')">
        <NuxtLink class="app-search-service__dropdown-link" :to="appRoutes.services(item.id)">
          {{ item.title }}
        </NuxtLink>
      </div>
      <div v-if="!list.length" class="app-search-service__dropdown-item">Нечего не найдено</div>
    </div>
  </div>
</template>

<style lang="scss">
.app-search-service {
  width: 100%;
  position: relative;

  &__input {
    position: absolute;
    min-width: 600px;
    top: 50%;
    transform: translateY(-50%);

    &--size-content {
      min-width: 100%;
    }
  }

  &__search-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    @include svg-color(var(--black-black-40));
  }

  &__close-icon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 34px !important;
    height: 34px !important;
    @include svg-color(var(--white));
  }

  &__input-field {
    width: 100%;
    border: none;
    padding: 15px 40px;
    border-radius: 10px;
    background: var(--black-black-90, #2a2a2a);
    color: var(--black-black-20, #cbcccc);

    @include BodyMRegular;

    &::placeholder {
      color: var(--black-black-40);
    }
  }

  &__dropdown {
    padding: 14px;
    position: absolute;
    top: 34px;
    max-height: 400px;
    overflow-y: scroll;
    min-width: 600px;
    border-radius: 10px;
    background: var(--black-black-90, #2a2a2a);
    color: var(--black-black-20, #cbcccc);

    &--size-content {
      min-width: 100%;
    }
  }

  &__dropdown-item {
    padding: 8px 16px;
    border-radius: 8px;

    @include hover {
      background: var(--black-black-80);
    }
  }

  &__dropdown-link {
    color: var(--black-black-20, #cbcccc);
  }
}
</style>
