<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Tooltip, Theme } from '$lib'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <Tooltip
      content="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      open
    />
  </Theme>
</Hst.Story>
