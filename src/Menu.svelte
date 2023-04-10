<script lang="ts">
  import { setContext, createEventDispatcher } from 'svelte'
  import { writable } from 'svelte/store'

  export let readonly: boolean = true

  const items = writable([])
  const selectedItems = writable([])
  setContext('menu', { readonly, items, selectedItems })

  const dispatch = createEventDispatcher()

  selectedItems.subscribe((ids) => {
    if (readonly) {
      return
    }
    dispatch(
      'change',
      $items.filter((item) => ids.includes(item.id))
    )
  })
</script>

<ul class="spectrum-Menu" role="menu">
  <slot />
</ul>

<style>
  @import '@spectrum-css/menu/dist/index-vars.css';
</style>
