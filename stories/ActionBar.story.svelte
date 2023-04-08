<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { ActionBar, Theme } from '../src/main.ts'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <ActionBar open={true} />
  </Theme>
</Hst.Story>
