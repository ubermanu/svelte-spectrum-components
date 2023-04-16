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
</script>

<ActionButton on:click={toggle} {...$$restProps} selected={open}>
  {label}
</ActionButton>
<br />
<Popover bind:open {placement}>
  <Menu on:select={handleSelect}>
    <slot />
  </Menu>
</Popover>
