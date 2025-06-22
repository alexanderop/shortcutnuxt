<script setup lang="ts">
import { isShortcutDialogOpen, useKeyboardShortcuts } from '~/composables/useKeyboardShortcuts'

const allShortcuts = useKeyboardShortcuts()

function formatShortcut(keys: string[]) {
  return keys.map((key) => {
    // Format special keys for better display
    if (key === '?')
      return '?'
    if (key === 'Escape')
      return 'Esc'
    if (key === ' ')
      return 'Space'
    return key.toUpperCase()
  })
}

function closeDialog() {
  isShortcutDialogOpen.value = false
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isShortcutDialogOpen"
      class="px-4 pt-16 flex items-start inset-0 justify-center fixed z-50"
      bg-overlay
      @click="closeDialog"
    >
      <div
        class="rounded-xl max-w-lg w-full"
        bg-dialog
        @click.stop
      >
        <!-- Header -->
        <div dialog-header>
          <h2 class="text-lg font-semibold" text-primary>
            Keyboard shortcuts
          </h2>
          <button
            class="p-1 rounded-lg transition-colors hover:bg-zinc-800"
            text-secondary
            @click="closeDialog"
          >
            <div class="i-carbon-close h-5 w-5" />
          </button>
        </div>

        <!-- Content -->
        <div dialog-content>
          <div class="space-y-1">
            <div
              v-for="shortcut in allShortcuts"
              :key="shortcut.id"
              shortcut-item
            >
              <div class="flex flex-col">
                <span class="font-medium" text-primary>
                  {{ shortcut.name }}
                </span>
                <span
                  v-if="shortcut.description"
                  class="text-sm mt-0.5"
                  text-secondary
                >
                  {{ shortcut.description }}
                </span>
              </div>

              <div class="flex gap-1 items-center">
                <kbd
                  v-for="key in formatShortcut(shortcut.shortcut)"
                  :key="key"
                  kbd-key
                >
                  {{ key }}
                </kbd>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="text-xs px-4 py-3 border-t border-gray-200 dark:border-zinc-800" text-muted>
          Press <kbd kbd-key>Esc</kbd> to close
        </div>
      </div>
    </div>
  </Teleport>
</template>
