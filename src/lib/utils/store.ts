import type { Readable } from 'svelte/store'

/**
 * Subscribe to a store, but only after the first update.
 *
 * @param store
 * @param callback
 */
export const subscribeLater = <T>(
  store: Readable<T>,
  callback: (value: T) => void
) => {
  let initialized = false
  return store.subscribe((value) => {
    if (initialized) {
      callback(value)
    } else {
      initialized = true
    }
  })
}
