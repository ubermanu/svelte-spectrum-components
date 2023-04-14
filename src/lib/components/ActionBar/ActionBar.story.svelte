<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { ActionBar, ActionButton, ActionGroup, FieldLabel, Theme } from '$lib'

  import Edit18 from 'svelte-spectrum-icons/workflow/Edit18.svelte'
  import Copy18 from 'svelte-spectrum-icons/workflow/Copy18.svelte'
  import Delete18 from 'svelte-spectrum-icons/workflow/Delete18.svelte'

  export let Hst: Hst
</script>

<Hst.Story>
  <Theme>
    <ActionBar open={true}>
      <FieldLabel size="S">2 Selected</FieldLabel>
      <ActionGroup>
        <ActionButton>Edit</ActionButton>
        <ActionButton>Copy</ActionButton>
        <ActionButton>Delete</ActionButton>
      </ActionGroup>
    </ActionBar>
    <ActionBar open={true}>
      <FieldLabel size="S">2 Selected</FieldLabel>
      <ActionGroup>
        <ActionButton icon={Edit18}>Edit</ActionButton>
        <ActionButton icon={Copy18}>Copy</ActionButton>
        <ActionButton icon={Delete18}>Delete</ActionButton>
      </ActionGroup>
    </ActionBar>
    <ActionBar open={true} emphasized>
      <FieldLabel size="S" staticWhite>2 Selected</FieldLabel>
      <ActionGroup>
        <ActionButton icon={Edit18} staticWhite />
        <ActionButton icon={Copy18} staticWhite />
        <ActionButton icon={Delete18} staticWhite />
      </ActionGroup>
    </ActionBar>
  </Theme>
</Hst.Story>
