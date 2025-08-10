<script setup lang="ts">
import { ref } from 'vue'
import InputText from "../../components/ui/InputText.vue";
import SwitchToggle from "../../components/ui/SwitchToggle.vue";
import InputSelect from "../../components/ui/InputSelect.vue";
import InputTextArea from "../../components/ui/InputTextArea.vue";
import Button from "../../components/ui/Button.vue";
import { useProfileStore } from '../../stores/profile'

const profileStore = useProfileStore()
definePageMeta({
  title: 'Особистий кабінет'
})

let toggle = ref(true)
let selectText = ref('')
let form = {
  name: '',
  nickname: '',
}

const avatarPreview = ref<string | null>(null)
const fileInput = ref<HTMLInputElement | null>(null)

function onFileChange(event: Event) {
  const target = event.target as HTMLInputElement
  if (!target.files?.length) return

  const file = target.files[0]
  const reader = new FileReader()
  reader.onload = e => {
    avatarPreview.value = e.target?.result as string
  }
  reader.readAsDataURL(file)
}

function openFileDialog() {
  fileInput.value?.click()
}
</script>

<template>
  <div class="w-full relative z-1 flex flex-col items-start justify-center py-11 px-[16.3rem] gap-5">
    <div class="flex items-center gap-4">
      <img @click="profileStore.profileBackPage(1)" class="cursor-pointer" src="/icons/arrow_left_icon.svg" alt="arrow" />
      <div class="flex items-center gap-4">
        <img src="@/public/icons/info_icon.svg" alt="info" />
        <p class="text-headline">Основна інформація</p>
      </div>
    </div>
    <div class="flex items-start gap-8 pt-2 w-full">
      <div class="flex flex-col gap-4 items-center">
        <div
            class="flex items-center justify-center w-[13.75rem] h-[16.87rem] border border-alias bg-magenta-850 rounded-[1.25rem] cursor-pointer overflow-hidden"
            @click="openFileDialog"
            title="Натисніть щоб завантажити аватар"
        >
          <template v-if="avatarPreview">
            <img :src="avatarPreview" alt="avatar" class="object-cover w-full h-full" />
          </template>
          <template v-else>
            <img class="w-[3.5rem]" src="/icons/picture_icon.svg" alt="picture" />
          </template>
        </div>
        <div class="flex items-center gap-4 cursor-pointer select-none" @click="openFileDialog">
          <p class="text-caption text-effects-blueShadow uppercase">завантажити аватар</p>
          <img src="/icons/upload_icon-blue.svg" alt="upload" />
        </div>
        <input
            type="file"
            accept="image/*"
            ref="fileInput"
            class="hidden"
            @change="onFileChange"
        />
      </div>

      <div class="flex flex-col gap-4 w-full">
        <InputText v-model="form.name" label="ПІБ" text-placeholder="Ваше ім'я, прізвище та по батькові" />
        <div class="flex items-center justify-between">
          <p class="text-body text-magenta-500">Приховати від інших користувачів</p>
          <SwitchToggle v-model="toggle"/>
        </div>
        <InputText v-model="form.nickname" label="Нікнейм" text-placeholder="Ваш нікнейм" text="Обмеження на зміну нікнейма (раз на 30 діб)." />
        <InputSelect
            v-model="selectText"
            label="Дата народження"
            textPlaceholder="-- ------- ----"
            :options="['Опція 1', 'Опція 2', 'Опція 3']"
        />
        <InputSelect
            v-model="selectText"
            label="Тематика блогу"
            textPlaceholder="Оберіть одну чи декілька"
            :options="['Опція 1', 'Опція 2', 'Опція 3']"
        />
        <InputTextArea label="Коротко про себе" textPlaceholder="Опис який побачуть коритувачі"/>
        <Button disabled class="w-[12.5rem] self-end">Зберегти</Button>
      </div>
    </div>
  </div>
</template>
