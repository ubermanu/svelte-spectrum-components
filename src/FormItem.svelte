<script lang="ts">
  import { v4 as uuid } from '@lukeed/uuid'

  export let label: string = ''

  // TODO: Find a way to set the id on the slot element (onMount?)
  export let id: string = uuid()
</script>

<div class="spectrum-Form-item">
  {#if label}
    <label
      for={id}
      class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel"
      >{label}</label
    >
  {/if}
  <div class="spectrum-Form-itemField">
    <slot {id} />
  </div>
</div>
