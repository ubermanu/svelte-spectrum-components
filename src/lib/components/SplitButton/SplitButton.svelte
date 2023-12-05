<script lang="ts">
  import type { TShirtSize } from '$lib/spectrum/types'
  import { Button, Icon } from '$lib'
  import { Chevron100 } from 'svelte-spectrum-icons'
  import { createEventDispatcher } from 'svelte'

  export let size: TShirtSize = 'M'
  export let variant: 'primary' | 'secondary' | 'accent' = 'primary'
  export let placement: 'left' | 'right' = 'right'
  export let treatment: 'fill' | 'outline' = 'fill'

  const dispatch = createEventDispatcher()
</script>

<div
  class="spectrum-SplitButton"
  class:spectrum-SplitButton--left={placement === 'left'}
>
  {#if placement === 'left'}
    <Button
      {size}
      {variant}
      {treatment}
      class="spectrum-SplitButton-trigger"
      on:click={() => dispatch('trigger')}
    >
      <Icon
        slot="icon"
        icon={Chevron100}
        class="spectrum-UIIcon-ChevronDown100 spectrum-SplitButton-icon"
      />
    </Button>
  {/if}
  <Button
    {size}
    {variant}
    {treatment}
    class="spectrum-SplitButton-action"
    on:click
  >
    Split Button
  </Button>
  {#if placement === 'right'}
    <Button
      {size}
      {variant}
      {treatment}
      class="spectrum-SplitButton-trigger"
      on:click={() => dispatch('trigger')}
    >
      <Icon
        slot="icon"
        icon={Chevron100}
        class="spectrum-UIIcon-ChevronDown100 spectrum-SplitButton-icon"
      />
    </Button>
  {/if}
</div>
