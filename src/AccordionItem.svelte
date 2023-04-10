<script lang="ts">
  import { onMount, getContext } from 'svelte'
  import { v4 as uuid } from '@lukeed/uuid'
  import Icon from './Icon.svelte'
  import ChevronRight100 from 'svelte-spectrum-icons/ui/ChevronRightSmall.svelte'

  const id = uuid()

  export let open: boolean = false
  export let disabled: boolean = false
  export let label: string = ''

  const { openedItems, toggleItem } = getContext('accordion')

  onMount(() => {
    // If the item is open, add it to the list of opened items
    if (open) {
      $openedItems = [...$openedItems, id]
    }

    // Update the open state when the list of opened items changes
    openedItems.subscribe((items) => {
      open = items.includes(id)
    })
  })

  function handleClick() {
    if (disabled) return
    toggleItem(id)
  }
</script>

<div
  class="spectrum-Accordion-item"
  class:is-open={open}
  class:is-disabled={disabled}
  role="presentation"
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

<style>
  @import '@spectrum-css/accordion/dist/index-vars.css';
</style>
