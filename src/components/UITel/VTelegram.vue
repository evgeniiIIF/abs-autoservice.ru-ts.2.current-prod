<!-- :href="`https://t.me/${telegramUserName}`" -->

<script>
export default {
  props: {
    telegramUserName: {
      type: String,
      // required: true,
    },
  },
};
</script>

<template>
  <a class="telegram" target="_blank" rel="noopener" :href="`${telegramUserName}`">
    <img src="@/assets/img/header/social/Telegram.svg" alt="tg" />
  </a>
</template>

<style lang="scss">
.telegram {
}
</style>
