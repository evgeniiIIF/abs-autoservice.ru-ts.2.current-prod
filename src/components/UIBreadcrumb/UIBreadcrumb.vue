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
        <li v-for="(item, index) in items" :key="item.name" class="breadcrumb__item">
          <NuxtLink v-if="index !== items.length - 1" class="item-breadcrumb__name" :to="item.link">{{
            item.name
          }}</NuxtLink>
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
    overflow-y: scroll;
    padding: 20px 0;

    @include no-scrollbar;
  }

  &__item {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }
}
.item-breadcrumb {
  display: flex;
  align-items: center;

  &__name {
    color: var(--Black-Black-80, #414141);
    white-space: nowrap;
    @include BodySRegular;
  }

  &__arrow {
    display: flex;
    align-items: center;
    margin: 0 4px;
    svg {
      @include svg-color(#414141);
    }
  }
}
</style>
