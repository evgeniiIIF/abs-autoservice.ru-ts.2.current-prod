<script setup lang="ts">
import { useVacanciesStore } from '~/store/vacancies';
import type { VacanciesListItemModalProps, VacanciesListItemModalEmits } from './VacanciesListItemModal.types';

const props = defineProps<VacanciesListItemModalProps>();
const emit = defineEmits<VacanciesListItemModalEmits>();

const { isMobile } = useMediaSizes();
const { vacanciesState } = useVacanciesStore();

const tabsItems = computed(() => ({
  conditions: 'Обязанности',
  requirements: 'Требования',
  responsibilities: 'Условия',
}));

const activeTab = ref('conditions');

const tabsItemsInfo = computed(() => ({
  conditions: props.item.conditions,
  requirements: props.item.requirements,
  responsibilities: props.item.responsibilities,
}));

const handleConnectButtonClick = () => {
  window.open(`mailto:${vacanciesState.value.email}`, '_blank');
};

const handleTabItemClick = (tab: string) => {
  activeTab.value = tab;
};
</script>

<template>
  <div class="vacancies-list-item-modal">
    <div class="vacancies-list-item-modal__top">
      <div class="vacancies-list-item-modal__title">{{ item.title }}</div>
      <div class="vacancies-list-item-modal__salary">{{ item.salary }}</div>
    </div>
    <div class="vacancies-list-item-modal__middle">
      <div class="vacancies-list-item-modal__tabs">
        <div
          v-for="(tab, key) in tabsItems"
          :key="tab"
          :class="['vacancies-list-item-modal__tab', { 'vacancies-list-item-modal__tab--active': key === activeTab }]"
          @click="handleTabItemClick(key)"
        >
          {{ tab }}
        </div>
      </div>
      <div class="vacancies-list-item-modal__content" v-html="tabsItemsInfo[activeTab as keyof typeof tabsItems]"></div>
    </div>
    <div class="vacancies-list-item-modal__buttons">
      <UINewButton :is-full-width="isMobile" @click.stop="handleConnectButtonClick">
        Связаться с работодателем
      </UINewButton>
      <UINewButton :is-full-width="isMobile" fill="outline" text-color="green" @click="emit('onClose')">
        Закрыть
      </UINewButton>
    </div>
  </div>
</template>

<style lang="scss">
.vacancies-list-item-modal {
  width: 100%;
  min-height: 100%;
  border-radius: 40px;
  background: var(--Black-Black-00, #fff);
  padding: 20px;
  width: 640px;

  @include desktop {
    padding: 40px;
  }

  @include mobile {
    width: 100vw;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    border-bottom: 1px solid #cbcccc;
    padding-bottom: 20px;
  }

  &__title {
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
    gap: 20px;

    @include mobile {
      gap: 10px;
    }
  }

  &__tab {
    color: var(--Black-Black-50, #898989);
    @include SubtitleMBold;
    cursor: pointer;

    @include mobile {
      @include SubtitleSBold;
    }

    &--active {
      color: var(--Black-Primary-Black, #111212);
    }
  }

  &__content {
    max-width: 530px;
    width: 100%;

    li {
      padding-left: 0px;
      margin-left: 20px;
      color: var(--Black-Primary-Black, #111212);
      @include BodyLRegular;
      margin-top: 10px;

      &::marker {
        color: var(--green-primary);
      }
    }

    p {
      color: var(--Black-Primary-Black, #111212);
      @include BodyLRegular;
    }
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    @include mobile {
      gap: 10px;
    }
  }
}
</style>
