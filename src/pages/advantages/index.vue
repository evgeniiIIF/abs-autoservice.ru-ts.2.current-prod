`
<script setup lang="ts">
import { appRoutes } from '~/appRoutes';

import { useBonusStore } from '~/store/bonus';

const { bonusEffects } = useBonusStore();

await bonusEffects.fetchBonusPageInfo();

const breadcrumbItems = [{ name: 'Привемущетва', link: appRoutes.advantages().path }];
</script>

<template>
  <div class="advantages-page">
    <div class="advantages-page__breadcrumb">
      <UIBreadcrumb :items="breadcrumbItems" />
    </div>
    <div class="advantages-page__container">
      <!-- TODO old container remove -->
      <div class="advantages-page__special-offers">
        <SpecialOffers />
      </div>
      <div class="advantages-page__bonus-program">
        <SectionBonusProgram />
        <SectionBenefitsCalculating class="bonus__calculating" />
      </div>
      <div class="advantages-page__warranty"></div>
      <div class="advantages-page__calculate">
        <SectionCostCalculation />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.advantages-page {
  .container {
    box-sizing: border-box;
    max-width: auto;
    margin: 0;
    padding: 0;
  }
  &__breadcrumb {
    margin-bottom: 40px;

    .container {
      @include container();
    }
  }

  &__container {
    @include container();
    @include mb(40px);

    @include desktop {
      @include mb(80px);
    }
  }

  &__special-offers {
  }

  &__bonus-program {
  }

  &__warranty {
  }

  &__calculate {
  }
}
</style>
`
