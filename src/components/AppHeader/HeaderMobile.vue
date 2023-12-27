<script lang="ts" setup>
import { enableBodyScroll, disableBodyScroll } from '@/utils/dom';
import { appRoutes } from '~/appRoutes';
import { useContactsStore } from '~/store/contacts';

const route = useRoute();

const { contactsState } = useContactsStore();

const [isOpenMobileMenu, openMobileMenu, closeMobileMenu] = useBooleanState(false);

watch(isOpenMobileMenu, () => {
  isOpenMobileMenu.value ? disableBodyScroll() : enableBodyScroll();
});

watch(
  () => route.path,
  () => closeMobileMenu(),
);
</script>
<template>
  <header :class="{ 'header-mobile': true, 'js-header-mobile': true, 'header-mobile-menu--open': isOpenMobileMenu }">
    <div class="mobile-header">
      <div class="container">
        <div class="mobile-header__body">
          <NuxtLink class="mobile-header__logo" :to="appRoutes.main()">
            <IcLogoMobile :font-controlled="false" :filled="true" />
          </NuxtLink>
          <div class="mobile-header__buttons">
            <div class="mobile-header__button mobile-header__button--phone">
              <UIIconButton
                color="dark"
                fill="outline"
                tag="a"
                :href="`tel:${contactsState.phone?.match(/\d+/g)?.join('')}`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IcPhone :font-controlled="false" :filled="true" />
              </UIIconButton>
            </div>
            <div class="mobile-header__button mobile-header__button--burger">
              <UIIconButton color="dark" @click="openMobileMenu">
                <IcBurger :font-controlled="false" :filled="true" />
              </UIIconButton>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AppHeaderMobileMenu @closeMobileMenu="closeMobileMenu" />
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
      svg {
        @include svg-color(#fff);
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
}
</style>
