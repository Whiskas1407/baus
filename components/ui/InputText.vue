<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  label: string
  textPlaceholder: string
  modelValue: string,
  text?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const localValue = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
  localValue.value = newVal
})

watch(localValue, (newVal) => {
  emit('update:modelValue', newVal)
})
</script>

<template>
  <div class="flex flex-col gap-2 w-full">
    <label for="input" class="text-subtitle">{{ label }}</label>
    <input
        class="border text-body border-alias placeholder:text-naturals-400 rounded-[3.12rem] outline-none py-3 px-4"
        :class="{ 'border-magenta-600': localValue }"
        type="text"
        v-model="localValue"
        :placeholder="textPlaceholder"
    />
    <p class="text-caption text-magenta-600" v-if="text">{{ text }}</p>
  </div>
</template>
