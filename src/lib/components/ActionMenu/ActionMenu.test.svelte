<script lang="ts">
  import ActionMenu from './ActionMenu.svelte'
  import { MenuItem } from '$lib'

  export let items = <{ id: number; label: string }[]>[]
</script>

<ActionMenu data-testid="action-menu">
  {#each items as item}
    <MenuItem data-testid="action-menu-item-{item.id}">
      {item.label}
    </MenuItem>
  {/each}
</ActionMenu>
