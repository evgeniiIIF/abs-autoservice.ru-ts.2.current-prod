<!-- :href="`https://wa.me/${whatsappNumber}`" -->

<script>
export default {
  props: {
    whatsappNumber: {
      type: String,
      // required: true,
    },
  },
};
</script>

<template>
  <a class="whatsapp" target="_blank" rel="noopener" :href="`${whatsappNumber}`">
    <img src="@/assets/img/header/social/Whatsapp.svg" alt="wh" />
  </a>
</template>

<style lang="scss">
.whatsapp {
}
</style>
