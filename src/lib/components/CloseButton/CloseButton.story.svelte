<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { CloseButton } from '$lib'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <div class="list">
      <CloseButton />
      <CloseButton staticWhite={true} />
      <CloseButton staticBlack={true} />
      <CloseButton disabled />
    </div>
  </Theme>
</Hst.Story>

<style>
  .list {
    display: flex;
    gap: 1rem;
  }
</style>
