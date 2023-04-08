<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Rating, Theme } from '../src/main.ts'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <Rating />
    <Rating value={3} readonly />
  </Theme>
</Hst.Story>
