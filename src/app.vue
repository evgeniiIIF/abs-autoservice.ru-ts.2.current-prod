<script setup lang="ts">
import { useBonusCardStore } from './store/bonusCard';
import { useCalculatorBlockStore } from './store/calculatorBlock';
import { useCallBackFormStore } from './store/callBackForm';
import { useContactsStore } from './store/contacts';
import { useHomeStore } from './store/home';
import { useServicesStore } from './store/services';

const { servicesEffects } = useServicesStore();
const { homeEffects } = useHomeStore();
const { calculatorBlockEffects } = useCalculatorBlockStore();
const { contactsEffects } = useContactsStore();
const { callBackFormEffects } = useCallBackFormStore();
const { bonusCardEffects } = useBonusCardStore();

await useAsyncData('global', async () => {
  await Promise.all([
    callBackFormEffects.fetchCallBackForm(),
    homeEffects.fetchHome(),
    contactsEffects.fetchContacts(),
    calculatorBlockEffects.fetchCalculatorBlock(),
    servicesEffects.fetchAllServices(),
    bonusCardEffects.fetchBonusCard(),
  ]);
});

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
