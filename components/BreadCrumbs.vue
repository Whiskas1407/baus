<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useProfileStore } from '../stores/profile'

const profileStore = useProfileStore()
const route = useRoute()

const resolvePath = (path: string, params: Record<string, any>) => {
  return path.replace(/:([^/]+)/g, (_, key) => params[key] || key)
}

const breadcrumbs = computed(() => {
  const matched = route.matched.map((match) => ({
    title: match.meta.title as string || '',
    url: resolvePath(match.path, route.params),
  }))

  const hasHome = matched.length && matched[0].path === '/'
  const crumbs = hasHome
      ? matched
      : [{ title: 'Головна', url: '/' }, ...matched]

  return crumbs
})
</script>

<template>
  <div class="flex max-sm:flex-col-reverse max-sm:gap-4 max-sm:items-start justify-between items-center py-3 px-10 max-sm:px-5 border-t border-b border-alias relative z-1 bg-magenta-950">
    <div class="flex items-center gap-4">
      <img
          class="max-sm:hidden cursor-pointer hover:opacity-80 transition"
          src="/icons/arrow_left_icon.svg"
          alt="arrow"
          @click="profileStore.profileBackPage(0)"
      />
      <h2 class="max-sm:text-[1.25rem]">{{ breadcrumbs[breadcrumbs.length - 1]?.title }}</h2>
    </div>

    <nav class="text-subtitle">
      <span v-for="(crumb, index) in breadcrumbs" :key="index">
        <template v-if="index > 0"> / </template>
        <NuxtLink
            v-if="index !== breadcrumbs.length - 1"
            :to="crumb.url"
            class="hover:underline"
        >
          {{ crumb.title }}
        </NuxtLink>
        <span v-else class="text-magenta-600">
          {{ crumb.title }}
        </span>
      </span>
    </nav>
  </div>
</template>
