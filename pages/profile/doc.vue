<script setup lang="ts">
import Button from "../../components/ui/Button.vue";

definePageMeta({
  title: 'Особистий кабінет'
})
</script>
<template>
  <div class="w-full relative z-1 flex flex-col items-start justify-center py-11 px-[16.3rem] gap-5">
    <div class="flex items-center gap-4">
      <img src="/icons/arrow_left_icon.svg" alt="arrow" />
      <div class="flex items-center gap-4">
        <img src="/icons/doc_icon.svg" alt="doc" />
        <p class="text-headline">Документи та акредитація</p>
      </div>
    </div>
    <div class="flex items-center justify-between w-full py-2 px-6 border border-alias rounded-[1.25rem]">
      <p class="text-headline">Заявка на акредитацію не подана</p>
      <Button active>Подати</Button>
    </div>
  </div>
</template>