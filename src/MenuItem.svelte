<script lang="ts">
  import Icon from './Icon.svelte'
  import Checkmark100 from 'svelte-spectrum-icons/ui/CheckmarkSmall.svelte'

  export let disabled: boolean = false
  export let selected: boolean = false
</script>

<li
  class="spectrum-Menu-item"
  role="menuitem"
  class:is-disabled={disabled}
  class:is-selected={selected}
  aria-disabled={disabled || undefined}
  tabindex={disabled ? -1 : 0}
>
  <span class="spectrum-Menu-itemLabel"><slot /></span>
  {#if selected}
    <Icon
      icon={Checkmark100}
      class="spectrum-UIIcon-Checkmark100 spectrum-Menu-checkmark spectrum-Menu-itemIcon"
    />
  {/if}
</li>

<style>
  @import '@spectrum-css/menu/dist/index-vars.css';
</style>
