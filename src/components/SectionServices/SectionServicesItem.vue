<script setup lang="ts">
import type { SectionServicesItemProps } from './SectionServices.types';

defineProps<SectionServicesItemProps>();
</script>

<template>
  <div class="section-service-item">
    <div class="section-service-item__image">
      <NuxtPicture
        :src="item.image ?? 'undefined'"
        :alt="item.image_alt ?? ''"
        :title="item.image_title"
        format="webp"
        loading="lazy"
      />
    </div>
    <div class="section-service-item__content">
      <NuxtLink class="section-service-item__title" :to="item.link">{{ item.title }}</NuxtLink>
      <div class="section-service-item__subcategories service-subcategories-list">
        <div
          v-for="subcategoryItem in item.subcategories"
          :key="subcategoryItem.title"
          class="service-subcategories-list__item"
        >
          <NuxtLink class="service-subcategories-list__item-title" :to="subcategoryItem.link">
            {{ subcategoryItem.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.section-service-item {
  display: flex;
  gap: 20px;
  padding: 10px;

  border-radius: 40px;
  border: 1px solid var(--black-black-80, #414141);
  background: var(--black-primary-black, #111212);

  @include desktop {
    height: auto;
    padding: 20px;
  }

  &__image {
    border-radius: 20px;
    height: 192px;
    width: 172px;
    min-width: 172px;
    background:
      linear-gradient(0deg, rgba(0, 161, 156, 0.5) 0%, rgba(0, 161, 156, 0.5) 100%),
      lightgray 50% / cover no-repeat;
    background-blend-mode: soft-light, normal;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__title {
    flex: 1 1 auto;
    margin-bottom: 22px;
    color: var(--black-black-00, #fff);

    @include TitleXSRegular;
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
