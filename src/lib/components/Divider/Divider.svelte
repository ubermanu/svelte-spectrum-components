<script lang="ts">
  import type { TShirtSize } from '$lib/spectrum/types'
  import { getContext } from 'svelte'

  export let size: TShirtSize = 'M'
  export let staticWhite: boolean = false
  export let staticBlack: boolean = false
  export let vertical: boolean = false

  const menu = getContext('menu')

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

{#if menu}
  <li
    role="separator"
    class="spectrum-Divider spectrum-Menu-divider spectrum-Divider--size{size} {additionalClasses}"
    class:spectrum-Divider--staticWhite={staticWhite}
    class:spectrum-Divider--staticBlack={staticBlack}
    class:spectrum-Divider--vertical={vertical}
    {...rest}
  />
{:else}
  <hr
    class="spectrum-Divider spectrum-Divider--size{size} {additionalClasses}"
    class:spectrum-Divider--staticWhite={staticWhite}
    class:spectrum-Divider--staticBlack={staticBlack}
    class:spectrum-Divider--vertical={vertical}
    {...rest}
  />
{/if}

<style global>
  .spectrum-Divider--vertical {
    align-self: stretch;
    height: auto;
  }
</style>
