<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Rating } from '$lib'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <Rating />
    <Rating value={3} readonly />
  </Theme>
</Hst.Story>
