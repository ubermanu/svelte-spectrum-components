<script lang="ts">
  import { v4 as uuid } from '@lukeed/uuid'
  import type { TShirtSize } from '$lib/spectrum/types'

  export let size: TShirtSize = 'M'
  export let emphasized: boolean = false

  export let id = uuid()
  export let label: string = ''
  export let readonly: boolean = false
  export let invalid: boolean = false
  export let disabled: boolean = false

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div
  class="spectrum-Radio spectrum-Radio--size{size}"
  class:spectrum-Radio--emphasized={emphasized}
  class:is-readOnly={readonly}
  class:is-invalid={invalid}
  class:is-disabled={disabled}
>
  <input
    type="radio"
    class="spectrum-Radio-input {additionalClasses}"
    {id}
    {disabled}
    {readonly}
    {invalid}
    {...rest}
  />
  <span class="spectrum-Radio-button spectrum-Radio-button--size{size}" />
  <label class="spectrum-Radio-label spectrum-Radio-label--size{size}" for={id}>
    {#if $$slots.default}
      <slot />
    {:else}
      {label}
    {/if}
  </label>
</div>
