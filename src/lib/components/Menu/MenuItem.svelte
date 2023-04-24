<script lang="ts">
  import { getContext, onMount, type SvelteComponent } from 'svelte'
  import { v4 as uuid } from '@lukeed/uuid'
  import { Icon } from '$lib'
  import Checkmark100 from 'svelte-spectrum-icons/ui/CheckmarkSmall.svelte'

  const id = uuid()

  /** Attach the label to get its inner text */
  let label

  export let value: string = ''
  export let disabled: boolean = false
  export let selected: boolean = false

  export let icon: SvelteComponent | null = null

  const { selectable, items, selectedItems, toggleItem, dispatch } =
    getContext('menu')

  let el

  onMount(() => {
    const itemData = {
      id,
      el,
      label: label.innerHTML,
      value,
    }

    $items = [...$items, itemData]

    if (selected) {
      $selectedItems = [...$selectedItems, id]
    }

    const unsub = selectedItems.subscribe((items) => {
      selected = items.includes(id)
    })

    return () => {
      $items = $items.filter((item) => item.id !== id)
      $selectedItems = $selectedItems.filter((item) => item !== id)
      unsub()
    }
  })

  /**
   * Toggles the selected state of the item if the menu is selectable.
   * Otherwise, dispatches a select event with the item as the payload.
   *
   * @param {MouseEvent} e
   */
  function handleClick(e: MouseEvent) {
    if (disabled) {
      e.preventDefault()
      return
    }

    if (selectable) {
      toggleItem(id)
    } else {
      dispatch('select', { items: $items.filter((item) => item.id === id) })
    }
  }

  /**
   * Handles keyboard navigation for the menu.
   *
   * @param {KeyboardEvent} e
   */
  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick(e as MouseEvent)
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const index = $items.findIndex((item) => item.id === id)
      const prevItem = $items[index - 1]
      prevItem?.el?.focus()
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const index = $items.findIndex((item) => item.id === id)
      const nextItem = $items[index + 1]
      nextItem?.el?.focus()
    }

    if (e.key === 'Home') {
      e.preventDefault()
      $items[0]?.el?.focus()
    }

    if (e.key === 'End') {
      e.preventDefault()
      $items[$items.length - 1]?.el?.focus()
    }
  }

  const menuGroup = getContext('menuGroup')
  const role = menuGroup ? 'option' : 'menuitem'

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<li
  bind:this={el}
  class="spectrum-Menu-item {additionalClasses}"
  {role}
  class:is-disabled={disabled}
  class:is-selected={selected}
  aria-disabled={disabled || undefined}
  tabindex={disabled ? -1 : 0}
  on:click={handleClick}
  on:click
  on:keydown={handleKeyDown}
  {...rest}
>
  {#if icon}
    <Icon {icon} class="spectrum-Menu-itemIcon" />
  {/if}
  <span class="spectrum-Menu-itemLabel" bind:this={label}><slot /></span>
  {#if selected}
    <Icon
      icon={Checkmark100}
      class="spectrum-UIIcon-Checkmark100 spectrum-Menu-checkmark spectrum-Menu-itemIcon"
    />
  {/if}
</li>
