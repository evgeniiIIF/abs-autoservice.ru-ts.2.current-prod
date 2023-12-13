<script setup lang="ts">
const { isMobile } = useMediaSizes();

const items = [
  {
    image: 'images/section-services-items/Frame.jpg',
    title: 'Кузовной ремонт',
    text: '12 услуг',
    subcategories: [
      { title: 'Защита кузова', link: 'link' },
      { title: 'Удаление царапин и вмятин', link: 'link' },
      { title: 'Покраска автомобиля', link: 'link' },
      { title: 'Бронирование фар', link: 'link' },
      { title: 'Восстановление геометрии кузова', link: 'link' },
      { title: 'Полировка кузова автомобиля', link: 'link' },
    ],
  },
  {
    image: 'images/section-services-items/Frame1.jpg',
    title: 'Техническое обслуживание',
    text: ' 45 услуг',
    subcategories: [
      { title: 'Замена фильтров', link: 'link' },
      { title: 'Антибактериальная обработка кондиционера', link: 'link' },
      { title: 'Замена помпы', link: 'link' },
      { title: 'Замена технических жидкостей в автомобиле', link: 'link' },
      { title: 'Развал схождение', link: 'link' },
      { title: 'Замена свечей', link: 'link' },
      { title: 'Замена приводного ремня', link: 'link' },
    ],
  },
  {
    image: 'images/section-services-items/Frame2.jpg',
    title: 'Слесарный ремонт',
    text: ' 69 услуг',
    subcategories: [
      { title: 'Ремонт тормозной системы', link: 'link' },
      { title: 'Ремонт подвески', link: 'link' },
      { title: 'Ремонт рулевого управления', link: 'link' },
      { title: 'Ремонт двигателей', link: 'link' },
      { title: 'Ремонт трансмиссии', link: 'link' },
      { title: 'Ремонт топливной системы', link: 'link' },
      { title: 'Ремонт выхлопной системы', link: 'link' },
    ],
  },
  {
    image: 'images/section-services-items/Frame3.jpg',
    title: 'Диагностика автомобил',
    text: '7 услуг',
    subcategories: [
      { title: 'Комплексная проверка состояния авто', link: 'link' },
      { title: 'Диагностика подвески', link: 'link' },
      { title: 'Диагностика двигателя', link: 'link' },
      { title: 'Диагностика тормозной системы', link: 'link' },
      { title: 'Диагностика электрооборудования', link: 'link' },
      { title: 'Компьютерная диагностика', link: 'link' },
    ],
  },
  {
    image: 'images/section-services-items/Frame4.jpg',
    title: 'Дополнительные услуги',
    text: ' 4 услуги',
    subcategories: [
      { title: 'Химчистка', link: 'link' },
      { title: 'Тонировка', link: 'link' },
      { title: 'Автомойка', link: 'link' },
      { title: 'Диагностика тормозной системы', link: 'link' },
      { title: 'Установка доп. оборудования', link: 'link' },
      { title: 'Шиномонтаж и балансировка колес', link: 'link' },
    ],
  },
];
</script>

<template>
  <section class="section-services">
    <div class="container">
      <div class="section-services__body">
        <div class="section-services__title-wrapper">
          <h3 class="section-services__title">Услуги</h3>
        </div>
        <div class="section-services__list">
          <div v-for="item in items" :key="item.title" class="section-services__item">
            <SectionServicesItemMobile v-if="isMobile" :item="item" />
            <SectionServicesItem v-else :item="item" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.section-services {
  &__body {
    padding: 30px 0;
    position: relative;
    @include desktop {
      display: flex;
      padding: 80px 0;
      margin-bottom: 272px;
    }
  }
  &__title-wrapper {
    margin-bottom: 20px;
    @include desktop {
      margin-bottom: 0px;
      margin-right: 104px;
    }
    @include media(1200px) {
      margin-right: 204px;
    }
  }

  &__title {
    @include SubtitleLBold;
    color: var(--1, #fff);

    @include tablet {
      @include TitleSBold;
    }
    @include desktop {
      position: sticky;
      top: 160px;
    }
  }
  &__list {
    counter-reset: card;
    position: relative;

    display: flex;
    flex-wrap: wrap;
    margin: -5px;
    @include tablet {
      margin: 0;
      // @include mb(20px);
    }
    @include desktop {
      position: relative;
    }
  }
  &__item {
    flex: 0 0 50%;
    padding: 5px;
    height: inherit;

    @include tablet {
      padding: 0;
      flex: 0 0 100%;
    }
    @include desktop {
      position: sticky;
      top: 60px;

      @for $i from 0 through 4 {
        &:nth-of-type(#{$i}) {
          transform: translateY(calc((#{$i} * 70px)));
        }
      }
      &:last-child {
        transform: translateY(300px);
      }
      // position: sticky;
      // left: 0;

      // &:nth-child(1) {
      //   top: $top;
      // }
      // &:nth-child(2) {
      //   top: $top * 2;
      // }
      // &:nth-child(3) {
      //   top: $top * 3;
      // }
      // &:nth-child(4) {
      //   top: $top * 4;
      // }
      // &:nth-child(5) {
      //   top: $top * 5;
      // }
    }
  }
}

// @for $i from 1 through 5 {
//   .section-services__item:nth-child(#{$i}) {
//     top: $i * 3 + rem;
//   }
// }
</style>
