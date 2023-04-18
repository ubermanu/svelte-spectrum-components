<script lang="ts">
  import Cross75 from 'svelte-spectrum-icons/ui/CrossMedium.svelte'
  import { Icon } from '$lib'
  import type { TShirtSize } from '$lib/spectrum/types'

  export let size: TShirtSize = 'M'

  export let staticWhite: boolean = false
  export let staticBlack: boolean = false

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<button
  class="spectrum-CloseButton spectrum-CloseButton--size{size} {additionalClasses}"
  class:spectrum-CloseButton--staticWhite={staticWhite}
  class:spectrum-CloseButton--staticBlack={staticBlack}
  {...rest}
  on:click
>
  <Icon
    icon={Cross75}
    {size}
    class="spectrum-CloseButton-UIIcon spectrum-UIIcon-Cross75"
  />
</button>
