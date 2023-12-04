<script setup lang="ts">
import AppSocial from '@/components/AppSocial/AppSocial.vue';
import vk from '@/assets/icons/vk.svg';
import { useMediaSizes } from '@/composables/useMediaSizes';

const { isLessThanDesktop } = useMediaSizes();

const name = ref('');
const phone = ref('');
</script>

<template>
  <section class="callback-form">
    <div class="callback-form__container">
      <div class="callback-form__content">
        <h2 class="callback-form__title">Закажите обратный звонок&nbsp;из&nbsp;автосервиса</h2>
        <p class="callback-form__description">Оставьте заявку или просто напишите нам в мессенджеры</p>
        <form class="callback-form__form">
          <div class="callback-form__inputs">
            <div class="callback-form__input">
              <UIInput v-model="name" type="text" title="Имя" placeholder="Введите имя" />
            </div>
            <div class="callback-form__input">
              <UIInput v-model="phone" type="phone" title="Телефон" />
            </div>
          </div>
          <div class="callback-form__button">
            <UIButton tag="button" type="submit" has-full-width>Оставить заявку</UIButton>
          </div>
        </form>
        <p class="callback-form__policy">Нажимая кнопку, вы соглашаетесь с нашей Политикой конфиденциальности</p>
        <ul class="callback-form__socials">
          <li v-for="social in 2" :key="social" class="callback-form__social">
            <AppSocial link="#" :img="vk" background="green" />
          </li>
        </ul>
      </div>
      <div v-if="!isLessThanDesktop" class="callback-form__image">
        <NuxtPicture src="/images/callback-form.png" format="webp,png,jpg" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.callback-form {
  margin: 0 10px;
  padding: 20px 0;

  @include desktop {
    margin: 0 40px;
  }

  &__container {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px 20px;
    border-radius: 20px;
    border-top: 1px solid var(--black-black-80, #414141);
    background: var(--black-black-90, #2a2a2a);

    @include desktop {
      padding: 40px;
    }
  }

  &__content {
    @include desktop {
      max-width: 632px;
    }
  }

  &__title {
    margin-bottom: 10px;
    @include SubtitleLBold;
    color: var(--white, #fff);

    @include desktop {
      margin-bottom: 8px;
      @include TitleSBold;
    }
  }

  &__description {
    margin-bottom: 20px;
    @include BodyMRegular;
    color: var(--black-black-50, #898989);

    @include desktop {
      margin-bottom: 24px;
      @include SubtitleSRegular;
    }
  }

  &__form {
    margin-bottom: 8px;

    @include desktop {
      display: flex;
      gap: 20px;
      margin-bottom: 6px;
    }
  }

  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;

    @include desktop {
      width: 100%;
      max-width: 460px;
      flex-direction: inherit;
      margin-bottom: 0;
    }
  }

  &__input {
    @include desktop {
      width: 100%;
      max-width: 220px;
    }
  }

  &__button {
    button {
      line-height: 130%;
    }

    @include desktop {
      width: 100%;
      max-width: 158px;
      display: flex;
      align-items: flex-end;
    }
  }

  &__policy {
    margin-bottom: 24px;
    @include BodySRegular;
    color: var(--black-black-50, #898989);

    @include desktop {
      margin-bottom: 20px;
    }
  }

  &__socials {
    display: flex;
    gap: 20px;
  }

  &__image {
    position: absolute;
    bottom: -4px;
    right: 0;

    img {
      width: 488px;

      @include to(1200px) {
        width: 400px;
      }
    }
  }
}
</style>
