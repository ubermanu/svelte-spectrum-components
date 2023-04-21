<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import Meter from './Meter.svelte'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <div style="margin: 20px 0;">
      <Meter label="Storage Space" variant="positive" value={10} />
    </div>
    <div style="margin: 20px 0;">
      <Meter label="Storage Space" value={40} />
    </div>
    <div style="margin: 20px 0;">
      <Meter label="Storage Space" variant="notice" value={80} />
    </div>
    <div style="margin: 20px 0;">
      <Meter label="Storage Space" variant="negative" value={90} />
    </div>
  </Theme>
</Hst.Story>

<style global>
  @import '$lib/histoire/styles.css';
</style>
