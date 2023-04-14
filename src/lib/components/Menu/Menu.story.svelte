<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Menu, MenuItem, Theme } from '$lib'

  export let Hst: Hst

  function handleSelect(event: CustomEvent) {
    console.log('menu:select', event.detail)
  }
</script>

<Hst.Story>
  <Theme>
    <p>Default menu</p>
    <Menu>
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
      <MenuItem>Item 3</MenuItem>
      <MenuItem>Item 4</MenuItem>
    </Menu>
    <br />
    <p>Menu with selected items</p>
    <Menu selectable on:select={handleSelect}>
      <MenuItem>Item 1</MenuItem>
      <MenuItem selected>Item 2</MenuItem>
      <MenuItem disabled>Item 3</MenuItem>
      <MenuItem>Item 4</MenuItem>
    </Menu>
    <br />
    <p>Menu with selected items (multiple)</p>
    <Menu selectable multiple on:select={handleSelect}>
      <MenuItem>Item 1</MenuItem>
      <MenuItem selected>Item 2</MenuItem>
      <MenuItem disabled>Item 3</MenuItem>
      <MenuItem selected>Item 4</MenuItem>
    </Menu>
  </Theme>
</Hst.Story>
