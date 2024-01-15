<script setup lang="ts">
interface AppNavigationProps {
  items: { name: string; link?: string; onClick?: () => void; dropdown?: { name: string; link?: string }[] }[];
}
defineProps<AppNavigationProps>();
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <AppNavigationItem
        v-for="item in items"
        :key="item.name"
        class="nav__item"
        :name="item.name"
        :link="item.link"
        :dropdown="item.dropdown"
      />
    </ul>
  </nav>
</template>

<style lang="scss">
.nav {
  &__list {
    list-style: none;
  }

  &__link {
    cursor: pointer;
  }
}
</style>
