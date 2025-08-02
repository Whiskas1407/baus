<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  label: string
  textPlaceholder: string
  modelValue: string
  options: string[]
  text?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const localValue = ref(props.modelValue)
const isOpen = ref(false)

watch(() => props.modelValue, (newVal) => {
  localValue.value = newVal
})

watch(localValue, (newVal) => {
  emit('update:modelValue', newVal)
  isOpen.value = false
})

function selectOption(option: string) {
  localValue.value = option
}
</script>

<template>
  <div class="flex flex-col gap-2 w-full relative">
    <label class="text-subtitle">{{ label }}</label>

    <div
        class="border border-alias rounded-[3.12rem] outline-none py-3 px-4 cursor-pointer flex items-center justify-between"
        :class="{ 'border-magenta-600': localValue }"
        @click="isOpen = !isOpen"
    >
      <p class="text-body text-naturals-400">{{ localValue || textPlaceholder }}</p>
      <img src="/icons/chevron_down_icon.svg" alt="chevron" />
    </div>

    <ul
        v-if="isOpen"
        class="absolute top-full left-0 right-0 mt-2 bg-magenta-850 border border-alias rounded-lg max-h-60 overflow-y-auto z-10 shadow-lg"
    >
      <li
          v-for="option in options"
          :key="option"
          @click="selectOption(option)"
          class="px-4 py-2 hover:bg-magenta-500 cursor-pointer transition text-body"
      >
        {{ option }}
      </li>
    </ul>

    <p class="text-caption text-magenta-600" v-if="text">{{ text }}</p>
  </div>
</template>
