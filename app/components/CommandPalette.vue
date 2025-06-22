<script setup lang="ts">
import type { KeyboardShortcut } from '~/composables/useKeyboardShortcuts'
import { computed, nextTick, ref, watch } from 'vue'
import { isCommandPaletteOpen, useKeyboardShortcuts } from '~/composables/useKeyboardShortcuts'

const searchQuery = ref('')
const searchInput = ref<HTMLInputElement>()
const activeIndex = ref(0)

const allShortcuts = useKeyboardShortcuts()

// Group shortcuts by category
const groupedShortcuts = computed(() => {
  const navigation = allShortcuts.value.filter(cmd => cmd.id.startsWith('go-'))
  const actions = allShortcuts.value.filter(cmd => !cmd.id.startsWith('go-') && cmd.id !== 'show-shortcuts')
  const help = allShortcuts.value.filter(cmd => cmd.id === 'show-shortcuts')

  return [
    { label: 'Navigation', commands: navigation },
    { label: 'Actions', commands: actions },
    { label: 'Help', commands: help },
  ].filter(group => group.commands.length > 0)
})

// Filter shortcuts based on search query
const filteredShortcuts = computed(() => {
  if (!searchQuery.value.trim()) {
    return groupedShortcuts.value
  }

  const query = searchQuery.value.toLowerCase()
  return groupedShortcuts.value.map(group => ({
    ...group,
    commands: group.commands.filter(cmd =>
      cmd.name.toLowerCase().includes(query)
      || cmd.description?.toLowerCase().includes(query)
      || cmd.shortcut.join(' ').toLowerCase().includes(query),
    ),
  })).filter(group => group.commands.length > 0)
})

// Flatten filtered shortcuts for keyboard navigation
const flatCommands = computed(() => {
  return filteredShortcuts.value.flatMap(group => group.commands)
})

// Reset active index when filtered shortcuts change
watch(flatCommands, () => {
  activeIndex.value = 0
})

// Focus input when dialog opens
watch(isCommandPaletteOpen, async (isOpen) => {
  if (isOpen) {
    await nextTick()
    searchInput.value?.focus()
    searchQuery.value = ''
    activeIndex.value = 0
  }
})

function formatShortcut(keys: string[]) {
  return keys.map((key) => {
    if (key === '?')
      return '?'
    if (key === 'Escape')
      return 'Esc'
    if (key === ' ')
      return 'Space'
    return key.toUpperCase()
  })
}

function closeCommandPalette() {
  isCommandPaletteOpen.value = false
}

function executeCommand(command: KeyboardShortcut) {
  command.onActivate()
  closeCommandPalette()
}

function onKeyDown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeCommandPalette()
    return
  }

  if (event.key === 'ArrowDown') {
    event.preventDefault()
    activeIndex.value = Math.min(activeIndex.value + 1, flatCommands.value.length - 1)
    return
  }

  if (event.key === 'ArrowUp') {
    event.preventDefault()
    activeIndex.value = Math.max(activeIndex.value - 1, 0)
    return
  }

  if (event.key === 'Enter') {
    event.preventDefault()
    const activeCommand = flatCommands.value[activeIndex.value]
    if (activeCommand) {
      executeCommand(activeCommand)
    }
  }
}

function getIconForCommand(command: KeyboardShortcut) {
  switch (command.id) {
    case 'go-home': return 'i-carbon-home'
    case 'go-about': return 'i-carbon-information'
    case 'search': return 'i-carbon-search'
    case 'toggle-theme': return 'i-carbon-sun'
    case 'show-shortcuts': return 'i-carbon-keyboard'
    default: return 'i-carbon-circle-dash'
  }
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isCommandPaletteOpen"
      class="px-4 pt-16 flex items-start inset-0 justify-center fixed z-50"
      bg-overlay
      @click="closeCommandPalette"
    >
      <div
        class="rounded-xl max-w-xl w-full overflow-hidden"
        bg-dialog
        @click.stop
        @keydown="onKeyDown"
      >
        <!-- Search Input -->
        <div class="border-b border-zinc-800">
          <div class="px-4 flex gap-3 items-center">
            <div class="i-carbon-search text-zinc-400 h-4 w-4" />
            <input
              ref="searchInput"
              v-model="searchQuery"
              command-palette-input
              placeholder="Type a command or search..."
              autocomplete="off"
            >
          </div>
        </div>

        <!-- Commands List -->
        <div class="max-h-96 overflow-y-auto">
          <div v-if="filteredShortcuts.length === 0" command-empty>
            No commands found
          </div>

          <div v-else>
            <template v-for="(group, groupIndex) in filteredShortcuts" :key="group.label">
              <!-- Group Label -->
              <div
                v-if="filteredShortcuts.length > 1"
                command-group-label
                :class="{ 'mt-2': groupIndex > 0 }"
              >
                {{ group.label }}
              </div>

              <!-- Commands in Group -->
              <div
                v-for="command in group.commands"
                :key="command.id"
                command-item
                :class="{
                  'command-item-active': flatCommands.findIndex(cmd => cmd.id === command.id) === activeIndex,
                }"
                @click="executeCommand(command)"
                @mouseenter="activeIndex = flatCommands.findIndex(cmd => cmd.id === command.id)"
              >
                <div :class="getIconForCommand(command)" command-item-icon />

                <div class="flex-1">
                  <div command-item-text>
                    {{ command.name }}
                  </div>
                  <div
                    v-if="command.description"
                    class="text-xs text-zinc-500 mt-0.5"
                  >
                    {{ command.description }}
                  </div>
                </div>

                <div class="flex gap-1 items-center">
                  <kbd
                    v-for="key in formatShortcut(command.shortcut)"
                    :key="key"
                    kbd-key
                  >
                    {{ key }}
                  </kbd>
                </div>
              </div>
            </template>
          </div>
        </div>

        <!-- Footer -->
        <div class="text-xs px-4 py-3 border-t border-zinc-800 flex items-center justify-between" text-muted>
          <div class="flex gap-4 items-center">
            <span class="flex gap-1 items-center">
              <kbd kbd-key>↑</kbd>
              <kbd kbd-key>↓</kbd>
              to navigate
            </span>
            <span class="flex gap-1 items-center">
              <kbd kbd-key>Enter</kbd>
              to select
            </span>
          </div>
          <span class="flex gap-1 items-center">
            <kbd kbd-key>Esc</kbd>
            to close
          </span>
        </div>
      </div>
    </div>
  </Teleport>
</template>
