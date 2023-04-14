<script lang="ts">
  import { setContext } from 'svelte'

  export let size: TShirtSize = 'M'
  export let orientation: 'horizontal' | 'vertical' = 'horizontal'

  setContext('buttonGroup', { size, orientation })

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div
  class="spectrum-ButtonGroup spectrum-ButtonGroup--size{size} {additionalClasses}"
  class:spectrum-ButtonGroup--vertical={orientation === 'vertical'}
  {...rest}
>
  <slot {size} />
</div>
