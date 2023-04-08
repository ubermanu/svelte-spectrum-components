<script lang="ts">
  export let disabled: boolean = false
</script>

<li
  class="spectrum-Menu-item"
  role="menuitem"
  class:is-disabled={disabled}
  aria-disabled={disabled || undefined}
  tabindex={disabled ? -1 : 0}
>
  <span class="spectrum-Menu-itemLabel"><slot /></span>
</li>
