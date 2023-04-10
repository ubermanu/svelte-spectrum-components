<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { ProgressBar, Theme } from '../src/main.ts'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <div class="list">
      <ProgressBar label="Loading" value="0" />
      <ProgressBar label="Loading" value="50" />
      <ProgressBar label="Loading" value="100" />
      <ProgressBar label="Loading" value="50" sideLabel />
      <ProgressBar label="Loading" indeterminate />
      <ProgressBar label="Loading" value="50" placement="bottom" />
      <ProgressBar label="Loading" value="50" placement="bottom" sideLabel />
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
