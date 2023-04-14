<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { Checkbox, Theme } from '$lib'

  export let Hst: Hst

  let invalid = false
  let disabled = false
  let readonly = false
</script>

<Hst.Story>
  <Theme>
    <div class="list">
      <Checkbox {invalid} {disabled} {readonly} label="Checkbox" />
      <Checkbox {invalid} {disabled} {readonly} label="Checked" checked />
      <Checkbox
        {invalid}
        {disabled}
        {readonly}
        label="Indeterminate"
        indeterminate
      />
    </div>
  </Theme>
  <svelte:fragment slot="controls">
    <Hst.Checkbox title="Invalid" bind:value={invalid} />
    <Hst.Checkbox title="Disabled" bind:value={disabled} />
    <Hst.Checkbox title="Readonly" bind:value={readonly} />
  </svelte:fragment>
</Hst.Story>

<style>
  .list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
