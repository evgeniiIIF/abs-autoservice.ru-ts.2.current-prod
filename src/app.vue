<script setup lang="ts">
import { useBonusCardStore } from './store/bonusCard';
import { useCalculatorBlockStore } from './store/calculatorBlock';
import { useCallBackFormStore } from './store/callBackForm';
import { useContactsStore } from './store/contacts';
import { useHomeStore } from './store/home';
import { useServicesStore } from './store/services';

const route = useRoute();

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

onBeforeMount(() => {
  if (route.path === '/services') {
    document.body.classList.add('services-page');
  }
});

watch(
  () => route.path,
  () => {
    if (route.path === '/services') {
      document.body.classList.add('services-page');
    } else {
      document.body.classList.remove('services-page');
    }
  },
);
</script>

<template>
  <NuxtLayout ref="nodeRef">
    <NuxtLoadingIndicator color="#00a19c" :height="3" />
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
.services-page {
  @include to(1280px) {
    main {
      margin-top: 0;
    }

    .header-mobile {
      display: none;
    }
  }
}
</style>
