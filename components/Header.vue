<template>
  <header class="flex justify-between items-center py-3 px-10 max-sm:px-5 bg-magenta-950 relative z-1">
    <div class="w-22 max-sm:hidden"></div>
    <img class="max-sm:w-[1.87rem]" src="/icons/logo.svg" alt="logo" />
    <div class="flex items-center gap-6">
      <img class="w-[2rem]" src="/icons/search_icon.svg" alt="search" />
      <NuxtLink to="/profile">
        <img class="w-[2rem]" src="/icons/user_icon.svg" alt="user" />
      </NuxtLink>
    </div>
  </header>
</template>