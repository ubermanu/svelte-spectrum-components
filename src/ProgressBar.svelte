<script lang="ts">
  import FieldLabel from './FieldLabel.svelte'

  export let size: TShirtSize = 'M'
  export let label: string = ''
  export let value: number = 0
  export let min: number = 0
  export let max: number = 100
  export let sideLabel: boolean = false
  export let indeterminate: boolean = false
  export let placement: 'top' | 'bottom' = 'top'

  // Calculate the width of the progress bar according to the value, min and max
  $: fillWidth = ((value - min) / (max - min)) * 100

  // Force the placement to be top if sideLabel is true
  $: if (sideLabel) {
    placement = 'top'
  }

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div
  class="spectrum-ProgressBar spectrum-ProgressBar--size{size} {additionalClasses}"
  class:spectrum-ProgressBar--sideLabel={sideLabel}
  class:spectrum-ProgressBar--indeterminate={indeterminate}
  {value}
  role="progressbar"
  aria-valuenow={value}
  aria-valuemin={min}
  aria-valuemax={max}
  {...rest}
>
  {#if placement === 'top'}
    {#if label}
      <FieldLabel {size} class="spectrum-ProgressBar-label">
        {label}
      </FieldLabel>
    {/if}
    {#if !indeterminate}
      <FieldLabel {size} class="spectrum-ProgressBar-percentage">
        {value}%
      </FieldLabel>
    {/if}
  {/if}
  <div class="spectrum-ProgressBar-track">
    <div
      class="spectrum-ProgressBar-fill"
      style:width={indeterminate ? undefined : `${fillWidth}%`}
    />
  </div>
  {#if label && placement === 'bottom'}
    {#if label}
      <FieldLabel {size} class="spectrum-ProgressBar-label">
        {label}
      </FieldLabel>
    {/if}
    {#if !indeterminate}
      <FieldLabel {size} class="spectrum-ProgressBar-percentage">
        {value}%
      </FieldLabel>
    {/if}
  {/if}
</div>

<style>
  @import '@spectrum-css/progressbar/dist/index-vars.css';
</style>
