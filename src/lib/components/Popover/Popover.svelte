<script lang="ts">
  import type { PopoverPlacement } from '$lib/spectrum/types'
  import { clickOutside } from '$lib/actions/clickOutside'

  export let open: boolean = false
  export let withTip: boolean = false
  export let placement: PopoverPlacement = 'top'

  /** Whether the popover should be closed when the user clicks outside of it. */
  export let fixed: boolean = false

  const placementClass = `spectrum-Popover--${placement.replace(' ', '-')}`
  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div
  class="spectrum-Popover {placementClass} {additionalClasses}"
  class:is-open={open}
  class:spectrum-Popover--withTip={withTip}
  use:clickOutside={{ enabled: open && !fixed, cb: () => (open = false) }}
  {...rest}
>
  <slot />
</div>
