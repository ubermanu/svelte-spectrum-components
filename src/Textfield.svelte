<script lang="ts">
  import '@spectrum-css/textfield/dist/index-vars.css'
  import Icon from './Icon.svelte'
  import Alert18 from 'svelte-spectrum-icons/workflow/Alert18.svelte'
  import Checkmark18 from 'svelte-spectrum-icons/workflow/Checkmark18.svelte'

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
    <Icon icon={Alert18} class="spectrum-Textfield-validationIcon" />
  {:else if valid}
    <Icon icon={Checkmark18} class="spectrum-Textfield-validationIcon" />
  {/if}
  <input class="spectrum-Textfield-input" {type} {...$$restProps} />
</div>
