<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Picker, MenuItem } from '$lib'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <Picker placeholder="Select a country (disabled)" disabled />
    <br />
    <Picker placeholder="Select a country">
      <MenuItem value="US">United States</MenuItem>
      <MenuItem value="CA" selected>Canada</MenuItem>
      <MenuItem value="MX">Mexico</MenuItem>
    </Picker>
    <br />
    <Picker placeholder="Select a country" multiple>
      <MenuItem value="US">United States</MenuItem>
      <MenuItem value="CA" selected>Canada</MenuItem>
      <MenuItem value="MX">Mexico</MenuItem>
    </Picker>
  </Theme>
</Hst.Story>
