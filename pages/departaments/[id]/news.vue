<script setup lang="ts">
definePageMeta({
  title: 'Новини'
})
</script>
<template>
  <div class="w-full flex flex-col items-center justify-center py-10 px-[16rem] relative z-1">
    <div class="flex items-center justify-between w-full">
      <div class="flex items-center gap-5">
        <p class="text-headline text-magenta-600">09 червня 2025 • 17:00 - 19:00</p>
      </div>
    </div>
    <h2 class="self-start pt-3">У США через прострочену візу затримали тіктокера Хабі, відомого висміюванням інтернет-лайфгаків</h2>
    <img class="w-full pt-3" src="@/public/images/news-big-image-2.png" alt="news">
    <p class="text-body pt-3 leading-[1.3rem]">
      Імміграційні органи Сполучених Штатів затримали відомого TikTok-блогера Хабі Ламе, бо той нібито перевищив термін законного перебування в країні. Однак згодом його відпустили, дозволивши виїхати.
    </p>
    <p class="text-body pt-3 pb-8 leading-[1.3rem] border-b border-alias">
      Про це пише France24 із посиланням на заяву Імміграційної та митної служби США (ICE) для AFP. <br> <br>

      25-річного Ламе, який є громадянином Італії, затримали ще 6 червня в Міжнародному аеропорту імені Гаррі Ріда в Лас-Вегасі. Той в’їхав до США 30 квітня, але «перевищив термін дії своєї візи», кажуть в ICE.
      <br> <br>
      Однак у той самий день його відпустили, дозволивши добровільно виїхати з країни. Відтоді він покинув США. Сам блогер поки що не коментував інцидент.
      <br> <br>
      Ламе став популярним у TikTok завдяки своїм відео, у яких він мовчки висміює інтернет-лайфгаки, демонструючи, що насправді вони тільки ускладнюють життя.
      <br> <br>
      Маючи 162,2 мільйона підписників, він посідає перше місце за їхньою кількістю в TikTok. Крім того, Ламе є послом доброї волі ЮНІСЕФ.
    </p>
    <div class="flex items-center justify-between pt-8 w-full">
      <div class="relative">
        <img class="w-[18.2rem] h-[13.6rem] object-cover rounded-2xl" src="@/public/images/news-big-image-2.png" alt="image">
        <img class="absolute bottom-2 right-2 bg-icon p-2 rounded-full cursor-pointer" src="/icons/ic_outline-contacts.svg" alt="ic">
      </div>
      <div class="relative">
        <img class="w-[18.2rem] h-[13.6rem] object-cover rounded-2xl" src="@/public/images/news-big-image-2.png" alt="image">
        <img class="absolute bottom-2 right-2 bg-icon p-2 rounded-full cursor-pointer" src="/icons/ic_outline-contacts.svg" alt="ic">
      </div>
      <div class="relative">
        <img class="w-[18.2rem] h-[13.6rem] object-cover rounded-2xl" src="@/public/images/news-big-image-2.png" alt="image">
        <img class="absolute bottom-2 right-2 bg-icon p-2 rounded-full cursor-pointer" src="/icons/play_icon.svg" alt="ic">
      </div>
    </div>
    <div class="flex items-center justify-between w-full pt-8">
      <div class="flex items-center gap-4">
        <img src="/icons/arrow_left_icon.svg" alt="arrow">
        <p class="text-caption text-effects-blueShadow uppercase">попередній захід</p>
      </div>
      <div class="flex items-center gap-4">
        <p class="text-caption text-effects-blueShadow uppercase">наступний захід</p>
        <img src="/icons/arrow_right_icon.svg" alt="arrow">
      </div>
    </div>
  </div>
</template>