<script lang="ts">
  import { tick } from 'svelte'
  import { Icon, Popover, Menu } from '..'
  import ChevronRight100 from 'svelte-spectrum-icons/ui/ChevronRightSmall.svelte'

  export let size: TShirtSize = 'M'
  export let quiet: boolean = false
  export let loading: boolean = false

  export let multiple: boolean = false
  export let disabled: boolean = false
  export let required: boolean = false
  export let invalid: boolean = false
  export let value: string = ''
  export let placeholder: string = ''

  export let open: boolean = false
  export let placement: PopoverPlacement = 'bottom'
  export let width: string = '240px'

  let menu: Menu, button: HTMLButtonElement

  function openMenu() {
    open = true
  }

  /** Close the menu and focus the button */
  function closeMenu() {
    open = false
    button.focus()
  }

  function toggleMenu() {
    if (open) {
      closeMenu()
    } else {
      openMenu()
    }
  }

  /** Handle click event from button, then toggle the menu */
  function handleClick() {
    toggleMenu()
  }

  /**
   * Handle keydown event from button, then toggle the popover or close the
   * popover when escape key is pressed
   *
   * @param {KeyboardEvent} event
   */
  async function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      toggleMenu()
      await tick()
      menu.focusFirstItem()
    }

    if (event.key === 'Escape') {
      closeMenu()
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      openMenu()
      await tick()
      menu.focusFirstItem()
    }
  }

  /** Selected label, used to display the selected item(s) in the button */
  let selectedLabel: string = ''

  /**
   * Handle select event from menu, then close the popover
   *
   * @param {CustomEvent} event
   */
  function handleSelect(event: CustomEvent) {
    const { items } = event.detail
    selectedLabel = items.map((item) => item.label).join(', ')
    value = items.map((item) => item.value).join(', ')
    closeMenu()
  }

  const { class: additionalClasses = '', ...rest } = $$restProps
</script>

<button
  bind:this={button}
  type="button"
  class="spectrum-Picker spectrum-Picker--size{size} {additionalClasses}"
  class:spectrum-Picker--quiet={quiet}
  class:is-open={open}
  class:is-disabled={disabled}
  {disabled}
  aria-haspopup="listbox"
  style:width
  on:click={handleClick}
  on:keydown={handleKeydown}
  {...rest}
>
  <span class="spectrum-Picker-label" class:is-placeholder={!value}>
    {selectedLabel || placeholder}
  </span>
  <Icon
    icon={ChevronRight100}
    class="spectrum-UIIcon-ChevronDown100 spectrum-Picker-menuIcon"
  />
</button>

{#if $$slots.default}
  <Popover
    bind:open
    {placement}
    class="spectrum-Picker-popover"
    style="width: {width}; z-index: 1000"
  >
    <Menu selectable {multiple} on:select={handleSelect} bind:this={menu}>
      <slot />
    </Menu>
  </Popover>
{/if}
