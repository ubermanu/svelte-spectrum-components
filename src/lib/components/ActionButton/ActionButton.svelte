<script lang="ts">
  import { getContext } from 'svelte'
  import type { SvelteComponent } from 'svelte'
  import CornerTriangle75 from 'svelte-spectrum-icons/ui/CornerTriangle.svelte'
  import { Icon } from '$lib'
  import type { TShirtSize } from '$lib/spectrum/types'

  export let icon: SvelteComponent | undefined = undefined

  export let size: TShirtSize = 'M'

  export const hold: boolean = false

  export let selected: boolean = false

  export let quiet: boolean = false

  export let emphasized: boolean = false

  export let staticWhite: boolean = false
  export let staticBlack: boolean = false

  const actionGroup = getContext('actionGroup')

  // Set quiet and size to match the action group if it exists
  $: if (actionGroup) {
    quiet = actionGroup.quiet
    size = actionGroup.size
  }

  const actionBar = getContext('actionBar')

  // Set as staticWhite if the action bar is emphasized
  if (actionBar && actionBar.emphasized) {
    staticWhite = true
  }

  export let button: HTMLButtonElement

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<button
  bind:this={button}
  class="spectrum-ActionButton spectrum-ActionButton--size{size} {additionalClasses}"
  class:spectrum-ActionButton--quiet={quiet}
  class:spectrum-ActionButton--emphasized={emphasized}
  class:spectrum-ActionButton--staticWhite={staticWhite}
  class:spectrum-ActionButton--staticBlack={staticBlack}
  class:is-selected={selected}
  class:spectrum-ActionGroup-item={actionGroup}
  {...rest}
  on:click
>
  {#if hold}
    <Icon
      icon={CornerTriangle75}
      class="spectrum-UIIcon-CornerTriangle75 spectrum-ActionButton-icon"
    />
  {/if}
  {#if icon}
    <Icon {icon} {size} class="spectrum-ActionButton-icon" />
  {/if}
  <span class="spectrum-ActionButton-label"><slot /></span>
</button>
