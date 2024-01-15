<script lang="ts" setup>
import { appRoutes } from '~/appRoutes';
import { useContactsStore } from '~/store/contacts';
import { useMenuStore } from '~/store/menu';

const { y } = useWindowScroll();

const { contactsState } = useContactsStore();
const { menuState } = useMenuStore();

const [isOpenModal, openModal, closeModal] = useBooleanState();
const [isSearchOpen, openSearch, closeSearch] = useBooleanState();

const navItems = computed(() =>
  menuState.value.header.top_menu
    .filter((item) => item.is_active)
    .map((item) => ({
      name: item.title,
      link: item.url,
      dropdown: item.dropdown
        ?.filter((subitem) => subitem.is_active)
        ?.map((subitem) => ({ name: subitem.title, link: subitem.url })),
    })),
);
const topNavItems = computed(() =>
  menuState.value.header.header_menu
    .filter((item) => item.is_active)
    .map((item) => ({
      name: item.title,
      link: item.url,
    })),
);
</script>

<template>
  <header class="header-desktop">
    <div :class="['header-desktop__top', 'header-desktop-top', { 'header-desktop-top--invisible': y > 100 }]">
      <address class="header-desktop-top__address">
        <div class="header-desktop-top__address-icon"><IcNavigation :font-controlled="false" :filled="true" /></div>
        <p class="header-desktop-top__address-text">{{ contactsState.data?.address }}</p>
      </address>
      <div class="header-desktop-top__nav">
        <AppNavigation :items="topNavItems" />
      </div>
      <div class="header-desktop-top__social">
        <AppSocial />
      </div>
    </div>

    <div class="header-desktop__body">
      <NuxtLink :to="appRoutes.main()" class="header-desktop__logo">
        <NuxtImg
          :src="contactsState.data?.logo?.logo_path"
          :alt="contactsState.data?.logo?.alt"
          :title="contactsState.data?.logo?.title"
        />
      </NuxtLink>
      <div class="header-desktop__nav">
        <div class="header-desktop__nav-button">
          <UIIconButton v-if="!isSearchOpen" color="dark" @click.stop="openSearch">
            <IcSearch :font-controlled="false" :filled="true" />
          </UIIconButton>
          <AppSearchService v-if="isSearchOpen" @on-close="closeSearch" />
        </div>
        <AppNavigation :items="navItems" />
      </div>
      <div class="header-desktop__contacts contacts-header-desktop">
        <div class="contacts-header-desktop__feedback feedback">
          <div class="feedback__tel">
            <UITel :phoneNumber="contactsState.data?.phone ?? ''" />
          </div>
          <button type="button" class="feedback__button" @click="openModal">обратный звонок</button>
        </div>
        <div class="contacts-header-desktop__button">
          <UINewButton size="big" @click="openModal">Записаться на сервис</UINewButton>
        </div>
        <CallbackFormModal :is-open="isOpenModal" @on-close="closeModal" />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.main {
  margin-top: 67.75px;
}

@include desktop {
  .main {
    margin-top: 129.47px;
  }

  .hide-header-top {
    .main {
      margin-top: 89.48px;
    }
    .header-desktop {
      transform: translateY(-40px);
      transition: transform 0.3s ease 0s;
    }
  }
}

.header-desktop-top {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0px 20px;
  border-radius: 0px 0px 10px 10px;
  background: var(--black-black-90, #2a2a2a);
  transition: 0.3s;

  &--invisible {
    height: 0;
  }

  @include media($xxl) {
    padding: 0px 40px;
  }

  &__address {
    display: flex;
    align-items: center;
    margin-right: 40px;
    @include media(1150px) {
      margin-right: 95px;
    }
  }

  &__address-icon {
    margin-right: 8px;
    svg {
      width: 20px;
      height: 20px;
      @include svg-color(#00a19c);
    }
  }

  &__address-text {
    color: var(--black-black-40, #999);
    @include BodySRegular;
  }

  &__nav {
    flex: 1 1 auto;

    .nav__list {
      display: flex;
      @include mr(32px);
    }

    .nav__link {
      color: var(--black-black-40, #999);
      @include BodySRegular;
    }

    .nav__link--active {
      color: var(--Black-Black-00, #fff);
    }
  }

  &__social {
    .social {
      gap: 4px;
      svg {
        margin: -4px;
      }
    }
  }
}

.header-desktop {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: $z-header;
  transition: transform 0.3s ease 0s;

  &__body {
    display: flex;
    align-items: center;
    padding: 0px 20px;
    border-bottom: 1px solid var(--black-black-90, #2a2a2a);
    background: rgba(17, 18, 18, 0.95);
    backdrop-filter: blur(10px);
    @include media($xxl) {
      padding: 0px 40px;
    }
  }

  &__logo {
    flex: 0 0 150px;
    margin-right: 20px;

    @include media($xxl) {
      flex: 0 0 212px;
      margin-right: 105px;
    }

    img {
      width: 240px;
      height: 34px;
    }
  }

  &__nav-button {
    display: flex;
    align-items: center;
    margin-right: 40px;
    svg {
      width: 24px;
      height: 24px;
    }
  }

  &__nav {
    flex: 1 1 auto;
    align-self: end;
    display: flex;

    .nav {
      &__list {
        display: flex;
      }

      &__link {
        padding: 30px 8px 32px 8px;
        border-bottom: 2px solid transparent;
        margin-bottom: -1px;
        color: var(--black-black-40, #999);
        transition: $transition-1;
        cursor: pointer;
        @include BodyLRegular;
        font-size: 14px;

        @include media($xxl) {
          font-size: 16px;
        }

        @include hover {
          border-bottom: 2px solid var(--green-primary, #00a19c);
          background: radial-gradient(59.75% 50.89% at 50% 100%, rgba(0, 161, 156, 0.22) 0%, rgba(0, 161, 156, 0) 100%);
        }
      }

      .nav__link--active {
        color: var(--Black-Black-00, #fff);
        border-bottom: 2px solid var(--green-primary, #00a19c);
        background: radial-gradient(59.75% 50.89% at 50% 100%, rgba(0, 161, 156, 0.22) 0%, rgba(0, 161, 156, 0) 100%);
      }
    }
  }
}

.contacts-header-desktop {
  display: flex;

  &__feedback {
    margin-right: 20px;
  }
}

.feedback {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  &__button {
    background: transparent;
    outline: none;
    border: none;
    color: var(--Green-Primary, #00a19c);
    @include buttonText;
    cursor: pointer;
  }
}
</style>
