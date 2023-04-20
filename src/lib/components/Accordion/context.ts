import { subscribeLater } from '$lib/utils/store'
import { get, writable, type Writable } from 'svelte/store'

export interface AccordionContext {
  config: Writable<AccordionConfig>
  openedItems: Writable<string[]>
  toggleItem: (id: string) => void
  openItem: (id: string) => void
  closeItem: (id: string) => void
}

export interface AccordionConfig {
  multiple?: boolean
}

const defaultConfig: AccordionConfig = {
  multiple: false,
}

export const createAccordionContext = (config: {}): AccordionContext => {
  const openedItems: Writable<string[]> = writable([])

  const configStore: Writable<AccordionConfig> = writable({
    ...defaultConfig,
    ...config,
  })

  /** Toggle the opened state of an item by its id */
  function toggleItem(id: string) {
    const { multiple } = get(configStore)
    openedItems.update(($items) => {
      if ($items.includes(id)) {
        return $items.filter((item) => item !== id)
      } else {
        return multiple ? [...$items, id] : [id]
      }
    })
  }

  /** Open an item by its id */
  function openItem(id: string) {
    const { multiple } = get(configStore)
    openedItems.update(($items) => {
      if ($items.includes(id)) {
        return $items
      } else {
        return multiple ? [...$items, id] : [id]
      }
    })
  }

  /** Close an item by its id */
  function closeItem(id: string) {
    openedItems.update(($items) => {
      if ($items.includes(id)) {
        return $items.filter((item) => item !== id)
      } else {
        return $items
      }
    })
  }

  // If the accordion is not configured to allow multiple items to be opened,
  // then we need to make sure that only the last opened item is kept in the
  // openedItems store.
  // TODO: Make sure that this is not called on the first update.
  // TODO: Does this need to be unsubscribed?
  subscribeLater(configStore, ($config) => {
    if (!$config.multiple) {
      openedItems.update(($items) => {
        return $items.length > 1 ? [$items[$items.length - 1]] : $items
      })
    }
  })

  return {
    config: configStore,
    openedItems,
    toggleItem,
    openItem,
    closeItem,
  }
}
