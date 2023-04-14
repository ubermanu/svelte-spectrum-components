<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Combobox, MenuItem, Theme } from '$lib'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <Combobox placeholder="Select a country">
      <MenuItem value="US">United States</MenuItem>
      <MenuItem value="CA">Canada</MenuItem>
      <MenuItem value="MX">Mexico</MenuItem>
    </Combobox>
  </Theme>
</Hst.Story>
