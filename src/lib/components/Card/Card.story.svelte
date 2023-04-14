<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'

  import { Card } from '$lib'
  import exampleAva from '$lib/assets/example-ava.jpg'

  export let Hst: Hst
</script>

<Hst.Story>
  <Card title="Card title" subtitle="Card subtitle" coverPhoto={exampleAva}>
    <p>Card content</p>
  </Card>
</Hst.Story>
