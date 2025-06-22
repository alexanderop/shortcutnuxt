import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // Existing shortcuts
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],

    // Linear-style shortcuts for keyboard shortcut system
    ['bg-overlay', 'bg-black/60 backdrop-blur-sm'],
    ['bg-dialog', 'bg-zinc-900 border border-zinc-800 shadow-2xl'],
    ['text-primary', 'text-zinc-100'],
    ['text-secondary', 'text-zinc-400'],
    ['text-muted', 'text-zinc-500'],
    ['kbd-key', 'inline-flex items-center justify-center min-w-6 h-6 px-1.5 text-xs font-medium text-zinc-300 bg-zinc-800 border border-zinc-700/50 rounded shadow-sm'],
    ['shortcut-item', 'flex items-center justify-between p-3 rounded-lg hover:bg-zinc-800/50 transition-colors duration-150'],
    ['dialog-header', 'flex items-center justify-between p-4 border-b border-zinc-800'],
    ['dialog-content', 'p-4 max-h-96 overflow-y-auto'],

    // Command palette specific styles
    ['command-palette-input', 'w-full bg-transparent border-0 outline-0 text-zinc-100 placeholder-zinc-500 text-sm px-4 py-3'],
    ['command-item', 'flex items-center gap-3 px-4 py-3 text-sm cursor-pointer transition-colors duration-150 hover:bg-zinc-800/50'],
    ['command-item-active', 'bg-zinc-800/50'],
    ['command-item-icon', 'w-4 h-4 text-zinc-400'],
    ['command-item-text', 'flex-1 text-zinc-100'],
    ['command-item-shortcut', 'text-xs text-zinc-500'],
    ['command-empty', 'px-4 py-8 text-center text-zinc-500 text-sm'],
    ['command-group-label', 'px-4 py-2 text-xs font-medium text-zinc-500 uppercase tracking-wider'],
  ],
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
      processors: createLocalFontProcessor(),
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
