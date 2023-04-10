<script lang="ts">
  import { getContext, onMount } from 'svelte'
  import { v4 as uuid } from '@lukeed/uuid'
  import Icon from './Icon.svelte'
  import Checkmark100 from 'svelte-spectrum-icons/ui/CheckmarkSmall.svelte'

  const id = uuid()

  /** Attach the label to get its inner text */
  let label

  export let value: string = ''
  export let disabled: boolean = false
  export let selected: boolean = false

  const { selectable, items, selectedItems, toggleItem } = getContext('menu')

  function handleClick(e) {
    if (!disabled && selectable) {
      e.preventDefault()
      toggleItem(id)
    }
  }

  onMount(() => {
    const itemData = {
      id,
      label: label.innerHTML,
      value,
    }

    $items = [...$items, itemData]

    if (selected) {
      $selectedItems = [...$selectedItems, id]
    }

    selectedItems.subscribe((items) => {
      selected = items.includes(id)
    })
  })
</script>

<li
  class="spectrum-Menu-item"
  role="menuitem"
  class:is-disabled={disabled}
  class:is-selected={selected}
  aria-disabled={disabled || undefined}
  tabindex={disabled ? -1 : 0}
  on:click={handleClick}
>
  <span class="spectrum-Menu-itemLabel" bind:this={label}><slot /></span>
  {#if selected}
    <Icon
      icon={Checkmark100}
      class="spectrum-UIIcon-Checkmark100 spectrum-Menu-checkmark spectrum-Menu-itemIcon"
    />
  {/if}
</li>

<style>
  @import '@spectrum-css/menu/dist/index-vars.css';
</style>
