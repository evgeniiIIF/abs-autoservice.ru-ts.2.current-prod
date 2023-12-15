<script setup lang="ts">
import { useHomeStore } from '~/store/home';
import { useCalculatorBlockStore } from '~/store/calculatorBlock';
import { useBonusCardStore } from '~/store/bonusCard';
import { useCallBackFormStore } from '~/store/callBackForm';

const { isMobile, isTablet } = useMediaSizes();

const { homeEffects } = useHomeStore();
const { calculatorBlockEffects } = useCalculatorBlockStore();
const { bonusCardEffects } = useBonusCardStore();
const { callBackFormEffects } = useCallBackFormStore();

homeEffects.fetchHome();
calculatorBlockEffects.fetchCalculatorBlock();
bonusCardEffects.fetchBonusCard();
callBackFormEffects.fetchCallBackForm();
// await useAsyncData('about', async () => {
//   await Promise.all([
//     Object.keys(aboutState.value.about).length === 0 && aboutEffects.fetchAbout(),
//     aboutState.value.aboutSlider.length === 0 && aboutEffects.fetchAboutSlider(),
//     aboutState.value.aboutCertificates.length === 0 && aboutEffects.fetchAboutCertificates(),
//     Object.keys(partnersState.value.partners).length === 0 && partnersEffects.fetchPartners(),
//     partnersState.value.items.length === 0 && partnersEffects.fetchPartnersItems(),
//   ]);
// });
</script>

<template>
  <div>
    <SectionBanner />
    <SpecialOffers />
    <SectionCostCalculation />
    <CompanyPicture src="/images/company-1.png" alt="Ресепшен" />
    <PopularServices />
    <CallbackForm />
    <SectionGetCard />
    <CompanyPicture src="/images/company-2.png" alt="Зал автосервиса" />
    <AboutCompany />
    <ClientsReviews />
    <SectionServices />
    <SectionBrandIconsRow v-if="!isMobile && !isTablet" />
  </div>
</template>

<style lang="scss"></style>
