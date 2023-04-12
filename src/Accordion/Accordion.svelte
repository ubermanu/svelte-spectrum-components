<script lang="ts">
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'

  export let allowMultiple: boolean = false

  const openedItems = writable([])

  function toggleItem(id: string) {
    openedItems.update((items) => {
      if (items.includes(id)) {
        return items.filter((item) => item !== id)
      } else {
        return allowMultiple ? [...items, id] : [id]
      }
    })
  }

  setContext('accordion', { openedItems, toggleItem })

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div
  class="spectrum-Accordion {additionalClasses}"
  role="region"
  data-testid="accordion"
  {...rest}
>
  <slot />
</div>
