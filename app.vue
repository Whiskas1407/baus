<template>
  <div>
    <div class="fixed top-0 left-0 w-full z-2">
      <Header />
      <Sidebar />
    </div>
    <div class="relative z1 top-35">
      <img class="absolute top-[-10rem] z-0 right-0" src="/images/shadow-right.svg" alt="shadow">
      <img class="absolute top-[21.4rem] z-0 left-0" src="/images/shadow-left.svg" alt="shadow">
      <NuxtPage />
    </div>
  </div>
</template>
<script setup lang="ts">
</script>