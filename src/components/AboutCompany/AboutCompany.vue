<script setup lang="ts"></script>
<template>
  <section class="about-company">
    <div class="about-company__image">
      <NuxtPicture src="/images/about-company.png" loading="lazy" alt="Зал автосервиса" />
    </div>
    <div class="about-company__content">
      <h2 class="about-company__title">
        Автосервис ABS-AUTO –
        <span class="about-company__title-highlighted">15 лет с заботой о ваших автомобилях</span>
      </h2>
      <ul class="about-company__review-services">
        <li class="about-company__review-service">
          <NuxtPicture src="/images/yandex-review.png" loading="lazy" alt="Яндекс" />
          <ul class="about-company__review-service-rating">
            <li v-for="star in 5" :key="star" class="about-company__review-service-star">
              <IcStar :font-controlled="false" :filled="true" />
            </li>
          </ul>
        </li>
      </ul>
      <div class="about-company__description">
        Автосервис ABS-AUTO – сервисный центр в Ставрополе, который входит в состав торгово-инвестиционной группы
        компаний ABS GROUP. Холдинг является одним из крупнейших поставщиков автомобильных запчастей и смазочных
        материалов в СНГ, занимается производством собственных запчастей под брендом ABSEL, а также создает современные
        технологичные решения для автобизнеса. В автосервисе ABS-AUTOмы собрали команду настоящих профессионалов,
        которых объединяет искренняя любовь к автомобилям. Мы предлагаем комплексные услуги по ремонту и полноценному
        обслуживанию Вашего авто с применением только высококачественных средств и оборудования.
      </div>
      <button class="about-company__button" type="button">
        <span>Читать далее</span>
        <IcArrowDown :font-controlled="false" :filled="true" />
      </button>
    </div>
  </section>
</template>

<style lang="scss">
.about-company {
}
</style>
