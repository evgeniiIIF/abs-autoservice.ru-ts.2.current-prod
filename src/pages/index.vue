<script setup lang="ts">
import { useHomeStore } from '~/store/home';

const { homeState } = useHomeStore();

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
  <SectionCostCalculation id="section-cost-calculation" />
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
