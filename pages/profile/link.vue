<script setup lang="ts">
import {ref} from 'vue'
import YoutubeIcon from '@/public/icons/youtube_icon.svg'
import FacebookIcon from '@/public/icons/facebook_icon.svg'
import InstagramIcon from '@/public/icons/instagram_icon.svg'
import TikTokIcon from '@/public/icons/tiktok_icon.svg'
import XIcon from '@/public/icons/x_icon.svg'
import { useProfileStore } from '../../stores/profile'

const profileStore = useProfileStore()
definePageMeta({
  title: 'Особистий кабінет'
})

const links = [
  {
    id: 1,
    icon: YoutubeIcon,
    title: 'Youtube'
  },
  {
    id: 2,
    icon: FacebookIcon,
    title: 'Facebook'
  },
  {
    id: 3,
    icon: InstagramIcon,
    title: 'Instagram'
  },
  {
    id: 4,
    icon: TikTokIcon,
    title: 'Tiktok'
  },
  {
    id: 5,
    icon: XIcon,
    title: 'X'
  },
]
</script>
<template>
  <div class="w-full relative z-1 flex flex-col items-start justify-center py-11 px-[16.3rem] gap-5">
    <div class="flex items-center gap-4">
      <img class="cursor-pointer" @click="profileStore.profileBackPage(1)" src="/icons/arrow_left_icon.svg" alt="arrow" />
      <div class="flex items-center gap-4">
        <img src="/icons/contacts_icon.svg" alt="info" />
        <p class="text-headline">Соціальні мережі</p>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="grid grid-cols-4 items-center gap-4">
        <div
            v-for="link of links"
            :key="link.id"
            class="flex flex-col gap-3 py-7 px-6 w-[13.6rem] h-[10.6rem] gradient-border-departament bg-gradient rounded-[1.25rem] cursor-pointer"
        >
          <div class="flex items-start justify-between">
            <img class="w-[3.5rem]" :src="link.icon" alt="info" />
          </div>
          <div class="flex flex-col gap-2">
            <p class="text-headline">{{ link.title }}</p>
            <div class="flex items-center gap-1">
              <img src="/icons/user_icon.svg" alt="user" />
              <p class="text-subtitle">---</p>
            </div>
          </div>
        </div>
        <div
            class="flex flex-col gap-3 py-7 px-6 w-[13.6rem] h-[10.6rem] gradient-border-departament bg-gradient rounded-[1.25rem] cursor-pointer"
        >
          <div class="flex items-start justify-between">
            <img class="w-[3.5rem]" src="/icons/plus_icon_white.svg" alt="plus" />
          </div>
          <div class="flex flex-col gap-2">
            <p class="text-headline">Додати мережу</p>
            <div class="flex items-center gap-1">
              <img src="/icons/user_icon.svg" alt="user" />
              <p class="text-subtitle">---</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>