<script setup lang="ts">
import { useVacanciesStore } from '~/store/vacancies';
import { appRoutes } from '~/appRoutes';

const { vacanciesEffects } = useVacanciesStore();
await vacanciesEffects.fetchVacancies();

const { isMobile } = useMediaSizes();

const breadcrumbItems = [{ name: 'Вакансии', link: appRoutes.vacancies().path }];
</script>

<template>
  <div class="vacancies">
    <div class="vacancies__container">
      <div class="vacancies__breadcrumb">
        <UIBreadcrumb :items="breadcrumbItems" />
      </div>
      <div class="vacancies__main">
        <VacanciesMain :has-email-button="!isMobile" />
      </div>
      <div class="vacancies__second">
        <VacanciesSecond />
      </div>
      <div class="vacancies__callback">
        <CallbackForm />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.vacancies {
  &__container {
    @include container();
  }

  &__breadcrumb {
    .container {
      padding: 0;
    }
  }

  &__callback {
    margin-bottom: 80px;
  }
}
</style>
