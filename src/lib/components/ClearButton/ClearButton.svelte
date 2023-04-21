<script lang="ts">
  import type { TShirtSize } from '$lib/spectrum/types'
  import { Icon } from '$lib'
  import { CrossSmall as Cross } from 'svelte-spectrum-icons/ui'

  export let size: TShirtSize = 'M'
  export let overBackground: boolean = false

  // FIXME: The svg icon has the wrong size
  const iconSizeMap = {
    S: 'spectrum-css-icon-Cross75',
    M: 'spectrum-css-icon-Cross100',
    L: 'spectrum-css-icon-Cross200',
    XL: 'spectrum-css-icon-Cross300',
  }

  const iconClassName = iconSizeMap[size] ?? ''

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<button
  class="spectrum-ClearButton spectrum-ClearButton--size{size} {additionalClasses}"
  class:spectrum-ClearButton--overBackground={overBackground}
  {...rest}
  on:click
>
  <div class="spectrum-ClearButton-fill">
    <Icon icon={Cross} {size} class="spectrum-Icon {iconClassName}" />
  </div>
</button>
