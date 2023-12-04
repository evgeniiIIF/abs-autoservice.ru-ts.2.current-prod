<script setup lang="ts">
  import {useMediaSizes} from "@/composables/useMediaSizes";

  const descriptionIsOpen = ref(false);
  const descriptionRef = ref<HTMLDivElement | null>(null)
  const descriptionHasFixedHeight = ref(false);

  const { isDesktop } = useMediaSizes();

  watch(() => [descriptionRef.value, isDesktop.value], () => {
    descriptionHasFixedHeight.value = (descriptionRef.value.clientHeight >= 88) && !isDesktop.value
    console.log(descriptionRef.value.clientHeight)
  })
</script>

<template>
  <section class="about-company">
    <div class="container">
      <div class="about-company__content">
        <h2 class="about-company__title">Автосервис ABS-AUTO</h2>
        <p class="about-company__subtitle">– более 15 лет с заботой о ваших автомобилях</p>
        <ul class="about-company__review-services">
          <li v-for="reviewService in 2" :key="reviewService" class="about-company__review-service">
            <NuxtPicture src="/images/yandex-review.png" loading="lazy" alt="Яндекс" />
            <div class="about-company__review-service-rating">
              <IcStar v-for="star in 5" :key="star" :font-controlled="false" :filled="true" />
            </div>
          </li>
        </ul>
        <div class="about-company__description" ref="descriptionRef" :class="{ 'about-company__description--fixed-height': descriptionHasFixedHeight, 'about-company__description--opened': descriptionIsOpen }" @click="() => console.log(descriptionRef.clientHeight)">
          Автосервис ABS-AUTO – сервисный центр в Ставрополе, который входит в состав торгово-инвестиционной группы
          компаний ABS GROUP. Холдинг является одним из крупнейших поставщиков автомобильных запчастей и смазочных
          материалов в СНГ, занимается производством собственных запчастей под брендом ABSEL, а также создает современные
          технологичные решения для автобизнеса. В автосервисе ABS-AUTOмы собрали команду настоящих профессионалов,
          которых объединяет искренняя любовь к автомобилям. Мы предлагаем комплексные услуги по ремонту и полноценному
          обслуживанию Вашего авто с применением только высококачественных средств и оборудования.
        </div>
        <button v-if="descriptionHasFixedHeight" class="about-company__button" :class="{ 'about-company__button--close': descriptionIsOpen }" type="button" @click="descriptionIsOpen = !descriptionIsOpen">
          <span>{{ descriptionIsOpen ? 'Свернуть' : 'Читать далее' }}</span>
          <IcArrowDown :font-controlled="false" :filled="true" />
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about-company {
  padding: 40px 0 30px 0;

  &__content {
    display: grid;
    grid-template-columns: auto;
    grid-template-areas:
    "title"
    "subtitle"
    "description"
    "desc-button"
    "reviews";

    @include desktop {
      justify-content: space-between;
      column-gap: 20px;
      grid-template-areas:
        "title description"
        "subtitle description"
        "desc-button description"
        "reviews description";
    }
  }

  &__title {
    grid-area: title;
    margin-bottom: 10px;
    @include SubtitleXLBold;
    color: var(--white, #fff);

    @include desktop {
      margin-bottom: 8px;
      @include TitleSBold;
    }
  }

  &__subtitle{
    grid-area: subtitle;
    margin-bottom: 20px;
    @include SubtitleSBold;
    color: var(--green-primary, #00A19C);

    @include desktop {
      @include TitleXSBold;
    }
  }

  &__review {
    &-services {
      grid-area: reviews;
      display: flex;
      gap: 20px;
    }

    &-service {
      max-width: 130px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 16px;
      gap: 16px;
      background: var(--linear, linear-gradient(180deg, rgba(42, 42, 42, 0.00) 0%, rgba(42, 42, 42, 0.40) 100%));
      border: 1px solid var(--black-black-90, #2a2a2a);
      border-radius: 20px;

      @include desktop {
        max-width: 220px;
        flex-direction: inherit;
        justify-content: space-between;
      }

      picture {
        display: flex;
      }

      img {
        width: 100%;
      }

      &-rating {
        display: flex;
      }
    }
  }

  &__description {
    grid-area: description;
    margin-bottom: 28px;
    @include BodyMRegular;
    color: var(--black-black-50, #898989);

    @include desktop {
      max-height: inherit;
      max-width: 590px;
      margin-bottom: 0;
      @include BodyLRegular;
    }

    &--fixed-height {
      max-height: 88px;
      overflow: hidden;
    }

    &--opened {
      max-height: inherit;
    }
  }

  &__button {
    grid-area: desc-button;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 28px;
    color: var(--white, #fff);
    border: none;
    background-color: transparent;

    @include desktop {
      display: none;
    }

    svg {
      transition: all 0.3s ease;
    }

    &--close {
      svg {
        transform: rotate(180deg);
      }
    }
  }
}
</style>
