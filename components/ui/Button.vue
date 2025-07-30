<script setup lang="ts">
defineProps({
  active: Boolean,
  disabled: Boolean,
})
</script>
<template>
  <button :disabled="disabled" class="border border-alias rounded-[3.12rem] text-body py-4 px-15 cursor-pointer" :class="active ? 'bg-active-button' : ''">
    <slot />
  </button>
</template>