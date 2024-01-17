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
@keyframes card-back-init-animate-back {
  0% {
    transform: rotate(-50deg) translate(300px, -300px) skew(60deg, -60deg);
  }
  60% {
    transform: rotate(20deg) translate(0px, 30px);
  }
  100% {
    transform: rotate(-14deg) translate(14px, -55px);
  }
}
@keyframes card-back-init-animate-front {
  0% {
    transform: rotate(-50deg) translate(300px, -300px) skew(60deg, -60deg);
  }
  60% {
    transform: rotate(-20deg) translate(0px, -50px);
  }

  100% {
    transform: rotate(0deg);
  }
}

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
    border-radius: 28px;
    opacity: 0.8;
    box-shadow: 0px 16px 24px 0px rgba(42, 42, 42, 0.15);
    filter: blur(1.5px);
    animation: card-back-init-animate-back 1s ease 0s 1;

    transform: rotate(-14deg) translate(14px, -55px);
  }

  &__card--front {
    animation: card-back-init-animate-front 1s ease 0s 1;
  }
}
</style>
