<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Textfield, Theme } from '../src/main.ts'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <Textfield placeholder="Placeholder" value="Value" />
  </Theme>
</Hst.Story>
