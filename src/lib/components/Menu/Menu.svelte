<script lang="ts">
  import { setContext, createEventDispatcher } from 'svelte'
  import { writable } from 'svelte/store'

  /** Whether the menu is selectable. */
  export let selectable: boolean = false

  /** Whether multiple items can be selected at once. */
  export let multiple: boolean = false

  /** The items in the menu. */
  const items = writable([])
  const selectedItems = writable([])

  /**
   * Pushes or removes an item from the selected items array. If the menu is
   * multiple, the item will be added or removed. If the menu is not multiple,
   * the item will be added or removed and all other items will be removed.
   *
   * @param id
   */
  function toggleItem(id: string) {
    if (!selectable) {
      return
    }

    const selected = $selectedItems.includes(id)

    selectedItems.set(
      multiple
        ? selected
          ? $selectedItems.filter((i) => i !== id)
          : [...$selectedItems, id]
        : selected
        ? []
        : [id]
    )
  }

  const dispatch = createEventDispatcher()

  /** Push context to child components. */
  setContext('menu', { selectable, items, selectedItems, toggleItem, dispatch })

  selectedItems.subscribe((ids) => {
    if (!selectable) {
      return
    }
    dispatch('select', {
      items: $items.filter((item) => ids.includes(item.id)),
    })
  })

  /** Focuses the first item in the menu. */
  export const focusFirstItem = () => {
    $items[0]?.el?.focus()
  }

  export { items, selectedItems }

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<ul class="spectrum-Menu {additionalClasses}" role="menu" on:click {...rest}>
  <slot />
</ul>
