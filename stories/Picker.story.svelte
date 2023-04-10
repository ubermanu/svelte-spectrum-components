<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Picker, MenuItem, Theme } from '../src/main.ts'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <Picker placeholder="Select a country" />
    <br />
    <Picker placeholder="Select a country">
      <MenuItem label="United States" value="US" />
      <MenuItem label="Canada" value="CA" selected />
      <MenuItem label="Mexico" value="MX" />
    </Picker>
  </Theme>
</Hst.Story>
