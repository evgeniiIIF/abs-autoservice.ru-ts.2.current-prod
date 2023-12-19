<script setup lang="ts">
const breadcrumbItems = [
  {
    name: 'Бонусная программа',
    link: '/bonus',
  },
];
</script>

<template>
  <div class="bonus">
    <div class="bonus__breadcrumb">
      <UIBreadcrumb :items="breadcrumbItems" />
    </div>
    <div class="bonus__bonus-program">
      <SectionBonusProgram />
    </div>
    <div class="bonus__calculating">
      <SectionBenefitsCalculating />
    </div>
    <div class="bonus__picture">
      <CompanyPicture image="/images/company-1.png" alt="АБС автосервис ставрополь" />
    </div>
    <div class="bonus__call-back">
      <CallbackForm />
    </div>
  </div>
</template>

<style lang="scss">
.bonus {
  &__breadcrumb {
  }

  &__bonus-program {
    margin-bottom: 40px;
  }

  &__calculating {
    margin-bottom: 40px;
  }
  &__picture {
    margin: 0 -10px;
    margin-bottom: 40px;
  }
  &__call-back {
    margin-bottom: 108px;
    .callback-form {
      padding: 0;
    }
  }
}
</style>
