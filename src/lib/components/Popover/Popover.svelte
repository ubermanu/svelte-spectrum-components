<script lang="ts">
  import { clickOutside } from '$lib/actions/clickOutside'

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
  use:clickOutside={{ enabled: open, cb: () => (open = false) }}
  {...rest}
>
  <slot />
</div>
