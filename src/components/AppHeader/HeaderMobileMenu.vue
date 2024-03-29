<script lang="ts" setup>
import { appRoutes } from '~/appRoutes';
import { useContactsStore } from '~/store/contacts';
import { useMenuStore } from '~/store/menu';
import { useServicesStore } from '~/store/services';

interface HeaderMobileMenuEmits {
  (event: 'closeMobileMenu'): void;
}

const emits = defineEmits<HeaderMobileMenuEmits>();

const router = useRouter();

const { contactsState } = useContactsStore();
const { servicesState } = useServicesStore();
const { menuState } = useMenuStore();

const [isOpenServicesMenu, openServicesMenu, closeServicesMenu] = useBooleanState(false);

const activeServiceId = ref<number | null>(null);

const servicesList = computed(() => {
  if (!activeServiceId.value) {
    return servicesState.value.servicesTree;
  }

  return servicesState.value.servicesTree.find((item) => item.id === activeServiceId.value)?.children;
});

const navItems = computed(() =>
  menuState.value.header.top_menu
    .filter((item) => item.is_active)
    .map((item) => {
      if (item.url === appRoutes.services().path) {
        return {
          name: item.title,
          onClick: openServicesMenu,
        };
      }

      return [
        { name: item.title, link: item.url },
        ...(item.dropdown
          ?.filter((subitem) => subitem.is_active)
          ?.map((subitem) => ({ name: subitem.title, link: subitem.url })) ?? []),
      ];
    }),
);
</script>

<template>
  <div class="header-mobile-menu">
    <div class="header-mobile-menu__mask" @click="emits('closeMobileMenu')"></div>
    <div class="mobile-header">
      <div class="container">
        <div class="mobile-header__body">
          <NuxtLink class="mobile-header__logo" :to="appRoutes.main()">
            <NuxtImg
              :src="contactsState.data?.logo?.logo_mob_path ?? 'undefined'"
              :alt="contactsState.data?.logo?.alt"
              :title="contactsState.data?.logo?.title"
            />
          </NuxtLink>
          <div class="mobile-header__buttons">
            <div class="mobile-header__button mobile-header__button--phone">
              <UIIconButton
                color="dark"
                fill="outline"
                tag="a"
                :href="`tel:${contactsState.data?.phone?.match(/\d+/g)?.join('').trim()}`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IcPhone :font-controlled="false" :filled="true" />
              </UIIconButton>
            </div>
            <div class="mobile-header__button mobile-header__button--burger">
              <UIIconButton color="dark" @click="emits('closeMobileMenu')">
                <IcClose :font-controlled="false" :filled="true" />
              </UIIconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-mobile-menu__body">
      <div class="header-mobile-menu__nav">
        <AppNavigation v-if="!isOpenServicesMenu" :items="navItems.flat()" />
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
              service.children?.length ? (activeServiceId = service.id) : router.push(appRoutes.services(service.slug))
            "
          >
            <span
              :class="[
                'header-mobile-menu__service-item-title',
                { 'header-mobile-menu__service-item-title--with-icon': service?.children?.length },
              ]"
              >{{ service.title }}</span
            >
            <IcArrowRight v-if="service?.children?.length" class="header-mobile-menu__service-item-right" />
          </div>
        </div>
      </div>
      <div class="header-mobile-menu__contacts">
        <AppContacts />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.header-mobile-menu {
  position: absolute;
  left: -100%;
  top: 0;
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
    width: 80%;
    min-width: 320px;
    height: inherit;
    background: rgba(42, 42, 42, 0.95);

    padding: 92px 10px 178px;
    transition: all 0.2s ease 0s;
    overflow-x: hidden;
    overflow-y: auto;

    @include mobile {
      width: 100%;
    }
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

    @include mobile {
      padding: 0 !important;
      margin-bottom: 40px;
    }
  }

  &__service-item {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 0;
    border-bottom: 1px solid var(--black-black-80);
    color: var(--white);
    @include BodyXLBold;

    &:first-child {
      padding-top: 0;
    }
  }

  &__service-item-title {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;

    &--with-icon {
      width: 80%;
    }
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

  &__logo {
    width: 143px;
    img {
      width: 100%;
      height: auto;
    }
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
