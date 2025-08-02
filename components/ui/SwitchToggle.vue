<template>
  <button
      :class="[
      'relative inline-flex cursor-pointer items-center border-alias border h-[32px] w-[52px] rounded-full transition-colors duration-300 focus:outline-none',
      isOn ? 'bg-fuchsia-600' : 'bg-magenta-850'
    ]"
      @click="toggle"
  >
    <span
        :class="[
        'inline-block w-6 h-6 transform bg-white rounded-full shadow-md transition-transform duration-300',
        isOn ? 'translate-x-6' : 'translate-x-1'
      ]"
    ></span>
  </button>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(['update:modelValue'])

const isOn = computed(() => props.modelValue)

function toggle() {
  emit('update:modelValue', !props.modelValue)
}
</script>
