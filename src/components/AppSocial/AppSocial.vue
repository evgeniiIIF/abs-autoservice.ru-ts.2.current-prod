<script setup lang="ts">
import { useContactsStore } from '~/store/contacts';

const { contactsEffects, contactsState } = useContactsStore();
contactsEffects.fetchContacts();
</script>
<template>
  <ul class="social">
    <li class="social__item">
      <a class="social__link" :href="contactsState.social_network?.[2].url" target="_blank" rel="noopener">
        <IcVk :font-controlled="false" :filled="true" />
      </a>
    </li>
    <li class="social__item">
      <a class="social__link" :href="contactsState.social_network?.[0].url" target="_blank" rel="noopener">
        <IcTelegram :font-controlled="false" :filled="true" />
      </a>
    </li>
    <li class="social__item">
      <a class="social__link" :href="contactsState.social_network?.[1].url" target="_blank" rel="noopener">
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
