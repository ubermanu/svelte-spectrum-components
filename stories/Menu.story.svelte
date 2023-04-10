<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Menu, MenuItem, Theme } from '../src/main.ts'

  export let Hst: Hst

  function handleSelect(event: CustomEvent) {
    console.log('menu:select', event.detail)
  }
</script>

<Hst.Story>
  <Theme>
    <p>Default menu</p>
    <Menu>
      <MenuItem label="Item 1" />
      <MenuItem label="Item 2" />
      <MenuItem label="Item 3" />
      <MenuItem label="Item 4" />
    </Menu>
    <br />
    <p>Menu with selected items</p>
    <Menu selectable on:select={handleSelect}>
      <MenuItem label="Item 1" />
      <MenuItem label="Item 2" selected />
      <MenuItem label="Item 3" disabled />
      <MenuItem label="Item 4" />
    </Menu>
    <br />
    <p>Menu with selected items (multiple)</p>
    <Menu selectable multiple on:select={handleSelect}>
      <MenuItem label="Item 1" />
      <MenuItem label="Item 2" selected />
      <MenuItem label="Item 3" disabled />
      <MenuItem label="Item 4" selected />
    </Menu>
  </Theme>
</Hst.Story>
