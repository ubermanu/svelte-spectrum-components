<script lang="ts">
  import FieldLabel from './FieldLabel.svelte'

  export let size: TShirtSize = 'M'
  export let label: string = ''
  export let value: number = 0
  export let min: number = 0
  export let max: number = 100
  export let sideLabel: boolean = false

  // Calculate the width of the progress bar according to the value, min and max
  $: fillWidth = ((value - min) / (max - min)) * 100

  const { class: additionalClasses, ...rest } = $$restProps
</script>

<div
  class="spectrum-ProgressBar spectrum-ProgressBar--size{size} {additionalClasses ||
    ''}"
  class:spectrum-ProgressBar--sideLabel={sideLabel}
  {value}
  role="progressbar"
  aria-valuenow={value}
  aria-valuemin={min}
  aria-valuemax={max}
  {...rest}
>
  {#if label}
    <FieldLabel {size} class="spectrum-ProgressBar-label">
      {label}
    </FieldLabel>
  {/if}
  <FieldLabel {size} class="spectrum-ProgressBar-percentage">
    {value}%
  </FieldLabel>
  <div class="spectrum-ProgressBar-track">
    <div class="spectrum-ProgressBar-fill" style="width: {fillWidth}%;" />
  </div>
  <div class="spectrum-ProgressBar-label" hidden />
</div>

<style>
  @import '@spectrum-css/progressbar/dist/index-vars.css';
</style>
