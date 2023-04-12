<script lang="ts">
  export let open: boolean = false
  export let withTip: boolean = false
  export let placement: PopoverPlacement = 'top'

  const placementClass = `spectrum-Popover--${placement.replace(' ', '-')}`
  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div
  class="spectrum-Popover {placementClass} {additionalClasses}"
  class:is-open={open}
  class:spectrum-Popover--withTip={withTip}
  {...rest}
>
  <slot />
</div>

<style>
  @import '@spectrum-css/popover';
</style>
