<script lang="ts">
  import type { SvelteComponent } from 'svelte'
  import Icon from './Icon.svelte'
  import ChevronDown100 from 'svelte-spectrum-icons/ui/ChevronRightSmallMobile.svelte'

  export let size: TShirtSize = 'M'
  export let quiet: boolean = false
  export let placement: 'left' | 'right' = 'right'
  export let open: boolean = false
  export let rounded: boolean = false
  export let invalid: boolean = false
  export let icon: SvelteComponent | undefined = undefined

  $: iconOnly = !$$slots.default

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<button
  class="spectrum-PickerButton spectrum-PickerButton--size{size} spectrum-PickerButton--{placement} {additionalClasses}"
  class:spectrum-PickerButton--quiet={quiet}
  class:spectrum-PickerButton--textuiicon={!iconOnly}
  class:spectrum-PickerButton--uiicononly={iconOnly}
  class:spectrum-PickerButton--rounded={rounded}
  class:is-open={open}
  class:is-invalid={invalid}
  aria-haspopup="listbox"
  {...rest}
  on:click
>
  <div class="spectrum-PickerButton-fill">
    {#if $$slots.default}
      <span class="spectrum-PickerButton-label is-placeholder"><slot /></span>
    {/if}
    {#if icon}
      <Icon {icon} class="spectrum-PickerButton-UIIcon" />
    {:else}
      <Icon
        icon={ChevronDown100}
        class="spectrum-PickerButton-UIIcon spectrum-UIIcon-ChevronDown100"
      />
    {/if}
  </div>
</button>

<style>
  @import '@spectrum-css/pickerbutton/dist/index-vars.css';
</style>
