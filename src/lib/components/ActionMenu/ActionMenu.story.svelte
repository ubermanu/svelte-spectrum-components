<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { ActionMenu, MenuItem, Divider } from '$lib'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <ActionMenu label="Menu">
      <MenuItem>Item 1</MenuItem>
      <MenuItem>Item 2</MenuItem>
      <Divider />
      <MenuItem>Item 3</MenuItem>
    </ActionMenu>
  </Theme>
</Hst.Story>
