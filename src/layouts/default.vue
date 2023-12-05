<script lang="ts" setup></script>

<template>
  <div class="wrapper">
    <AppHeader />
    <main class="main">
      <slot />
    </main>
    <AppFooter />
    <FooterMobileMenu />
  </div>
</template>

<style lang="scss">
.main {
  margin-top: 67.75px;

  @include desktop {
    margin-top: 89px;
  }
}
</style>
