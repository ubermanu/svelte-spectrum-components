<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Textfield, Theme } from '../src/main.ts'

  export let Hst: Hst

  let placeholder = 'Placeholder'
  let invalid = false
  let valid = false
</script>

<Hst.Story>
  <Theme>
    <Textfield {placeholder} {invalid} {valid} />
  </Theme>
  <svelte:fragment slot="controls">
    <Hst.Checkbox title="Invalid" bind:value={invalid} />
    <Hst.Checkbox title="Valid" bind:value={valid} />
  </svelte:fragment>
</Hst.Story>
