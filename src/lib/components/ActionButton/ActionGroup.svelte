<script lang="ts">
  import type { TShirtSize } from '$lib/spectrum/types'
  import { setContext } from 'svelte'

  export let size: TShirtSize = 'M'
  export let orientation: 'horizontal' | 'vertical' = 'horizontal'
  export let compact: boolean = false
  export let quiet: boolean = true
  export let justified: boolean = false

  // Pass the action group's props to the action button children
  setContext('actionGroup', { size, quiet })
</script>

<div
  class="spectrum-ActionGroup spectrum-ActionGroup--size{size}"
  class:spectrum-ActionGroup--compact={compact}
  class:spectrum-ActionGroup--quiet={quiet}
  class:spectrum-ActionGroup--vertical={orientation === 'vertical'}
  class:spectrum-ActionGroup--justified={justified}
>
  <slot />
</div>
