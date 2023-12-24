<script lang="ts" setup>
import { enableBodyScroll, disableBodyScroll } from '@/utils/dom';
import { appRoutes } from '~/appRoutes';
import { useContactsStore } from '~/store/contacts';
import { useServicesStore } from '~/store/services';

const route = useRoute();
const router = useRouter();

const { contactsState } = useContactsStore();
const { servicesState } = useServicesStore();

const [isOpenMobileMenu, , closeMobileMenu, toggleMobileMenu] = useBooleanState(false);
const [isOpenServicesMenu, openServicesMenu, closeServicesMenu] = useBooleanState(false);

const activeServiceId = ref<number | null>(null);

const servicesList = computed(() => {
  if (!activeServiceId.value) {
    return servicesState.value.servicesTree;
  }

  return servicesState.value.servicesTree.find((item) => item.id === activeServiceId.value)?.children;
});

const navItems = [
  { name: 'Услуги', onClick: openServicesMenu },
  { name: 'Акции', link: appRoutes.offers().path },
  { name: 'Об автосервисе', link: appRoutes.contacts().path },
  // { name: 'Гарантии', link: '' },
  // { name: 'Преимущества', link: '' },
  { name: 'Контакты', link: appRoutes.contacts().path },
];

watch(isOpenMobileMenu, () => {
  isOpenMobileMenu.value ? disableBodyScroll() : enableBodyScroll();
});

watch(
  () => route.path,
  () => closeMobileMenu(),
);

watch(activeServiceId, () => console.log(activeServiceId.value));
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
              <UIButton
                tag="a"
                :href="`tel:${contactsState.phone?.match(/\d+/g)?.join('')}`"
                target="_blank"
                rel="noopener noreferrer"
                ><IcPhone
              /></UIButton>
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
            <NuxtLink class="mobile-header__logo" :to="appRoutes.main()">
              <IcLogoMobile :font-controlled="false" :filled="true" />
            </NuxtLink>
            <div class="mobile-header__buttons">
              <div class="mobile-header__button mobile-header__button--phone">
                <UIButton
                  tag="a"
                  :href="`tel:${contactsState.phone?.match(/\d+/g)?.join('')}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><IcPhone
                /></UIButton>
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
          <AppNavigation v-if="!isOpenServicesMenu" :items="navItems" />
          <div v-if="isOpenServicesMenu" class="header-mobile-menu__services">
            <div v-if="!activeServiceId" class="header-mobile-menu__service-item" @click="closeServicesMenu">
              <IcArrowLeft /><span>Услуги</span>
            </div>
            <div v-if="activeServiceId" class="header-mobile-menu__service-item" @click="activeServiceId = null">
              <IcArrowLeft class="header-mobile-menu__service-item-left" /><span>
                {{ servicesState.mainServices?.find((item) => item.id === activeServiceId)?.title }}
              </span>
            </div>
            <!-- @ts-nocheck -->
            <div
              v-for="service in servicesList"
              :key="service.id"
              class="header-mobile-menu__service-item"
              @click="
                service.children?.length ? (activeServiceId = service.id) : router.push(appRoutes.services(service.id))
              "
            >
              <span>{{ service.title }}</span>
              <IcArrowRight v-if="service?.children?.length" class="header-mobile-menu__service-item-right" />
            </div>
          </div>
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

  &__service-item {
    max-width: 280px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    gap: 14px;
    padding: 14px;
    border-bottom: 1px solid var(--black-black-80);
    color: var(--white);
    @include BodyXLBold;
  }

  &__service-item-right {
    margin-left: auto;
    width: 24px;
    height: 24px;
  }

  &__service-item-left {
    width: 24px;
    height: 24px;
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
