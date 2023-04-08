<script lang="ts">
  import '@spectrum-css/actionmenu/dist/index-vars.css'
  import '@spectrum-css/popover/dist/index-vars.css'
  import ActionButton from './ActionButton.svelte'
  import Menu from './Menu.svelte'

  export let label: string = ''

  export let open: boolean = false

  function toggle() {
    open = !open
  }
</script>

<ActionButton on:click={toggle} {...$$restProps} selected={open}>
  {label}
</ActionButton>
<br />
<div class="spectrum-Popover spectrum-Popover--bottom" class:is-open={open}>
  <Menu>
    <slot />
  </Menu>
</div>
