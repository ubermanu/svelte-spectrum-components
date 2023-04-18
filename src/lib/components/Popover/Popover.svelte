<script lang="ts">
  import type { PopoverPlacement } from '$lib/spectrum/types'
  import { clickOutside } from '$lib/actions/clickOutside'
  import { createPopper, type Placement } from '@popperjs/core'

  export let open: boolean = false
  export let withTip: boolean = false
  export let placement: PopoverPlacement = 'top'
  export let attachTo: HTMLElement | null = null
  export let offset: number = 8

  /** Whether the popover should be closed when the user clicks outside of it. */
  export let fixed: boolean = false

  const placementClass = `spectrum-Popover--${placement.replace(' ', '-')}`
  const { class: additionalClasses = '', ...rest } = $$restProps

  let popper, el: HTMLDivElement

  $: {
    popper?.destroy()

    if (attachTo) {
      const modifiers = []

      // TODO: Fix the offset for all the placements
      if (placement === 'top' || placement === 'bottom') {
        modifiers.push({
          name: 'offset',
          options: {
            offset: [0, offset],
          },
        })
      } else {
        modifiers.push({
          name: 'offset',
          options: {
            offset: [offset, 0],
          },
        })
      }

      // TODO: Convert the Spectrum placements to Popper placements
      popper = createPopper(attachTo, el, {
        placement: placement.replace(' ', '-') as Placement,
        modifiers,
      })
    }
  }
</script>

<div
  bind:this={el}
  class="spectrum-Popover {placementClass} {additionalClasses}"
  class:is-open={open}
  class:spectrum-Popover--withTip={withTip}
  use:clickOutside={{ enabled: open && !fixed, cb: () => (open = false) }}
  {...rest}
>
  <slot />
</div>
