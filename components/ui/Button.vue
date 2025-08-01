<script setup lang="ts">
const props = defineProps<{
  active?: boolean,
  disabled?: boolean,
  background?: string,
}>()
</script>
<template>
  <button
      :disabled="props.disabled"
      class="border border-alias rounded-[3.12rem] text-body py-4 px-15 cursor-pointer disabled:bg-alias disabled:text-black"
      :class="props.active ? 'bg-active-button hover:text-naturals-light' : props.background ? `bg-${props.background}` : 'hover:text-magenta-600'"
  >
    <slot />
  </button>
</template>