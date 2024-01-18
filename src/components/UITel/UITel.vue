<script setup lang="ts">
const props = defineProps<{ phoneNumber: string }>();

const phoneLink = computed(() => {
  const maskedPhone = props.phoneNumber;

  const digitsArray = maskedPhone.match(/\d+/g);

  let string = digitsArray ? digitsArray.join('') : '';
  if (string.startsWith('8')) {
    string = string.replace(/^8/, '+7');
  }

  return string;
});
</script>

<template>
  <a class="tel" :href="`tel:${phoneLink?.trim()}`">
    {{ phoneNumber }}
  </a>
</template>

<style lang="scss">
.tel {
  @include BodyXLBold;
  color: var(--black-black-00, #fff);
}
</style>
