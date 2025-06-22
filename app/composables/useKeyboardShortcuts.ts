import { useMagicKeys, whenever } from '@vueuse/core'
import { ref, watchEffect } from 'vue'
import { useMagicSequence } from './useMagicSequence'

export interface KeyboardShortcut {
  id: string
  name: string
  description?: string
  shortcut: string[]
  onActivate: () => void
}

const shortcuts = ref<KeyboardShortcut[]>([])
export const isShortcutDialogOpen = ref(false)
export const isCommandPaletteOpen = ref(false)

export function useKeyboardShortcuts() {
  return shortcuts
}

export function provideGlobalShortcuts() {
  const keys = useMagicKeys()

  // Close dialogs with Escape
  if (keys.Escape) {
    whenever(keys.Escape, () => {
      if (isCommandPaletteOpen.value) {
        isCommandPaletteOpen.value = false
      }
      else if (isShortcutDialogOpen.value) {
        isShortcutDialogOpen.value = false
      }
    })
  }

  // Open command palette with Cmd+K or Ctrl+K
  if (keys['Meta+k']) {
    whenever(keys['Meta+k'], (pressed) => {
      if (pressed) {
        isCommandPaletteOpen.value = true
      }
    })
  }

  if (keys['Ctrl+k']) {
    whenever(keys['Ctrl+k'], (pressed) => {
      if (pressed) {
        isCommandPaletteOpen.value = true
      }
    })
  }

  // Define all available shortcuts
  const definedShortcuts: KeyboardShortcut[] = [
    {
      id: 'show-shortcuts',
      name: 'Show keyboard shortcuts',
      description: 'Display all available keyboard shortcuts',
      shortcut: ['?'],
      onActivate: () => (isShortcutDialogOpen.value = true),
    },
    {
      id: 'open-command-palette',
      name: 'Open command palette',
      description: 'Open the command palette to search and execute commands',
      shortcut: ['⌘', 'k'],
      onActivate: () => (isCommandPaletteOpen.value = true),
    },
    {
      id: 'go-home',
      name: 'Go to Home',
      description: 'Navigate to the home page',
      shortcut: ['g', 'h'],
      onActivate: () => {
        navigateTo('/')
      },
    },
    {
      id: 'go-about',
      name: 'Go to About',
      description: 'Navigate to the about page',
      shortcut: ['g', 'a'],
      onActivate: () => {
        navigateTo('/hi')
      },
    },
    {
      id: 'search',
      name: 'Search',
      description: 'Open search functionality',
      shortcut: ['s'],
      onActivate: () => {
        // Future: implement actual search
      },
    },
    {
      id: 'toggle-theme',
      name: 'Toggle Theme',
      description: 'Switch between light and dark mode',
      shortcut: ['t'],
      onActivate: () => {
        const colorMode = useColorMode()
        colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
      },
    },
  ]

  // Set up shortcut listeners
  for (const shortcut of definedShortcuts) {
    if (shortcut.shortcut.length > 1) {
      // Handle key sequences
      const trigger = useMagicSequence(shortcut.shortcut)
      if (trigger) {
        watchEffect(() => {
          if (trigger.value)
            shortcut.onActivate()
        })
      }
    }
    else {
      // Handle single key presses
      const key = shortcut.shortcut[0]
      if (key && keys[key]) {
        whenever(keys[key], () => {
          // Avoid triggering shortcuts when typing in inputs
          if (document.activeElement?.tagName === 'INPUT'
            || document.activeElement?.tagName === 'TEXTAREA'
            || (document.activeElement as HTMLElement)?.contentEditable === 'true') {
            return
          }
          shortcut.onActivate()
        })
      }
    }
  }

  shortcuts.value = definedShortcuts
}
