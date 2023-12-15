<script setup lang="ts"></script>
<template>
  <ul class="social">
    <li class="social__item">
      <IcVk :font-controlled="false" :filled="true" />
    </li>
    <li class="social__item">
      <IcTelegram :font-controlled="false" :filled="true" />
    </li>
    <li class="social__item">
      <IcWhatsapp :font-controlled="false" :filled="true" />
    </li>
  </ul>
</template>

<style lang="scss">
.social {
  display: flex;
  align-items: flex-start;
  gap: 10px;

  &__item {
    display: flex;
    padding: 12px;
    align-items: flex-start;
    border-radius: 10px;
    transition: $transition-1;
    cursor: pointer;

    &:hover {
      background: var(--Black-Black-80, #414141);
    }
  }
}
</style>
