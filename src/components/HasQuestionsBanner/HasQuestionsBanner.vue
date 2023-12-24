<template>
  <div class="has-questions-banner">
    <p class="has-questions-banner__title">Остались вопросы?</p>
    <p class="has-questions-banner__subtitle">Свяжитесь с нашим оператором любым удобным для вас способом</p>
    <AppSocial class="has-questions-banner__socials" with-border />
  </div>
</template>

<style lang="scss">
.has-questions-banner {
  padding: 20px;
  background: var(--black-black-90);
  border-radius: 20px;

  &__title {
    color: var(--white);

    @include TitleXSBold;

    @include mobile {
      @include SubtitleLBold;
    }
  }

  &__subtitle {
    margin-top: 8px;
    color: var(--black-black-50);

    @include SubtitleSRegular;

    @include mobile {
      @include SubtitleXSRegular;
    }
  }

  &__socials {
    margin-top: 20px;
  }
}
</style>
