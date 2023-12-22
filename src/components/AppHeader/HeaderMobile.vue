<script lang="ts" setup>
import { bodyLock, bodyUnlock, setHeaderWidth } from '@/utils/useWrapper/useWrapper';

const [isOpenMobileMenu, useOpenMobileMenu, useCloseMobileMenu] = useBooleanState(false);

const openMobileMenu = () => {
  bodyLock();
  useOpenMobileMenu();
};
const closeMobileMenu = () => {
  bodyUnlock();
  useCloseMobileMenu();
};
const toggleMobileMenu = () => {
  isOpenMobileMenu.value ? closeMobileMenu() : openMobileMenu();
};

const navItems = [
  { name: 'Услуги', link: '' },
  { name: 'Акции', link: '' },
  { name: 'Об автосервисе', link: '/about' },
  { name: 'Гарантии', link: '' },
  { name: 'Преимущества', link: '' },
  { name: 'Контакты', link: '/contacts' },
];
onBeforeMount(() => {
  setHeaderWidth('.js-header-mobile');
});
</script>
<template>
  <header :class="{ 'header-mobile': true, 'js-header-mobile': true, 'header-mobile-menu--open': isOpenMobileMenu }">
    <div class="mobile-header">
      <div class="container">
        <div class="mobile-header__body">
          <div class="mobile-header__logo">
            <IcLogoMobile :font-controlled="false" :filled="true" />
          </div>
          <div class="mobile-header__buttons">
            <div class="mobile-header__button mobile-header__button--phone">
              <UIButton><IcPhone /></UIButton>
            </div>
            <div class="mobile-header__button mobile-header__button--burger">
              <UIButton @click="toggleMobileMenu">
                <IcBurger />
              </UIButton>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="header-mobile-menu">
      <div class="header-mobile-menu__mask" @click="closeMobileMenu"></div>
      <div class="mobile-header">
        <div class="container">
          <div class="mobile-header__body">
            <div class="mobile-header__logo">
              <IcLogoMobile :font-controlled="false" :filled="true" />
            </div>
            <div class="mobile-header__buttons">
              <div class="mobile-header__button mobile-header__button--phone">
                <UIButton><IcPhone /></UIButton>
              </div>
              <div class="mobile-header__button mobile-header__button--burger">
                <UIButton @click="toggleMobileMenu">
                  <IcClose />
                </UIButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-mobile-menu__body">
        <div class="header-mobile-menu__nav">
          <AppNavigation :items="navItems" />
        </div>
        <div class="header-mobile-menu__contacts">
          <AppContacts />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header-mobile-menu {
  position: absolute;
  left: -100%;
  top: 0;
  width: 100%;
  height: 100vh;
  transition: all 0s ease 0.2s;

  &__mask {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(17, 18, 18, 0.7);
  }

  &__body {
    position: absolute;
    left: -100%;
    top: 0;
    z-index: 1;
    height: inherit;
    background: rgba(42, 42, 42, 0.95);

    padding: 92px 10px 178px;
    transition: all 0.2s ease 0s;
    overflow-x: hidden;
    overflow-y: auto;
  }

  &__nav {
    padding: 0 20px;
    margin-bottom: 40px;
    .nav {
      &__link {
        border-bottom: 1px solid #414141;
        padding: 14px 0;
        color: var(--black-black-00, #fff);
        @include BodyXLBold;
      }

      &__item:first-child {
        .nav__link {
          padding-top: 0;
        }
      }
      &__item:last-child {
        .nav__link {
          padding-bottom: 0;
          border: none;
        }
      }
    }
  }

  & .mobile-header {
    position: absolute;
    left: -100%;
    top: 0;
    width: 100%;
    z-index: 6;
    border-bottom: 1px solid var(--black-black-90, #2a2a2a);
    background: rgba(59, 59, 59, 0.9);

    backdrop-filter: blur(10px);
    transition: all 0.2s ease 0s;
    &__button--burger {
      .button {
        background: var(--black-black-90, #2a2a2a);
      }
    }
  }

  &--open {
    .header-mobile-menu__body,
    .mobile-header {
      left: 0;
      transition: all 0.2s ease 0s;
    }
    .header-mobile-menu {
      left: 0;
      transition: all 0s ease 0s;
    }
  }
}

.header-mobile {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: $z-header;
  border-bottom: 1px solid var(--black-black-90, #2a2a2a);
  background: rgba(17, 18, 18, 0.95);
  backdrop-filter: blur(10px);

  .container {
    padding: 0 10px;
  }
}

.mobile-header {
  &__body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
  }
  &__logo {
    width: 143px;
    svg {
      width: 100%;
      height: auto;
    }
  }
  &__buttons {
    display: flex;
    @include mr(10px);
  }
  &__button {
    .button {
      padding: 12px;
      border: 1px solid var(--black-black-90, #2a2a2a);
      background: transparent;
    }
  }
  &__button--phone {
    svg {
      width: 24px;
      height: 24px;
    }
  }
  &__button--burger {
    .button {
      background: var(--black-black-90, #2a2a2a);
      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>
