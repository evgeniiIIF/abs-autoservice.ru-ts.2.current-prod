<script setup lang="ts">
const items = [
  { image: 'images/section-services-items/Frame 374.jpg', title: 'Кузовной ремонт', text: ' 12 услуг' },
  {
    image: 'images/section-services-items/Frame 374-1.jpg',
    title: 'Техническое обслуживание',
    text: ' 45 услуг',
  },
  { image: 'images/section-services-items/Frame 374-2.jpg', title: 'Слесарный ремонт', text: ' 69 услуг' },
  { image: 'images/section-services-items/Frame 374-3.jpg', title: 'Диагностика автомобил', text: '7 услуг' },
  { image: 'images/section-services-items/Frame 374-4.jpg', title: 'Дополнительные услуги', text: ' 4 услуги' },
  { image: 'images/section-services-items/Frame 374-4.jpg', title: 'Дополнительные услуги', text: ' 4 услуги' },
];
</script>

<template>
  <section class="section-services">
    <div class="container">
      <div class="section-services__body">
        <h3 class="section-services__title">Услуги</h3>
        <div class="section-services__list">
          <div v-for="item in items" :key="item.title" class="section-services__item">
            <SectionServicesItemMobile :item="item" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.section-services {
  &__body {
  }
  &__title {
    @include SubtitleLBold;
    color: var(--1, #fff);
    margin-bottom: 20px;
    @include desktop {
      margin-bottom: 0px;
    }
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    margin: -5px;
  }
  &__item {
    flex: 0 0 50%;
    padding: 5px;
    height: inherit;
    @include tablet {
    }
  }
}
</style>
