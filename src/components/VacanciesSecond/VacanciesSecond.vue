<script setup lang="ts">
import { useVacanciesStore } from '~/store/vacancies/vacancies.hooks';

const { vacanciesState } = useVacanciesStore();
const { isMobile } = useMediaSizes();
</script>

<template>
  <div class="vacancies-second">
    <h2 class="vacancies-second__title">{{ vacanciesState.second_title }}</h2>
    <div class="vacancies-second__list">
      <VacanciesList :items="vacanciesState.vacancies_items" :hasButtons="!isMobile" />
    </div>
  </div>
</template>

<style lang="scss">
.vacancies-second {
  padding: 40px 0 80px 0;

  @include desktop {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    margin-bottom: 40px;
    color: var(--Black-Black-00, #fff);
    @include TitleSBold;

    @include desktop {
      margin-right: 100px;
    }
  }
}
</style>
