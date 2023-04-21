<script lang="ts">
  import { createEventDispatcher, type SvelteComponent } from 'svelte'
  import type { TShirtSize } from '$lib/spectrum/types'
  import { ClearButton, Icon } from '$lib'

  export let icon: SvelteComponent | null = null
  export let size: TShirtSize = 'S'
  export let selected: boolean = false
  export let disabled: boolean = false
  export let invalid: boolean = false
  export let emphasized: boolean = false
  export let removable: boolean = false

  const dispatch = createEventDispatcher()
</script>

<div
  class="spectrum-Tag spectrum-Tag--size{size}"
  class:is-emphasized={emphasized}
  class:is-selected={selected}
  class:is-disabled={disabled}
  class:is-invalid={invalid}
  tabindex="0"
  {...$$restProps}
>
  <slot name="icon">
    {#if icon}
      <Icon {icon} {size} class="spectrum-Tags-itemIcon" />
    {/if}
  </slot>
  <span class="spectrum-Tags-itemLabel">
    <slot />
  </span>
  {#if removable}
    <ClearButton
      size="M"
      class="spectrum-Tag-clearButton"
      tabindex="-1"
      on:click={() => dispatch('remove')}
    />
  {/if}
</div>
