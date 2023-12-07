<script setup lang="ts">
import chat from '@/assets/icons/chat.svg';
import search from '@/assets/icons/search.svg';
import navigation from '@/assets/icons/navigation.svg';
import star from '@/assets/icons/star.svg';
import { useClickOutside } from '@/composables/useClickOutside';

const items = [
  { id: 1, icon: chat },
  { id: 2, icon: search },
  { id: 3, icon: navigation },
  { id: 4, icon: star },
];

const activeItem = ref<number | null>(null);
const menuRef = ref<HTMLDivElement | null>(null);

useClickOutside(menuRef, () => {
  activeItem.value = null;
});

const onClickItem = (item) => {
  activeItem.value = item.id;
};
</script>

<template>
  <div ref="menuRef" class="footer-mobile-menu">
    <ul class="footer-mobile-menu__list">
      <li
        v-for="item in items"
        :key="item.id"
        class="footer-mobile-menu__item"
        :class="{ 'footer-mobile-menu__item--active': activeItem === item.id }"
        @click="onClickItem(item)"
      >
        <component :is="item.icon" :font-controlled="false" :filled="true" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.footer-mobile-menu {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: $z-header;

  margin-top: 31px;
  border-radius: 10px 10px 0px 0px;
  border-top: 1px solid var(--black-black-80, #414141);
  background-color: var(--black-black-90, #2a2a2a);

  &__list {
    display: flex;
    list-style-type: none;
  }

  &__item {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 0;

    &--active {
      border-radius: 10px;
      background: var(--black-black-80, #414141);
    }
  }
}
</style>
