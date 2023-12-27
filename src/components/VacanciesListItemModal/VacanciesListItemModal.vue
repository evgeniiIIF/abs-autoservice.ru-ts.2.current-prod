<script setup lang="ts">
import type { VacanciesListItemModalProps, VacanciesListItemModalEmits } from './VacanciesListItemModal.types';

const emit = defineEmits<VacanciesListItemModalEmits>();
defineProps<VacanciesListItemModalProps>();

const items = [
  { title: 'Запись автомобилей на сервис согласно автоплану;' },
  { title: 'Приём и выдача автомобилей, ведение автомобиля клиента на всех этапах работ' },
  { title: 'Согласование стоимости и объема ремонтных работ' },
  { title: 'Консультирование клиентов по техническим вопросам, услугам сервиса' },
  { title: 'Контроль качества ремонтных работ' },
  { title: 'Оформление заказ-нарядов и документации' },
  { title: 'Продвижение услуг сервиса.' },
];
</script>

<template>
  <div class="vacancies-list-item-modal">
    <div class="vacancies-list-item-modal__top">
      <div class="vacancies-list-item-modal__title">{{ item.title }}</div>
      <div class="vacancies-list-item-modal__salary">до 100 000₽</div>
    </div>
    <div class="vacancies-list-item-modal__middle">
      <div class="vacancies-list-item-modal__tabs">
        <div class="vacancies-list-item-modal__tab">Обязанности</div>
        <div class="vacancies-list-item-modal__tab">Требования</div>
        <div class="vacancies-list-item-modal__tab">Условия</div>
      </div>
      <ul class="vacancies-list-item-modal__list">
        <li class="vacancies-list-item-modal__list-item" v-for="item in items" :key="item.title">
          <div class="vacancies-list-item-modal__list-item-icon">
            <IcVacanciesListIcon :font-controlled="false" :filled="true" />
          </div>
          <div class="vacancies-list-item-modal__list-item-text">{{ item.title }}</div>
        </li>
      </ul>
    </div>
    <div class="vacancies-list-item-modal__buttons">
      <UINewButton>Связаться с работодателем</UINewButton>
      <UINewButton fill="outline" text-color="green" @click="emit('onClose')">Закрыть</UINewButton>
    </div>
  </div>
</template>

<style lang="scss">
.vacancies-list-item-modal {
  min-width: 640px;
  min-height: 100%;
  border-radius: 40px;
  background: var(--Black-Black-00, #fff);
  padding: 20px;
  @include desktop {
    padding: 40px;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid #cbcccc;
    padding-bottom: 20px;
  }

  &__title {
    margin-right: 100px;

    color: var(--Black-Primary-Black, #111212);
    @include TitleSBold;
  }

  &__salary {
    color: var(--Black-Black-60, #717171);
    @include TitleXSRegular;
  }

  &__middle {
    padding-top: 20px;
    margin-bottom: 40px;
  }

  &__tabs {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    @include mr(20px);
  }

  &__tab {
    color: var(--Black-Black-50, #898989);
    @include SubtitleMBold;
  }

  &__list {
    @include mb(10px);
  }

  &__list-item {
    display: flex;
    align-items: center;
  }

  &__list-item-icon {
    margin-right: 4px;
  }

  &__list-item-text {
    color: var(--Black-Primary-Black, #111212);
    @include BodyLRegular;
  }

  &__buttons {
    display: flex;
    @include mr(20px);
  }
}
</style>
