<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { Dialog, Button } from '$lib'
  import Alert18 from 'svelte-spectrum-icons/workflow/Alert18.svelte'

  const dispatch = createEventDispatcher()

  export let acceptLabel = 'Ok'
</script>

<Dialog
  class="spectrum-Dialog--error"
  role="alertdialog"
  icon={Alert18}
  {...$$restProps}
>
  <slot />
  <svelte:fragment slot="buttons">
    <Button
      on:click={() => dispatch('accept')}
      treatment="outline"
      variant="primary"
    >
      {acceptLabel}
    </Button>
  </svelte:fragment>
</Dialog>
