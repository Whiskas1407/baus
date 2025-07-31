<script setup lang="ts">
defineProps({
  active: Boolean,
  disabled: Boolean,
  background: String,
  widthFull: Boolean
})
</script>
<template>
  <button
      :disabled="disabled"
      class="border border-alias rounded-[3.12rem] text-body py-4 px-15 cursor-pointer"
      :class="active ? 'bg-active-button hover:text-naturals-light' : background ? `bg-${background}` : 'hover:text-magenta-600'"
  >
    <slot />
  </button>
</template>