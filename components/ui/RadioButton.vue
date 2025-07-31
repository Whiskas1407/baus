<template>
  <button
      @click="toggle"
      class="w-[1.5rem] h-[1.5rem] rounded-full border-1 bg-transparent border-alias transition-colors duration-300"
  >
    <button
        @click="toggle"
        class="w-[1rem] h-[1rem] rounded-full border-1 transition-colors duration-300"
        :class="isChecked ? 'bg-fuchsia-600 border-alias' : 'bg-transparent'"
    >
    </button>
  </button>
</template>

<script setup>
const props = defineProps({
  modelValue: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const isChecked = computed(() => props.modelValue)

const toggle = () => {
  emit('update:modelValue', !isChecked.value)
}
</script>
