<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { logEvent } from 'histoire/client'
  import { Edit18, Copy18, Delete18 } from 'svelte-spectrum-icons/workflow'
  import { ActionBar, ActionButton, ActionGroup, FieldLabel } from '$lib'
  import Theme from '$lib/histoire/Theme.svelte'

  export let Hst: Hst
</script>

<Hst.Story layout={{ type: 'grid', width: '100%' }}>
  <Hst.Variant title="Standard">
    <Theme style="margin-top: 10px;">
      <ActionBar open on:dismiss={(e) => logEvent('dismiss', e)}>
        <FieldLabel size="S">2 Selected</FieldLabel>
        <ActionGroup>
          <ActionButton>Edit</ActionButton>
          <ActionButton>Copy</ActionButton>
          <ActionButton>Delete</ActionButton>
        </ActionGroup>
      </ActionBar>
      <ActionBar open on:dismiss={(e) => logEvent('dismiss', e)}>
        <FieldLabel size="S">2 Selected</FieldLabel>
        <ActionGroup>
          <ActionButton icon={Edit18}>Edit</ActionButton>
          <ActionButton icon={Copy18}>Copy</ActionButton>
          <ActionButton icon={Delete18}>Delete</ActionButton>
        </ActionGroup>
      </ActionBar>
      <ActionBar open on:dismiss={(e) => logEvent('dismiss', e)}>
        <FieldLabel size="S">2 Selected</FieldLabel>
        <ActionGroup>
          <ActionButton icon={Edit18} />
          <ActionButton icon={Copy18} />
          <ActionButton icon={Delete18} />
        </ActionGroup>
      </ActionBar>
    </Theme>
  </Hst.Variant>

  <Hst.Variant title="Emphasized">
    <Theme style="margin-top: 10px;">
      <ActionBar open emphasized on:dismiss={(e) => logEvent('dismiss', e)}>
        <FieldLabel size="S">2 Selected</FieldLabel>
        <ActionGroup>
          <ActionButton>Edit</ActionButton>
          <ActionButton>Copy</ActionButton>
          <ActionButton>Delete</ActionButton>
        </ActionGroup>
      </ActionBar>
      <ActionBar open emphasized on:dismiss={(e) => logEvent('dismiss', e)}>
        <FieldLabel size="S">2 Selected</FieldLabel>
        <ActionGroup>
          <ActionButton icon={Edit18}>Edit</ActionButton>
          <ActionButton icon={Copy18}>Copy</ActionButton>
          <ActionButton icon={Delete18}>Delete</ActionButton>
        </ActionGroup>
      </ActionBar>
      <ActionBar open emphasized on:dismiss={(e) => logEvent('dismiss', e)}>
        <FieldLabel size="S">2 Selected</FieldLabel>
        <ActionGroup>
          <ActionButton icon={Edit18} />
          <ActionButton icon={Copy18} />
          <ActionButton icon={Delete18} />
        </ActionGroup>
      </ActionBar>
    </Theme>
  </Hst.Variant>
</Hst.Story>
