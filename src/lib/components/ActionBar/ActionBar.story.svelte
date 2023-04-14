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
        <ActionButton quiet class="spectrum-ActionGroup-item">
          Edit
        </ActionButton>
        <ActionButton quiet class="spectrum-ActionGroup-item">
          Copy
        </ActionButton>
        <ActionButton quiet class="spectrum-ActionGroup-item">
          Delete
        </ActionButton>
      </ActionGroup>
    </ActionBar>
    <ActionBar open={true}>
      <FieldLabel size="S">2 Selected</FieldLabel>
      <ActionGroup>
        <ActionButton quiet icon={Edit18} class="spectrum-ActionGroup-item">
          Edit
        </ActionButton>
        <ActionButton quiet icon={Copy18} class="spectrum-ActionGroup-item">
          Copy
        </ActionButton>
        <ActionButton quiet icon={Delete18} class="spectrum-ActionGroup-item">
          Delete
        </ActionButton>
      </ActionGroup>
    </ActionBar>
    <ActionBar open={true} emphasized>
      <FieldLabel size="S" staticWhite>2 Selected</FieldLabel>
      <ActionGroup>
        <ActionButton
          quiet
          icon={Edit18}
          staticWhite
          class="spectrum-ActionGroup-item"
        />
        <ActionButton
          quiet
          icon={Copy18}
          staticWhite
          class="spectrum-ActionGroup-item"
        />
        <ActionButton
          quiet
          icon={Delete18}
          staticWhite
          class="spectrum-ActionGroup-item"
        />
      </ActionGroup>
    </ActionBar>
  </Theme>
</Hst.Story>
