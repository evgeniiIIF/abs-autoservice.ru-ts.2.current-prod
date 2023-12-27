<script setup lang="ts">
import { appRoutes } from '~/appRoutes';

const [isCAllbackOpenModal, openCAllbackModal, closeCallbackModal] = useBooleanState();
const [isOpenSearchModal, openSearchModal, closeSearchModal] = useBooleanState();
</script>

<template>
  <div ref="menuRef" class="footer-mobile-menu js-footer-mobile-menu">
    <ul class="footer-mobile-menu__list">
      <li class="footer-mobile-menu__item" @click="openCAllbackModal">
        <IcChat :font-controlled="false" :filled="true" />
      </li>
      <li class="footer-mobile-menu__item" @click="openSearchModal">
        <IcSearch :font-controlled="false" :filled="true" />
      </li>
      <li class="footer-mobile-menu__item">
        <NuxtLink :to="appRoutes.contacts()">
          <IcNavigation :font-controlled="false" :filled="true" />
        </NuxtLink>
      </li>
      <li class="footer-mobile-menu__item">
        <NuxtLink :to="appRoutes.reviews()">
          <IcStar :font-controlled="false" :filled="true" />
        </NuxtLink>
      </li>
    </ul>
    <CallbackFormModal :is-open="isCAllbackOpenModal" @on-close="closeCallbackModal" />
    <AppSearchServiceModal :is-open="isOpenSearchModal" @on-close="closeSearchModal" />
  </div>
</template>

<style lang="scss">
.footer-mobile-menu {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: $z-header;

  border-radius: 10px 10px 0 0;
  border-top: 1px solid var(--black-black-80, #414141);
  background-color: var(--green-primary, #2a2a2a);

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
  }
}
</style>
