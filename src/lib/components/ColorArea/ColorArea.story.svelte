<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'

  import { ColorArea, ColorHandle } from '$lib'

  export let Hst: Hst
</script>

<Hst.Story>
  <ColorArea color="#ff00ff" />
  <ColorHandle color="#ff00ff" />
</Hst.Story>
