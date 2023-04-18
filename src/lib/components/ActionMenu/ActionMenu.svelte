<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { ActionButton, Menu, Popover } from '$lib'
  import type { PopoverPlacement } from '$lib/spectrum/types'

  export let label: string = ''
  export let placement: PopoverPlacement = 'bottom'
  export let open: boolean = false

  function toggle() {
    open = !open
  }

  const dispatch = createEventDispatcher()

  // When a menu item is selected, close the popover and dispatch the event
  // TODO: Maybe this should be handled by the items themselves?
  function handleSelect(event: CustomEvent) {
    dispatch('select', event.detail)
    open = false
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
