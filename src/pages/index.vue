<script setup lang="ts">
import { useHomeStore } from '~/store/home';

const { homeState } = useHomeStore();

useSeoMeta({
  title: homeState.value?.seo.title,
  description: homeState.value?.seo.description,
  ogTitle: homeState.value?.seo.title,
  ogDescription: homeState.value?.seo.description,
  twitterTitle: homeState.value?.seo.title,
  twitterDescription: homeState.value?.seo.description,
  robots: homeState.value.seo.robots,
  author: homeState.value.seo.robots,
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
