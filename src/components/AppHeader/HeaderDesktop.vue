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
      <div class="contacts-header-desktop__tel">
        <UITel phoneNumber="8 (8652) 500-520" />
      </div>
      <div class="contacts-header-desktop__feedback">
        <UIButton :isWrapper="true">обратный звонок</UIButton>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header-desktop {
  color: #fff;
  background: var(--black-primary-black, red);

  &__nav {
  }
}
.contacts-header-desktop {
  &__feedback {
    .button {
      color: var(--green-primary, #00a19c);
      @include BodySRegular();
    }
  }
}
</style>
