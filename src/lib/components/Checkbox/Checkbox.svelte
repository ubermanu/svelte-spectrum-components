<script lang="ts">
  import { Icon } from '$lib'
  import type { TShirtSize } from '$lib/spectrum/types'
  import Checkmark100 from 'svelte-spectrum-icons/ui/CheckmarkSmall.svelte'
  import Dash100 from 'svelte-spectrum-icons/ui/DashSmall.svelte'

  export let label: string = ''
  export let disabled: boolean = false
  export let readonly: boolean = false
  export let invalid: boolean = false
  export let size: TShirtSize = 'M'
  export let emphasized: boolean = false
  export let indeterminate: boolean = false
  export let checked: boolean = false

  export let containerClass: string = ''
  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<label
  class="spectrum-Checkbox spectrum-Checkbox--size{size} {containerClass}"
  class:spectrum-Checkbox--emphasized={emphasized}
  class:is-indeterminate={indeterminate}
  class:is-invalid={invalid}
  class:is-disabled={disabled}
  class:is-readOnly={readonly}
>
  <input
    type="checkbox"
    class="spectrum-Checkbox-input {additionalClasses}"
    disabled={disabled || readonly}
    bind:checked
    on:change
    {...rest}
  />
  <span class="spectrum-Checkbox-box">
    <Icon
      class="spectrum-UIIcon-Checkmark100 spectrum-Checkbox-checkmark"
      icon={Checkmark100}
    />
    <Icon
      class="spectrum-UIIcon-Dash100 spectrum-Checkbox-partialCheckmark"
      icon={Dash100}
    />
  </span>
  {#if label || $$slots.default}
    <span class="spectrum-Checkbox-label">
      {#if label}
        {label}
      {:else}
        <slot />
      {/if}
    </span>
  {/if}
</label>
