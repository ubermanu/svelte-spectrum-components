<script lang="ts">
  import '@spectrum-css/textfield/dist/index-vars.css'

  export let type: string = 'text'
  export let valid: boolean = false
  export let invalid: boolean = false
  export let disabled: boolean = false
  export let quiet: boolean = false
  export let size: 'S' | 'M' | 'L' | 'XL' = 'M'
</script>

<div
  class="spectrum-Textfield spectrum-Textfield--size{size}"
  class:spectrum-Textfield--quiet={quiet}
  class:is-disabled={disabled}
  class:is-invalid={invalid}
  class:is-valid={valid}
>
  {#if invalid}
    <svg
      class="spectrum-Icon spectrum-Icon--sizeM spectrum-Textfield-validationIcon"
      focusable="false"
      aria-hidden="true"
    >
      <use xlink:href="#spectrum-icon-18-Alert" />
    </svg>
  {:else if valid}
    <svg
      class="spectrum-Icon spectrum-Icon--sizeM spectrum-Textfield-validationIcon"
      focusable="false"
      aria-hidden="true"
    >
      <use xlink:href="#spectrum-icon-18-Checkmark" />
    </svg>
  {/if}
  <input class="spectrum-Textfield-input" {type} {...$$restProps} />
</div>
