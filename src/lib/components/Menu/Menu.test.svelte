<script lang="ts">
  import Menu from './Menu.svelte'
  import MenuItem from './MenuItem.svelte'

  export let items: { id: number; label: string; value: string }[] = []
</script>

<Menu data-testid="menu" {...$$restProps}>
  {#each items as item}
    <MenuItem data-testid="menu-item-{item.id}" value={item.value}>
      {item.label}
    </MenuItem>
  {/each}
</Menu>
