<script setup lang="ts">
const SERVICES = [
  { title: 'Техническое обслуживание' },
  { title: 'Диагностика автомобиля' },
  { title: 'Слесарный ремонт' },
  { title: 'Кузовной ремонт' },
  { title: 'Дополнительные услуги' },
];
const AUTOSERVICE_1 = [
  { title: 'Об автосервисе' },
  { title: 'Отзывы' },
  { title: 'Вакансии' },
  { title: 'Бонусная программа' },
];
const AUTOSERVICE_2 = [{ title: 'Расчёт стоимости' }, { title: 'Гарантия' }, { title: 'Акции' }, { title: 'Контакты' }];
</script>
<template>
  <div class="footer-desktop">
    <div class="container">
      <div class="footer-desktop__body">
        <div class="footer-desktop__top top-footer-desktop">
          <nav class="top-footer-desktop__nav">
            <div class="top-footer-desktop__col">
              <h5 class="top-footer-desktop__title">Услуги</h5>
              <ul class="top-footer-desktop__list">
                <li v-for="item in SERVICES" :key="item.title" class="top-footer-desktop__list-item">
                  <NuxtLink class="top-footer-desktop__nav-link">{{ item.title }}</NuxtLink>
                </li>
              </ul>
            </div>
            <div class="top-footer-desktop__col">
              <h5 class="top-footer-desktop__title">Автосервис</h5>
              <div class="top-footer-desktop__nav--0202">
                <ul class="top-footer-desktop__list">
                  <li class="top-footer-desktop__list-item" v-for="item in AUTOSERVICE_1" :key="item.title">
                    <NuxtLink class="top-footer-desktop__nav-link">{{ item.title }}</NuxtLink>
                  </li>
                </ul>
                <ul class="top-footer-desktop__list">
                  <li class="top-footer-desktop__list-item" v-for="item in AUTOSERVICE_2" :key="item.title">
                    <NuxtLink class="top-footer-desktop__nav-link">{{ item.title }}</NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
            <p class="top-footer-desktop__nav-text">
              Все цены, указанные на сайте приведены как справочная информация и не являются публичной офертой,
              определяемой положениями статьи 437 Гражданского кодекса Российской Федерации и могут быть изменены в
              любое время без предупреждения.
            </p>
          </nav>
          <div class="top-footer-desktop__contacts contacts-top-footer-desktop">
            <div class="top-footer-desktop__col">
              <h5 class="top-footer-desktop__title">Контакты</h5>
              <ul class="top-footer-desktop__list">
                <li class="top-footer-desktop__list-item">
                  <a class="contacts-top-footer-desktop__phone">8 (8652) 500-520</a>
                </li>
                <li class="top-footer-desktop__list-item">
                  <address class="contacts-top-footer-desktop__address">
                    <div class="contacts-top-footer-desktop__city">г. Ставрополь</div>
                    <div class="contacts-top-footer-desktop__street">ул. Доваторцев 47Б</div>
                  </address>
                </li>
                <li class="top-footer-desktop__list-item">
                  <a class="contacts-top-footer-desktop__email">info@abs-autoservice.ru</a>
                </li>
                <li class="top-footer-desktop__list-item">
                  <div class="contacts-top-footer-desktop__working-hours working-hours">
                    <div class="working-hours__circles circles-working-hours">
                      <div v-for="circleItem in 6" :key="circleItem" class="circles-working-hours__item"></div>
                      <div class="circles-working-hours__item circles-working-hours__item--incomplete">
                        <div class="circles-working-hours__item--incomplete-inner"></div>
                      </div>
                    </div>
                    <div class="working-hours__row">
                      <div class="working-hours__item">
                        <div class="working-hours__title">пн-сб</div>
                        <div class="working-hours__time">9:00-19:00</div>
                      </div>
                      <div class="working-hours__item">
                        <div class="working-hours__title">вс</div>
                        <div class="working-hours__time">10:00-16:00</div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-desktop__bottom bottom-footer-desktop">
          <div class="bottom-footer-desktop__body">
            <div class="bottom-footer-desktop__01 copy-bottom-footer-desktop">
              <div class="copy-bottom-footer-desktop__01">© Автосервис ABS-AUTO, 2023</div>
              <div class="copy-bottom-footer-desktop__02">
                <div class="copy-bottom-footer-desktop__0201">Политика конфиденциальности</div>
                <div class="copy-bottom-footer-desktop__0202">Карта сайта</div>
              </div>
            </div>
            <div class="bottom-footer-desktop__02">
              <AppCards />
            </div>
            <div class="bottom-footer-desktop__03">
              <AppSocial />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.footer-desktop {
  margin: 0 20px;
  margin-bottom: 15px;
  border-radius: 40px;
  background: var(--Black-Black-90, #2a2a2a);

  @include media($xxl) {
    margin: 0 50px;
    margin-bottom: 15px;
  }
  .container {
    padding: 0 50px;
  }

  &__body {
    padding: 50px 0 32px 0;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 60px;
  }

  &__top {
  }

  &__bottom {
  }
}

.top-footer-desktop {
  display: flex;
  align-items: flex-start;
  gap: 112px;

  &__nav {
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    gap: 20px 98px;
    flex-wrap: wrap;
    flex: 1 1 796px;
  }

  &__col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  &__title {
    color: var(--Black-Black-60, #717171);
    @include TitleXSRegular;
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  &__list-item {
  }

  &__nav-link {
    color: var(--Black-Black-00, #fff);
    @include BodyLRegular;
  }

  &__nav--0202 {
    display: flex;
    align-items: flex-start;
    gap: 60px;
  }

  &__nav-text {
    color: var(--Black-Black-60, #717171);
    @include BodySRegular;
  }

  &__contacts {
    flex: 0 1 285px;
  }
}
.contacts-top-footer-desktop {
  &__phone {
    color: var(--Black-Black-00, #fff);
    @include TitleXSRegular;
  }

  &__address {
  }
  &__city {
    color: var(--Black-Black-60, #717171);
    @include BodyMRegular;
  }
  &__street {
    color: var(--Black-Black-00, #fff);
    @include BodyXLRegular;
  }

  &__email {
    color: var(--Black-Black-00, #fff);
    @include BodyXLRegular;
    text-decoration: underline;
  }

  &__working-hours {
  }
}
.working-hours {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  &__circles {
  }

  &__row {
    display: flex;
    align-items: flex-start;
    gap: 24px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }

  &__title {
    color: var(--Black-Black-60, #717171);
    @include BodyMRegular;
  }

  &__time {
    color: var(--Black-Black-00, #fff);
    @include BodyLRegular;
  }
}
.circles-working-hours {
  display: flex;
  gap: 4px;

  &__item {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--Green-Primary, #00a19c);
  }

  &__item--incomplete {
    display: flex;
    align-items: flex-end;
    background: transparent;
    border: 1px solid var(--Green-Primary, #00a19c);
  }
  &__item--incomplete-inner {
    width: 100%;
    height: 50%;
    background: var(--Green-Primary, #00a19c);
  }
}

.bottom-footer-desktop {
  &__body {
    display: flex;
    align-items: center;
    gap: 236px;
    color: var(--Black-Black-60, #717171);
    @include BodyMRegular;
  }

  &__01 {
  }

  &__02 {
    .cards {
      display: flex;
      padding: 8px 12px;
      align-items: center;
      gap: 9px;
    }
  }

  &__03 {
  }
}
.container {
}
.copy-bottom-footer-desktop {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  &__01 {
  }

  &__02 {
    display: flex;
    align-items: flex-start;
    gap: 20px;
  }

  &__0201 {
  }

  &__0202 {
  }
}
</style>
