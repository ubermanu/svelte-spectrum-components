<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Textfield, Theme } from '../src/main.ts'

  export let Hst: Hst

  let placeholder = 'Placeholder'
  let invalid = false
  let valid = false
</script>

<Hst.Story>
  <Hst.Variant title="Default">
    <Theme>
      <Textfield {placeholder} {invalid} {valid} />
    </Theme>
    <svelte:fragment slot="controls">
      <Hst.Checkbox title="Invalid" bind:value={invalid} />
      <Hst.Checkbox title="Valid" bind:value={valid} />
    </svelte:fragment>
  </Hst.Variant>
  <Hst.Variant title="Sizes">
    <Theme>
      <div class="list">
        <Textfield size="S" placeholder="Small" />
        <Textfield size="M" placeholder="Medium" />
        <Textfield size="L" placeholder="Large" />
        <Textfield size="XL" placeholder="Extra Large" />
      </div>
    </Theme>
  </Hst.Variant>
</Hst.Story>

<style>
  .list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
