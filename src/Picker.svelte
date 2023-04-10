<script lang="ts">
  import Icon from './Icon.svelte'
  import Popover from './Popover.svelte'
  import Menu from './Menu.svelte'
  import ChevronRight100 from 'svelte-spectrum-icons/ui/ChevronRightSmall.svelte'

  export let size: TShirtSize = 'M'
  export let quiet: boolean = false
  export let loading: boolean = false

  export let disabled: boolean = false
  export let required: boolean = false
  export let invalid: boolean = false
  export let value: string = ''
  export let placeholder: string = ''

  export let open: boolean = false
  export let placement: PopoverPlacement = 'bottom'
  export let width: string = '240px'

  function toggleOpen() {
    open = !open
  }

  let selectedLabel: string = ''

  function handleSelect(event: CustomEvent) {
    value = event.detail.value
    selectedLabel = event.detail.label
    // open = false
  }
</script>

<button
  class="spectrum-Picker spectrum-Picker--size{size}"
  class:spectrum-Picker--quiet={quiet}
  class:is-open={open}
  aria-haspopup="listbox"
  style:width
  on:click={toggleOpen}
>
  <span class="spectrum-Picker-label" class:is-placeholder={!value}>
    {value || placeholder}
  </span>
  <Icon
    icon={ChevronRight100}
    class="spectrum-UIIcon-ChevronDown100 spectrum-Picker-menuIcon"
  />
</button>

{#if $$slots.default}
  <Popover
    {open}
    {placement}
    class="spectrum-Picker-popover"
    style="width: {width}"
  >
    <Menu on:select={handleSelect}>
      <slot />
    </Menu>
  </Popover>
{/if}

<style>
  @import '@spectrum-css/picker/dist/index-vars.css';
</style>
