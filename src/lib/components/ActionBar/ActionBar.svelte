<script lang="ts">
  import { CloseButton, Popover } from '$lib'
  import { setContext } from 'svelte'

  export let open: boolean = false
  export let emphasized: boolean = false

  function close() {
    open = false
  }

  setContext('actionBar', { emphasized, close })
</script>

<div
  class="spectrum-ActionBar"
  class:spectrum-ActionBar--emphasized={emphasized}
  class:is-open={open}
  {...$$restProps}
>
  <Popover class="spectrum-ActionBar-popover" bind:open fixed>
    <CloseButton on:click={close} staticWhite={emphasized} />
    <slot />
  </Popover>
</div>
