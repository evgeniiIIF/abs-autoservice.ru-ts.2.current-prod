<script setup lang="ts">
import { useContactsStore } from '~/store/contacts';
import type { CallUsBannerProps } from './CallUsBanner.types';

defineProps<CallUsBannerProps>();

const { contactsState } = useContactsStore();
</script>

<template>
  <div :class="['call-us-banner', { 'call-us-banner--variant-small': variant === 'small' }]">
    <p class="call-us-banner__title">{{ variant === 'big' ? 'Для записи в автосервис ABS-AUTO' : 'Для записи' }}</p>
    <p class="call-us-banner__subtitle">звоните нам по телефону</p>
    <div class="call-us-banner__contacts">
      <p class="call-us-banner__phone">{{ contactsState.data?.phone }}</p>
      <UINewButton tag="a" :href="`tel:${contactsState.data?.phone?.match(/\d+/g)?.join('')}`">Позвонить</UINewButton>
    </div>
  </div>
</template>
``
<style lang="scss">
.call-us-banner {
  padding: 40px;
  border-radius: 20px;
  border: 1px solid var(--black-black-90, #2a2a2a);
  background: var(--linear, linear-gradient(180deg, rgba(42, 42, 42, 0) 0%, rgba(42, 42, 42, 0.4) 100%));

  &__title {
    color: var(--white);

    @include TitleXSBold;
  }

  &__subtitle {
    color: var(--green-primary);
    margin-top: 8px;

    @include BodyXLRegular;
  }

  &__contacts {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 33px;
    margin-top: 20px;
    padding-top: 20px;
    color: var(--white);
    border-top: 1px solid var(--black-black-80);
  }

  &__phone {
    @include TitleSRegular;
  }

  &--variant-small {
    padding: 20px;

    .call-us-banner__title {
      @include TitleXSBold;
    }

    .call-us-banner__phone {
      display: block;
      @include TitleXSRegular;
    }
  }
}
</style>
