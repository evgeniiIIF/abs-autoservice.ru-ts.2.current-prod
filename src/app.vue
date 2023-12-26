<script setup lang="ts">
import { menuHttp } from './api/http';
import { useBonusStore } from './store/bonus';
import { useCalculatorBlockStore } from './store/calculatorBlock';
import { useCallBackFormStore } from './store/callBackForm';
import { useContactsStore } from './store/contacts';
import { useHomeStore } from './store/home';
import { useServicesStore } from './store/services';
import { useMenuStore } from './store/menu';

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
    calculatorBlockEffects.fetchCalculatorBlock(),
    servicesEffects.fetchAllServices(),
    bonusEffects.fetchBonusCard(),
    menuEffects.fetchAppHeaderMenu(),
  ]);
});

const response = await useAppFetch<{ code: string; title: string }[]>('/counters');
await servicesEffects.fetchServicesTree();
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#00a19c" :height="3" />
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
.main {
}
</style>
./store/bonus
