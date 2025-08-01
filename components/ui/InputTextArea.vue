<script setup lang="ts">
import {ref} from 'vue'
defineProps({
  label: String,
  textPlaceholder: String,
})

let value = ref('')
</script>
<template>
  <div class="flex flex-col gap-2 w-full">
    <label for="input" class="text-subtitle">{{ label }}</label>
    <textarea
        class="border text-body border-alias placeholder:text-naturals-400 rounded-2xl outline-none py-3 px-4"
        :class="value.length > 0 ? `border-magenta-600` : ''"
        type="text"
        v-model="value"
        :placeholder="textPlaceholder"
    />
  </div>
</template>