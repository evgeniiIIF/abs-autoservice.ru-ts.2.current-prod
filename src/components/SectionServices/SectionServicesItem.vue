<script setup lang="ts">
import type { SectionServicesItemProps } from './SectionServices.types';

defineProps<SectionServicesItemProps>();
</script>
<template>
  <div class="section-service-item">
    <div class="section-service-item__image ibg">
      <NuxtPicture :src="item.image ?? 'undefined'" format="webp" loading="lazy" />
    </div>
    <div class="section-service-item__content">
      <h2 class="section-service-item__title">{{ item.title }}</h2>
      <div class="section-service-item__subcategories service-subcategories-list">
        <div
          v-for="subcategoryItem in item.subcategories"
          :key="subcategoryItem.title"
          class="service-subcategories-list__item"
        >
          <h3 class="service-subcategories-list__item-title">{{ subcategoryItem.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.section-service-item {
  display: flex;
  padding: 10px;

  border-radius: 40px;
  border: 1px solid var(--black-black-80, #414141);
  background: var(--black-primary-black, #111212);

  @include tablet {
    height: auto;
    padding: 20px;
  }
  @include desktop {
  }

  &__image {
    flex: 0 0 20.1169591%;
    margin-right: 20px;
    border-radius: 20px;
    overflow: hidden;
    background:
      linear-gradient(0deg, rgba(0, 161, 156, 0.5) 0%, rgba(0, 161, 156, 0.5) 100%),
      lightgray 50% / cover no-repeat;
    background-blend-mode: soft-light, normal;
  }
  &__title {
    flex: 1 1 auto;
    margin-bottom: 22px;
    @include TitleXSRegular;
    color: var(--black-black-00, #fff);
  }
  &__text {
    color: var(--black-black-50, #898989);
    text-align: center;
    text-decoration: underline;
    @include BodyXSRegular;
    @include tablet {
      font-size: 21px;
      line-height: 29px;
    }
  }
  &__subcategories {
  }
}
.service-subcategories-list {
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 10px;
  align-self: stretch;
  flex-wrap: wrap;

  &__item {
    display: flex;

    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: var(--black-black-90, #2a2a2a);
  }
  &__item-title {
    @include BodyLRegular;
    color: var(--black-black-20, #cbcccc);
  }
}
</style>
