<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Calendar, Theme } from '../src/main.ts'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <Calendar />
  </Theme>
</Hst.Story>
