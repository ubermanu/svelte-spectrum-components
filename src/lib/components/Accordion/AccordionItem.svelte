<script lang="ts">
  import { getContext } from 'svelte'
  import { v4 as uuid } from '@lukeed/uuid'
  import { Icon } from '$lib'
  import ChevronRight100 from 'svelte-spectrum-icons/ui/ChevronRightSmall.svelte'
  import type { AccordionContext } from './context'

  const id = uuid()

  export let open: boolean = false
  export let disabled: boolean = false
  export let label: string = ''

  const { openedItems, ...accordion } = getContext(
    'accordion'
  ) as AccordionContext

  // If the item is open, add it to the list of opened items
  if (open) {
    accordion.openItem(id)
  }

  // Reflect the open state from the context
  $: open = $openedItems.includes(id)

  function handleClick() {
    if (disabled) return
    accordion.toggleItem(id)
  }

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div
  class="spectrum-Accordion-item {additionalClasses}"
  class:is-open={open}
  class:is-disabled={disabled}
  role="presentation"
  {...rest}
>
  <h3 class="spectrum-Accordion-itemHeading">
    <button
      class="spectrum-Accordion-itemHeader"
      type="button"
      id="{id}-header"
      aria-controls="{id}-content"
      aria-expanded={open}
      {disabled}
      on:click={handleClick}
      on:click
      on:keydown
      on:keyup
      on:keypress
    >
      {label}
    </button>
    <Icon
      icon={ChevronRight100}
      class="spectrum-UIIcon-ChevronRight100 spectrum-Accordion-itemIndicator"
    />
  </h3>

  <div
    class="spectrum-Accordion-itemContent"
    role="region"
    id="{id}-content"
    aria-labelledby="{id}-header"
  >
    <slot />
  </div>
</div>
