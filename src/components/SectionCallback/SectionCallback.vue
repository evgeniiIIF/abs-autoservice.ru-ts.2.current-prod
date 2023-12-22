<script setup lang="ts"></script>

<template>
  <section class="callback">
    <div class="container">
      <div class="callback__body">
        <CallbackForm />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.callback {
  &__body {
    padding-bottom: 20px;

    @include tablet {
      padding-top: 20px;
      padding-bottom: 80px;
    }
  }
}
.container {
}
</style>
