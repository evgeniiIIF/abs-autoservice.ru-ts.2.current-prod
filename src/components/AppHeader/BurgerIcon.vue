<template>
  <div class="burger-icon">
    <div class="burger-icon__wrapper">
      <div class="burger-icon__body">
        <span class="burger-icon__item burger-icon__item--top"></span
        ><span class="burger-icon__item burger-icon__item--middle"></span
        ><span class="burger-icon__item burger-icon__item--bottom"></span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.burger-icon {
  cursor: pointer;
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
  }
  &__body {
    position: relative;
    width: 16px;
    height: 14px;
  }
  &__item {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background: #fff;
    border-radius: 1px;
  }
  &__item--top {
    top: 0;
  }
  &__item--middle {
    top: 50%;
    transform: translateY(-50%);
  }
  &__item--bottom {
    right: 0;
    bottom: 0;
    width: 60%;
  }
}
</style>
