<script setup lang="ts">
import {ref} from 'vue'
import ArrowLink from "../../../components/ui/ArrowLink.vue";
import Button from "../../../components/ui/Button.vue";
import news1 from '@/public/images/news-1.png'
import news2 from '@/public/images/news-2.png'
import news3 from '@/public/images/news-3.png'
import news4 from '@/public/images/news-4.png'
import news5 from '@/public/images/news-5.png'
import news6 from '@/public/images/news-6.png'
import news7 from '@/public/images/news-7.png'
import Alert from "../../../components/modals/alert.vue";

definePageMeta({ title: 'Департамент по роботі з блогерами' })

let activeTab = ref(1)

let items_news = [
  {
    id: 1,
    image: news1,
    title: 'У США через прострочену візу затримали тіктокера Хабі, відомого висміюванням інтернет-лайфгаків',
    subtitle: 'Імміграційні органи Сполучених Штатів затримали відомого TikTok-блогера Хабі Ламе, бо той нібито перевищив термін законного перебування в країні. Однак згодом його відпустили, дозволивши виїхати.',
    date: '09 червня 2025 • 17:20'
  },
  {
    id: 2,
    image: news5,
    title: 'Щодо блогерки Алхім триває розслідування за статтею про державну зраду — поліція',
    subtitle: 'Імміграційні органи Сполучених Штатів затримали відомого TikTok-блогера Хабі Ламе, бо той нібито перевищив термін законного перебування в країні. Однак згодом його відпустили, дозволивши виїхати.',
    date: '17 травня 2025 • 13:27'
  },
  {
    id: 3,
    image: news2,
    title: 'Блогер Слобоженко, якого підозрюють у несплаті податків, заявив, що «не розбирався» в цьому. Він обіцяє погасити борг',
    subtitle: 'Блогер Олександр Слобоженко пообіцяв погасити свій податковий борг. Його підозрюють в ухиленні від сплати понад 200 мільйонів гривень податків.',
    date: '30 квітня 2025 • 13:27'
  },
  {
    id: 4,
    image: news3,
    title: 'Блогер Паша Бумчик пішов «по гриби» та вийшов у Румунії. Він нібито отримав перед цим повістку',
    subtitle: 'Український блогер Паша Бумчик заявив, що «пішов у похід в гори», нібито заблукав і за три дні опинився в Румунії. Перед цим він показав фотографію повістки.',
    date: '22 вересня 2024 • 13:27'
  },
  {
    id: 5,
    image: news4,
    title: 'Депутатка Піпа звернулася до СБУ з проханням перевірити блогерку Алхім. Каже, що після цього їй почали погрожувати',
    subtitle: 'Народна депутатка Наталія Піпа заявила, що подала депутатське звернення до СБУ та Національної поліції з проханням надати правову оцінку висловлюванням блогерки Анни Алхім.',
    date: '17 травня 2025 • 13:27'
  },
]

let items_party = [
  {
    id: 1,
    image: news6,
    status: 1,
    statusText: 'Обовязкові',
    title: 'Розвиток та Монетизація',
    subtitle: 'Creator Connect Summit – це унікальний захід, створений спеціально для блогерів, інфлюенсерів та контент-мейкерів, які прагнуть масштабувати свою діяльність та ефективніше монетизувати свій вплив.'
  },
  {
    id: 2,
    image: news7,
    status: 2,
    statusText: 'Факультативні',
    title: 'Створюй, Впливай, Монетизуй',
    subtitle: 'Creator Connect Summit – це унікальний захід, створений спеціально для блогерів, інфлюенсерів та контент-мейкерів, які прагнуть масштабувати свою діяльність та ефективніше монетизувати свій вплив.'
  },
  {
    id: 3,
    image: news7,
    status: 3,
    statusText: 'Відбулося',
    title: 'Форум ефективного блогінгу',
    subtitle: 'Influence & Grow: Форум ефективного блогінгу — це інтерактивний захід для блогерів усіх рівнів, від початківців до досвідчених креаторів, які прагнуть розширити свою аудиторію та підвищити ефективність своїх комунікацій.'
  },
  {
    id: 4,
    image: news7,
    status: 3,
    statusText: 'Відбулося',
    title: 'Інновації та Вплив',
    subtitle: 'Influence & Grow: Форум ефективного блогінгу — це інтерактивний захід для блогерів усіх рівнів, від початківців до досвідчених креаторів, які прагнуть розширити свою аудиторію та підвищити ефективність своїх комунікацій.'
  },
]

let modalStatus = ref(false)
let statusApplication = ref(false)

function eventDepartament() {
  modalStatus.value = true
  statusApplication.value = true
}

function changeTab(tab: number) {
  activeTab.value = tab
}
</script>
<template>
  <div class="w-full flex flex-col items-center justify-center py-10 px-[16rem] relative z-1">
    <div class="flex flex-col pb-8 border-b border-alias">
      <div class="flex items-center w-full justify-between">
        <div class="flex items-center gap-6">
          <img class="w-[5rem]" src="@/public/images/departament-1.png" alt="dep-1">
          <div class="flex flex-col items-start gap-1">
            <h2>ДЕПАРТАМЕНТ ПО РОБОТІ З БЛОГЕРАМИ</h2>
            <div class="flex gap-8">
              <div class="flex gap-2 items-center">
                <img src="/icons/users_icon.svg" alt="users" />
                <div class="flex gap-2 items-center">
                  <p class="text-body">Учасники:</p>
                  <span class="text-body text-magenta-600">362</span>
                </div>
              </div>
              <div class="flex gap-2 items-center">
                <img src="/icons/party_icon.svg" alt="party" />
                <div class="flex gap-2 items-center">
                  <p class="text-body">Заходи:</p>
                  <span class="text-body text-magenta-600">12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Alert :model-value="modalStatus">
            <h3>Заявка на участь прийнята</h3>
            <p class="text-body">Вашу заявку буде розглянуто у найближчий час</p>
            <Button background="magenta-500" @click="modalStatus = false">
              ОК
            </Button>
          </Alert>
        </div>
        <div @click="eventDepartament">
          <ArrowLink v-if="!statusApplication" text="заявка на участь"/>
          <p v-else class="text-subtitle py-2 px-3 rounded-full bg-effects-blueShadow">Заявка на розгляді</p>
        </div>
      </div>
      <p class="text-body text-naturals-100 pt-4 leading-[1.25rem]">Ми є серцем взаємодії з інфлюенсерами та блогерами, створюючи мости між нашим брендом та їхньою аудиторією.
        Наш департамент фокусується на вибудовуванні стратегічних, довгострокових партнерств з лідерами думок на всіх
        ключових платформах (від YouTube та Instagram до TikTok і Telegram). Ми не просто шукаємо обличчя для реклами,
        а знаходимо справжніх креаторів, чиї цінності та контент органічно співпадають з нашим брендом. <br> <br>
        Наші завдання включають повний цикл управління інфлюенсер-маркетингом: від ретельного пошуку та верифікації
        релевантних блогерів, до розробки унікальних рекламних інтеграцій, координації контенту та глибинного аналізу
        результатів. Ми прагнемо до створення автентичних кампаній, що не лише підвищують впізнаваність бренду та
        залучають нових клієнтів, але й забезпечують високий ROI та будують довіру до нашого продукту чи послуги.
      </p>
    </div>
    <div class="flex items-center w-full justify-between py-8 border-b border-alias">
      <div class="flex items-center gap-5">
        <img class="w-[5rem] h-[5rem] object-cover rounded-full" src="@/public/images/bloger-1.png" alt="bloger">
        <div class="flex flex-col items-start">
          <p class="text-subtitle text-magenta-600">Голова департаменту</p>
          <h3>Марія Ткаченко</h3>
          <p class="text-body text-naturals-100">@MashaVibe</p>
        </div>
      </div>
      <NuxtLink to="/blogers/id">
        <ArrowLink text="ПРОФІЛЬ БЛОГЕРА" />
      </NuxtLink>
    </div>
    <div class="pt-7 flex items-center justify-between w-full">
      <Button :active="activeTab === 1" @click="changeTab(1)">
        Новини департаменту
      </Button>
      <Button :active="activeTab === 2" @click="changeTab(2)">
        Заходи департаменту
      </Button>
      <Button :active="activeTab === 3" @click="changeTab(3)">
        Склад департаменту
      </Button>
    </div>
    <div class="flex flex-col gap-4 pt-12 w-full">
      <NuxtLink
          to="/departaments/id/news"
          class="group flex items-center w-full gap-8 border-b border-alias pb-4 cursor-pointer"
          v-if="activeTab === 1"
          v-for="item of items_news"
          :key="item.id"
      >
        <img class="rounded-2xl w-[16.6rem] h-[12.5rem] object-cover" :src="item.image" alt="news">
        <div class="flex flex-col gap-1">
          <h3 class="group-hover:text-magenta-600">{{ item.title }}</h3>
          <p class="text-body">{{ item.subtitle }}</p>
          <p class="text-headline text-magenta-600">{{ item.date }}</p>
        </div>
      </NuxtLink>
      <NuxtLink
          to="/departaments/id/party"
          class="group flex items-center gap-8 pb-4 border-b border-alias"
          v-if="activeTab === 2"
          v-for="item of items_party"
          :key="item.id"
      >
        <img class="rounded-2xl w-[16.6rem] h-[12.5rem] object-cover" :src="item.image" alt="news">
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between w-full gap-4">
            <div class="flex items-center gap-2">
              <img
                  v-if="item.status === 1"
                  class="bg-effects-blueShadow p-2 rounded-full w-[2rem]"
                  src="/icons/link_horisontal_icon.svg"
                  alt="link"
              />
              <img
                  v-else
                  class="p-2 rounded-full w-[2rem]"
                  :class="item.status === 3 ? 'bg-naturals-400' : 'bg-effects-blueShadow'"
                  src="/icons/location_icon.svg"
                  alt="location"
              />
              <p v-if="item.status === 1" class="text-subtitle py-2 px-3 rounded-full bg-magenta-500">{{ item.statusText }}</p>
              <p v-if="item.status === 2" class="text-subtitle py-2 px-3 rounded-full bg-effects-blueShadow">{{ item.statusText }}</p>
              <p v-if="item.status === 3" class="text-subtitle py-2 px-3 rounded-full bg-naturals-400">{{ item.statusText }}</p>
            </div>
            <p class="text-headline" :class="item.status === 3 ? 'text-naturals-400' : 'text-magenta-600'">09 червня 2025 • 17:00 - 19:00</p>
          </div>
          <h3 class="group-hover:text-magenta-600">{{ item.title }}</h3>
          <p class="text-body">
            {{ item.subtitle }}
          </p>
          <div class="flex items-center justify-between">
            <div class="flex gap-3 items-center" v-if="item.status === 1">
              <img src="/icons/link_icon-blue.svg" alt="link">
              <p class="text-caption uppercase text-effects-blueShadow">доєднатись онлайн</p>
            </div>
            <div class="flex gap-3 items-center" v-else>
              <img src="/icons/location_icon-pink.svg" alt="loc">
              <p class="text-caption uppercase text-magenta-600">вулиця Новокостянтинівська, 15/15</p>
            </div>
            <ArrowLink text="докладніше" />
          </div>
        </div>
      </NuxtLink>
      <div
          v-if="activeTab === 3"
          v-for="item of 5"
          class="group flex items-center w-full justify-between border-b border-alias pb-4"
      >
        <div class="flex items-center gap-5">
          <img class="w-[4rem] h-[4rem] object-cover rounded-full" src="@/public/images/bloger-1.png" alt="bloger">
          <div class="flex flex-col items-start">
            <h3 class="group-hover:text-magenta-600">Марія Ткаченко</h3>
            <p class="text-body text-naturals-100">@MashaVibe</p>
          </div>
        </div>
        <NuxtLink to="/blogers/id">
          <ArrowLink text="ПРОФІЛЬ БЛОГЕРА" />
        </NuxtLink>
      </div>
    </div>
    <div class="flex items-center justify-center pt-8 gap-4">
      <p class="text-caption uppercase text-effects-blueShadow">показати більше</p>
      <img src="/icons/more_dots_icon-blue.svg" alt="more" />
    </div>
  </div>
</template>