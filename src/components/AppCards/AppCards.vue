<script lang="ts" setup>
import { useMenuStore } from '~/store/menu';

const { menuState } = useMenuStore();
</script>

<template>
  <ul class="cards">
    <li v-for="card in menuState.footer.icons" :key="card.name" class="cards__item">
      <img :src="card.original_url" :alt="card.file_name" :title="card.file_name" />
    </li>
  </ul>
</template>

<style lang="scss">
.cards {
  width: 100%;
  display: flex;
  padding: 8px 8px;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  background: var(--Black-Black-80, #414141);

  &__item {
    display: flex;
    align-items: center;

    img {
      width: 30px;
      height: 20px;
      object-fit: contain;
    }
  }
}
</style>
