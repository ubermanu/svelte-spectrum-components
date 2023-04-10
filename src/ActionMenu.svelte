<script lang="ts">
  import ActionButton from './ActionButton.svelte'
  import Menu from './Menu.svelte'
  import Popover from './Popover.svelte'

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
<Popover {open} {placement}>
  <Menu on:select={handleSelect}>
    <slot />
  </Menu>
</Popover>

<style>
  @import '@spectrum-css/actionbutton/dist/index-vars.css';
</style>
