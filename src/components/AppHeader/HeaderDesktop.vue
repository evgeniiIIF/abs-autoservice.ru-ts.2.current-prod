<script lang="ts" setup>
const navItems = [
  { name: 'Акции', link: '' },
  { name: 'Услуги', link: '' },
  { name: 'Бонусная программа', link: '' },
  { name: 'О автосервисе', link: '' },
  { name: 'Контакты', link: '' },
];
const topNavItems = [
  { name: 'Бонусная программа', link: '' },
  { name: 'Акции', link: '' },
  { name: 'Отзовы', link: '' },
  { name: 'Гарантия', link: '' },
  { name: 'Вакансии', link: '' },
  { name: 'Преимущества', link: '' },
];
const headerDesktopNode = ref(null);
const headerTopNode = ref(null);
const bodyNode = ref();
const wrapper = ref();

const currentScrollPosition = ref(0);
const lastScrollPosition = ref(0);

// const getScrollPosition = () => document.body.scrollTop || document.documentElement.scrollTop;
const getScrollPosition = () => wrapper.value.scrollTop;

const addClassByScroll = () => {
  currentScrollPosition.value = getScrollPosition();

  lastScrollPosition.value < currentScrollPosition.value
    ? bodyNode.value.classList.add('hide-header-top')
    : bodyNode.value.classList.remove('hide-header-top');

  lastScrollPosition.value = getScrollPosition();
};

onMounted(() => {
  wrapper.value = document.querySelector('.wrapper');

  // wrapper.value.addEventListener('scroll', function () {
  //   currentScrollPosition.value = getScrollPosition();

  //   lastScrollPosition.value < currentScrollPosition.value
  //     ? bodyNode.value.classList.add('hide-header-top')
  //     : bodyNode.value.classList.remove('hide-header-top');

  //   lastScrollPosition.value = getScrollPosition();

  //   console.log(getScrollPosition());
  // });

  bodyNode.value = document.querySelector('body');
  wrapper.value.addEventListener('scroll', addClassByScroll);
});
</script>
<template>
  <header ref="headerDesktopNode" class="header-desktop js-header">
    <div ref="headerTopNode" class="header-desktop__top header-desktop-top">
      <address class="header-desktop-top__address">
        <div class="header-desktop-top__address-icon"><IcNavigation :font-controlled="false" :filled="true" /></div>
        <p class="header-desktop-top__address-text">г. Ставрополь, ул. Доваторцев 47Б</p>
      </address>
      <div class="header-desktop-top__nav">
        <AppNavigation :items="topNavItems" />
      </div>
      <ul class="header-desktop-top__social">
        <li class="header-desktop-top__social-item">
          <IcTelegram :font-controlled="false" :filled="true" />
        </li>
        <li class="header-desktop-top__social-item">
          <IcWhatsapp :font-controlled="false" :filled="true" />
        </li>
        <li class="header-desktop-top__social-item">
          <IcVk :font-controlled="false" :filled="true" />
        </li>
      </ul>
    </div>
    <div class="header-desktop__body">
      <NuxtLink to="/" class="header-desktop__logo">
        <IcLogoDesktop :font-controlled="false" :filled="true" />
      </NuxtLink>
      <div class="header-desktop__nav">
        <AppNavigation :items="navItems" />
      </div>
      <div class="header-desktop__contacts contacts-header-desktop">
        <div class="contacts-header-desktop__feedback feedback">
          <div class="feedback__tel">
            <UITel phoneNumber="8 (8652) 500-520" />
          </div>
          <div class="feedback__button">
            <UIButton :isWrapper="true">обратный звонок</UIButton>
          </div>
        </div>
        <div class="contacts-header-desktop__buttons">
          <div class="contacts-header-desktop__button">
            <AppButtonPopUp>
              <IcWhatsapp />
            </AppButtonPopUp>
          </div>
          <div class="contacts-header-desktop__button">
            <AppButtonPopUp>
              <IcTelegram />
            </AppButtonPopUp>
          </div>
        </div>
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
  padding-left: 40px;
  padding-right: 20px;
  border-radius: 10px;
  background: var(--black-black-90, #2a2a2a);

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
  }
  &__social {
    display: flex;
    align-items: center;
    @include mr(4px);
  }
  &__social-item {
    padding: 6px;
    cursor: pointer;
    &:hover {
      background: darken($color: #2a2a2a, $amount: 2%);
    }
    svg {
      width: 24px;
      height: 24px;
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

  &__top {
  }

  &__body {
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-bottom: 1px solid var(--black-black-90, #2a2a2a);
    background: rgba(17, 18, 18, 0.95);
    backdrop-filter: blur(10px);
    @include media($xl) {
      padding-left: 40px;
    }
  }

  &__logo {
    flex: 0 0 150px;
    margin-right: 20px;

    @include media($xl) {
      flex: 0 0 212px;
      margin-right: 40px;
    }

    svg {
      width: 100%;
    }
  }

  &__nav {
    flex: 1 1 auto;
    align-self: end;

    .nav {
      &__list {
        display: flex;
      }
      &__link {
        padding: 0px 8px 32px 8px;
        border-bottom: 2px solid transparent;
        color: var(--black-black-40, #999);
        transition: $transition-1;
        cursor: pointer;
        @include BodyLRegular;
        font-size: 14px;

        @include media($xl) {
          font-size: 16px;
        }

        @include hover {
          border-bottom: 2px solid var(--green-primary, #00a19c);
          background: radial-gradient(59.75% 50.89% at 50% 100%, rgba(0, 161, 156, 0.22) 0%, rgba(0, 161, 156, 0) 100%);
        }
      }
    }
  }
  &__contacts {
  }
}
.contacts-header-desktop {
  display: flex;

  &__buttons {
    display: flex;
    .button-pop-up__items {
      &:first-child {
        border-left: 1px solid var(--black-black-90, #2a2a2a);
        border-right: 1px solid var(--black-black-90, #2a2a2a);
      }
    }
  }

  &__button {
    .button {
      color: var(--green-primary, #00a19c);
      @include BodySRegular();
    }
  }
}

.feedback {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-right: 43px;

  &__button {
    .button {
      color: var(--green-primary, #00a19c);
    }
  }
}
</style>
