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
    <div class="header-desktop__logo">
      <AppLogo />
    </div>
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
  display: flex;
  align-items: center;
  padding-left: 40px;
  background: var(--black-primary-black, #111212);
  border-bottom: 1px solid var(--black-black-90, #2a2a2a);

  &__logo {
    margin-right: 40px;

    @include media(1150px) {
      margin-right: 105px;
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

        @include media(1150px) {
          font-size: 16px;
        }

        &:hover {
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
