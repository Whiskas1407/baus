<script setup lang="ts">
import RadioButton from "../../components/ui/RadioButton.vue";
import {ref} from 'vue'
import SwitchToggle from "../../components/ui/SwitchToggle.vue";
definePageMeta({
  title: 'Особистий кабінет'
})

let radioActive = ref(1)
let hideEmail = ref(false)
let hidePhone = ref(false)
let hideCity = ref(false)
</script>
<template>
  <div class="w-full relative z-1 flex flex-col items-start justify-center py-11 px-[16.3rem] gap-5">
    <div class="flex items-center gap-4">
      <img src="/icons/arrow_left_icon.svg" alt="arrow" />
      <div class="flex items-center gap-4">
        <img src="/icons/lock_icon.svg" alt="doc" />
        <p class="text-headline">Приватніть</p>
      </div>
    </div>
    <div class="flex items-start flex-col pt-2 gap-5">
      <h4 class="text-magenta-600">Налаштування видимості профілю</h4>
      <div class="flex flex-col gap-4">
        <div class="flex gap-4" @click="radioActive = 1">
          <div class="w-[2rem]">
            <RadioButton :model-value="radioActive === 1" />
          </div>
          <div class="flex flex-col gap-2">
            <p class="text-body">Відкритий профіль</p>
            <p class="text-subtitle">
              Ваш профіль буде повністю доступний для перегляду всім користувачам платформи, а також може бути
              знайдений через пошукові системи. Це оптимальний вибір для тих, хто прагне максимальної відкритості,
              активного нетворкінгу та широкого охоплення аудиторії.
            </p>
          </div>
        </div>
        <div class="flex gap-4" @click="radioActive = 2">
          <div class="w-[2rem]">
            <RadioButton :model-value="radioActive === 2" />
          </div>
          <div class="flex flex-col gap-2">
            <p class="text-body">Приватний профіль</p>
            <p class="text-subtitle">
              Ваш профіль буде доступний для перегляду лише тим користувачам, з якими ви встановлюєте партнерські
              відносини або яких ви додали до списку "Партнери". Цей режим ідеально підходить для приватного
              спілкування, ділових колаборацій та управління конфіденційністю, забезпечуючи, що ваш контент бачать
              лише обрані контакти.
            </p>
          </div>
        </div>
      </div>
      <h4 class="text-magenta-600">Відображення контактних даних</h4>
      <div class="flex flex-col w-full gap-4">
        <div class="flex items-center justify-between" @click="hideEmail = !hideEmail">
          <p class="text-body">Приховати email</p>
          <SwitchToggle :modelValue="hideEmail" />
        </div>
        <div class="flex items-center justify-between" @click="hidePhone = !hidePhone">
          <p class="text-body">Приховати номер телефону</p>
          <SwitchToggle :modelValue="hidePhone" />
        </div>
        <div class="flex items-center justify-between" @click="hideCity = !hideCity">
          <p class="text-body">Приховати місто</p>
          <SwitchToggle :modelValue="hideCity" />
        </div>
      </div>
    </div>
  </div>
</template>