<script lang="ts">
  import ActionButton from './ActionButton.svelte'
  import Popover from './Popover.svelte'
  import Info18 from 'svelte-spectrum-icons/workflow/Info18.svelte'

  export let heading: string = ''
  export let open: boolean = false
  export let placement: PopoverPlacement = 'bottom start'

  function handleClick() {
    open = !open
  }
</script>

<div class="spectrum-ContextualHelp">
  <ActionButton
    class="spectrum-ContextualHelp-button"
    size="XS"
    icon={Info18}
    on:click={handleClick}
  />
  <Popover
    class="spectrum-ContextualHelp-popover"
    role="presentation"
    {placement}
    {open}
  >
    <h2 class="spectrum-ContextualHelp-heading">{heading}</h2>
    <p class="spectrum-ContextualHelp-body">
      <slot />
    </p>
    <slot name="after" />
  </Popover>
  <div
    class="dummy-spacing"
    style="position: relative; height: 248px; min-width: 400px; max-width: 50%;"
  />
</div>

<style>
  @import '@spectrum-css/contextualhelp';
</style>
