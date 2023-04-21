<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { ProgressCircle } from '$lib'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <div class="list">
      <ProgressCircle size="small" />
      <ProgressCircle />
      <ProgressCircle size="large" />
      <ProgressCircle indeterminate />
    </div>
  </Theme>
</Hst.Story>

<style>
  .list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem;
  }
</style>
