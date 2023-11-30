<script setup lang="ts">
  const name = ref('')
  const phone = ref('')
</script>

<template>
  <div><UIInput type="text" title="Тест" :placeholder="123" v-model="name"/>
    <UIInput type="phone" title="Тест" v-model="phone"/></div>
</template>

<style lang="scss"></style>
