<script setup lang="ts">
interface AppSocialProps {
  linkVk?: string;
  linkTg?: string;
  linkWh?: string;
}

defineProps<AppSocialProps>();
</script>
<template>
  <ul class="social">
    <li class="social__item">
      <a class="social__link" :href="linkVk" target="_blank" rel="noopener">
        <IcVk :font-controlled="false" :filled="true" />
      </a>
    </li>
    <li class="social__item">
      <a class="social__link" :href="linkTg" target="_blank" rel="noopener">
        <IcTelegram :font-controlled="false" :filled="true" />
      </a>
    </li>
    <li class="social__item">
      <a class="social__link" :href="linkWh" target="_blank" rel="noopener">
        <IcWhatsapp :font-controlled="false" :filled="true" />
      </a>
    </li>
  </ul>
</template>

<style lang="scss">
.social {
  display: flex;
  align-items: flex-start;
  gap: 10px;

  &__link {
    display: flex;
    padding: 12px;
    align-items: flex-start;
    border-radius: 10px;
    transition: $transition-1;
    cursor: pointer;

    &:hover {
      background: var(--Black-Black-80, #414141);
    }
  }
}
</style>
