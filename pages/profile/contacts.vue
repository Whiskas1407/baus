<script setup lang="ts">
import {ref} from 'vue'
import Button from "../../components/ui/Button.vue";
import InputText from "../../components/ui/InputText.vue";
import InputSelect from "../../components/ui/InputSelect.vue";
import SwitchToggle from "../../components/ui/SwitchToggle.vue";
import { useProfileStore } from '../../stores/profile'

const profileStore = useProfileStore()
definePageMeta({
  title: 'Особистий кабінет'
})

let phone = ref('')
let selectText = ref('')
let toggle = ref(true)
</script>
<template>
  <div class="w-full relative z-1 flex flex-col items-start justify-center py-11 px-[16.3rem] gap-5">
    <div class="flex items-center gap-4">
      <img class="cursor-pointer" @click="profileStore.profileBackPage(1)" src="/icons/arrow_left_icon.svg" alt="arrow" />
      <div class="flex items-center gap-4">
        <img src="/icons/contacts_icon.svg" alt="info" />
        <p class="text-headline">Контактні дані</p>
      </div>
    </div>
    <div class="flex flex-col gap-8 w-full pt-2">
      <InputText :model-value="phone" label="Номер телефону" type="number" text-placeholder="+XX XXX XXX XX XX" />
      <InputSelect
          v-model="selectText"
          label="Країна"
          textPlaceholder="Ваша країна"
          :options="['Опція 1', 'Опція 2', 'Опція 3']"
      />
      <InputSelect
          v-model="selectText"
          label="Місто"
          textPlaceholder="Ваше місто"
          :options="['Опція 1', 'Опція 2', 'Опція 3']"
      />
      <div class="flex items-center justify-between">
        <p class="text-body text-magenta-500">Не показувати контакти в профілі</p>
        <SwitchToggle v-model="toggle"/>
      </div>
      <Button disabled class="w-[12.5rem] self-end">Зберегти</Button>
    </div>
  </div>
</template>