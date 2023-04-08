<script lang="ts">
  import '@spectrum-css/actionbar/dist/index-vars.css'
  import CloseButton from './CloseButton.svelte'

  export let open: boolean = false
  export let emphasized: boolean = false

  function close() {
    open = false
  }
</script>

<div
  class="spectrum-ActionBar"
  class:spectrum-ActionBar--emphasized={emphasized}
  class:is-open={open}
>
  <div class="spectrum-Popover spectrum-ActionBar-popover is-open">
    <CloseButton on:click={close} />
    <slot />
  </div>
</div>
