<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Menu, MenuItem, Divider, Theme } from '../src/main.ts'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <Menu>
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
      <MenuItem disabled>Item 3</MenuItem>
      <MenuItem>Item 4</MenuItem>
    </Menu>
  </Theme>
</Hst.Story>
