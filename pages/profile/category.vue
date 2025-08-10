<script setup lang="ts">
import {ref} from 'vue'
import Button from "../../components/ui/Button.vue";
import InputSelect from "../../components/ui/InputSelect.vue";
import { useProfileStore } from '../../stores/profile'

const profileStore = useProfileStore()
definePageMeta({
  title: 'Особистий кабінет'
})

let selectText = ref('')
</script>
<template>
  <div class="w-full relative z-1 flex flex-col items-start justify-center py-11 px-[16.3rem] gap-5">
    <div class="flex items-center gap-4">
      <img class="cursor-pointer" @click="profileStore.profileBackPage(1)" src="/icons/arrow_left_icon.svg" alt="arrow" />
      <div class="flex items-center gap-4">
        <img src="/icons/category_icon.svg" alt="category" />
        <p class="text-headline">Додаткова інформація</p>
      </div>
    </div>
    <div class="flex flex-col gap-8 w-full pt-2">
      <InputSelect
          v-model="selectText"
          label="Тематика блогу"
          textPlaceholder="Оберіть тематику блогу"
          :options="['Опція 1', 'Опція 2', 'Опція 3']"
      />
      <Button disabled class="w-[12.5rem] self-end">Зберегти</Button>
    </div>
  </div>
</template>