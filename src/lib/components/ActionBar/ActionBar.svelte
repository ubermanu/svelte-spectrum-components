<script lang="ts">
  import { setContext, createEventDispatcher } from 'svelte'
  import { CloseButton, Popover } from '$lib'

  export let open: boolean = false
  export let emphasized: boolean = false
  export let flexible: boolean = false

  const dispatch = createEventDispatcher()

  function close() {
    open = false
  }

  setContext('actionBar', { emphasized, open, close })
</script>

<div
  class="spectrum-ActionBar"
  class:spectrum-ActionBar--emphasized={emphasized}
  class:spectrum-ActionBar--flexible={flexible}
  class:is-open={open}
  {...$$restProps}
>
  <Popover class="spectrum-ActionBar-popover" bind:open fixed>
    <CloseButton
      on:click={() => dispatch('dismiss')}
      staticWhite={emphasized}
    />
    <slot />
  </Popover>
</div>
