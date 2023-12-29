<script setup lang="ts">
import type { RequisitesModalProps, RequisitesModalEmits } from './RequisitesModal.types';

defineProps<RequisitesModalProps>();
defineEmits<RequisitesModalEmits>();

const listItems = [
  { title: 'Полное официальное наименование автосервиса', text: `ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "АБС-АВТО"` },
  { title: 'Английское название', text: 'ABS-AUTO' },
  { title: 'Юридический адрес', text: 'г. Ставрополь, ул. Доваторцев 47Б' },
  { title: 'ОКОПФ', text: 'Общества с ограниченной ответственностью' },
  {
    title: 'ОКОГУ',
    text: 'Организации, учрежденные юридическими лицами или гражданами, или юридическими лицами и гражданами совместно',
  },
  { title: 'Корр. счет', text: '30101810145250000974 в ГУ Банка России по ЦФО' },
  { title: 'Р/С', text: '30232810100000000004' },
  { title: 'БИК', text: '044525974' },
  { title: 'ИНН/КПП', text: '2311118190/263501001' },
  { title: 'ОГРН', text: '1092311003663' },
  { title: 'Код ОКПО', text: '61964605' },
  { title: 'Дата присвоения ОГРН', text: '28.11.2002 г.' },
];
</script>

<template>
  <UIModal
    :is-open="isOpen"
    :position="position"
    container-class="requisites-modal-container"
    @on-close="$emit('onClose')"
  >
    <div class="requisites">
      <h2 class="requisites__title">Реквизиты OOO «ABS Автосервис»</h2>
      <ul class="requisites__list">
        <li v-for="item in listItems" :key="item.title" class="requisites__list-item">
          <div class="requisites__list-item-title">{{ item.title }}</div>
          <div class="requisites__list-item-text">{{ item.text }}</div>
        </li>
      </ul>
      <div class="requisites__buttons">
        <UINewButton>Скачать PDF</UINewButton>
        <UINewButton fill="outline" textColor="green">Закрыть</UINewButton>
      </div>
    </div>
  </UIModal>
</template>

<style lang="scss">
.requisites-modal-container {
  @include tablet {
    padding: 0px 50px;
  }
}

.requisites {
  max-width: 997px;
  padding: 20px;
  border-radius: 20px;
  background: var(--Black-Black-00, #fff);
  @include desktop {
    padding: 40px;
    border-radius: 40px;
  }

  &__title {
    margin-bottom: 40px;
  }

  &__list {
    list-style: none;
    margin-bottom: 20px;
  }

  &__list-item {
    display: grid;
    padding: 10px 0px;
    @include desktop {
      grid-template-columns: repeat(2, 1fr);
    }
    border-bottom: 1px solid #cbcccc;
  }

  &__list-item-title {
    margin-bottom: 10px;
    color: var(--Black-Black-60, #717171);
    @include BodyMRegular;

    @include desktop {
      margin-bottom: 0;
    }
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
