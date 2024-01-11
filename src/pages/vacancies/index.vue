<script setup lang="ts">
import { useVacanciesStore } from '~/store/vacancies';
import { appRoutes } from '~/appRoutes';

const { vacanciesEffects, vacanciesState } = useVacanciesStore();
await vacanciesEffects.fetchVacancies();

const { isMobile } = useMediaSizes();

useSeoMeta({
  title: vacanciesState.value?.seo?.title ?? 'Услуги',
  description: vacanciesState.value?.seo?.description,
  ogImage: vacanciesState.value?.seo?.image,
  ogTitle: vacanciesState.value.seo?.['og:title'],
  ogDescription: vacanciesState.value.seo?.['og:description'],
  ogType: vacanciesState.value.seo?.['og:type'] as any,
  twitterTitle: vacanciesState.value.seo?.['twitter:title'],
  twitterDescription: vacanciesState.value.seo?.['twitter:description'],
  twitterCard: vacanciesState.value.seo?.['twitter:card'] as any,
  robots: vacanciesState.value.seo?.robots,
  author: vacanciesState.value.seo?.author,
  keywords: vacanciesState.value.seo?.key_words,
});

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
