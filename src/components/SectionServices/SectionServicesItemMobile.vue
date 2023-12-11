<script setup lang="ts">
defineProps<{
  item: {
    image: string;
    title: string;
    text: string;
  };
}>();
</script>
<template>
  <div class="section-service-item-mobile">
    <div class="section-service-item-mobile__image ibg">
      <NuxtPicture :src="item.image" format="webp" loading="lazy" />
    </div>
    <div class="section-service-item-mobile__title">{{ item.title }}</div>
    <div class="section-service-item-mobile__text">{{ item.text }}</div>
  </div>
</template>

<style lang="scss">
.section-service-item-mobile {
  display: flex;
  padding: 10px;
  flex-direction: column;
  border-radius: 20px;
  background: rgba(42, 42, 42, 0.5);
  height: 100%;
  @include tablet {
    padding: 20px;
  }

  &__image {
    margin-bottom: 10px;
    padding-top: 52.173913%;
    border-radius: 10px;
    overflow: hidden;
    background:
      linear-gradient(0deg, rgba(0, 161, 156, 0.5) 0%, rgba(0, 161, 156, 0.5) 100%),
      url(<path-to-image>),
      lightgray 50% / cover no-repeat;
    background-blend-mode: soft-light, normal;
  }
  &__title {
    flex: 1 1 auto;
    margin-bottom: 16px;
    @include BodySBold;
    text-align: center;
    color: var(--black-black-00, #fff);
    @include tablet {
      font-size: 21px;
      line-height: 29px;
    }
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
</style>
