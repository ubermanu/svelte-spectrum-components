<script lang="ts">
  import { ActionButton, Icon } from '$lib'
  import { Chevron75 } from 'svelte-spectrum-icons'

  export let value: number = 0
  export let min: number = 0
  export let max: number = 5
  export let step: number = 1

  export let label: string = ''
  export let readonly: boolean = false
  export let disabled: boolean = false
  export let invalid: boolean = false
  export let quiet: boolean = false

  $: value = Math.min(Math.max(value, min), max)

  function stepUp() {
    value = Math.min(value + step, max)
  }

  function stepDown() {
    value = Math.max(value - step, min)
  }
</script>

<div
  class="spectrum-Stepper"
  class:spectrum-Stepper--quiet={quiet}
  class:is-disabled={disabled}
  class:is-invalid={invalid}
>
  <div class="spectrum-Textfield spectrum-Stepper-textfield">
    <input
      type="number"
      class="spectrum-Textfield-input spectrum-Stepper-input"
      {min}
      {max}
      {value}
      {step}
      {disabled}
      {readonly}
      {...$$restProps}
    />
  </div>
  <span class="spectrum-Stepper-buttons">
    <ActionButton
      class="spectrum-Stepper-stepUp"
      {disabled}
      {quiet}
      tabindex="-1"
      on:click={stepUp}
    >
      <Icon icon={Chevron75} class="spectrum-UIIcon-ChevronUp75" />
    </ActionButton>
    <ActionButton
      class="spectrum-Stepper-stepDown"
      {disabled}
      {quiet}
      tabindex="-1"
      on:click={stepDown}
    >
      <Icon icon={Chevron75} class="spectrum-UIIcon-ChevronDown75" />
    </ActionButton>
  </span>
</div>
