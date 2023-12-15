import type { flattenDiagnosticMessageText } from 'typescript';
<script lang="ts" setup></script>

<template>
  <ul class="cards">
    <li class="cards__item">
      <IcVisa :font-controlled="false" :filled="true" />
    </li>
    <li class="cards__item">
      <IcMasterCard :font-controlled="false" :filled="true" />
    </li>
    <li class="cards__item">
      <IcMir :font-controlled="false" :filled="true" />
    </li>
  </ul>
</template>

<style lang="scss">
.cards {
  display: flex;
  padding: 8px 50px;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border-radius: 10px;
  background: var(--Black-Black-80, #414141);

  &__item {
    display: flex;
    align-items: center;
    svg {
      width: 30px;
      height: 20px;
    }
  }
}
</style>
