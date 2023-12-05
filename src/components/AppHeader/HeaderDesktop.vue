<script lang="ts" setup>
const navItems = [
  { name: 'Акции', link: '' },
  { name: 'Услуги', link: '' },
  { name: 'Бонусная программа', link: '' },
  { name: 'О автосервисе', link: '' },
  { name: 'Контакты', link: '' },
];
</script>
<template>
  <header class="header-desktop">
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
  </header>
</template>

<style lang="scss">
.header-desktop {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: $z-header;
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-bottom: 1px solid var(--black-black-90, #2a2a2a);
  background: rgba(17, 18, 18, 0.95);
  backdrop-filter: blur(10px);

  @include media($xl) {
    padding-left: 40px;
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
