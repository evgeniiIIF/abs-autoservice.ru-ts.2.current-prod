<script setup lang="ts">
const offers = [
  {
    title: 'Бесплатная замена масла',
    description: 'При покупке масла в нашем автотехцентре замену мы сделаем для&nbsp;Вас бесплатно!',
    img: '/images/offer-card.png',
    link: '#',
  },
  {
    title: 'Бесплатная диагностика подвески',
    description:
      'Предоставим все необходимые рекомендации по&nbsp;устранению неисправностей и поможем их устранить, если это необходимо.',
    img: '/images/offer-card.png',
    link: '#',
  },
  {
    title: 'Выгодное ТО для любой иномарки',
    description: 'При покупке масла в нашем автотехцентре замену мы сделаем для&nbsp;Вас бесплатно!',
    img: '/images/offer-card.png',
    link: '#',
  },
  {
    title: 'Автозапчасти собственной торговой марки ABSEL уже в продаже',
    description: 'При покупке масла в нашем автотехцентре замену мы сделаем для&nbsp;Вас бесплатно!',
    img: '/images/offer-card.png',
    link: '#',
  },
  {
    title: 'Шины YOKOHAMA по специальным ценам',
    description: 'При покупке масла в нашем автотехцентре замену мы сделаем для&nbsp;Вас бесплатно!',
    img: '/images/offer-card.png',
    link: '#',
  },
  {
    title: 'Экспресс-доставка оригинальных запчастей из Европы',
    description: 'Новая услуга для владельцев автомобилей Mercedes-Benz, BMW, VAG и Land Rover.',
    img: '/images/offer-card.png',
    link: '#',
  },
];
</script>

<template>
  <section class="special-offers">
    <div class="container">
      <h2 class="special-offers__title">Акции и спецпредложения</h2>
      <ul class="special-offers__offers">
        <li v-for="{ title, description, link, img } in offers" :key="title" class="special-offers__offer">
          <OfferCard :title="title" :description="description" :link="link" :img="img" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
.special-offers {
  position: relative;
  padding-bottom: 10px;

  &::before {
    position: absolute;
    bottom: 0;
    left: 20px;
    width: calc(100% - 40px);
    height: 1px;
    content: '';
    background-color: var(--black-black-80, #414141);
  }

  &__title {
    margin-bottom: 20px;
    @include SubtitleLBold;
    color: var(--white, #fff);

    @include tablet {
      @include TitleSBold;
    }
  }

  &__offers {
    display: flex;
    gap: 20px;
    padding-bottom: 20px;
    overflow-x: auto;
    @include scrollbar-x;
    align-content: stretch;

    @include tablet {
      overflow-x: inherit;
      flex-wrap: wrap;
      justify-content: center;
      row-gap: 20px;
    }

    @include from(1210px) {
      justify-content: space-between;
      column-gap: 0;
    }
  }
}
</style>
