<script lang="ts">
  import { v4 as uuid } from '@lukeed/uuid'
  import type { SvelteComponent } from 'svelte'
  import { getContext, onMount } from 'svelte'
  import { Icon } from '$lib'

  const id = uuid()
  export let selected: boolean = false
  export let icon: SvelteComponent | null = null
  export let iconLabel: string = ''

  const { selectedItem, selectTab } = getContext('tabs')

  onMount(() => {
    if (selected) {
      $selectedItem = id
    }

    selectedItem.subscribe((sid) => {
      selected = sid === id
    })
  })
</script>

<div
  class="spectrum-Tabs-item"
  class:is-selected={selected}
  tabindex="0"
  role="tab"
  aria-selected={selected}
  on:click={() => selectTab(id)}
>
  <span class="spectrum-Tabs-itemLabel">
    {#if icon}
      <Icon {icon} role="img" aria-hidden="false" aria-label={iconLabel} />
    {/if}
    <slot />
  </span>
</div>
