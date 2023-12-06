<script setup lang="ts">
import { QUEST_ITEMS } from './SectionCostCalculation.constants';

const { isMobile } = useMediaSizes();

const currentStepIndex = ref(0);
const goNextQuestion = () => (currentStepIndex.value += 1);
const goBackQuestion = () => (currentStepIndex.value -= 1);

const currentQuestItem = computed(() => {
  return QUEST_ITEMS[currentStepIndex.value];
});
</script>

<template>
  <div class="cost-calculation">
    <div class="container">
      <div class="cost-calculation__body">
        <div class="cost-calculation__top">
          <h2 class="cost-calculation__title">Быстрый и простой расчет стоимости ремонта и обслуживания автомобиля</h2>
          <p v-if="!isMobile" class="cost-calculation__text">
            Ответьте на несколько вопросов и получите точную стоимость у нашего специалиста
          </p>
        </div>
        <form class="cost-calculation__quest quest">
          <div class="quest__content">
            <div class="quest__top">
              <div class="quest__text">ШАГ 1</div>
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
                ></component>
              </Transition>
            </div>
            <div class="quest__buttons">
              <div v-if="currentStepIndex > 0" class="quest__button--back">
                <UIButton @click="goBackQuestion">
                  <span class="button__arrow">
                    <IcArrowLeft />
                  </span>
                  <span class="button__text">Назад</span>
                </UIButton>
              </div>
              <div class="quest__button--next">
                <UIButton @click="goNextQuestion">
                  <span class="button__text">Далее</span>
                  <span class="button__arrow">
                    <IcArrowRight />
                  </span>
                </UIButton>
              </div>
            </div>
          </div>
          <div class="quest__image ibg">
            <NuxtPicture src="images/quest.png" format="webp" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.cost-calculation {
  &__body {
    padding: 60px 0 80px;
  }
  &__top {
    margin-bottom: 20px;
    @include mb(8px);
  }

  &__title {
    @include SubtitleLBold;
    color: var(--1, #fff);

    @include tablet {
      @include TitleSBold;
    }
  }
  &__text {
    @include SubtitleSRegular;
    color: var(--black-black-50, #898989);
  }
}

.quest {
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  &__text {
    color: var(--black-black-00, #fff);
    @include BodySRegular;
  }
  &__current {
    min-height: 173px;
    margin-bottom: 50px;
  }
  &__image {
    padding-top: 60.6779661%;
  }
  &__buttons {
    display: flex;
  }
  &__button--back {
    margin-right: 20px;
    .button {
      &__arrow {
        margin-right: 8px;
      }
    }
  }
  &__button--next {
    .button {
      &__text {
        margin-right: 8px;
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
  transform: translate(50px);
  opacity: 0;
}

.fade-in-enter-to {
  transition: all 0.5s ease 0s;
}
</style>
