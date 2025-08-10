<script setup lang="ts">
import User from '@/public/icons/user_icon.svg'
import Handshake from '@/public/icons/handshake_icon.svg'
import ContentIcon from '@/public/icons/content_icon.svg'
import PartyIcon from '@/public/icons/party_icon.svg'
import OrdersIcon from '@/public/icons/orders_icon.svg'
import BellIcon from '@/public/icons/bell_icon.svg'

import InfoIcon from '@/public/icons/info_icon.svg'
import ContactsIcon from '@/public/icons/contacts_icon.svg'
import LinkIcon from '@/public/icons/link_icon.svg'
import CategoryIcon from '@/public/icons/category_icon.svg'
import DocIcon from '@/public/icons/doc_icon.svg'
import LockIcon from '@/public/icons/lock_icon.svg'

import { useProfileStore } from '../../stores/profile'

definePageMeta({
  title: 'Особистий кабінет'
})

const profileStore = useProfileStore()

const menu = [
  { id: 1, text: 'Особистий кабінет', icon: User },
  { id: 2, text: 'Умови співпраці', icon: Handshake },
  { id: 3, text: 'Контент та активності', icon: ContentIcon },
  { id: 4, text: 'Мої заходи', icon: PartyIcon },
  { id: 5, text: 'Мої заявки', icon: OrdersIcon },
  { id: 6, text: 'Повідомлення', icon: BellIcon }
]

const links = [
  { id: 1, icon: InfoIcon, title: 'Основна інформація', subtitle: 'ПІБ, нік, дата народження і т.п.', link: '/profile/info' },
  { id: 2, icon: ContactsIcon, title: 'Контактні дані', subtitle: 'Email, телефон, місто і т.п', link: '/profile/contacts' },
  { id: 3, icon: LinkIcon, title: 'Соціальні мережі', subtitle: 'Посилання та статистика', link: '/profile/link' },
  { id: 4, icon: CategoryIcon, title: 'Додаткова інформація', subtitle: 'Тематика блогу, напрямки і т.п', link: '/profile/category' },
  { id: 5, icon: DocIcon, title: 'Документи та акредитація', subtitle: 'Псвідчення, департаменти', link: '/profile/doc' },
  { id: 6, icon: LockIcon, title: 'Приватніть', subtitle: 'Налаштування данних', link: '/profile/lock' }
]
</script>

<template>
  <div class="w-full relative z-1 flex flex-col items-start justify-center py-11 px-[16.3rem] max-sm:px-4 gap-5">
    <div v-if="profileStore.activePage === 0" class="flex items-start flex-col gap-5 w-full">
      <div
          class="flex items-center justify-between w-full cursor-pointer group"
          v-for="item of menu"
          :key="item.id"
          @click="profileStore.setActivePage(1)"
      >
        <div class="flex items-center gap-4">
          <img :src="item.icon" alt="icon" />
          <p class="text-headline group-hover:text-alias">{{ item.text }}</p>
        </div>
        <img src="/icons/arrow-blue.svg" alt="arrow" />
      </div>
    </div>

    <div v-if="profileStore.activePage === 1">
      <div class="flex flex-col gap-5">
        <div class="flex items-center gap-4">
          <img src="/icons/user_icon.svg" alt="user" />
          <p class="text-headline">Мої данні</p>
        </div>

        <div class="grid grid-cols-3 max-sm:grid-cols-1 items-center gap-4">
          <NuxtLink
              v-for="link of links"
              :key="link.id"
              :to="link.link"
              class="flex flex-col gap-3 py-7 px-6 w-[18.5rem] h-[10.56rem] gradient-border-departament bg-gradient rounded-[1.25rem] cursor-pointer"
          >
            <div class="flex items-start justify-between">
              <img class="w-[3.5rem]" :src="link.icon" alt="info" />
              <img src="/icons/arrow_right_icon-white.svg" alt="info" />
            </div>
            <div class="flex flex-col gap-2">
              <p class="text-headline">{{ link.title }}</p>
              <p class="text-subtitle">{{ link.subtitle }}</p>
            </div>
          </NuxtLink>
        </div>
        <div class="w-full flex items-center justify-between py-4 px-6 rounded-[1.25rem] border border-alias">
          <div class="flex items-center gap-4">
            <img class="w-[3.5rem]" src="/icons/pdf_icon.svg" alt="pdf" />
            <div class="flex flex-col gap-1">
              <p class="text-headline">Моя презентація</p>
              <p class="text-subtitle text-naturals-100">Ваша презентація у PDF</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <div class="p-4 rounded-full border border-alias">
              <img src="/icons/share_icon.svg" alt="share" />
            </div>
            <div class="p-4 rounded-full border border-alias">
              <img src="/icons/download_icon.svg" alt="download" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
