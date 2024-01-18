<script setup lang="ts">
import { useVacanciesStore } from '~/store/vacancies/vacancies.hooks';
import type { VacanciesMainProps } from './VacanciesMain.types';

withDefaults(defineProps<VacanciesMainProps>(), {
  hasEmailButton: false,
});

const { vacanciesState } = useVacanciesStore();
</script>

<template>
  <section>
    <div class="vacancies-main">
      <div class="vacancies-main__texts">
        <h1 class="vacancies-main__title">{{ vacanciesState.main_title }}</h1>
        <p class="vacancies-main__subtitle">{{ vacanciesState.main_subtitle }}</p>
      </div>
      <div class="vacancies-main__row">
        <a :href="`mailto:${vacanciesState.email}`" class="vacancies-main__email">{{ vacanciesState.email }}</a>
        <UIIconButton v-if="hasEmailButton" tag="a" :href="`mailto:${vacanciesState.email}`">
          <IcArrowButtonIconRight :font-controlled="false" :filled="true" />
        </UIIconButton>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.vacancies-main {
  padding-bottom: 80px;
  border-bottom: 1px solid var(--Black-Black-80, #414141);

  &__texts {
    max-width: 680px;
    margin-bottom: 20px;
  }

  &__title {
    margin-bottom: 20px;
    color: var(--white, #fff);
    @include TitleSBold;
  }

  &__subtitle {
    color: var(--Black-Black-50, #898989);
    @include BodyLRegular;
  }

  &__row {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__email {
    color: var(--Green-Primary, #00a19c);
    @include TitleXSRegular;
    text-decoration: underline;
  }
}
</style>
