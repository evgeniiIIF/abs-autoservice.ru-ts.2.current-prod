<script setup lang="ts">
import { useContactsStore } from '~/store/contacts';
import type { AppSocialProps } from './AppSocial.types';

withDefaults(defineProps<AppSocialProps>(), {
  fill: 'solid',
});

const { contactsState } = useContactsStore();
</script>
<template>
  <ul class="social">
    <li v-for="social in contactsState.data?.social_network" :key="social.url" class="social__item">
      <a
        :class="{
          social__link: true,
          'social__link--fill-outline': fill === 'outline',
        }"
        :href="social.url"
        target="_blank"
        rel="noopener"
      >
        <img :src="social.icon_social" :alt="social.title" />
      </a>
    </li>
  </ul>
</template>

<style lang="scss">
.social {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  list-style: none;

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

    img {
      width: 24px;
      height: 24px;
      min-width: 24px;
      min-height: 24px;
      object-fit: contain;
    }
  }
  &__link--fill-outline {
    border: 1px solid var(--Black-Black-80, #414141);
  }
}
</style>
