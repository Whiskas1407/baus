<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import BreadCrumbs from "./components/BreadCrumbs.vue"

const showArrow = ref(false)

const handleScroll = () => {
  showArrow.value = window.scrollY > 200
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>
    <div class="fixed top-0 left-0 w-full z-2">
      <Header />
      <BreadCrumbs />
    </div>

    <div class="relative z-1 top-35">
      <img class="absolute top-[-10rem] z-0 right-0 max-sm:hidden" src="/images/shadow-right.svg" alt="shadow" />
      <img class="absolute top-[21.4rem] z-0 left-0 max-sm:hidden" src="/images/shadow-left.svg" alt="shadow" />
      <NuxtPage />
    </div>
    <div
        v-if="showArrow"
        @click="scrollToTop"
        class="cursor-pointer fixed max-sm:hidden z-10 right-10 bottom-10 w-[3.5rem] h-[3.5rem] rounded-full border border-alias flex items-center justify-center hover:scale-105 transition-transform"
    >
      <img src="/icons/arrowup_icon.svg" alt="arrow" />
    </div>
  </div>
</template>
