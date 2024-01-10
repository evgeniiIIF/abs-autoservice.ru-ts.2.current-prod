<script lang="ts" setup>
import { useMediaSizes } from '@/composables/useMediaSizes';

import { useBonusStore } from '~/store/bonus';
import { useCalculatorBlockStore } from '~/store/calculatorBlock';
import { useCallBackFormStore } from '~/store/callBackForm';
import { useContactsStore } from '~/store/contacts';
import { useHomeStore } from '~/store/home';
import { useServicesStore } from '~/store/services';
import { useMenuStore } from '~/store/menu';

const route = useRoute();
const { isDesktop } = useMediaSizes();
const { scrollTo } = useScrollTo();

const { servicesEffects } = useServicesStore();
const { homeEffects } = useHomeStore();
const { calculatorBlockEffects } = useCalculatorBlockStore();
const { contactsEffects } = useContactsStore();
const { callBackFormEffects } = useCallBackFormStore();
const { bonusEffects } = useBonusStore();
const { menuEffects } = useMenuStore();

await useAsyncData('global', async () => {
  await Promise.all([
    callBackFormEffects.fetchCallBackForm(),
    homeEffects.fetchHome(),
    contactsEffects.fetchContacts(),
    contactsEffects.fetchContactsWithSeoAndTitle(),
    calculatorBlockEffects.fetchCalculatorBlock(),
    servicesEffects.fetchAllServices(),
    bonusEffects.fetchBonusCard(),
    menuEffects.fetchAppHeaderMenu(),
    menuEffects.fetchAppFooterMenu(),
  ]);
});

// const response = await useAppFetch<{ code: string; title: string }[]>('/counters');
await servicesEffects.fetchServicesTree();

watch(
  () => route.fullPath,
  () => scrollTo(),
);
</script>

<template>
  <div class="default-layout">
    <AppHeader />
    <main class="main">
      <slot />
      <SectionBrandIconsRow v-if="isDesktop" />
    </main>
    <AppFooter />
    <FooterMobileMenu v-if="!isDesktop" />
  </div>
</template>

<style lang="scss">
.default-layout {
}
</style>
