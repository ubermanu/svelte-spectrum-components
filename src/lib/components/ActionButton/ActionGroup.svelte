<script lang="ts" context="module">
  export type ActionGroupContext = {
    size: import('$lib/spectrum/types').TShirtSize
    quiet: boolean
  }
</script>

<script lang="ts">
  import type { Orientation, TShirtSize } from '$lib/spectrum/types'
  import { setContext } from 'svelte'

  export let size: TShirtSize = 'M'
  export let orientation: Orientation = 'horizontal'
  export let compact: boolean = false
  export let quiet: boolean = true
  export let justified: boolean = false

  // Pass the action group's props to the action button children
  setContext<ActionGroupContext>('actionGroup', { size, quiet })
</script>

<div
  class="spectrum-ActionGroup"
  class:spectrum-ActionGroup--sizeXS={size === 'XS'}
  class:spectrum-ActionGroup--sizeS={size === 'S'}
  class:spectrum-ActionGroup--sizeM={size === 'M'}
  class:spectrum-ActionGroup--sizeL={size === 'L'}
  class:spectrum-ActionGroup--sizeXL={size === 'XL'}
  class:spectrum-ActionGroup--compact={compact}
  class:spectrum-ActionGroup--quiet={quiet}
  class:spectrum-ActionGroup--vertical={orientation === 'vertical'}
  class:spectrum-ActionGroup--justified={justified}
>
  <slot />
</div>
