import type { Action } from 'svelte/action'

export interface ClickOutsideConfig {
  enabled: boolean
  cb: (node: HTMLElement) => void
}

/**
 * Call callback when user clicks outside a given element
 *
 * @example
 *   ```svelte
 *   <div use:clickOutside={{ enabled: open, cb: () => open = false }}>
 *   ```
 *   Demo: https://svelte.dev/repl/dae848c2157e48ab932106779960f5d5?version=3.19.2
 *
 * @package svelte-actions
 */
export const clickOutside: Action = (
  node: HTMLElement,
  config: ClickOutsideConfig
) => {
  function handler(e: MouseEvent) {
    if (!node.contains(e.target as Node) && node != (e.target as Node)) {
      config.cb(node)
    }
  }

  function toggleHandler(enabled: boolean) {
    // A timeout is needed to prevent the click event from bubbling up to the
    // document and triggering the handler.
    setTimeout(() => {
      ;(enabled ? document.addEventListener : document.removeEventListener)(
        'click',
        handler
      )
    })
  }

  toggleHandler(config.enabled)

  return {
    update(params) {
      toggleHandler((config = params).enabled)
    },
    destroy() {
      toggleHandler(false)
    },
  }
}
