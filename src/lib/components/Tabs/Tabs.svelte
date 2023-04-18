<script lang="ts">
  import type { TShirtSize } from '$lib/spectrum/types'
  import { onMount, setContext, createEventDispatcher, tick } from 'svelte'
  import { writable } from 'svelte/store'
  import SelectionIndicator from './SelectionIndicator.svelte'

  export let size: TShirtSize = 'M'
  export let orientation: 'horizontal' | 'vertical' = 'horizontal'
  export let quiet: boolean = false
  export let emphasized: boolean = false
  export let compact: boolean = false

  const tabs = writable([])
  const selectedTabId = writable('')

  const dispatch = createEventDispatcher()

  /** Selects a tab by id, and dispatches a select event */
  const selectTab = (id: string) => {
    selectedTabId.set(id)
    dispatch('select', { id })
  }

  onMount(async () => {
    await tick()

    // Select the first tab if none is selected
    if (!$selectedTabId && $tabs.length > 0) {
      $selectedTabId = $tabs[0]?.id
    }
  })

  setContext('tabs', { selectedTabId, selectTab, orientation, tabs })

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div
  role="tablist"
  class="spectrum-Tabs spectrum-Tabs--size{size} spectrum-Tabs--{orientation} {additionalClasses}"
  class:spectrum-Tabs--quiet={quiet || compact}
  class:spectrum-Tabs--emphasized={emphasized}
  class:spectrum-Tabs--compact={compact}
  {...rest}
>
  <slot />
  <SelectionIndicator />
</div>
