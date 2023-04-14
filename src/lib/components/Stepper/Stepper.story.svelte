<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Stepper, Theme } from '$lib'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <Stepper />
    <Stepper value={3} min={0} max={60} step={3} />
  </Theme>
</Hst.Story>
