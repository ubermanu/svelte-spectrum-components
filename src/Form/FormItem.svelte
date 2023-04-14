<script lang="ts">
  import { setContext } from 'svelte'
  import { v4 as uuid } from '@lukeed/uuid'
  import { FieldLabel } from '..'

  export let label: string = ''

  // TODO: Find a way to set the id on the slot element (onMount?)
  export let id: string = uuid()

  setContext('formItem', { id })
</script>

<div class="spectrum-Form-item">
  {#if label}
    <FieldLabel for={id} class="spectrum-Form-itemLabel">{label}</FieldLabel>
  {/if}
  <div class="spectrum-Form-itemField">
    <slot />
  </div>
</div>
