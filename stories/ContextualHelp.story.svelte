<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { ContextualHelp, Theme } from '../src/main.ts'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <ContextualHelp heading="Permission required">
      Cupcake ipsum dolor sit amet jelly beans. Chocolate jelly caramels. Icing
      soufflé chupa chups donut cheesecake. Jelly-o chocolate cake sweet roll
      cake danish candy biscuit halvah.
    </ContextualHelp>
  </Theme>
</Hst.Story>
