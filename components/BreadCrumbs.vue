<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const resolvePath = (path: string, params: Record<string, any>) => {
  return path.replace(/:([^/]+)/g, (_, key) => params[key] || key)
}

const route = useRoute()

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
  <div class="flex justify-between items-center py-3 px-10 border-t border-b border-alias relative z-1 bg-magenta-950">
    <h2>{{ breadcrumbs[breadcrumbs.length - 1]?.title }}</h2>
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
        <span
            v-else
            class="text-magenta-600"
        >
          {{ crumb.title }}
        </span>
      </span>
    </nav>
  </div>
</template>
