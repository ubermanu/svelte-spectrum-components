<script lang="ts">
  import { getContext } from 'svelte'
  import type { TShirtSize } from '$lib/spectrum/types'

  export let variant: 'primary' | 'secondary' | 'accent' | 'negative' = 'accent'

  export let size: TShirtSize = 'M'

  export let treatment: 'fill' | 'outline' = 'fill'

  export let staticWhite: boolean = false
  export let staticBlack: boolean = false

  const buttonGroup = getContext('buttonGroup')

  // If we're in a button group, inherit the size from the group
  $: if (buttonGroup) {
    size = buttonGroup.size
  }

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<button
  class="spectrum-Button spectrum-Button--{treatment} spectrum-Button--{variant} spectrum-Button--size{size} {additionalClasses}"
  class:spectrum-Button--staticWhite={staticWhite}
  class:spectrum-Button--staticBlack={staticBlack}
  class:spectrum-ButtonGroup-item={buttonGroup}
  {...rest}
  on:click
>
  <slot name="icon" />
  <span class="spectrum-Button-label"><slot /></span>
</button>
