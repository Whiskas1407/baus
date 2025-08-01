<script setup lang="ts">
import {ref, reactive} from 'vue'
import Button from "../../../components/ui/Button.vue";
import RadioButton from "../../../components/ui/RadioButton.vue";
import ArrowLink from "../../../components/ui/ArrowLink.vue";
import Alert from "../../../components/modals/alert.vue";
import InputText from "../../../components/ui/InputText.vue";
import InputTextArea from "../../../components/ui/InputTextArea.vue";

definePageMeta({
  title: 'Марія Ткаченко (@MashaVibe)'
})

let activeTab = ref(1)
let activeSocialTab = ref(1)

const tabsSocial = [
  {
    id: 1,
    text: 'Усі'
  },
  {
    id: 2,
    text: 'Youtube'
  },
  {
    id: 3,
    text: 'Instagram'
  },
  {
    id: 4,
    text: 'Facebook'
  },
  {
    id: 5,
    text: 'X'
  },
  {
    id: 6,
    text: 'Tiktok'
  },
]

const advertisingAll = [
  {
    id: 1,
    price: 1000,
    title: 'Реклама в сторіс (1-2 слайди)',
    type: 3,
  },
  {
    id: 2,
    price: 1800,
    title: 'Реклама в сторіс (3-5 слайдів з озвучкою)',
    type: 3,
  },
  {
    id: 3,
    price: 2500,
    title: 'Пост в Instagram з фото та тегами',
    type: 3,
  },
  {
    id: 4,
    price: 3500,
    title: 'Reels або TikTok з оглядом продукту',
    type: 6,
  },
  {
    id: 5,
    price: 5000,
    title: 'Відеоогляд (YouTube/Instagram)',
    type: 2,
  },
  {
    id: 6,
    price: 7000,
    title: 'Комплексна інтеграція (сторіс + пост + reels)',
    type: 3,
  },
]

let advertisingActive = ref(1)

function changeActiveAdvertising(id: number) {
  advertisingActive.value = id
}

let form = reactive({
  name: '',
  contactName: '',
  contactPhone: '',
  description: '',
})

let showForm = ref(false)
let showFormSuccess = ref(false)

function SendForm() {
  showForm.value = false
  showFormSuccess.value = true
}

</script>
<template>
  <div class="w-full relative z-1 flex flex-col items-start justify-center py-8 px-[16rem] gap-5">
    <div class="flex items-end gap-9">
      <img src="@/public/images/bloger-avatar.png" alt="avatar" />
      <div class="flex flex-col items-start justify-start gap-2">
        <p class="text-subtitle py-1 px-2 rounded-full bg-effects-blueShadow">Мода і краса</p>
        <h1 class="font-euclid-bold">Марія Ткаченко</h1>
        <p class="text-headline">@MashaVibe</p>
        <div class="flex items-center gap-4">
          <div class="flex flex-col items-center gap-1">
            <img class="w-[3rem] h-[3rem]" src="/icons/youtube_icon.svg" alt="yt">
            <p class="text-body">1M</p>
          </div>
          <div class="flex flex-col items-center gap-1">
            <img class="w-[3rem] h-[3rem]" src="/icons/facebook_icon.svg" alt="fb">
            <p class="text-body">900K</p>
          </div>
          <div class="flex flex-col items-center gap-1">
            <img class="w-[3rem] h-[3rem]" src="/icons/twitter_icon.svg" alt="tw">
            <p class="text-body">27K</p>
          </div>
          <div class="flex flex-col items-center gap-1">
            <img class="w-[3rem] h-[3rem]" src="/icons/instagram_icon.svg" alt="instagram">
            <p class="text-body">2M</p>
          </div>
          <div class="flex flex-col items-center gap-1">
            <img class="w-[3rem] h-[3rem]" src="/icons/tiktok_icon.svg" alt="tiktok">
            <p class="text-body">1.5M</p>
          </div>
        </div>
      </div>
    </div>
    <p class="text-body pt-3 leading-[1.3rem]">
      Привіт! Я Марія, більше відома як @MashaVibe. Мода та краса — це не просто моє хобі, це мій стиль життя.
      У своїх блогах я ділюсь натхненням, стильними образами, б'юті-порадами та власним досвідом догляду за собою.
      Для мене важливо створювати простір, де кожен може знайти щось для себе — від щоденного натхнення до практичних
      порад. Долучайся, якщо хочеш говорити про красу щиро та з любов’ю 💄✨
    </p>
    <div class="flex items-center justify-between w-full pt-4 gap-4">
      <Button :active="activeTab === 1" @click="activeTab = 1" class="w-full">
        Ціни та послуги
      </Button>
      <Button :active="activeTab === 2" @click="activeTab = 2" class="w-full">
        Контент та активності
      </Button>
    </div>
    <div class="pt-2 w-full" v-if="activeTab === 1">
      <div class="flex items-center gap-4">
        <p
            v-for="tab of tabsSocial"
            :key="tab.id"
            class="text-subtitle w-[5rem] text-center pb-4 cursor-pointer"
            :class="activeSocialTab === tab.id ? 'border-b-2 border-magenta-500 text-magenta-500' : 'text-naturals-100'"
            @click="activeSocialTab = tab.id"
        >
          {{ tab.text }}
        </p>
      </div>
      <div class="flex flex-col w-full pt-8 gap-5">
        <div
            v-for="item of advertisingAll"
            :key="item.id"
            @click="changeActiveAdvertising(item.id)"
            class="flex items-center justify-between pb-5 border-b border-alias px-7 cursor-pointer"
        >
          <div class="flex items-start gap-4">
            <RadioButton :model-value="item.id === advertisingActive" />
            <div class="flex flex-col gap-1">
              <p class="text-headline">{{ item.title }}</p>
              <p
                  class="text-subtitle text-naturals-100 leading-[1.1rem] font-euclid-light max-w-[39.5rem]"
                  :class="item.id !== advertisingActive ? 'truncate' : ''"
              >
                This is my behind the scenes package. If you're looking for chic, modern, well lit,
                clean, compelling content to have all to yourself - this is your package! I will create
                1 Video with no filter + 3 Hi-Res Photos. This can be product photography, or lifestyle
                - whichever you prefer! Additional Hi-Res photos can be purchased at $50 ea. Want to create
                something special? Let's work together!
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <p class="text-headline font-euclid-bold">від {{ item.price }} грн</p>
            <ArrowLink text="замовити" v-if="item.id === advertisingActive" @click="showForm = true" />
          </div>
        </div>
      </div>
      <Alert :model-value="showForm">
        <div class="flex flex-col items-start gap-5">
          <div class="flex items-start justify-between w-full gap-4">
            <div class="flex flex-col items-start gap-2 w-[24rem]">
              <p class="text-headline">Реклама в сторіс (1-2 слайди)</p>
              <p class="text-subtitle leading-[1.1rem]">
                This is my behind the scenes package. If you're looking for chic, modern, well lit, clean,
                compelling content to have all to yourself - this is your package! I will create 1 Video with no filter +
                3 Hi-Res Photos. This can be product photography, or lifestyle - whichever you prefer! Additional Hi-Res
                photos can be purchased at $50 ea. Want to create something special? Let's work together!
              </p>
            </div>
            <img src="/icons/cross_icon.svg" alt="close" @click="showForm = false">
          </div>
          <InputText
              :modelValue="form.name"
              @update:modelValue="form.name = $event"
              textPlaceholder="Назва компанії"
              label="Назва компанії"
          />
          <InputText
              :modelValue="form.contactName"
              @update:modelValue="form.contactName = $event"
              textPlaceholder="Контактна особа"
              label="Контактна особа (ПІБ)"
          />
          <InputText
              :modelValue="form.contactPhone"
              @update:modelValue="form.contactPhone = $event"
              textPlaceholder="+38 XXX XXX XX XX"
              label="Контакт для зв'язку"
          />
          <InputTextArea
              text-placeholder="Опишіть ваші побажання"
              label="Побажання"
          />
          <Button
              :active="form.name.length > 0 && form.contactName.length > 0 && form.contactPhone.length > 0"
              :disabled="form.name.length < 1 || form.contactName.length < 1 || form.contactPhone.length < 1"
              class="w-full"
              @click="SendForm"
          >
            Відіслати
          </Button>
        </div>
      </Alert>
      <Alert :model-value="showFormSuccess">
        <h3>Заявка на послугу прийнята</h3>
        <p class="text-body">Вашу заявку буде розглянуто у найближчий час</p>
        <Button active @click="showFormSuccess = false">OK</Button>
      </Alert>
    </div>
    <div v-if="activeTab === 2"></div>
  </div>
</template>