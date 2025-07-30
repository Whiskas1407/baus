<script setup lang="ts">
import departament1 from '@/public/images/departament-1.png'
import departament2 from '@/public/images/departament-2.png'

let items = [
  {
    id: 1,
    image: departament1,
    title: 'ДЕПАРТАМЕНТ ПО РОБОТІ З БЛОГЕРАМИ',
    subtitle: "Ми є серцем взаємодії з інфлюенсерами та блогерами, створюючи мости між нашим брендом та їхньою аудиторією. Наш департамент фокусується на вибудовуванні стратегічних, довгострокових партнерств з лідерами думок на всіх ключових платформах (від YouTube та Instagram до TikTok і Telegram).",
    users: 362,
    party: 12
  },
  {
    id: 2,
    image: departament2,
    title: 'ДЕПАРТАМЕНТ КОНТРОЛЮ ЯКОСТІ КОНТЕНТУ',
    subtitle: "Цей департамент є гарантом якості та відповідності всього контенту, що створюється або публікується від імені нашого бренду.",
    users: 123,
    party: 7
  },
  {
    id: 3,
    image: departament1,
    title: 'ДЕПАРТАМЕНТ ПО РОБОТІ З БЛОГЕРАМИ',
    subtitle: "Ми є серцем взаємодії з інфлюенсерами та блогерами, створюючи мости між нашим брендом та їхньою аудиторією. Наш департамент фокусується на вибудовуванні стратегічних, довгострокових партнерств з лідерами думок на всіх ключових платформах (від YouTube та Instagram до TikTok і Telegram).",
    users: 362,
    party: 12
  },
  {
    id: 4,
    image: departament2,
    title: 'ДЕПАРТАМЕНТ КОНТРОЛЮ ЯКОСТІ КОНТЕНТУ',
    subtitle: "Цей департамент є гарантом якості та відповідності всього контенту, що створюється або публікується від імені нашого бренду.",
    users: 123,
    party: 7
  },
  {
    id: 5,
    image: departament1,
    title: 'ДЕПАРТАМЕНТ ПО РОБОТІ З БЛОГЕРАМИ',
    subtitle: "Ми є серцем взаємодії з інфлюенсерами та блогерами, створюючи мости між нашим брендом та їхньою аудиторією. Наш департамент фокусується на вибудовуванні стратегічних, довгострокових партнерств з лідерами думок на всіх ключових платформах (від YouTube та Instagram до TikTok і Telegram).",
    users: 362,
    party: 12
  },
  {
    id: 6,
    image: departament2,
    title: 'ДЕПАРТАМЕНТ КОНТРОЛЮ ЯКОСТІ КОНТЕНТУ',
    subtitle: "Цей департамент є гарантом якості та відповідності всього контенту, що створюється або публікується від імені нашого бренду.",
    users: 123,
    party: 7
  },
  {
    id: 7,
    image: departament1,
    title: 'ДЕПАРТАМЕНТ ПО РОБОТІ З БЛОГЕРАМИ',
    subtitle: "Ми є серцем взаємодії з інфлюенсерами та блогерами, створюючи мости між нашим брендом та їхньою аудиторією. Наш департамент фокусується на вибудовуванні стратегічних, довгострокових партнерств з лідерами думок на всіх ключових платформах (від YouTube та Instagram до TikTok і Telegram).",
    users: 362,
    party: 12
  },
  {
    id: 8,
    image: departament2,
    title: 'ДЕПАРТАМЕНТ КОНТРОЛЮ ЯКОСТІ КОНТЕНТУ',
    subtitle: "Цей департамент є гарантом якості та відповідності всього контенту, що створюється або публікується від імені нашого бренду.",
    users: 123,
    party: 7
  },
]
</script>
<template>
  <div class="w-full flex flex-col items-center justify-center py-8 px-[16rem] gap-5">
    <NuxtLink
        v-for="item of items"
        :key="item.id"
        to="/departaments/id"
        class="rounded-[1.25rem] relative z-1 cursor-pointer gradient-border-departament"
    >
      <div class="py-5 px-6 flex items-start gap-5">
        <img :src="item.image" alt="departament">
        <div class="flex flex-col items-start gap-1">
          <h3>{{ item.title }}</h3>
          <p class="text-body text-naturals-100 leading-[1.3rem]">
            {{ item.subtitle }}
          </p>
          <div class="flex gap-8">
            <div class="flex gap-2 items-center">
              <img src="/icons/users_icon.svg" alt="users" />
              <div class="flex gap-2 items-center">
                <p class="text-body">Учасники:</p>
                <span class="text-body text-magenta-600">{{ item.users }}</span>
              </div>
            </div>
            <div class="flex gap-2 items-center">
              <img src="/icons/party_icon.svg" alt="party" />
              <div class="flex gap-2 items-center">
                <p class="text-body">Заходи:</p>
                <span class="text-body text-magenta-600">{{ item.party }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>