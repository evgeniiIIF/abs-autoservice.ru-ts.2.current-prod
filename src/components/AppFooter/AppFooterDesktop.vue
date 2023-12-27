<script setup lang="ts">
import { appRoutes } from '~/appRoutes';
import { useContactsStore } from '~/store/contacts';
import { useMenuStore } from '~/store/menu';
import { useServicesStore } from '~/store/services';

const { contactsState } = useContactsStore();
const { servicesState } = useServicesStore();
const { menuState } = useMenuStore();

const workTimeItems = computed(() => contactsState.value.time_work?.split(',').map((item) => item.split(' ')));
const addressItems = computed(() => contactsState.value.address?.split(','));
</script>

<template>
  <footer class="footer-desktop">
    <div class="footer-desktop__content">
      <div class="footer-desktop__info">
        <div class="footer-desktop__navigation">
          <nav class="footer-desktop__service-nav">
            <div class="footer-desktop__service-title">Услуги</div>
            <ul class="footer-desktop__service-list">
              <li
                v-for="service in servicesState.mainServices"
                :key="service.id"
                class="footer-desktop__service-list-item"
              >
                <NuxtLink :to="appRoutes.services(service.id)">
                  {{ service.title }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
          <nav class="footer-desktop__app-nav">
            <div class="footer-desktop__app-title">Автосервис</div>
            <ul class="footer-desktop__app-list">
              <li
                v-for="item in menuState.footer.autoservice_menu"
                :key="item.title"
                class="footer-desktop__app-list-item"
              >
                <NuxtLink :to="item.link">
                  {{ item.title }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
        <p class="footer-desktop__description">
          {{ menuState.footer.footer_content }}
        </p>
      </div>
      <div class="footer-desktop__contacts">
        <div class="footer-desktop__contacts-title">Контакты</div>
        <a
          class="footer-desktop__contacts-phone"
          :href="`tel:${contactsState.phone?.match(/\d+/g)?.join('')}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ contactsState.phone }}
        </a>
        <div class="footer-desktop__contacts-city">{{ addressItems?.[0] }}</div>
        <div class="footer-desktop__contacts-address">{{ addressItems?.[1] }}</div>
        <a class="footer-desktop__contacts-mail" :href="`mailto:${contactsState.mail}`">{{ contactsState.mail }}</a>
        <div class="footer-desktop__contacts-chart">
          <div v-for="circleItem in 6" :key="circleItem" class="footer-desktop__contacts-chart-item" />
        </div>
        <div class="footer-desktop__contacts-work-time">
          <div class="footer-desktop__contacts-work-block">
            <div class="footer-desktop__contacts-work-period">{{ workTimeItems?.[0][0] }}</div>
            <div class="footer-desktop__contacts-work-value">{{ workTimeItems?.[0][1] }}</div>
          </div>
          <div class="footer-desktop__contacts-work-block">
            <div class="footer-desktop__contacts-work-period">{{ workTimeItems?.[1][1] }}</div>
            <div class="footer-desktop__contacts-work-value">{{ workTimeItems?.[1][2] }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-desktop__bottom">
      <div class="footer-desktop__bottom-items">
        <div class="footer-desktop__bottom-item">
          <div class="footer-desktop__copy-right">{{ menuState.footer.copyright }}</div>
          <div class="footer-desktop__bottom-links">
            <NuxtLink v-for="item in menuState.footer.official_links" :key="item.link" :to="item.link" target="_black">
              {{ item.title }}
            </NuxtLink>
          </div>
        </div>
        <div class="footer-desktop__bottom-item">
          <AppCards />
        </div>
        <div class="footer-desktop__bottom-item">
          <AppSocial />
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
.footer-desktop {
  padding: 60px 0 32px 0;
  border-radius: 40px;
  background: var(--Black-Black-90, #2a2a2a);

  &__content,
  &__bottom {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
  }

  &__content {
    justify-content: space-between;
  }

  &__bottom {
    margin-top: 50px;
  }

  &__navigation {
    display: flex;
    gap: 98px;
    max-width: 976px;
  }

  &__service-title,
  &__app-title,
  &__contacts-title {
    color: var(--black-black-60);

    @include TitleXSRegular;
  }

  &__service-list,
  &__app-list {
    list-style: none;
  }

  &__app-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 60px;
  }

  &__service-list-item,
  &__app-list-item {
    margin-top: 20px;

    a {
      color: var(--white);

      @include BodyLRegular;
    }
  }

  &__description {
    max-width: 794px;
    margin-top: 20px;
    color: var(--black-black-60);

    @include BodySRegular;
  }

  &__contacts {
    max-width: 350px;
  }

  &__contacts-phone {
    margin-top: 20px;
    color: var(--white);

    @include TitleXSRegular;
  }

  &__contacts-city {
    margin-top: 20px;
    color: var(--black-black-60);

    @include BodyMRegular;
  }

  &__contacts-address {
    margin-top: 10px;
    color: var(--white);

    @include BodyXLRegular;
  }

  &__contacts-mail {
    margin-top: 20px;
    color: var(--Black-Black-00, #fff);
    text-decoration: underline;

    @include BodyXLRegular;
  }

  &__contacts-chart {
    margin-top: 20px;
    display: flex;
    gap: 4px;
  }

  &__contacts-chart-item {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--Green-Primary, #00a19c);
    border: 1px solid var(--Green-Primary, #00a19c);

    &:last-child {
      background: linear-gradient(to top, var(--green-primary) 50%, #2a2a2a 50%);
    }
  }

  &__contacts-work-time {
    margin-top: 10px;
    display: flex;
    gap: 24px;
    align-items: center;
  }

  &__contacts-work-period {
    color: var(--black-black-60);

    @include BodyMRegular;
  }

  &__contacts-work-value {
    color: var(--white);

    @include BodyLRegular;
  }

  &__bottom-items {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  &__bottom-item {
    &:nth-child(2) {
      width: 132px;
    }

    &:nth-child(3) {
      margin-right: 24px;
    }
  }

  &__copy-right {
    color: var(--black-black-60);

    @include BodyMRegular;
  }

  &__bottom-links {
    margin-top: 10px;
    display: flex;
    gap: 24px;

    a {
      color: var(--black-black-60);
      text-decoration: underline;

      @include BodyMRegular;
    }
  }
}
</style>
