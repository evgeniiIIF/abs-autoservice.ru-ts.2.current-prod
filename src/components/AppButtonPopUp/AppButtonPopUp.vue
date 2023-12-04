<script setup lang="ts"></script>

<template>
  <div class="button-pop-up">
    <div class="button-pop-up__items">
      <div class="button-pop-up__item button-pop-up__item--top">
        <div class="button-pop-up__image">
          <slot />
        </div>
      </div>
      <div class="button-pop-up__item button-pop-up__item--bottom">
        <div class="button-pop-up__image">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.button-pop-up {
  position: relative;
  width: 88px;
  height: 88px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    .button-pop-up__items {
      transition: $transition-1;
      transform: translateY(-50%);
    }
  }

  &__items {
    transform: translateY(0%);
    transition: $transition-1;
    width: 100%;
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 88px;
    height: 88px;
  }
  &__item--top {
  }
  &__item--bottom {
    background: var(--green-primary, #00a19c);
  }
  &__image {
    svg {
      @include svg-color(#fff);

      width: 24px;
      height: 24px;
    }
  }
}
</style>
