<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Card } from '$lib'
  import exampleAva from '$lib/assets/example-ava.jpg'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <Card title="Card title" subtitle="Card subtitle" coverPhoto={exampleAva}>
      <p>Card content</p>
    </Card>
  </Theme>
</Hst.Story>
