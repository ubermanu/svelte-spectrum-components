<script lang="ts">
  import {
    createEventDispatcher,
    getContext,
    type SvelteComponent,
  } from 'svelte'
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

  const tagGroup = getContext('tagGroup')

  /** The tag is removed when the user presses the backspace or delete key. */
  function handleKeyDown(e: KeyboardEvent) {
    if (removable && ['Backspace', 'Delete'].includes(e.key)) {
      e.preventDefault()
      dispatch('remove')
    }
  }

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div
  class="spectrum-Tag spectrum-Tag--size{size} {additionalClasses}"
  class:is-emphasized={emphasized}
  class:is-selected={selected}
  class:is-disabled={disabled}
  class:is-invalid={invalid}
  class:spectrum-Tag--removable={removable}
  class:spectrum-TagGroup-item={tagGroup}
  tabindex="0"
  role={tagGroup ? 'listitem' : null}
  {...rest}
  on:keydown={handleKeyDown}
  on:click
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
