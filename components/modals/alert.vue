<template>
  <teleport to="body">
    <div
        v-if="modelValue"
        class="fixed inset-0 z-10 flex items-center justify-center bg-black/60"
        @click.self="emit('update:modelValue', false)"
    >
      <div
          class="bg-magenta-950 border border-alias rounded-2xl px-12 py-5 flex flex-col items-center gap-2 max-w-full
               max-h-[90vh] overflow-y-auto"
      >
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script setup>
defineProps({
  modelValue: Boolean
})
const emit = defineEmits(['update:modelValue'])
</script>
