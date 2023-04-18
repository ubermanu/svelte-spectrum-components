<script lang="ts">
  import { ActionButton, Menu, Popover } from '$lib'
  import type { PopoverPlacement } from '$lib/spectrum/types'

  export let label: string = ''
  export let placement: PopoverPlacement = 'bottom'
  export let open: boolean = false

  function toggle() {
    open = !open
  }

  function handleSelect(event: CustomEvent) {
    // open = false
    console.log(event.detail)
  }

  // The reference to the action button element (for positioning the popover)
  let button: HTMLButtonElement
</script>

<ActionButton bind:button on:click={toggle} {...$$restProps} selected={open}>
  {label}
</ActionButton>

<Popover bind:open {placement} attachTo={button}>
  <Menu on:select={handleSelect}>
    <slot />
  </Menu>
</Popover>
