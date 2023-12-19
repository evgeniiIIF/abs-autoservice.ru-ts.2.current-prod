<script setup lang="ts">
interface AppNavigationProps {
  items: { name: string; link: string }[];
}
defineProps<AppNavigationProps>();
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li v-for="item in items" :key="item.name" class="nav__item">
        <NuxtLink class="nav__link" active-class="nav__link--active" :to="item.link">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.nav {
  &__link {
    cursor: pointer;
  }
}
</style>
