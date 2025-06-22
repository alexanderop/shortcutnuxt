<script setup lang="ts">
import { provideGlobalShortcuts } from '~/composables/useKeyboardShortcuts'
import { appName } from '~/constants'

useHead({
  title: appName,
})

// Initialize global keyboard shortcuts
provideGlobalShortcuts()
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <ShortcutDialog />
  <CommandPalette />
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  color-scheme: dark;
}
</style>
