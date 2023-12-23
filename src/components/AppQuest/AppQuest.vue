<script setup lang="ts">
import { useCalculatorBlockStore } from '~/store/calculatorBlock';

import AppQuestQuestion1 from './AppQuestQuestion1.vue';
import AppQuestQuestion2 from './AppQuestQuestion2.vue';
import AppQuestQuestion3 from './AppQuestQuestion3.vue';
import AppQuestQuestion4 from './AppQuestQuestion4.vue';

const { calculatorBlockState } = useCalculatorBlockStore();

const QUEST_ITEMS = [
  {
    component: AppQuestQuestion1,
    title: calculatorBlockState.value.title_step_1,
    inputProps: {
      value: '',
      type: 'text',
      name: 'auto',
      label: calculatorBlockState.value.title_input_step_1,
      placeholder: calculatorBlockState.value.title_input_placeholder_step_1,
      maxlength: 128,
    },
  },
  {
    component: AppQuestQuestion2,
    title: calculatorBlockState.value.title_step_2,
    inputProps: {
      value: '',
      type: 'textarea',
      name: 'problem',
      label: calculatorBlockState.value.title_input_step_2,
      placeholder: calculatorBlockState.value.title_input_placeholder_step_2,
      maxlength: 128,
    },
  },
  {
    component: AppQuestQuestion3,
    title: calculatorBlockState.value.title_step_3,
    inputProps: {
      inputName: {
        value: '',
        type: 'text',
        name: 'name',
        label: 'Имя',
        placeholder: 'Введите имя',
        maxlength: 32,
      },
      inputTel: {
        value: '',
        type: 'tel',
        name: 'phone',
        label: 'Телефон',
        pattern: /[^0-9+]/g,
      },
    },
  },
  {
    component: AppQuestQuestion4,
    titleTop: calculatorBlockState.value.title_step_4,
    text: calculatorBlockState.value.title_input_step_4,
  },
];

const currentStepIndex = ref(0);
const goNextQuestion = () => (currentStepIndex.value += 1);
const goBackQuestion = () => (currentStepIndex.value -= 1);

const currentQuestItem = computed(() => {
  return QUEST_ITEMS[currentStepIndex.value];
});
</script>

<template>
  <form class="quest">
    <div class="quest__blur"></div>
    <div class="quest__content">
      <div v-if="currentStepIndex !== QUEST_ITEMS.length - 1" class="quest__top">
        <div class="quest__text">ШАГ {{ currentStepIndex + 1 }}</div>
        <div class="quest__steps steps-quest">
          <div
            v-for="(item, index) in QUEST_ITEMS.length"
            :key="index"
            :class="{ 'steps-quest__item': true, 'steps-quest__item--active': index <= currentStepIndex }"
          >
            <span v-if="index !== 0" class="steps-quest__line"></span>
            <span class="steps-quest__step">{{ index + 1 }}</span>
          </div>
        </div>
      </div>
      <div class="quest__current">
        <Transition name="fade-in" mode="out-in">
          <component
            :is="currentQuestItem.component"
            :title="currentQuestItem.title"
            :inputProps="currentQuestItem.inputProps"
            :titleTop="currentQuestItem.titleTop"
            :text="currentQuestItem.text"
          ></component>
        </Transition>
      </div>
      <div class="quest__buttons">
        <div v-if="currentStepIndex > 0 && !(currentStepIndex > QUEST_ITEMS.length - 2)" class="quest__button--back">
          <UIButton @click="goBackQuestion">
            <span class="button__arrow">
              <IcArrowLeft />
            </span>
            <span class="button__text">Назад</span>
          </UIButton>
        </div>
        <div v-if="currentStepIndex !== QUEST_ITEMS.length - 1" class="quest__button--next">
          <UIButton @click="goNextQuestion">
            <span class="button__text">{{ currentStepIndex < QUEST_ITEMS.length - 2 ? 'Далее' : ' Завершить ' }}</span>
            <span v-if="currentStepIndex < QUEST_ITEMS.length - 2" class="button__arrow">
              <IcArrowRight />
            </span>
          </UIButton>
        </div>
      </div>
    </div>
    <div class="quest__image ibg">
      <NuxtPicture src="images/quest.png" format="webp" loading="lazy" />
    </div>
  </form>
</template>

<style lang="scss">
.ui-modal .quest {
  @include desktop {
    width: 1000px;
  }
}
.quest {
  background: var(--black-black-90, #2a2a2a);
  border-radius: 16px;
  overflow: hidden;
  @include media(650px) {
    position: relative;
  }
  @include media(880px) {
    display: flex;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    @include media(880px) {
      max-width: 232px;
      margin-bottom: 36px;
    }
  }
  &__text {
    color: var(--black-black-00, #fff);
    @include BodySRegular;
  }
  &__content {
    padding: 20px 20px 0;
    margin-bottom: 40px;
    @include media(650px) {
      padding-bottom: 20px;
      margin-bottom: 0;
    }
    @include media(880px) {
      flex: 1 1 auto;
      padding: 30px 0px 30px 40px;
      .question__title {
        margin-bottom: 24px;
      }
    }
  }
  &__current {
    margin-bottom: 50px;
  }
  &__image {
    padding-top: 60.6779661%;

    @include media(650px) {
      position: absolute;
      right: 0;
      bottom: 0;
      padding-top: 26.8333333%;
      width: 47%;
    }
    @include media(880px) {
      position: relative;
      padding-top: 0;
      flex: 0 0 49.1666667%;
      display: flex;
      min-height: 358px;

      img {
        top: auto;
        bottom: 0;
        height: auto;
      }
    }
  }
  &__buttons {
    display: flex;
    justify-content: space-between;
    max-width: 265px;

    .button {
      height: 100%;
    }
    svg {
      width: 24px;
      height: 24px;
    }
  }
  &__button--back {
    .button {
      &__arrow {
        margin-right: 8px;
      }
    }
  }
  &__button--next {
    .button {
      &__arrow {
        margin-left: 8px;
      }
    }
  }
}

.steps-quest {
  display: flex;
  align-items: center;

  &__item {
    display: flex;
    align-items: center;
  }

  &__item--active {
    .steps-quest__step {
      border-top: 1px solid var(--green-green-80, #33b4b0);
      background: var(--green-primary, #00a19c);
      box-shadow: 0px 2px 10px 0px rgba(0, 161, 156, 0.7);
    }
    .steps-quest__line {
      border-top: 1px solid var(--green-green-80, #33b4b0);
      background: var(--green-primary, #00a19c);
      box-shadow: 0px 2px 10px 0px rgba(0, 161, 156, 0.7);
    }
  }
  &__line {
    display: block;
    height: 4px;
    width: 20px;
    border-top: 1px solid var(--black-black-70, #4d4d4d);
    background: var(--black-black-80, #414141);
  }
  &__step {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    border-radius: 7px;
    border-top: 1px solid var(--black-black-70, #4d4d4d);
    background: var(--black-black-80, #414141);
    @include BodyXSRegular;
    color: var(--black-black-00, #fff);
  }
}

.fade-in-enter-from {
  transform: translate(20px);
  opacity: 0;
}

.fade-in-enter-to {
  transition: all 0.5s ease 0s;
}

.quest__blur {
  position: absolute;
  width: 227px;
  height: 227px;
  top: -65px;
  right: -235px;
  z-index: -1;
  background: #00a19c;
  filter: blur(150px);

  @include media(650px) {
    right: 0;
    z-index: 0;
  }
}
</style>