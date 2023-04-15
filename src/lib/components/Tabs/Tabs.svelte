<script lang="ts">
  import type { TShirtSize } from '$lib/spectrum/types'
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'
  import SelectionIndicator from './SelectionIndicator.svelte'

  export let size: TShirtSize = 'M'
  export let orientation: 'horizontal' | 'vertical' = 'horizontal'
  export let quiet: boolean = false
  export let emphasized: boolean = false
  export let compact: boolean = false

  const selectedItem = writable('')

  const selectTab = (id: string) => {
    selectedItem.set(id)
  }

  setContext('tabs', { selectedItem, selectTab, orientation })
</script>

<div
  role="tablist"
  class="spectrum-Tabs spectrum-Tabs--size{size} spectrum-Tabs--{orientation}"
  class:spectrum-Tabs--quiet={quiet || compact}
  class:spectrum-Tabs--emphasized={emphasized}
  class:spectrum-Tabs--compact={compact}
>
  <slot />
  <SelectionIndicator />
</div>
