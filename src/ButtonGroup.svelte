<script lang="ts">
  export let size: TShirtSize = 'M'
  export let orientation: 'horizontal' | 'vertical' = 'horizontal'

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div
  class="spectrum-ButtonGroup spectrum-ButtonGroup--size{size} {additionalClasses}"
  class:spectrum-ButtonGroup--vertical={orientation === 'vertical'}
  {...rest}
>
  <slot />
</div>

<style>
  @import '@spectrum-css/buttongroup';
</style>
