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
  <h2>HeaderDesktop ++</h2>
  <h2>Хедер Десктоп</h2>

  <header class="header-desktop">
    <div class="header-desktop__logo">
      <AppLogo />
    </div>
    <div class="header-desktop__nav">
      <AppNavigation :items="navItems" />
    </div>
    <div class="header-desktop__contacts"></div>
  </header>
</template>

<style lang="scss">
h2 {
  font-family: Roboto;
  font-weight: 700;
}
.header-desktop {
  color: #fff;
  background: var(--black-primary-black, red);

  &__nav {
  }
}
</style>
