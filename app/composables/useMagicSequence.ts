import type { ComputedRef } from 'vue'

/**
 * A composable that listens for a specific sequence of key presses.
 * @param keys An ordered array of keys to watch for.
 */
export function useMagicSequence(keys: string[]): ComputedRef<boolean> {
  const { current } = useMagicKeys()
  const success = ref(false)
  const sequenceIndex = ref(0)
  let isKeyDown = false

  watch(current, () => {
    const targetKey = keys[sequenceIndex.value]

    // Reset success state on each key event
    if (success.value)
      success.value = false

    if (!targetKey)
      return

    if (current.has(targetKey) && !isKeyDown) {
      isKeyDown = true
      sequenceIndex.value++
    }
    else if (sequenceIndex.value > 0 && keys[sequenceIndex.value - 1] && !current.has(keys[sequenceIndex.value - 1]!) && isKeyDown) {
      isKeyDown = false
    }
    else if (current.size > 0 && !current.has(targetKey)) {
      sequenceIndex.value = 0
    }

    if (sequenceIndex.value === keys.length) {
      success.value = true
      sequenceIndex.value = 0
    }
  })

  return computed(() => success.value)
}
