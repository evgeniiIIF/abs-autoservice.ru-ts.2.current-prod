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
            <li class="about-company__review-service-star"></li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>
