<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { InLineAlert, Theme } from '../src/main.ts'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <div class="list">
      <InLineAlert heading="Neutral in-line alert header">
        This is an alert.
      </InLineAlert>
      <InLineAlert heading="Information in-line alert header" variant="info">
        This is an alert.
      </InLineAlert>
      <InLineAlert
        heading="Information in-line alert header"
        variant="positive"
      >
        This is an alert.
      </InLineAlert>
      <InLineAlert heading="Information in-line alert header" variant="notice">
        This is an alert.
      </InLineAlert>
      <InLineAlert
        heading="Information in-line alert header"
        variant="negative"
      >
        This is an alert.
      </InLineAlert>
    </div>
  </Theme>
</Hst.Story>

<style>
  .list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
