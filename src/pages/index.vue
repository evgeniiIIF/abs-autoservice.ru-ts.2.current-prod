<script setup lang="ts">
import { useAsyncData } from '#imports';
import { useHomeStore } from '~/store/home';
import { useCalculatorBlockStore } from '~/store/calculatorBlock';
import { useBonusCardStore } from '~/store/bonusCard';

const { homeEffects, homeState } = useHomeStore();
const { calculatorBlockEffects } = useCalculatorBlockStore();
const { bonusCardEffects } = useBonusCardStore();

await useAsyncData('home', async () => {
  await Promise.all([
    homeEffects.fetchHome(),
    calculatorBlockEffects.fetchCalculatorBlock(),
    bonusCardEffects.fetchBonusCard(),
  ]);
});

useSeoMeta({
  title: () => homeState.value.seo.meta_title,
  description: () => homeState.value.seo.meta_description,
  author: () => homeState.value.seo.meta_author,
  robots: () => homeState.value.seo.meta_robots,
});
</script>

<template>
  <SectionBanner />
  <SpecialOffers />
  <SectionCostCalculation />
  <CompanyPicture image="/images/company-1.png" alt="АБС автосервис ставрополь" />
  <PopularServices />
  <SectionCallback />
  <SectionGetCard />
  <CompanyPicture :image="homeState.about_img" alt="АБС автосервис ставрополь" />
  <AboutCompany />
  <ClientsReviews />
  <SectionServices />
</template>

<style lang="scss"></style>
