<script lang="ts">
  import { getContext, type SvelteComponent } from 'svelte'
  import type { TShirtSize } from '$lib/spectrum/types'
  import type { ActionBarContext } from '$lib/components/ActionBar/ActionBar.svelte'
  import type { ActionGroupContext } from './ActionGroup.svelte'
  import Icon from '$lib/components/Icon/Icon.svelte'
  import { CornerTriangle100 } from 'svelte-spectrum-icons'

  export let icon: SvelteComponent | undefined = undefined
  export let size: TShirtSize = 'M'

  export let hold: boolean = false
  export let selected: boolean = false
  export let quiet: boolean = false
  export let emphasized: boolean = false

  export let staticWhite: boolean = false
  export let staticBlack: boolean = false

  const actionGroup = getContext<ActionGroupContext>('actionGroup')

  // Set quiet and size to match the action group if it exists
  $: if (actionGroup) {
    quiet = actionGroup.quiet
    size = actionGroup.size
  }

  const actionBar = getContext<ActionBarContext>('actionBar')

  // Set as staticWhite if the action bar is emphasized
  if (actionBar && actionBar.emphasized) {
    staticWhite = true
  }

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<button
  class="spectrum-ActionButton {additionalClasses}"
  class:spectrum-ActionButton--sizeXS={size === 'XS'}
  class:spectrum-ActionButton--sizeS={size === 'S'}
  class:spectrum-ActionButton--sizeM={size === 'M'}
  class:spectrum-ActionButton--sizeL={size === 'L'}
  class:spectrum-ActionButton--sizeXL={size === 'XL'}
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
      icon={CornerTriangle100}
      class="spectrum-UIIcon-CornerTriangle75 spectrum-ActionButton-hold"
    />
  {/if}
  {#if icon}
    <Icon {icon} {size} class="spectrum-ActionButton-icon" />
  {/if}
  {#if $$slots.default}
    <span class="spectrum-ActionButton-label">
      <slot />
    </span>
  {/if}
</button>
