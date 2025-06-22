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
  background-color: white;
  color: #1f2937;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

html.dark,
html.dark body,
html.dark #__nuxt {
  background-color: #0f0f0f;
  color: #f4f4f5;
  color-scheme: dark;
}
</style>
