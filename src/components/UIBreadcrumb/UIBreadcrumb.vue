<script setup lang="ts">
interface UIBreadcrumbItem {
  name: string;
  link: string;
}
interface UIBreadcrumbProps {
  items: UIBreadcrumbItem[];
}

defineProps<UIBreadcrumbProps>();
</script>

<template>
  <div class="breadcrumb">
    <div class="container">
      <ul class="breadcrumb__list">
        <li class="breadcrumb__item item-breadcrumb">
          <NuxtLink class="item-breadcrumb__name" to="/">
            <IcHome :font-controlled="false" :filled="true" />
          </NuxtLink>
          <div class="item-breadcrumb__arrow"><IcArrowRight :font-controlled="false" :filled="true" /></div>
        </li>
        <li class="breadcrumb__item" v-for="(item, index) in items" :key="item.name">
          <NuxtLink v-if="index !== items.length - 1" class="item-breadcrumb__name" to="">{{ item.name }}</NuxtLink>
          <div v-else class="item-breadcrumb__name">{{ item.name }}</div>
          <div v-if="index !== items.length - 1" class="item-breadcrumb__arrow">
            <IcArrowRight :font-controlled="false" :filled="true" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.breadcrumb {
  &__list {
    display: flex;
    align-items: center;
    padding: 20px 0;
  }

  &__item {
  }
}
.item-breadcrumb {
  display: flex;
  align-items: center;

  &__name {
    color: var(--Black-Black-80, #414141);
    @include BodySRegular;
  }

  &__arrow {
    margin: 0 4px;
    svg {
      @include svg-color(#414141);
    }
  }
}
</style>
