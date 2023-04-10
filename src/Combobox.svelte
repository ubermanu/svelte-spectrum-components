<script lang="ts">
  import Textfield from './Textfield.svelte'
  import PickerButton from './PickerButton.svelte'
  import Popover from './Popover.svelte'
  import Menu from './Menu.svelte'

  export let open: boolean = false

  function toggleOpen() {
    open = !open
  }

  function handleSelect(event: CustomEvent) {
    const { items } = event.detail
    value = items[0]?.value || ''
    open = false
  }

  let value: string = ''

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<div class="spectrum-Combobox {additionalClasses}" class:is-open={open}>
  <Textfield
    containerClass="spectrum-Combobox-textfield"
    class="spectrum-Combobox-input"
    {...rest}
    bind:value
  />
  <PickerButton class="spectrum-Combobox-button" {open} on:click={toggleOpen} />
  <Popover style="" {open}>
    <Menu on:select={handleSelect}>
      <slot />
    </Menu>
  </Popover>
</div>

<style>
  @import '@spectrum-css/combobox/dist/index-vars.css';
</style>
