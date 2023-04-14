<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Badge, Theme } from '$lib'
  import Info18 from 'svelte-spectrum-icons/workflow/Info18.svelte'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <Badge icon={Info18}>Neutral</Badge>
    <Badge icon={Info18} variant="accent">Accent</Badge>
    <Badge icon={Info18} variant="informative">Informative</Badge>
    <Badge icon={Info18} variant="negative">Negative</Badge>
    <Badge icon={Info18} variant="positive">Positive</Badge>
  </Theme>
</Hst.Story>
