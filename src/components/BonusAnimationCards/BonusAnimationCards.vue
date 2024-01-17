<script setup lang="ts">
import type { BonusAnimationCardsProps } from './BonusAnimationCards.types';

defineProps<BonusAnimationCardsProps>();
</script>

<template>
  <div
    :class="{
      'bonus-animation-cards': true,
      'bonus-animation-cards--animate': isAnimationActive,
    }"
  >
    <div class="bonus-animation-cards__card bonus-animation-cards__card--back ibg">
      <NuxtPicture src="images/bonus-card.png" format="webp" />
    </div>
    <div class="bonus-animation-cards__card bonus-animation-cards__card--front ibg">
      <NuxtPicture src="images/bonus-card.png" format="webp" />
    </div>
  </div>
</template>

<style lang="scss">
.bonus-animation-cards {
  position: relative;
  width: 100%;
  padding-top: 63.6568849%;

  &--animate {
    & .bonus-animation-cards__card--back {
      transform: rotate(-27deg) translate(14px, -55px);
    }
    & .bonus-animation-cards__card--front {
      transform: rotate(8deg) translate(10px, 35px);
    }
  }

  &__card {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: $transition-1;
  }

  &__card--back {
    animation: card-back-init-animate-back 2s ease 0s 1;

    transform: rotate(-14deg) translate(14px, -55px);
  }

  &__card--front {
    animation: card-back-init-animate-front 2s ease 0s 1;
  }
}

@keyframes card-back-init-animate-back {
  0% {
    transform: rotate(-50deg) translate(300px, -300px);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-14deg) translate(14px, -55px);
  }
}
@keyframes card-back-init-animate-front {
  0% {
    transform: rotate(-50deg) translate(300px, -300px);
  }
  60% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
</style>
