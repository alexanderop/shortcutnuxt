<script setup lang="ts">
import { isCommandPaletteOpen, isShortcutDialogOpen } from '~/composables/useKeyboardShortcuts'

definePageMeta({
  layout: 'home',
})

function openCommandPalette() {
  isCommandPaletteOpen.value = true
}

function openShortcutDialog() {
  isShortcutDialogOpen.value = true
}
</script>

<template>
  <div class="mx-auto px-6 py-12 max-w-4xl">
    <!-- Hero Section -->
    <div class="mb-16 text-center">
      <h1 class="text-5xl font-bold mb-6" text-primary>
        Keyboard Shortcuts
        <span class="text-teal-400">Made Simple</span>
      </h1>
      <p class="text-xl mb-8" text-secondary>
        Experience lightning-fast navigation with our Linear-inspired keyboard shortcut system.
        Every action is just a keystroke away.
      </p>
      <div class="flex flex-wrap gap-4 justify-center">
        <button
          class="flex gap-2 items-center btn"
          @click="openCommandPalette"
        >
          <div class="i-carbon-terminal h-4 w-4" />
          Try Command Palette
          <div class="ml-2 flex gap-1 items-center">
            <kbd kbd-key>⌘</kbd>
            <kbd kbd-key>K</kbd>
          </div>
        </button>
        <button
          class="px-6 py-3 border border-gray-300 rounded-lg flex gap-2 transition-colors items-center dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800/50"
          text-secondary
          @click="openShortcutDialog"
        >
          <div class="i-carbon-keyboard h-4 w-4" />
          View All Shortcuts
          <kbd kbd-key class="ml-2">?</kbd>
        </button>
      </div>
    </div>

    <!-- Features Grid -->
    <div class="mb-16 gap-12 grid md:grid-cols-2">
      <!-- Command Palette -->
      <div class="space-y-4">
        <div class="mb-4 flex gap-3 items-center">
          <div class="rounded-xl bg-teal-500/10 flex h-12 w-12 items-center justify-center">
            <div class="i-carbon-search text-teal-400 h-6 w-6" />
          </div>
          <h2 class="text-2xl font-semibold" text-primary>
            Command Palette
          </h2>
        </div>
        <p text-secondary>
          Press <kbd kbd-key>⌘K</kbd> (or <kbd kbd-key>Ctrl+K</kbd> on Windows) to open the command palette.
          Search through all available actions, navigate with arrow keys, and execute with Enter.
        </p>
        <div class="p-4 border border-gray-200 rounded-lg bg-gray-50 dark:border-zinc-800 dark:bg-zinc-900/50">
          <div class="text-sm font-medium mb-2" text-primary>
            Try it now:
          </div>
          <ul class="text-sm space-y-1" text-secondary>
            <li>• Type "home" to navigate to the homepage</li>
            <li>• Type "theme" to toggle dark/light mode</li>
            <li>• Type "help" to view all shortcuts</li>
          </ul>
        </div>
      </div>

      <!-- Key Sequences -->
      <div class="space-y-4">
        <div class="mb-4 flex gap-3 items-center">
          <div class="rounded-xl bg-purple-500/10 flex h-12 w-12 items-center justify-center">
            <div class="i-carbon-keyboard text-purple-400 h-6 w-6" />
          </div>
          <h2 class="text-2xl font-semibold" text-primary>
            Key Sequences
          </h2>
        </div>
        <p text-secondary>
          Use Gmail-style key sequences for rapid navigation. Press keys in sequence
          (not simultaneously) to trigger actions.
        </p>
        <div class="p-4 border border-gray-200 rounded-lg bg-gray-50 dark:border-zinc-800 dark:bg-zinc-900/50">
          <div class="text-sm font-medium mb-2" text-primary>
            Navigation sequences:
          </div>
          <div class="text-sm space-y-2">
            <div class="flex items-center justify-between">
              <span text-secondary>Go to Home</span>
              <div class="flex gap-1 items-center">
                <kbd kbd-key>G</kbd>
                <span text-muted>then</span>
                <kbd kbd-key>H</kbd>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span text-secondary>Go to About</span>
              <div class="flex gap-1 items-center">
                <kbd kbd-key>G</kbd>
                <span text-muted>then</span>
                <kbd kbd-key>A</kbd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="mb-16">
      <h2 class="text-3xl font-bold mb-8 text-center" text-primary>
        Quick Actions
      </h2>
      <div class="gap-6 grid md:grid-cols-3">
        <div class="p-6 text-center border border-gray-200 rounded-xl bg-gray-50 transition-colors dark:border-zinc-800 dark:bg-zinc-900/30 hover:bg-gray-100 dark:hover:bg-zinc-800/30">
          <div class="mx-auto mb-4 rounded-xl bg-blue-500/10 flex h-12 w-12 items-center justify-center">
            <div class="i-carbon-search text-blue-400 h-6 w-6" />
          </div>
          <h3 class="text-lg font-semibold mb-2" text-primary>
            Search
          </h3>
          <p class="text-sm mb-3" text-secondary>
            Quick search functionality
          </p>
          <kbd kbd-key>S</kbd>
        </div>

        <div class="p-6 text-center border border-gray-200 rounded-xl bg-gray-50 transition-colors dark:border-zinc-800 dark:bg-zinc-900/30 hover:bg-gray-100 dark:hover:bg-zinc-800/30">
          <div class="mx-auto mb-4 rounded-xl bg-amber-500/10 flex h-12 w-12 items-center justify-center">
            <div class="i-carbon-sun text-amber-400 h-6 w-6" />
          </div>
          <h3 class="text-lg font-semibold mb-2" text-primary>
            Toggle Theme
          </h3>
          <p class="text-sm mb-3" text-secondary>
            Switch between light and dark
          </p>
          <kbd kbd-key>T</kbd>
        </div>

        <div class="p-6 text-center border border-gray-200 rounded-xl bg-gray-50 transition-colors dark:border-zinc-800 dark:bg-zinc-900/30 hover:bg-gray-100 dark:hover:bg-zinc-800/30">
          <div class="mx-auto mb-4 rounded-xl bg-green-500/10 flex h-12 w-12 items-center justify-center">
            <div class="i-carbon-help text-green-400 h-6 w-6" />
          </div>
          <h3 class="text-lg font-semibold mb-2" text-primary>
            Help
          </h3>
          <p class="text-sm mb-3" text-secondary>
            View all available shortcuts
          </p>
          <kbd kbd-key>?</kbd>
        </div>
      </div>
    </div>

    <!-- How It Works -->
    <div class="mb-16">
      <h2 class="text-3xl font-bold mb-8 text-center" text-primary>
        Under the Hood: Building a Production-Ready Shortcut System
      </h2>

      <div class="max-w-none prose prose-zinc prose-invert">
        <p class="text-lg mb-8" text-secondary>
          Building keyboard shortcuts that feel native and responsive requires solving several non-trivial challenges.
          Here's how we architected our system to handle edge cases, prevent conflicts, and scale gracefully.
        </p>

        <div class="space-y-12">
          <!-- Challenge 1 -->
          <div>
            <h3 class="text-xl font-semibold mb-4 flex gap-3 items-center" text-primary>
              <div class="border border-teal-500/30 rounded-lg bg-teal-500/20 flex h-8 w-8 items-center justify-center">
                <div class="i-carbon-connection-signal text-teal-400 h-4 w-4" />
              </div>
              The Global Event Listener Challenge
            </h3>
            <p class="mb-4" text-secondary>
              The first hurdle: how do you listen for keyboard events <em>everywhere</em> in your app without performance penalties?
              Native <code class="text-teal-500 px-2 py-0.5 rounded bg-gray-200 dark:text-teal-400 dark:bg-zinc-800">addEventListener</code> can be clunky and memory-leaky.
            </p>
            <div class="mb-4 p-4 border border-gray-200 dark:border-zinc-800 rounded-lg bg-gray-50 dark:bg-zinc-900/50">
              <div class="text-sm text-gray-700 font-mono dark:text-zinc-300">
                <div class="text-gray-500 dark:text-zinc-500">
                  // ❌ Naive approach - manual cleanup required
                </div>
                <div>document.addEventListener('keydown', handler)</div>
                <div class="text-gray-500 dark:text-zinc-500">
                  // Must remember to removeEventListener...
                </div>
              </div>
            </div>
            <p class="mb-4" text-secondary>
              Our solution leverages VueUse's <code class="text-teal-500 px-2 py-0.5 rounded bg-gray-200 dark:text-teal-400 dark:bg-zinc-800">useMagicKeys</code>, which provides:
            </p>
            <ul class="mb-4 list-disc list-inside space-y-2" text-secondary>
              <li><strong>Automatic cleanup</strong> when components unmount</li>
              <li><strong>Reactive refs</strong> for each key state (pressed/released)</li>
              <li><strong>Combo support</strong> like <kbd kbd-key>Cmd+K</kbd> out of the box</li>
              <li><strong>Cross-browser compatibility</strong> handling</li>
            </ul>
            <div class="p-4 border border-gray-200 rounded-lg bg-gray-50 dark:border-zinc-800 dark:bg-zinc-900/50">
              <div class="text-sm text-gray-700 font-mono dark:text-zinc-300">
                <div class="text-gray-500 dark:text-zinc-500">
                  // ✅ VueUse approach - declarative and clean
                </div>
                <div><span class="text-purple-400">const</span> keys = <span class="text-blue-400">useMagicKeys</span>()</div>
                <div><span class="text-purple-400">whenever</span>(keys.Escape, () => closeDialog())</div>
              </div>
            </div>
          </div>

          <!-- Challenge 2 -->
          <div>
            <h3 class="text-xl font-semibold mb-4 flex gap-3 items-center" text-primary>
              <div class="border border-amber-500/30 rounded-lg bg-amber-500/20 flex h-8 w-8 items-center justify-center">
                <div class="i-carbon-security text-amber-400 h-4 w-4" />
              </div>
              Context-Aware Activation
            </h3>
            <p class="mb-4" text-secondary>
              Nothing ruins UX like shortcuts firing when you're typing in a form field. The challenge is detecting
              when the user is "inputting" vs "navigating" without hardcoding every possible input type.
            </p>
            <div class="mb-4 p-4 border border-gray-200 dark:border-zinc-800 rounded-lg bg-gray-50 dark:bg-zinc-900/50">
              <div class="text-sm text-gray-700 font-mono dark:text-zinc-300">
                <div class="text-gray-500 dark:text-zinc-500">
                  // Smart context detection
                </div>
                <div><span class="text-purple-400">const</span> isInputFocused = () => {</div>
                <div>  <span class="text-purple-400">const</span> activeEl = <span class="text-blue-400">document.activeElement</span></div>
                <div>  <span class="text-purple-400">return</span> activeEl?.tagName === <span class="text-green-400">'INPUT'</span> ||</div>
                <div>         activeEl?.tagName === <span class="text-green-400">'TEXTAREA'</span> ||</div>
                <div>         activeEl?.contentEditable === <span class="text-green-400">'true'</span></div>
                <div>}</div>
              </div>
            </div>
            <p text-secondary>
              This approach catches traditional form inputs, rich text editors, and any custom contentEditable implementations.
              It's future-proof and works with any UI library.
            </p>
          </div>

          <!-- Challenge 3 -->
          <div>
            <h3 class="text-xl font-semibold mb-4 flex gap-3 items-center" text-primary>
              <div class="border border-purple-500/30 rounded-lg bg-purple-500/20 flex h-8 w-8 items-center justify-center">
                <div class="i-carbon-data-structured text-purple-400 h-4 w-4" />
              </div>
              Multi-Key Sequence State Management
            </h3>
            <p class="mb-4" text-secondary>
              The trickiest part: implementing Gmail-style sequences like <kbd kbd-key>G</kbd> → <kbd kbd-key>H</kbd>.
              You need to track partial sequences, handle timeouts, and reset state appropriately.
            </p>
            <div class="mb-4 p-4 border border-gray-200 dark:border-zinc-800 rounded-lg bg-gray-50 dark:bg-zinc-900/50">
              <div class="text-sm text-gray-700 font-mono dark:text-zinc-300">
                <div class="text-gray-500 dark:text-zinc-500">
                  // Custom sequence detection logic
                </div>
                <div><span class="text-purple-400">export function</span> <span class="text-blue-400">useMagicSequence</span>(keys: <span class="text-yellow-400">string[]</span>) {</div>
                <div>  <span class="text-purple-400">const</span> sequenceIndex = <span class="text-blue-400">ref</span>(<span class="text-orange-400">0</span>)</div>
                <div>  <span class="text-purple-400">const</span> success = <span class="text-blue-400">ref</span>(<span class="text-orange-400">false</span>)</div>
                <div class="mt-2">
                  <span class="text-gray-500 dark:text-zinc-500">// Watch for key presses and advance sequence</span>
                </div>
                <div>  <span class="text-blue-400">watch</span>(current, () => {</div>
                <div>    <span class="text-purple-400">if</span> (current.has(targetKey)) {</div>
                <div>      sequenceIndex.value++</div>
                <div>    } <span class="text-purple-400">else if</span> (wrongKey) {</div>
                <div>      sequenceIndex.value = <span class="text-orange-400">0</span> <span class="text-zinc-500">// Reset on wrong key</span></div>
                <div>    }</div>
                <div>  })</div>
                <div>}</div>
              </div>
            </div>
            <p class="mb-4" text-secondary>
              Our state machine handles these edge cases:
            </p>
            <ul class="mb-4 list-disc list-inside space-y-2" text-secondary>
              <li><strong>Partial sequences:</strong> Tracks progress through multi-key combinations</li>
              <li><strong>Reset conditions:</strong> Wrong key, timeout, or successful completion</li>
              <li><strong>Key repeat:</strong> Prevents duplicate triggers from held keys</li>
              <li><strong>Overlapping sequences:</strong> Handles when sequences share prefixes</li>
            </ul>
          </div>

          <!-- Challenge 4 -->
          <div>
            <h3 class="text-xl font-semibold mb-4 flex gap-3 items-center" text-primary>
              <div class="border border-rose-500/30 rounded-lg bg-rose-500/20 flex h-8 w-8 items-center justify-center">
                <div class="i-carbon-ibm-watson-tone-analyzer text-rose-400 h-4 w-4" />
              </div>
              Command Registry & Discoverability
            </h3>
            <p class="mb-4" text-secondary>
              The final piece: making shortcuts discoverable and manageable at scale. Rather than scattered
              event listeners, we centralize everything in a typed command registry.
            </p>
            <div class="mb-4 p-4 border border-gray-200 dark:border-zinc-800 rounded-lg bg-gray-50 dark:bg-zinc-900/50">
              <div class="text-sm text-gray-700 font-mono dark:text-zinc-300">
                <div class="text-gray-500 dark:text-zinc-500">
                  // Centralized command registry
                </div>
                <div><span class="text-purple-400">interface</span> <span class="text-yellow-400">KeyboardShortcut</span> {</div>
                <div>  id: <span class="text-green-400">string</span></div>
                <div>  name: <span class="text-green-400">string</span></div>
                <div>  description?: <span class="text-green-400">string</span></div>
                <div>  shortcut: <span class="text-green-400">string[]</span></div>
                <div>  onActivate: () => <span class="text-green-400">void</span></div>
                <div>}</div>
              </div>
            </div>
            <p text-secondary>
              This architecture enables powerful features like searchable command palettes, automatic help generation,
              and conflict detection—all from a single source of truth.
            </p>
          </div>

          <!-- Performance Note -->
          <div class="bg-gradient-to-r p-6 border border-gray-200 rounded-lg from-blue-500/10 to-purple-500/10 dark:border-zinc-800">
            <h4 class="text-lg font-semibold mb-3 flex gap-2 items-center" text-primary>
              <div class="i-carbon-dashboard text-blue-400 h-5 w-5" />
              Performance Considerations
            </h4>
            <p class="text-sm" text-secondary>
              Our implementation adds virtually zero runtime overhead. VueUse's reactive system only triggers
              watchers when relevant keys change, and our sequence detection uses efficient state tracking
              instead of polling. The result? Buttery-smooth shortcuts that work at 60fps.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Built With -->
    <div class="text-center">
      <h2 class="text-2xl font-bold mb-6" text-primary>
        Built With Modern Tools
      </h2>
      <div class="text-sm flex flex-wrap gap-6 justify-center" text-secondary>
        <div class="flex gap-2 items-center">
          <div class="rounded bg-green-500 h-4 w-4" />
          Nuxt 3
        </div>
        <div class="flex gap-2 items-center">
          <div class="rounded bg-blue-500 h-4 w-4" />
          TypeScript
        </div>
        <div class="flex gap-2 items-center">
          <div class="rounded bg-purple-500 h-4 w-4" />
          VueUse
        </div>
        <div class="flex gap-2 items-center">
          <div class="rounded bg-yellow-500 h-4 w-4" />
          UnoCSS
        </div>
        <div class="flex gap-2 items-center">
          <div class="rounded bg-red-500 h-4 w-4" />
          Linear Design System
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="bg-gradient-to-r mt-16 p-8 text-center border border-gray-200 rounded-2xl from-teal-500/10 to-purple-500/10 dark:border-zinc-800">
      <h2 class="text-2xl font-bold mb-4" text-primary>
        Ready to Get Started?
      </h2>
      <p class="mb-6" text-secondary>
        Try pressing <kbd kbd-key>⌘K</kbd> right now to experience the magic yourself!
      </p>
      <button
        class="mx-auto btn"
        @click="openCommandPalette"
      >
        Open Command Palette
      </button>
    </div>
  </div>
</template>
