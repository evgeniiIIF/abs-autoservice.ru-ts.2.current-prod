<script setup lang="ts">
import { appRoutes } from '~/appRoutes';
import { useContactsStore } from '~/store/contacts';

const { contactsState } = useContactsStore();

const { y, directions } = useScroll(window);

const [isOpenSearchModal, openSearchModal, closeSearchModal] = useBooleanState();
const [isOpenContactsMenu, openContactsMenu, closeContactsMenu] = useBooleanState();
const [isShowTooltip, showTooltip, hideTooltip] = useBooleanState(false);

watch(y, () => {
  if (directions.top) showTooltip();
  if (directions.bottom) hideTooltip();
});
</script>

<template>
  <div ref="menuRef" class="footer-mobile-menu js-footer-mobile-menu">
    <ul v-if="!isOpenContactsMenu" class="footer-mobile-menu__list">
      <li class="footer-mobile-menu__item" @click.stop="openContactsMenu">
        <IcChat :font-controlled="false" :filled="true" />
        <div
          :class="['footer-mobile-menu__item-tooltip', { 'footer-mobile-menu__item-tooltip--active': isShowTooltip }]"
        >
          Написать
        </div>
      </li>
      <li class="footer-mobile-menu__item" @click="openSearchModal">
        <IcSearch :font-controlled="false" :filled="true" />
        <div
          :class="['footer-mobile-menu__item-tooltip', { 'footer-mobile-menu__item-tooltip--active': isShowTooltip }]"
        >
          Поиск
        </div>
      </li>
      <li class="footer-mobile-menu__item">
        <NuxtLink :to="appRoutes.contacts()">
          <IcNavigation :font-controlled="false" :filled="true" />
        </NuxtLink>
        <div
          :class="['footer-mobile-menu__item-tooltip', { 'footer-mobile-menu__item-tooltip--active': isShowTooltip }]"
        >
          Контакты
        </div>
      </li>
      <li class="footer-mobile-menu__item">
        <NuxtLink :to="appRoutes.services()">
          <IcStar :font-controlled="false" :filled="true" />
        </NuxtLink>
        <div
          :class="['footer-mobile-menu__item-tooltip', { 'footer-mobile-menu__item-tooltip--active': isShowTooltip }]"
        >
          Услуги
        </div>
      </li>
    </ul>
    <ul v-if="isOpenContactsMenu" class="footer-mobile-menu__list">
      <li class="footer-mobile-menu__item" @click.stop="closeContactsMenu">
        <IcClose :font-controlled="false" :filled="true" />
      </li>
      <li v-for="contact in contactsState.data?.social_network" :key="contact.url" class="footer-mobile-menu__item">
        <a :href="contact?.url" target="_blank" rel="noopener noreferrer">
          <img :src="contact?.icon_social" :alt="contact?.title" />
        </a>
      </li>
    </ul>
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
  min-height: 60px;

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
    flex-wrap: wrap;
    align-items: center;
    padding: 12px 0;

    svg {
      @include svg-color(var(--white));
      width: 30px;
      height: 32px;
    }
  }

  &__item-tooltip {
    width: 100%;
    text-align: center;
    color: var(--white);
    height: 0px;
    overflow: hidden;
    transition: 0.3s all;

    @include BodyXSRegular;

    &--active {
      height: 18px;
    }
  }
}
</style>
