<script lang="ts">
  import { ActionButton, Popover } from '$lib'
  import type { PopoverPlacement } from '$lib/spectrum/types'
  import { Info18 } from 'svelte-spectrum-icons/workflow'

  export let heading: string = ''
  export let open: boolean = false
  export let placement: PopoverPlacement = 'bottom start'

  function handleClick() {
    open = !open
  }

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div class="spectrum-ContextualHelp {additionalClasses}" {...rest}>
  <ActionButton
    type="button"
    class="spectrum-ContextualHelp-button"
    size="XS"
    icon={Info18}
    on:click={handleClick}
  />
  <Popover
    class="spectrum-ContextualHelp-popover"
    role="presentation"
    {placement}
    bind:open
  >
    <h2 class="spectrum-ContextualHelp-heading">{heading}</h2>
    <p class="spectrum-ContextualHelp-body">
      <slot />
    </p>
    <slot name="after" />
  </Popover>
</div>
