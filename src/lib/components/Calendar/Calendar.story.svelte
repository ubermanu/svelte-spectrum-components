<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Calendar } from '$lib'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <Calendar />
  </Theme>
</Hst.Story>
