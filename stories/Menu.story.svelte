<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Menu, MenuItem, Theme } from '../src/main.ts'

  export let Hst: Hst

  function handleChange(event: CustomEvent) {
    console.log('menu:change', event.detail)
  }
</script>

<Hst.Story>
  <Theme>
    <Menu on:change={handleChange}>
      <MenuItem label="Item 1" />
      <MenuItem label="Item 2" selected />
      <MenuItem label="Item 3" disabled />
      <MenuItem label="Item 4" />
    </Menu>
  </Theme>
</Hst.Story>
