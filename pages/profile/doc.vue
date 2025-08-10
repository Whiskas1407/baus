<script setup lang="ts">
import Button from "../../components/ui/Button.vue";
import { useProfileStore } from '../../stores/profile'
import {ref} from "vue";

const profileStore = useProfileStore()
definePageMeta({
  title: 'Особистий кабінет'
})
const fileInput = ref<HTMLInputElement | null>(null)

function openFileDialog() {
  fileInput.value?.click()
}
</script>
<template>
  <div class="w-full relative z-1 flex flex-col items-start justify-center py-11 px-[16.3rem] gap-5">
    <div class="flex items-center gap-4">
      <img class="cursor-pointer" @click="profileStore.profileBackPage(1)" src="/icons/arrow_left_icon.svg" alt="arrow" />
      <div class="flex items-center gap-4">
        <img src="/icons/doc_icon.svg" alt="doc" />
        <p class="text-headline">Документи та акредитація</p>
      </div>
    </div>
    <div @click="openFileDialog" class="flex items-center justify-between w-full py-2 px-6 border border-alias rounded-[1.25rem]">
      <p class="text-headline">Заявка на акредитацію не подана</p>
      <Button active>Подати</Button>
      <input
          type="file"
          accept="image/*"
          ref="fileInput"
          class="hidden"
      />
    </div>
  </div>
</template>