<script lang="ts">
  import ActionButton from '$lib/components/ActionButton/ActionButton.svelte'
  import { Edit18 } from '../../../../../svelte-spectrum-icons'

  const variants = [
    {},
    { selected: true },
    { disabled: true },
    { selected: true, disabled: true },
  ]
</script>

<div class="spectrum-Examples">
  {#each variants as variantProps}
    <div class="spectrum-Examples-item">
      <h4>
        {#if !variantProps.selected && !variantProps.disabled}
          Default
        {/if}
        {#if variantProps.selected}
          Selected
        {/if}
        {#if variantProps.disabled}
          Disabled
        {/if}
      </h4>
      <div class="spectrum-Examples-itemGroup">
        <ActionButton {...$$restProps} {...variantProps}>Edit</ActionButton>
        <ActionButton {...$$restProps} {...variantProps} icon={Edit18}>
          Edit
        </ActionButton>
        <ActionButton {...$$restProps} {...variantProps} icon={Edit18} />
        <ActionButton {...$$restProps} {...variantProps} icon={Edit18} hold />
      </div>
    </div>
  {/each}
</div>
