<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: false
  }
})
</script>
<template>
  <NuxtLink :to="link" class="flex items-center gap-4 cursor-pointer">
    <p class="text-caption text-blue-500 uppercase">{{ text }}</p>
    <img src="/icons/arrow-blue.svg" alt="arrow" />
  </NuxtLink>
</template>