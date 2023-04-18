<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { Dialog, Button } from '$lib'

  const dispatch = createEventDispatcher()

  export let variant: 'confirmation' | 'informative' | 'destructive' =
    'confirmation'

  export let cancelLabel = 'Cancel'
  export let acceptLabel = 'Ok'

  const buttonVariantMap = {
    confirmation: 'accent',
    informative: 'primary',
    destructive: 'negative',
  }

  const buttonTreatmentMap = {
    confirmation: 'fill',
    informative: 'outline',
    destructive: 'outline',
  }
</script>

<Dialog class="spectrum-Dialog--{variant}" role="alertdialog" {...$$restProps}>
  <slot />
  <svelte:fragment slot="buttons">
    <Button
      on:click={() => dispatch('cancel')}
      treatment="outline"
      variant="secondary"
    >
      {cancelLabel}
    </Button>
    <Button
      on:click={() => dispatch('accept')}
      variant={buttonVariantMap[variant]}
      treatment={buttonTreatmentMap[variant]}
    >
      {acceptLabel}
    </Button>
  </svelte:fragment>
</Dialog>
