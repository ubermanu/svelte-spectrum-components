<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { ColorArea, ColorHandle } from '$lib'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <ColorArea color="#ff00ff" />
    <ColorHandle color="#ff00ff" />
  </Theme>
</Hst.Story>
