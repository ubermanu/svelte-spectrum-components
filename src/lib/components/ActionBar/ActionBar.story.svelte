<script lang="ts">
  import type { SvelteComponent } from 'svelte'
  import ActionBar from '$lib/components/ActionBar/ActionBar.svelte'
  import FieldLabel from '$lib/components/FieldLabel/FieldLabel.svelte'
  import ActionGroup from '$lib/components/ActionButton/ActionGroup.svelte'
  import ActionButton from '$lib/components/ActionButton/ActionButton.svelte'

  export let emphasized: boolean = false

  export let actions: { text?: string; icon?: SvelteComponent }[] = []
</script>

<ActionBar open {emphasized}>
  <FieldLabel size="S">2 Selected</FieldLabel>
  <ActionGroup>
    {#each actions as action}
      <ActionButton icon={action.icon}>{action.text ?? ''}</ActionButton>
    {/each}
  </ActionGroup>
</ActionBar>
