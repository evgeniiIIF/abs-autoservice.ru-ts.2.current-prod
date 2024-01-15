<script setup lang="ts">
import debounce from 'lodash.debounce';

defineProps<{ name: string; link?: string; dropdown?: { name: string; link?: string }[] }>();

const route = useRoute();

const [isVisibleDropdown, showDropdown, hideDropdown] = useBooleanState();

const handleMouseEnter = debounce(() => {
  showDropdown();
}, 200);

const handleMouseLeave = () => {
  handleMouseEnter.cancel();
  hideDropdown();
};

watch(() => route.fullPath, handleMouseLeave);
</script>

<template>
  <!-- eslint-disable-next-line vuejs-accessibility/mouse-events-have-key-events -->
  <li class="nav__item" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <NuxtLink class="nav__link" active-class="nav__link--active" :to="link">{{ name }}</NuxtLink>
    <div v-if="dropdown?.length && isVisibleDropdown" class="app-navigation-dropdown">
      <NuxtLink
        v-for="subLink in dropdown"
        :key="subLink.name"
        class="app-navigation-dropdown__item"
        :to="subLink.link"
      >
        {{ subLink.name }}
      </NuxtLink>
    </div>
  </li>
</template>

<style lang="scss">
.nav__item {
  position: relative;
}

.app-navigation-dropdown {
  position: absolute;
  left: -5px;
  top: 95%;
  padding: 10px;
  background: var(--black-black-90);
  border-radius: 10px;
  min-width: 245px;

  &__item {
    padding: 12px;
    border-radius: 10px;
    color: var(--black-black-40);

    @include BodyLRegular;

    @include hover {
      color: var(--white);
      background: var(--Black-Black-80, #414141);
      text-decoration: underline;
    }
  }
}
</style>
