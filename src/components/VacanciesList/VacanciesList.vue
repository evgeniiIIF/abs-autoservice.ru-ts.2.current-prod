<script setup lang="ts">
import type { VacanciesListProps, VacanciesListItem } from './VacanciesList.types';

const [isOpenModal, handleOpenModal, closeModal] = useBooleanState(false);

withDefaults(defineProps<Partial<VacanciesListProps>>(), {
  hasButtons: false,
});

const currentItem = ref<Partial<VacanciesListItem>>({});

const openModal = (item: VacanciesListItem) => {
  currentItem.value = item;
  handleOpenModal();
};
</script>

<template>
  <ul class="vacancies-list">
    <li v-for="item in items" :key="item.id" class="vacancies-list__item">
      <div class="vacancies-list__item-link" @click="openModal(item)">
        <h5 class="vacancies-list__item-title">{{ item.title }}</h5>
        <div v-if="hasButtons" class="vacancies-list__item-row">
          <div class="vacancies-list__item-row-text">подробнее</div>
          <UIIconButton fill="outline" color="green">
            <IcArrowButtonIconRight :font-controlled="false" :filled="true" />
          </UIIconButton>
        </div>
      </div>
    </li>
    <VacanciesListModal :isOpen="isOpenModal" :item="currentItem" @onClose="closeModal" />
  </ul>
</template>

<style lang="scss">
.vacancies-list {
  list-style: none;

  & > * {
    padding: 20px 0px;
    border-bottom: 1px solid var(--Black-Black-80, #414141);
  }

  & > *:first-child {
    padding: 0 0 20px 0;
  }

  & > *:last-child {
    border-bottom: none;
  }

  &__item {
    @include hover {
      cursor: pointer;

      .vacancies-list__item-title {
        color: var(--Green-Primary, #00a19c);
      }

      .vacancies-list__item-row-text {
        color: #fff;
        text-decoration: underline;
      }

      .icon-button {
        background: var(--Green-Primary, #00a19c);
      }
    }
  }

  &__item-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__item-title {
    color: var(--Black-Black-00, #fff);
    text-overflow: ellipsis;
    @include SubtitleXLRegular;
    @include desktop {
      margin-right: 80px;
    }
  }

  &__item-row {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__item-row-text {
    color: var(--Black-Black-50, #898989);
    @include BodyXLRegular;
  }
}
</style>
