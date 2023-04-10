<script lang="ts">
  import { getContext, onMount } from 'svelte'
  import { v4 as uuid } from '@lukeed/uuid'
  import Icon from './Icon.svelte'
  import Checkmark100 from 'svelte-spectrum-icons/ui/CheckmarkSmall.svelte'

  const id = uuid()

  export let label: string = ''
  export let value: string = ''
  export let disabled: boolean = false
  export let selected: boolean = false

  const { readonly, items, selectedItems } = getContext('menu')

  function toggle() {
    if (!selected) {
      selected = true
      $selectedItems = [...$selectedItems, id]
    } else {
      selected = false
      $selectedItems = [...$selectedItems.filter((item) => item !== id)]
    }
  }

  function handleClick(e) {
    if (!disabled && !readonly) {
      e.preventDefault()
      toggle()
    }
  }

  onMount(() => {
    $items = [
      ...$items,
      {
        id,
        label,
        value,
      },
    ]
    if (selected) {
      $selectedItems = [...$selectedItems, id]
    }
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
  <span class="spectrum-Menu-itemLabel">{label}</span>
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
